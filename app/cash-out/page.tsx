import type { Metadata } from "next";
import {
  AlertTriangle,
  ShieldAlert,
  Ban,
  CheckCircle,
  Phone,
  Scale,
  ArrowRight,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import {
  generateArticleJsonLd,
  generateFAQJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "後払い・現金化のリスクと実態",
  description:
    "クレジットカード現金化や後払いアプリ現金化の危険性を解説。違法性、実際の被害事例、安全な代替手段（公的支援制度）をまとめました。",
  openGraph: {
    title: "後払い・現金化のリスクと実態",
    description:
      "現金化サービスの危険性と、安全にお金を確保する方法をまとめました。",
  },
};

const risks = [
  {
    title: "クレジットカード現金化",
    description:
      "ショッピング枠で商品を購入し、業者に買い取ってもらう手口。カード会社の規約違反であり、カード利用停止・一括返済を求められるリスクがある。",
    severity: "高",
  },
  {
    title: "後払いアプリ現金化",
    description:
      "後払い決済（Paidy、メルペイスマート払いなど）で購入した商品を転売して現金を得る手口。利用規約違反であり、アカウント凍結・債権回収に発展する。",
    severity: "高",
  },
  {
    title: "給料ファクタリング（給料前借りサービス）",
    description:
      "給料債権を売却して前借りする形式だが、実質的には年利数百〜数千%の超高金利貸付。金融庁がヤミ金融と認定しているケースが多い。",
    severity: "非常に高",
  },
  {
    title: "SNS上の個人間融資",
    description:
      "Twitter(X)やLINEで「お金貸します」と誘う手口。ほぼすべてがヤミ金融であり、法外な利息や個人情報の悪用、脅迫的な取り立てに遭う。",
    severity: "非常に高",
  },
  {
    title: "携帯電話の契約転売（白ロム詐欺）",
    description:
      "他人名義で携帯電話を契約させ、端末を買い取る手口。詐欺罪に問われる可能性があり、被害者にも高額な通信料の請求が来る。",
    severity: "非常に高",
  },
];

const alternatives = [
  {
    title: "生活福祉資金貸付制度（緊急小口資金）",
    description:
      "社会福祉協議会が窓口。緊急で一時的に必要な方に最大10万円を無利子で貸付。",
    action: "お住まいの市区町村の社会福祉協議会に相談",
  },
  {
    title: "生活保護",
    description:
      "最低限の生活を保障する国の制度。家賃・生活費・医療費などが支給される。",
    action: "福祉事務所で申請（誰でも申請する権利あり）",
    href: "/seikatsu-hogo",
  },
  {
    title: "住居確保給付金",
    description:
      "離職や収入減少で家賃が払えない方に、原則3か月（最大9か月）家賃相当額を支給。",
    action: "自立相談支援機関に相談",
  },
  {
    title: "生活困窮者自立支援制度",
    description:
      "仕事・住まい・家計など生活全般の相談に無料で対応。プランを一緒に立ててくれる。",
    action: "市区町村の自立相談支援窓口に相談",
  },
  {
    title: "フードバンク・こども食堂",
    description:
      "食料の支援を無料で受けられる。全国各地に窓口がある。",
    action: "「○○市 フードバンク」で検索",
  },
  {
    title: "法テラス（法律相談）",
    description:
      "収入が一定以下の方は弁護士への相談が無料。債務整理や自己破産の相談も可能。",
    action: "0570-078374 に電話",
  },
];

const faqItems = [
  {
    question: "現金化は違法ですか？",
    answer:
      "クレジットカード現金化自体を直接罰する法律はありませんが、カード会社の規約違反であり、詐欺罪に問われる可能性もあります。また、業者側は貸金業法違反（無登録営業）で摘発されるケースが増えています。",
  },
  {
    question: "もう現金化業者を使ってしまいました。どうすればいいですか？",
    answer:
      "まず法テラス（0570-078374）や弁護士に相談してください。ヤミ金融に該当する場合、法律上は元本の返済義務すらない場合があります。一人で抱え込まず、専門家の力を借りましょう。",
  },
  {
    question: "どうしても今日中にお金が必要です",
    answer:
      "社会福祉協議会の緊急小口資金は比較的迅速に対応してもらえます。また、生活保護の申請は即日可能で、緊急の場合はその日のうちに一時金が支給されるケースもあります。まずは福祉事務所か、よりそいホットライン（0120-279-338）に電話してください。",
  },
];

export default function CashOutPage() {
  return (
    <>
      <JsonLd
        data={generateArticleJsonLd({
          title: "後払い・現金化のリスクと実態",
          description:
            "現金化サービスの危険性と安全な代替手段をまとめた総合ガイド。",
          path: "/cash-out",
          datePublished: "2025-01-01",
          dateModified: "2025-01-15",
        })}
      />
      <JsonLd data={generateFAQJsonLd(faqItems)} />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "トップ", url: "https://seikatsu-shien-navi.jp" },
          {
            name: "現金化の実態",
            url: "https://seikatsu-shien-navi.jp/cash-out",
          },
        ])}
      />

      <Breadcrumb items={[{ label: "現金化の実態" }]} />

      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
        後払い・現金化のリスクと実態
      </h1>
      <p className="mb-8 text-lg text-muted">
        「即日現金」「審査なし」——甘い言葉の裏にある危険を知ってください。
      </p>

      {/* Warning banner */}
      <div className="mb-8 rounded-lg border-2 border-danger bg-red-50 p-5">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-danger" />
          <div>
            <p className="text-lg font-bold text-danger">
              現金化サービスは使わないでください
            </p>
            <p className="mt-2 text-base text-foreground leading-relaxed">
              「クレジットカード現金化」「後払い現金化」「給料ファクタリング」
              などのサービスは、一時的にお金が手に入っても、
              結果的にさらに苦しい状況に追い込まれます。
              公的な支援制度を使えば、無利子または低利子でお金を借りたり、
              給付を受けたりできます。
            </p>
          </div>
        </div>
      </div>

      {/* Risks list */}
      <section aria-labelledby="risks-heading" className="mb-10">
        <h2
          id="risks-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          主な現金化手口とリスク
        </h2>
        <div className="space-y-4">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="rounded-lg border border-border p-4"
            >
              <div className="mb-2 flex items-center gap-3">
                <Ban className="h-5 w-5 shrink-0 text-danger" />
                <h3 className="text-lg font-bold">{risk.title}</h3>
                <span
                  className={`ml-auto shrink-0 rounded px-2 py-0.5 text-xs font-bold ${
                    risk.severity === "非常に高"
                      ? "bg-red-100 text-danger"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  危険度：{risk.severity}
                </span>
              </div>
              <p className="text-base leading-relaxed">{risk.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What happens section */}
      <section aria-labelledby="consequences-heading" className="mb-10">
        <h2
          id="consequences-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          <Scale className="h-5 w-5 text-accent" />
          現金化を利用するとどうなるか
        </h2>
        <div className="rounded-lg border border-border p-5 space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-danger">
              1
            </span>
            <p className="text-base">
              <strong>手数料で大幅に目減り</strong>
              ——5万円分の商品を買っても、受け取れるのは3〜4万円程度。実質年利は数百%になる。
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-danger">
              2
            </span>
            <p className="text-base">
              <strong>支払い義務は残る</strong>
              ——カードや後払いの請求はそのまま来る。翌月にはさらに苦しくなる。
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-danger">
              3
            </span>
            <p className="text-base">
              <strong>信用情報に傷がつく</strong>
              ——支払い遅延でブラックリストに載り、今後のローンや賃貸契約に影響する。
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-danger">
              4
            </span>
            <p className="text-base">
              <strong>犯罪に加担するリスク</strong>
              ——白ロム詐欺や口座売買に巻き込まれると、自分自身が犯罪者になる。
            </p>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section aria-labelledby="alternatives-heading" className="mb-10">
        <h2
          id="alternatives-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          <CheckCircle className="h-5 w-5 text-success" />
          安全な代替手段（公的支援制度）
        </h2>
        <p className="mb-4 text-base text-muted">
          現金化に頼らなくても、使える制度はたくさんあります。
        </p>
        <div className="space-y-4">
          {alternatives.map((alt) => (
            <div
              key={alt.title}
              className="rounded-lg border-2 border-green-200 bg-green-50 p-4"
            >
              <h3 className="text-lg font-bold text-green-800">{alt.title}</h3>
              <p className="mt-1 text-base leading-relaxed">
                {alt.description}
              </p>
              <p className="mt-2 flex items-center gap-2 text-base font-medium text-green-700">
                <ArrowRight className="h-4 w-4" />
                {alt.action}
                {alt.href && (
                  <>
                    {" "}
                    <a
                      href={alt.href}
                      className="text-accent underline font-bold"
                    >
                      詳しく見る
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mb-10">
        <h2
          id="faq-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          よくある質問
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border"
            >
              <summary className="cursor-pointer px-4 py-4 text-lg font-bold text-foreground hover:bg-gray-50 list-none flex items-center justify-between">
                <span className="flex items-start gap-2">
                  <span className="shrink-0 text-accent">Q.</span>
                  {item.question}
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-90" />
              </summary>
              <div className="border-t border-border px-4 py-4">
                <p className="text-base leading-relaxed">
                  <span className="font-bold text-accent">A.</span>{" "}
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-lg border-2 border-danger bg-red-50 p-5">
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-6 w-6 shrink-0 text-danger" />
          <div>
            <p className="text-lg font-bold text-danger">
              借金・お金の悩みは一人で抱え込まないで
            </p>
            <ul className="mt-2 space-y-2 text-base">
              <li>
                よりそいホットライン：{" "}
                <a
                  href="tel:0120-279-338"
                  className="font-bold text-danger underline"
                >
                  0120-279-338
                </a>
                （24時間・無料）
              </li>
              <li>
                多重債務相談窓口：{" "}
                <a
                  href="tel:0570-031640"
                  className="font-bold text-accent underline"
                >
                  0570-031640
                </a>
                （金融庁）
              </li>
              <li>
                法テラス：{" "}
                <a
                  href="tel:0570-078374"
                  className="font-bold text-accent underline"
                >
                  0570-078374
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
