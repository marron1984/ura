import Link from "next/link";
import {
  AlertTriangle,
  Shield,
  Newspaper,
  Phone,
  ArrowRight,
  TrendingUp,
  Clock,
  BookOpen,
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
    color: "bg-blue-50 border-blue-200 text-blue-800",
    iconColor: "text-blue-600",
  },
  {
    title: "現金化の実態",
    description: "後払い現金化のリスクと安全な代替手段",
    href: "/cash-out",
    icon: AlertTriangle,
    color: "bg-amber-50 border-amber-200 text-amber-800",
    iconColor: "text-amber-600",
  },
  {
    title: "ニュース",
    description: "支援制度の最新情報をまとめてチェック",
    href: "/news",
    icon: Newspaper,
    color: "bg-green-50 border-green-200 text-green-800",
    iconColor: "text-green-600",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateWebSiteJsonLd()} />

      {/* Emergency banner */}
      <div className="mb-6 rounded-lg border-2 border-danger bg-red-50 p-4">
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-6 w-6 shrink-0 text-danger" />
          <div>
            <p className="text-lg font-bold text-danger">
              今すぐお金が必要・生活に困っている方へ
            </p>
            <p className="mt-1 text-base text-foreground">
              よりそいホットライン{" "}
              <a
                href="tel:0120-279-338"
                className="font-bold text-danger underline"
              >
                0120-279-338
              </a>
              （24時間・無料）まずは電話してください。
            </p>
          </div>
        </div>
      </div>

      {/* Category cards */}
      <section aria-labelledby="categories-heading" className="mb-10">
        <h2
          id="categories-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          <BookOpen className="h-5 w-5 text-accent" />
          カテゴリーから探す
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`flex flex-col rounded-lg border-2 p-5 no-underline transition-shadow hover:shadow-md ${cat.color}`}
            >
              <cat.icon className={`mb-2 h-7 w-7 ${cat.iconColor}`} />
              <span className="text-lg font-bold">{cat.title}</span>
              <span className="mt-1 text-sm opacity-80">{cat.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trend topics */}
      <section aria-labelledby="trend-heading" className="mb-10">
        <h2
          id="trend-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          <TrendingUp className="h-5 w-5 text-accent" />
          注目のトピック
        </h2>
        <div className="flex flex-wrap gap-2">
          {trendTopics.map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
              className="inline-flex items-center rounded-full border border-border bg-gray-50 px-4 py-2 text-base font-medium text-foreground no-underline hover:bg-accent-light hover:border-accent"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Latest news */}
      <section aria-labelledby="news-heading" className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2
            id="news-heading"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <Clock className="h-5 w-5 text-accent" />
            最新ニュース
          </h2>
          <Link
            href="/news"
            className="flex items-center gap-1 text-base font-medium text-accent"
          >
            すべて見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="divide-y divide-border rounded-lg border border-border">
          {latestNews.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex flex-col gap-1 px-4 py-4 text-foreground no-underline hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-block shrink-0 rounded bg-accent-light px-2 py-0.5 text-xs font-bold text-accent">
                    {item.category}
                  </span>
                  <span className="text-base font-medium leading-snug">
                    {item.title}
                  </span>
                </div>
                <time
                  dateTime={item.date}
                  className="shrink-0 text-sm text-muted"
                >
                  {item.date}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* About this site */}
      <section
        aria-labelledby="about-heading"
        className="rounded-lg border border-border bg-gray-50 p-6"
      >
        <h2 id="about-heading" className="mb-2 text-lg font-bold">
          生活支援ナビとは
        </h2>
        <p className="text-base text-foreground leading-relaxed">
          生活に困ったとき、どこに相談すればいいか分からない——そんな方のための情報サイトです。
          生活保護の申請方法、公的な貸付制度、給付金の最新情報、
          そして「即金」「現金化」などの危険な手段に頼らないための代替案を、
          分かりやすくまとめています。
        </p>
      </section>
    </>
  );
}
