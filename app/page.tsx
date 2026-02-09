import Link from "next/link";
import {
  AlertTriangle,
  Shield,
  Newspaper,
  Phone,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  ChevronRight,
  Zap,
  Users,
  FileCheck,
  Banknote,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { generateWebSiteJsonLd } from "@/lib/jsonld";
import {
  Reveal,
  SplitText,
  TextScramble,
  Tilt3D,
  Typewriter,
  Marquee,
  CountUp,
  Magnetic,
  ParallaxLayer,
  MaskReveal,
  FloatingOrb,
  ScrollVelocity,
  StaggerChildren,
  GlowCard,
} from "@/components/Motion";

const latestNews = [
  {
    id: 1,
    title: "2025年度 住民税非課税世帯への給付金 申請受付開始",
    date: "2025-01-15",
    category: "給付金",
    href: "/news",
  },
  {
    id: 2,
    title: "生活保護の級地区分が2025年4月に見直しへ",
    date: "2025-01-12",
    category: "生活保護",
    href: "/news",
  },
  {
    id: 3,
    title: "緊急小口資金の特例貸付 返済免除の最新情報",
    date: "2025-01-10",
    category: "貸付制度",
    href: "/news",
  },
  {
    id: 4,
    title: "フードバンク利用者が過去最多に — 各地の対応まとめ",
    date: "2025-01-08",
    category: "支援情報",
    href: "/news",
  },
  {
    id: 5,
    title: "後払い現金化トラブルが急増、国民生活センターが注意喚起",
    date: "2025-01-05",
    category: "注意喚起",
    href: "/news",
  },
];

const trendTopics = [
  "住民税非課税世帯 給付金",
  "生活保護 申請方法",
  "緊急小口資金",
  "後払い 現金化 危険",
  "フードバンク 利用方法",
  "住居確保給付金",
  "法テラス 無料相談",
  "生活困窮者 自立支援",
];

const categories = [
  {
    title: "生活保護ガイド",
    description: "申請の流れ、受給条件、Q&Aを網羅",
    href: "/seikatsu-hogo",
    icon: Shield,
    gradient: "from-indigo-500 to-blue-500",
    bgGlow: "bg-indigo-500/20",
  },
  {
    title: "現金化の実態",
    description: "後払い現金化のリスクと安全な代替手段",
    href: "/cash-out",
    icon: AlertTriangle,
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/20",
  },
  {
    title: "ニュース",
    description: "支援制度の最新情報をまとめてチェック",
    href: "/news",
    icon: Newspaper,
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
];

const stats = [
  { value: 164, suffix: "万人", label: "生活保護受給者", icon: Users },
  { value: 45, suffix: "万件", label: "困窮相談件数/年", icon: FileCheck },
  { value: 10, suffix: "万円", label: "緊急小口資金上限", icon: Banknote },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateWebSiteJsonLd()} />

      {/* ====== Hero section — immersive ====== */}
      <section className="relative mb-14 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6 py-14 text-white sm:py-20 hero-shimmer-line">
        {/* Living background orbs */}
        <FloatingOrb
          className="-left-24 -top-24"
          color="rgba(255,255,255,0.15)"
          size={350}
          delay={0}
        />
        <FloatingOrb
          className="-bottom-20 -right-20"
          color="rgba(236,72,153,0.2)"
          size={300}
          delay={3}
        />
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <FloatingOrb
            className="right-1/4 top-1/3"
            color="rgba(6,182,212,0.12)"
            size={200}
            delay={5}
          />
        </ParallaxLayer>

        <div className="relative z-10">
          <MaskReveal direction="left">
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              生活に困ったときの総合情報サイト
            </div>
          </MaskReveal>

          <h1 className="mb-1 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            <SplitText text="あなたの「困った」に" stagger={40} />
          </h1>
          <div className="mb-2 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            <Typewriter
              texts={["答えを届ける", "寄り添う", "道を照らす"]}
            />
          </div>
          <div className="mb-8 text-sm text-white/50 font-mono">
            <TextScramble
              texts={["SEIKATSU SHIEN NAVI", "生活支援ナビゲーション", "YOUR SAFETY NET"]}
              speed={40}
            />
          </div>

          <p className="mb-8 max-w-md text-base text-white/70 sm:text-lg">
            生活保護・給付金・支援制度の情報を、分かりやすくまとめました。
          </p>

          {/* Emergency CTA with magnetic + spring */}
          <Magnetic strength={0.2}>
            <a
              href="tel:0120-279-338"
              className="spring-hover inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-red-600 shadow-xl no-underline"
            >
              <Phone className="h-5 w-5" />
              今すぐ無料相談 0120-279-338
            </a>
          </Magnetic>
          <p className="mt-3 text-xs text-white/40">
            よりそいホットライン（24時間・無料）
          </p>
        </div>
      </section>

      {/* ====== Stats counter — staggered entry ====== */}
      <StaggerChildren className="mb-14 grid grid-cols-3 gap-3" stagger={120}>
        {stats.map((s) => (
          <GlowCard key={s.label} className="p-4 text-center">
            <s.icon className="mx-auto mb-2 h-5 w-5 text-accent" />
            <p className="text-2xl font-black text-gradient sm:text-3xl">
              <CountUp end={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-xs text-fg-secondary">{s.label}</p>
          </GlowCard>
        ))}
      </StaggerChildren>

      {/* ====== Category cards — 3D tilt + glow ====== */}
      <section aria-labelledby="categories-heading" className="mb-14">
        <Reveal>
          <h2
            id="categories-heading"
            className="mb-5 flex items-center gap-2 text-lg font-extrabold text-fg"
          >
            <Zap className="h-5 w-5 text-accent" />
            <SplitText text="カテゴリーから探す" stagger={35} />
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.href} delay={i * 100} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <Tilt3D intensity={12}>
                <Link
                  href={cat.href}
                  className="card hover-glow group relative block overflow-hidden p-5 no-underline"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`absolute -right-6 -top-6 h-32 w-32 rounded-full ${cat.bgGlow} blur-2xl transition-all duration-700 group-hover:scale-[2.5] group-hover:opacity-80`}
                  />
                  <div className="relative" style={{ transform: "translateZ(40px)" }}>
                    <div
                      className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-lg`}
                    >
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-bold text-fg">{cat.title}</p>
                    <p className="mt-1 text-sm text-fg-secondary">
                      {cat.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-accent">
                      詳しく見る
                      <ChevronRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ====== Trend ticker — velocity-reactive marquee ====== */}
      <Reveal>
        <section aria-labelledby="trend-heading" className="mb-14">
          <h2
            id="trend-heading"
            className="mb-4 flex items-center gap-2 text-lg font-extrabold text-fg"
          >
            <TrendingUp className="h-5 w-5 text-accent" />
            注目のトピック
          </h2>
          <ScrollVelocity intensity={0.5}>
            <Marquee speed={35}>
              {trendTopics.map((topic) => (
                <span
                  key={topic}
                  className="pill spring-hover shrink-0 cursor-default border border-border bg-bg-card text-fg"
                >
                  {topic}
                </span>
              ))}
            </Marquee>
          </ScrollVelocity>
        </section>
      </Reveal>

      {/* ====== Latest news feed ====== */}
      <section aria-labelledby="news-heading" className="mb-14">
        <Reveal>
          <div className="mb-4 flex items-center justify-between">
            <h2
              id="news-heading"
              className="flex items-center gap-2 text-lg font-extrabold text-fg"
            >
              <Clock className="h-5 w-5 text-accent" />
              最新ニュース
            </h2>
            <Magnetic strength={0.2}>
              <Link
                href="/news"
                className="spring-hover flex items-center gap-1 rounded-full bg-accent-light px-3 py-1.5 text-sm font-semibold text-accent no-underline"
              >
                すべて見る
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
        <div className="space-y-3">
          {latestNews.map((item, i) => (
            <Reveal key={item.id} delay={i * 70} direction={i % 2 === 0 ? "left" : "right"}>
              <Link
                href={item.href}
                className="card hover-expand flex items-start gap-3 p-4 no-underline"
              >
                <div className="shrink-0 pt-0.5">
                  <span className="pill bg-accent-light text-accent text-xs">
                    {item.category}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-fg leading-snug line-clamp-2">
                    {item.title}
                  </p>
                  <time
                    dateTime={item.date}
                    className="mt-1 block text-xs text-fg-secondary"
                  >
                    {item.date}
                  </time>
                </div>
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-fg-secondary/40" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ====== About — mask reveal ====== */}
      <MaskReveal direction="up">
        <section
          aria-labelledby="about-heading"
          className="card-glow p-6"
        >
          <h2
            id="about-heading"
            className="mb-2 text-base font-extrabold text-fg"
          >
            生活支援ナビとは
          </h2>
          <p className="text-sm text-fg-secondary leading-relaxed">
            生活に困ったとき、どこに相談すればいいか分からない——
            そんな方のための情報サイトです。
            生活保護の申請方法、公的な貸付制度、給付金の最新情報、
            そして「即金」「現金化」などの危険な手段に頼らないための代替案を、
            分かりやすくまとめています。
          </p>
        </section>
      </MaskReveal>
    </>
  );
}
