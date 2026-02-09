import type { Metadata } from "next";
import { Clock, Tag, Newspaper, Info } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import {
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/jsonld";
import {
  Reveal,
  SplitText,
  Tilt3D,
  Marquee,
  MaskReveal,
  ScrollVelocity,
  GlowCard,
} from "@/components/Motion";

export const metadata: Metadata = {
  title: "ニュース一覧｜支援制度の最新情報",
  description:
    "生活保護、給付金、貸付制度、支援情報など、経済的困窮に関する最新ニュースをまとめてお届けします。",
  openGraph: {
    title: "ニュース一覧｜支援制度の最新情報",
    description:
      "生活保護・給付金・支援制度の最新ニュースを随時更新。",
  },
};

type NewsCategory =
  | "給付金"
  | "生活保護"
  | "貸付制度"
  | "支援情報"
  | "注意喚起"
  | "法改正"
  | "統計";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: NewsCategory;
  source: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "2025年度 住民税非課税世帯への給付金 申請受付開始",
    summary:
      "政府は住民税非課税世帯を対象に1世帯あたり3万円の給付金支給を決定。各自治体で順次申請受付が始まっている。対象世帯には案内書が届く見込み。届かない場合は市区町村の窓口に確認を。",
    date: "2025-01-15",
    category: "給付金",
    source: "厚生労働省発表",
  },
  {
    id: 2,
    title: "生活保護の級地区分が2025年4月に見直しへ",
    summary:
      "生活保護の基準額を決める「級地区分」が2025年4月に見直される。一部の地域で支給額が変わる可能性がある。現在受給中の方は、担当ケースワーカーに確認することが推奨される。",
    date: "2025-01-12",
    category: "生活保護",
    source: "厚生労働省",
  },
  {
    id: 3,
    title: "緊急小口資金の特例貸付 返済免除の最新情報",
    summary:
      "コロナ禍で利用が急増した緊急小口資金・総合支援資金の特例貸付について、住民税非課税世帯は返済免除となる。免除申請の手続き方法と注意点をまとめた。",
    date: "2025-01-10",
    category: "貸付制度",
    source: "社会福祉協議会",
  },
  {
    id: 4,
    title: "フードバンク利用者が過去最多に — 各地の対応まとめ",
    summary:
      "全国のフードバンクで利用者数が過去最多を記録。物価高騰の影響で、これまでフードバンクを利用したことがなかった世帯からの相談が増加。各地域の利用方法をまとめた。",
    date: "2025-01-08",
    category: "支援情報",
    source: "全国フードバンク推進協議会",
  },
  {
    id: 5,
    title: "後払い現金化トラブルが急増、国民生活センターが注意喚起",
    summary:
      "後払い決済サービスを悪用した「現金化」に関する相談が前年比2倍に急増。国民生活センターが消費者に対し、安易に利用しないよう注意を呼びかけている。",
    date: "2025-01-05",
    category: "注意喚起",
    source: "国民生活センター",
  },
  {
    id: 6,
    title: "生活困窮者自立支援制度の利用実績 — 2024年度中間報告",
    summary:
      "厚生労働省が2024年度の中間報告を発表。相談件数は約45万件で前年同期比12%増。就労支援による就職率は改善傾向にあるが、住居支援の需要が高まっている。",
    date: "2025-01-03",
    category: "統計",
    source: "厚生労働省",
  },
  {
    id: 7,
    title: "改正生活保護法が2025年施行 — 主な変更点まとめ",
    summary:
      "2025年施行の改正生活保護法では、扶養照会の運用がさらに柔軟化されるほか、大学進学時の支援が拡充される。受給者の自立支援プログラムも強化される見通し。",
    date: "2024-12-28",
    category: "法改正",
    source: "厚生労働省",
  },
  {
    id: 8,
    title: "年末年始の生活相談窓口 — 全国の開設状況",
    summary:
      "年末年始も相談できる窓口の一覧。よりそいホットライン（0120-279-338）は年中無休。各地の社会福祉協議会や支援団体の年末年始対応をまとめた。",
    date: "2024-12-25",
    category: "支援情報",
    source: "編集部まとめ",
  },
  {
    id: 9,
    title: "給料ファクタリング業者に対する集団訴訟 — 判決のポイント",
    summary:
      "給料ファクタリング業者に対する集団訴訟で、裁判所が「実質的な貸付であり、貸金業法違反」と認定。被害者への返還が命じられた。同様の被害に遭った方の相談窓口も紹介。",
    date: "2024-12-20",
    category: "注意喚起",
    source: "裁判所判例",
  },
  {
    id: 10,
    title: "子どもの貧困対策 — 2025年度予算案のポイント",
    summary:
      "2025年度予算案で子どもの貧困対策関連予算が拡充。児童扶養手当の増額、学習支援事業の拡大、こども食堂への支援強化などが盛り込まれた。",
    date: "2024-12-18",
    category: "給付金",
    source: "内閣府",
  },
];

const categoryColors: Record<NewsCategory, string> = {
  給付金: "bg-blue-500/10 text-blue-600",
  生活保護: "bg-purple-500/10 text-purple-600",
  貸付制度: "bg-emerald-500/10 text-emerald-600",
  支援情報: "bg-teal-500/10 text-teal-600",
  注意喚起: "bg-red-500/10 text-red-600",
  法改正: "bg-indigo-500/10 text-indigo-600",
  統計: "bg-gray-500/10 text-gray-600",
};

const allCategories: NewsCategory[] = [
  "給付金",
  "生活保護",
  "貸付制度",
  "支援情報",
  "注意喚起",
  "法改正",
  "統計",
];

export default function NewsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleJsonLd({
          title: "ニュース一覧｜支援制度の最新情報",
          description:
            "生活保護・給付金・支援制度の最新ニュースアーカイブ。",
          path: "/news",
          datePublished: "2025-01-01",
          dateModified: "2025-01-15",
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "トップ", url: "https://seikatsu-shien-navi.jp" },
          {
            name: "ニュース",
            url: "https://seikatsu-shien-navi.jp/news",
          },
        ])}
      />

      <Breadcrumb items={[{ label: "ニュース" }]} />

      {/* Page header */}
      <MaskReveal direction="left">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-black tracking-tight sm:text-3xl">
            <SplitText text="ニュース一覧" stagger={50} className="text-gradient" />
          </h1>
          <p className="text-base text-fg-secondary">
            支援制度・給付金・生活保護に関する最新情報をまとめています。
          </p>
        </div>
      </MaskReveal>

      {/* ====== Category filter chips — marquee ====== */}
      <section aria-labelledby="filter-heading" className="mb-8">
        <h2 id="filter-heading" className="sr-only">
          カテゴリーで絞り込み
        </h2>
        <ScrollVelocity intensity={0.3}>
          <Marquee speed={25}>
            {allCategories.map((cat) => (
              <span
                key={cat}
                className={`pill spring-hover shrink-0 ${categoryColors[cat]}`}
              >
                <Tag className="h-3 w-3" />
                {cat}
              </span>
            ))}
          </Marquee>
        </ScrollVelocity>
      </section>

      {/* ====== News feed — card-based with Tilt3D + GlowCard ====== */}
      <section aria-labelledby="news-list-heading">
        <h2 id="news-list-heading" className="sr-only">
          ニュース記事一覧
        </h2>
        <div className="space-y-4">
          {newsItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 60} direction={i % 2 === 0 ? "left" : "right"}>
              <Tilt3D intensity={4}>
                <GlowCard className="overflow-hidden">
                  {/* Category + meta bar */}
                  <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-2.5">
                    <span
                      className={`pill text-xs ${categoryColors[item.category]}`}
                    >
                      {item.category}
                    </span>
                    <time
                      dateTime={item.date}
                      className="flex items-center gap-1 text-xs text-fg-secondary"
                    >
                      <Clock className="h-3 w-3" />
                      {item.date}
                    </time>
                    <span className="text-xs text-fg-secondary/60">
                      {item.source}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="px-4 py-4">
                    <h3 className="text-base font-bold text-fg leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-fg-secondary leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </GlowCard>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ====== Source note ====== */}
      <MaskReveal direction="up">
        <div className="mt-10 card-glow p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-light">
              <Info className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-fg">ニュースソースについて</p>
              <p className="mt-1 text-xs text-fg-secondary leading-relaxed">
                当サイトのニュースは、厚生労働省、内閣府、各自治体の公式発表、
                および信頼できる報道機関の情報をもとに編集部がまとめたものです。
                最新・正確な情報は各公式サイトをご確認ください。
              </p>
            </div>
          </div>
        </div>
      </MaskReveal>
    </>
  );
}
