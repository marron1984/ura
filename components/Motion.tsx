"use client";

import { useEffect, useRef, type ReactNode } from "react";

/* =============================================
   ScrollReveal — IntersectionObserver wrapper
   ============================================= */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      el.style.opacity = "1";
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-target ${className}`}>
      {children}
    </div>
  );
}

/* =============================================
   Tilt3D — 3D perspective card (touch + mouse)
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
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const handleMove = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleLeave = () => {
      el.style.transform =
        "perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
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
      className={className}
      style={{
        transition: "transform 0.35s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

/* =============================================
   ReadingProgress — page scroll progress bar
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
        style={{ width: "0%", transition: "width 0.1s linear" }}
      />
    </div>
  );
}

/* =============================================
   CountUp — animated number counter
   ============================================= */
export function CountUp({
  end,
  suffix = "",
  className = "",
  duration = 1500,
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
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
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
   Magnetic — element that follows cursor slightly
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
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/* =============================================
   Typewriter — text typing animation
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
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
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
        timeout = setTimeout(tick, 60 + Math.random() * 40);
      } else {
        el.textContent = current.slice(0, charIdx);
        charIdx--;
        if (charIdx < 0) {
          deleting = false;
          charIdx = 0;
          textIdx = (textIdx + 1) % texts.length;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, 30);
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
   Marquee — infinite horizontal scroll ticker
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
        style={
          { "--marquee-speed": `${speed}s` } as React.CSSProperties
        }
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
   ParallaxLayer — depth-based scroll parallax
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
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

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
