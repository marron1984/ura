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
  Tilt3D,
  Typewriter,
  Marquee,
  CountUp,
  Magnetic,
  ParallaxLayer,
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

      {/* ====== Hero section ====== */}
      <section className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6 py-12 text-white sm:py-16">
        {/* Morphing blob orbs */}
        <div className="morph-blob hero-glow -left-20 -top-20 bg-white/20" />
        <div
          className="morph-blob hero-glow -bottom-16 -right-16 bg-pink-300/25"
          style={{ animationDelay: "4s" }}
        />
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <div className="morph-blob absolute right-1/4 top-1/3 h-40 w-40 bg-cyan-400/10 blur-3xl" />
        </ParallaxLayer>

        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            生活に困ったときの総合情報サイト
          </div>

          <h1 className="mb-1 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            あなたの「困った」に
          </h1>
          <div className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            <Typewriter
              texts={["答えを届ける", "寄り添う", "道を照らす"]}
            />
          </div>

          <p className="mb-8 max-w-md text-base text-white/70 sm:text-lg">
            生活保護・給付金・支援制度の情報を、分かりやすくまとめました。
          </p>

          {/* Emergency CTA with magnetic effect */}
          <Magnetic strength={0.15}>
            <a
              href="tel:0120-279-338"
              className="spring-hover inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-red-600 shadow-xl no-underline"
            >
              <Phone className="h-5 w-5" />
              今すぐ無料相談 0120-279-338
            </a>
          </Magnetic>
          <p className="mt-2.5 text-xs text-white/50">
            よりそいホットライン（24時間・無料）
          </p>
        </div>
      </section>

      {/* ====== Stats counter ====== */}
      <Reveal>
        <section className="mb-12 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card p-4 text-center"
            >
              <s.icon className="mx-auto mb-2 h-5 w-5 text-accent" />
              <p className="text-2xl font-black text-gradient sm:text-3xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs text-fg-secondary">{s.label}</p>
            </div>
          ))}
        </section>
      </Reveal>

      {/* ====== Category cards — 3D tilt ====== */}
      <section aria-labelledby="categories-heading" className="mb-14">
        <Reveal>
          <h2
            id="categories-heading"
            className="mb-5 flex items-center gap-2 text-lg font-extrabold text-fg"
          >
            <Zap className="h-5 w-5 text-accent" />
            カテゴリーから探す
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.href} delay={i * 80}>
              <Tilt3D intensity={10}>
                <Link
                  href={cat.href}
                  className="card hover-glow group relative block overflow-hidden p-5 no-underline"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`absolute -right-6 -top-6 h-28 w-28 rounded-full ${cat.bgGlow} blur-2xl transition-all duration-500 group-hover:scale-[2]`}
                  />
                  <div className="relative" style={{ transform: "translateZ(30px)" }}>
                    <div
                      className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-md`}
                    >
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-bold text-fg">{cat.title}</p>
                    <p className="mt-1 text-sm text-fg-secondary">
                      {cat.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-accent">
                      詳しく見る
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ====== Trend ticker — marquee ====== */}
      <Reveal>
        <section aria-labelledby="trend-heading" className="mb-14">
          <h2
            id="trend-heading"
            className="mb-4 flex items-center gap-2 text-lg font-extrabold text-fg"
          >
            <TrendingUp className="h-5 w-5 text-accent" />
            注目のトピック
          </h2>
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
            <Link
              href="/news"
              className="spring-hover flex items-center gap-1 rounded-full bg-accent-light px-3 py-1.5 text-sm font-semibold text-accent no-underline"
            >
              すべて見る
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
        <div className="space-y-3">
          {latestNews.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <Link
                href={item.href}
                className="card card-interactive flex items-start gap-3 p-4 no-underline"
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

      {/* ====== About ====== */}
      <Reveal>
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
      </Reveal>
    </>
  );
}
