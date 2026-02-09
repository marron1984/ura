import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  HelpCircle,
  MapPin,
  FileText,
  ArrowRight,
  AlertTriangle,
  Phone,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import {
  generateArticleJsonLd,
  generateFAQJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "生活保護ガイド｜申請方法・受給条件・Q&A",
  description:
    "生活保護の申請方法を分かりやすく解説。受給条件、必要書類、自治体別の窓口情報、よくある質問をまとめました。誰でも申請する権利があります。",
  openGraph: {
    title: "生活保護ガイド｜申請方法・受給条件・Q&A",
    description:
      "生活保護の申請方法を分かりやすく解説。受給条件、必要書類、窓口情報をまとめました。",
  },
};

const faqItems = [
  {
    question: "生活保護は誰でも申請できますか？",
    answer:
      "はい。日本国内に住んでいる方であれば、誰でも申請する権利があります。住所がなくても、働いていても、車を持っていても申請は可能です。窓口で「申請できない」と言われても、「申請します」と明確に伝えてください。",
  },
  {
    question: "申請に必要なものは何ですか？",
    answer:
      "最低限必要なのは「生活保護申請書」だけです。身分証明書や通帳がなくても申請はできます。窓口で申請書をもらえない場合は、自分で書いた書面でも有効です。",
  },
  {
    question: "持ち家があっても生活保護は受けられますか？",
    answer:
      "住んでいる家であれば、原則として保有が認められます。資産価値が著しく高い場合を除き、すぐに売却を求められることは少ないです。",
  },
  {
    question: "車を持っていると受けられませんか？",
    answer:
      "一律にダメということはありません。通勤や通院に必要な場合、公共交通機関がない地域に住んでいる場合などは保有が認められるケースがあります。",
  },
  {
    question: "家族に連絡（扶養照会）されますか？",
    answer:
      "2021年の通知改正により、DVや虐待がある場合、20年以上音信不通の場合などは扶養照会を行わないことになりました。また、照会があっても「援助できない」と回答すれば問題ありません。",
  },
  {
    question: "外国人でも申請できますか？",
    answer:
      "永住者、定住者、日本人の配偶者等など、在留資格によっては準用という形で生活保護を受けることができます。まずは窓口に相談してください。",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "福祉事務所に行く",
    description:
      "お住まいの市区町村の福祉事務所（市役所・区役所の生活保護担当課）に行きます。住所がない場合は、今いる場所の最寄りの福祉事務所で申請できます。",
  },
  {
    step: 2,
    title: "「生活保護を申請します」と伝える",
    description:
      "窓口で明確に申請の意思を伝えてください。「相談」ではなく「申請」と言うことが重要です。口頭でも申請は成立します。",
  },
  {
    step: 3,
    title: "申請書を提出する",
    description:
      "申請書に氏名・住所・収入・資産などを記入して提出します。分からない箇所は空欄でも構いません。",
  },
  {
    step: 4,
    title: "調査（原則14日以内）",
    description:
      "ケースワーカーが家庭訪問や資産調査を行います。銀行口座の調査なども行われますが、これは法律で定められた手続きです。",
  },
  {
    step: 5,
    title: "決定通知",
    description:
      "申請から原則14日以内（最長30日）に結果が通知されます。却下された場合は、審査請求（不服申立て）ができます。",
  },
];

const municipalities = [
  {
    region: "東京都",
    examples: [
      "新宿区福祉事務所",
      "豊島区生活福祉課",
      "足立区くらしとしごとの相談センター",
    ],
  },
  {
    region: "大阪府",
    examples: [
      "大阪市各区保健福祉センター",
      "堺市生活援護課",
      "東大阪市生活福祉室",
    ],
  },
  {
    region: "北海道",
    examples: [
      "札幌市各区保護課",
      "旭川市生活支援課",
      "函館市生活支援第1課・第2課",
    ],
  },
  {
    region: "福岡県",
    examples: [
      "福岡市各区保護課",
      "北九州市各区保護課",
      "久留米市生活支援課",
    ],
  },
];

export default function SeikatsuHogoPage() {
  return (
    <>
      <JsonLd
        data={generateArticleJsonLd({
          title: "生活保護ガイド｜申請方法・受給条件・Q&A",
          description:
            "生活保護の申請方法を分かりやすく解説。受給条件、必要書類、自治体別の窓口情報をまとめました。",
          path: "/seikatsu-hogo",
          datePublished: "2025-01-01",
          dateModified: "2025-01-15",
        })}
      />
      <JsonLd data={generateFAQJsonLd(faqItems)} />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "トップ", url: "https://seikatsu-shien-navi.jp" },
          {
            name: "生活保護ガイド",
            url: "https://seikatsu-shien-navi.jp/seikatsu-hogo",
          },
        ])}
      />

      <Breadcrumb items={[{ label: "生活保護ガイド" }]} />

      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
        生活保護ガイド
      </h1>
      <p className="mb-8 text-lg text-muted">
        生活保護は「最後のセーフティネット」です。誰でも申請する権利があります。
      </p>

      {/* Key message */}
      <div className="mb-8 rounded-lg border-2 border-accent bg-accent-light p-5">
        <p className="text-lg font-bold text-accent">
          「生活保護は恥ずかしい」と思わないでください
        </p>
        <p className="mt-2 text-base text-foreground">
          生活保護は憲法25条で保障された国民の権利です。
          困ったときに使うための制度であり、利用することは全く恥ずかしいことではありません。
        </p>
      </div>

      {/* Application steps */}
      <section aria-labelledby="steps-heading" className="mb-10">
        <h2
          id="steps-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          <FileText className="h-5 w-5 text-accent" />
          申請の流れ（5ステップ）
        </h2>
        <ol className="space-y-4">
          {applicationSteps.map((item) => (
            <li
              key={item.step}
              className="rounded-lg border border-border p-4"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="mt-1 text-base text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Rejection warning */}
      <div className="mb-10 rounded-lg border-2 border-warning bg-amber-50 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <p className="text-lg font-bold text-amber-800">
              窓口で断られた場合（水際作戦）
            </p>
            <p className="mt-2 text-base text-foreground leading-relaxed">
              「まだ働ける」「親族に頼れ」などと言われて申請を受け付けてもらえないケースがあります。
              これは違法な対応です。以下の対策を取ってください：
            </p>
            <ul className="mt-3 space-y-2 text-base">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span>
                  「申請します」と明確に意思表示する（書面で渡すとより確実）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span>
                  やりとりを録音する（スマホの録音アプリでOK）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span>
                  支援団体に同行を依頼する（一般社団法人つくろい東京ファンド、
                  NPO法人もやいなど）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span>
                  法テラス（
                  <a
                    href="tel:0570-078374"
                    className="font-bold text-accent underline"
                  >
                    0570-078374
                  </a>
                  ）に相談する
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mb-10">
        <h2
          id="faq-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          <HelpCircle className="h-5 w-5 text-accent" />
          よくある質問（Q&A）
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

      {/* Municipality info */}
      <section aria-labelledby="municipality-heading" className="mb-10">
        <h2
          id="municipality-heading"
          className="mb-4 flex items-center gap-2 text-xl font-bold"
        >
          <MapPin className="h-5 w-5 text-accent" />
          自治体別の窓口（一部抜粋）
        </h2>
        <p className="mb-4 text-base text-muted">
          お住まいの市区町村の「福祉事務所」が窓口です。
          「○○市 福祉事務所」「○○区 生活保護」で検索してください。
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {municipalities.map((area) => (
            <div
              key={area.region}
              className="rounded-lg border border-border p-4"
            >
              <p className="mb-2 text-lg font-bold">{area.region}</p>
              <ul className="space-y-1 text-base">
                {area.examples.map((name) => (
                  <li key={name} className="flex items-start gap-2">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-muted" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-lg border-2 border-danger bg-red-50 p-5">
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-6 w-6 shrink-0 text-danger" />
          <div>
            <p className="text-lg font-bold text-danger">
              困ったらまず電話を
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
                法テラス：{" "}
                <a
                  href="tel:0570-078374"
                  className="font-bold text-accent underline"
                >
                  0570-078374
                </a>
                （平日9:00-21:00 / 土曜9:00-17:00）
              </li>
              <li>
                生活困窮者自立支援窓口：お住まいの市区町村に設置されています
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
