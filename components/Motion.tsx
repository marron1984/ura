"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
  type CSSProperties,
} from "react";

/* =============================================
   Utility — reduced motion check
   ============================================= */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* =============================================
   1. Reveal — IntersectionObserver scroll reveal
   ============================================= */
export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("revealed");
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-target reveal-${direction} ${className}`}>
      {children}
    </div>
  );
}

/* =============================================
   2. SplitText — per-character spring animation
      (Award-winning sites' signature effect)
   ============================================= */
export function SplitText({
  text,
  className = "",
  stagger = 30,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.querySelectorAll<HTMLElement>(".split-char").forEach((c) => {
        c.style.opacity = "1";
        c.style.transform = "none";
      });
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".split-char").forEach((c) => {
            c.classList.add("split-char-in");
          });
          io.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as any} className={`split-text ${className}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="split-char"
          style={{ transitionDelay: `${i * stagger}ms` }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}

/* =============================================
   3. TextScramble — matrix-style decode effect
   ============================================= */
export function TextScramble({
  texts,
  className = "",
  speed = 50,
}: {
  texts: string[];
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = texts[0];
      return;
    }
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン!@#$%^&*";
    let idx = 0;
    let running = true;

    const scramble = (target: string) => {
      return new Promise<void>((resolve) => {
        let iteration = 0;
        const iv = setInterval(() => {
          if (!running) {
            clearInterval(iv);
            return;
          }
          el.textContent = target
            .split("")
            .map((c, i) =>
              i < iteration ? c : chars[Math.floor(Math.random() * chars.length)]
            )
            .join("");
          if (iteration >= target.length) {
            clearInterval(iv);
            resolve();
          }
          iteration += 1 / 3;
        }, speed);
      });
    };

    const loop = async () => {
      while (running) {
        await scramble(texts[idx]);
        await new Promise((r) => setTimeout(r, 2500));
        idx = (idx + 1) % texts.length;
      }
    };
    loop();
    return () => {
      running = false;
    };
  }, [texts, speed]);

  return <span ref={ref} className={className} />;
}

/* =============================================
   4. Tilt3D — 3D perspective card (touch + mouse)
      Enhanced with shine layer
   ============================================= */
export function Tilt3D({
  children,
  className = "",
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const shine = el.querySelector<HTMLElement>(".tilt-shine");

    const handleMove = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.03, 1.03, 1.03)`;
      if (shine) {
        shine.style.opacity = "1";
        shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.25) 0%, transparent 60%)`;
      }
    };

    const handleLeave = () => {
      el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
      if (shine) shine.style.opacity = "0";
    };

    const onMouse = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handleMove(t.clientX, t.clientY);
    };

    el.addEventListener("mousemove", onMouse);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchmove", onTouch, { passive: true });
    el.addEventListener("touchend", handleLeave);
    return () => {
      el.removeEventListener("mousemove", onMouse);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchmove", onTouch);
      el.removeEventListener("touchend", handleLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={`tilt-3d ${className}`}
      style={{
        transition: "transform 0.45s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      <div
        className="tilt-shine"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 10,
        }}
      />
    </div>
  );
}

/* =============================================
   5. ReadingProgress — scroll progress bar
   ============================================= */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[3px]">
      <div
        ref={ref}
        className="h-full bg-gradient-animated"
        style={{ width: "0%", transition: "width 0.08s linear" }}
      />
    </div>
  );
}

/* =============================================
   6. CountUp — animated number with digit roll
   ============================================= */
export function CountUp({
  end,
  suffix = "",
  className = "",
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            el.textContent = `${Math.round(eased * end)}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/* =============================================
   7. Magnetic — cursor-following element
   ============================================= */
export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      el.style.transform = `translate(${currentX}px, ${currentY}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetX = (e.clientX - cx) * strength;
      targetY = (e.clientY - cy) * strength;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/* =============================================
   8. Typewriter — text typing/deleting cycle
   ============================================= */
export function Typewriter({
  texts,
  className = "",
}: {
  texts: string[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = texts[0];
      return;
    }
    let textIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[textIdx];
      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx >= current.length) {
          timeout = setTimeout(() => {
            deleting = true;
            tick();
          }, 2000);
          return;
        }
        timeout = setTimeout(tick, 55 + Math.random() * 35);
      } else {
        el.textContent = current.slice(0, charIdx);
        charIdx--;
        if (charIdx < 0) {
          deleting = false;
          charIdx = 0;
          textIdx = (textIdx + 1) % texts.length;
          timeout = setTimeout(tick, 300);
          return;
        }
        timeout = setTimeout(tick, 25);
      }
    };
    tick();
    return () => clearTimeout(timeout);
  }, [texts]);

  return (
    <span className={className}>
      <span ref={ref} />
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

/* =============================================
   9. Marquee — infinite horizontal scroll
   ============================================= */
export function Marquee({
  children,
  className = "",
  speed = 30,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={`marquee-container overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{ "--marquee-speed": `${speed}s` } as CSSProperties}
      >
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* =============================================
   10. ParallaxLayer — depth-based scroll parallax
   ============================================= */
export function ParallaxLayer({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${center * speed * -1}px)`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/* =============================================
   11. CursorGlow — page-wide cursor light effect
       (Makes the entire page feel interactive)
   ============================================= */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let rafId = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      cx = lerp(cx, x, 0.08);
      cy = lerp(cy, y, 0.08);
      el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-glow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transition: "opacity 0.4s ease",
        willChange: "transform",
      }}
    />
  );
}

/* =============================================
   12. ScrollVelocity — velocity-based text effect
       (Text skews & scales based on scroll speed)
   ============================================= */
export function ScrollVelocity({
  children,
  className = "",
  intensity = 1,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    let lastScroll = window.scrollY;
    let velocity = 0;
    let rafId = 0;

    const update = () => {
      const current = window.scrollY;
      const delta = current - lastScroll;
      velocity += (delta - velocity) * 0.1;
      lastScroll = current;

      const skew = Math.max(-15, Math.min(15, velocity * 0.3 * intensity));
      const scaleX = 1 + Math.abs(velocity * 0.001 * intensity);
      el.style.transform = `skewY(${skew}deg) scaleX(${Math.min(scaleX, 1.1)})`;

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", transition: "transform 0.1s linear" }}
    >
      {children}
    </div>
  );
}

/* =============================================
   13. MaskReveal — clip-path wipe reveal
   ============================================= */
export function MaskReveal({
  children,
  className = "",
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.style.clipPath = "none";
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            el.classList.add("mask-revealed");
          }, delay);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={`mask-reveal mask-${direction} ${className}`}>
      {children}
    </div>
  );
}

/* =============================================
   14. FloatingOrb — animated 3D floating element
   ============================================= */
export function FloatingOrb({
  className = "",
  color = "rgba(99,102,241,0.15)",
  size = 300,
  delay = 0,
}: {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <div
      className={`floating-orb morph-blob ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${size * 0.25}px)`,
        animationDelay: `${delay}s`,
        position: "absolute",
        pointerEvents: "none",
      }}
    />
  );
}

/* =============================================
   15. Noise — animated grain overlay
   ============================================= */
export function Noise() {
  return (
    <div
      className="noise-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none",
        opacity: 0.035,
        mixBlendMode: "overlay",
      }}
    />
  );
}

/* =============================================
   16. HoverExpand — card that expands on hover
   ============================================= */
export function HoverExpand({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`hover-expand ${className}`}>
      {children}
    </div>
  );
}

/* =============================================
   17. StaggerChildren — orchestrated stagger wrapper
   ============================================= */
export function StaggerChildren({
  children,
  className = "",
  stagger = 80,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.querySelectorAll<HTMLElement>(":scope > *").forEach((c) => {
        c.style.opacity = "1";
        c.style.transform = "none";
      });
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.querySelectorAll<HTMLElement>(":scope > *").forEach((c, i) => {
            c.style.transitionDelay = `${i * stagger}ms`;
            c.classList.add("stagger-child-in");
          });
          io.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className={`stagger-parent ${className}`}>
      {children}
    </div>
  );
}

/* =============================================
   18. GlowCard — card with dynamic glow border
   ============================================= */
export function GlowCard({
  children,
  className = "",
  color = "var(--accent)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--glow-x", `${x}px`);
      el.style.setProperty("--glow-y", `${y}px`);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`glow-card ${className}`}
      style={{ "--glow-color": color } as CSSProperties}
    >
      {children}
    </div>
  );
}
