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
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { generateWebSiteJsonLd } from "@/lib/jsonld";

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
  { label: "住民税非課税世帯 給付金", href: "/news" },
  { label: "生活保護 申請方法", href: "/seikatsu-hogo" },
  { label: "緊急小口資金", href: "/news" },
  { label: "後払い 現金化 危険", href: "/cash-out" },
  { label: "フードバンク 利用方法", href: "/news" },
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateWebSiteJsonLd()} />

      {/* ====== Hero section with glow ====== */}
      <section className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6 py-10 text-white sm:py-14">
        {/* Glow orbs */}
        <div className="hero-glow -left-20 -top-20 bg-white/30" />
        <div className="hero-glow -bottom-20 -right-20 bg-pink-300/30" style={{ animationDelay: "3s" }} />

        <div className="relative z-10">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            生活に困ったときの総合情報サイト
          </div>
          <h1 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            あなたの「困った」に
            <br />
            答えを届ける
          </h1>
          <p className="mb-6 text-base text-white/80 sm:text-lg">
            生活保護・給付金・支援制度の情報を、
            分かりやすくまとめました。
          </p>

          {/* Emergency call CTA */}
          <a
            href="tel:0120-279-338"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-base font-bold text-red-600 shadow-lg transition-transform hover:scale-105 active:scale-95 no-underline"
          >
            <Phone className="h-5 w-5" />
            今すぐ無料相談 0120-279-338
          </a>
          <p className="mt-2 text-xs text-white/60">
            よりそいホットライン（24時間・無料）
          </p>
        </div>
      </section>

      {/* ====== Category cards ====== */}
      <section aria-labelledby="categories-heading" className="mb-12">
        <h2
          id="categories-heading"
          className="mb-5 flex items-center gap-2 text-lg font-extrabold text-fg"
        >
          <Zap className="h-5 w-5 text-accent" />
          カテゴリーから探す
        </h2>
        <div className="stagger grid gap-4 sm:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="card card-interactive group relative overflow-hidden p-5 no-underline"
            >
              {/* Background glow */}
              <div
                className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${cat.bgGlow} blur-2xl transition-all group-hover:scale-150`}
              />
              <div className="relative z-10">
                <div
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-sm`}
                >
                  <cat.icon className="h-5 w-5" />
                </div>
                <p className="text-base font-bold text-fg">{cat.title}</p>
                <p className="mt-1 text-sm text-fg-secondary">
                  {cat.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-accent">
                  詳しく見る
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ====== Trend topics — horizontal scroll ====== */}
      <section aria-labelledby="trend-heading" className="mb-12 anim-up">
        <h2
          id="trend-heading"
          className="mb-4 flex items-center gap-2 text-lg font-extrabold text-fg"
        >
          <TrendingUp className="h-5 w-5 text-accent" />
          注目のトピック
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
          {trendTopics.map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
              className="pill shrink-0 border border-border bg-bg-card text-fg no-underline transition-all hover:border-accent hover:bg-accent-light hover:text-accent active:scale-95"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ====== Latest news feed ====== */}
      <section aria-labelledby="news-heading" className="mb-12">
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
            className="flex items-center gap-1 rounded-full bg-accent-light px-3 py-1.5 text-sm font-semibold text-accent no-underline transition-colors hover:bg-accent/10"
          >
            すべて見る
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="stagger space-y-3">
          {latestNews.map((item) => (
            <Link
              key={item.id}
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
          ))}
        </div>
      </section>

      {/* ====== About ====== */}
      <section
        aria-labelledby="about-heading"
        className="anim-up card-glow p-6"
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
    </>
  );
}
