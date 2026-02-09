import type { Metadata } from "next";
import {
  CheckCircle,
  HelpCircle,
  MapPin,
  FileText,
  ChevronDown,
  AlertTriangle,
  Phone,
  Heart,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import {
  generateArticleJsonLd,
  generateFAQJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/jsonld";
import {
  Reveal,
  SplitText,
  Tilt3D,
  CountUp,
  MaskReveal,
  StaggerChildren,
  GlowCard,
} from "@/components/Motion";

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
  { step: 1, title: "福祉事務所に行く", description: "お住まいの市区町村の福祉事務所（市役所・区役所の生活保護担当課）に行きます。住所がない場合は、今いる場所の最寄りの福祉事務所で申請できます。" },
  { step: 2, title: "「生活保護を申請します」と伝える", description: "窓口で明確に申請の意思を伝えてください。「相談」ではなく「申請」と言うことが重要です。口頭でも申請は成立します。" },
  { step: 3, title: "申請書を提出する", description: "申請書に氏名・住所・収入・資産などを記入して提出します。分からない箇所は空欄でも構いません。" },
  { step: 4, title: "調査（原則14日以内）", description: "ケースワーカーが家庭訪問や資産調査を行います。銀行口座の調査なども行われますが、これは法律で定められた手続きです。" },
  { step: 5, title: "決定通知", description: "申請から原則14日以内（最長30日）に結果が通知されます。却下された場合は、審査請求（不服申立て）ができます。" },
];

const municipalities = [
  { region: "東京都", examples: ["新宿区福祉事務所", "豊島区生活福祉課", "足立区くらしとしごとの相談センター"] },
  { region: "大阪府", examples: ["大阪市各区保健福祉センター", "堺市生活援護課", "東大阪市生活福祉室"] },
  { region: "北海道", examples: ["札幌市各区保護課", "旭川市生活支援課", "函館市生活支援第1課・第2課"] },
  { region: "福岡県", examples: ["福岡市各区保護課", "北九州市各区保護課", "久留米市生活支援課"] },
];

export default function SeikatsuHogoPage() {
  return (
    <>
      <JsonLd data={generateArticleJsonLd({ title: "生活保護ガイド｜申請方法・受給条件・Q&A", description: "生活保護の申請方法を分かりやすく解説。受給条件、必要書類、自治体別の窓口情報をまとめました。", path: "/seikatsu-hogo", datePublished: "2025-01-01", dateModified: "2025-01-15" })} />
      <JsonLd data={generateFAQJsonLd(faqItems)} />
      <JsonLd data={generateBreadcrumbJsonLd([{ name: "トップ", url: "https://seikatsu-shien-navi.jp" }, { name: "生活保護ガイド", url: "https://seikatsu-shien-navi.jp/seikatsu-hogo" }])} />

      <Breadcrumb items={[{ label: "生活保護ガイド" }]} />

      <MaskReveal direction="left">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-black tracking-tight sm:text-3xl">
            <SplitText text="生活保護ガイド" stagger={50} className="text-gradient" />
          </h1>
          <p className="text-base text-fg-secondary">
            生活保護は「最後のセーフティネット」です。誰でも申請する権利があります。
          </p>
        </div>
      </MaskReveal>

      {/* Key stats */}
      <StaggerChildren className="mb-10 grid grid-cols-2 gap-3" stagger={150}>
        <GlowCard className="p-4 text-center">
          <p className="text-3xl font-black text-gradient">
            <CountUp end={14} suffix="日" />
          </p>
          <p className="mt-1 text-xs text-fg-secondary">原則の審査期間</p>
        </GlowCard>
        <GlowCard className="p-4 text-center">
          <p className="text-3xl font-black text-gradient">
            <CountUp end={0} suffix="円" />
          </p>
          <p className="mt-1 text-xs text-fg-secondary">申請にかかる費用</p>
        </GlowCard>
      </StaggerChildren>

      {/* Key message */}
      <Reveal>
        <Tilt3D intensity={6}>
          <div className="card-glow mb-10 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-bold text-fg">「生活保護は恥ずかしい」と思わないでください</p>
                <p className="mt-1 text-sm text-fg-secondary leading-relaxed">
                  生活保護は憲法25条で保障された国民の権利です。困ったときに使うための制度であり、利用することは全く恥ずかしいことではありません。
                </p>
              </div>
            </div>
          </div>
        </Tilt3D>
      </Reveal>

      {/* Application steps — timeline */}
      <section aria-labelledby="steps-heading" className="mb-14">
        <Reveal>
          <h2 id="steps-heading" className="mb-5 flex items-center gap-2 text-lg font-extrabold text-fg">
            <FileText className="h-5 w-5 text-accent" />
            <SplitText text="申請の流れ（5ステップ）" stagger={30} />
          </h2>
        </Reveal>
        <ol className="relative ml-4 space-y-6 border-l-2 border-accent/20 pl-6">
          {applicationSteps.map((item, i) => (
            <Reveal key={item.step} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
              <li className="relative">
                <span className="absolute -left-[33px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-xs font-bold text-white shadow-lg">
                  {item.step}
                </span>
                <div className="card spring-hover p-4">
                  <p className="text-base font-bold text-fg">{item.title}</p>
                  <p className="mt-1 text-sm text-fg-secondary leading-relaxed">{item.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Rejection warning */}
      <MaskReveal direction="up">
        <div className="mb-14 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 hero-shimmer-line relative overflow-hidden">
            <p className="relative z-10 flex items-center gap-2 text-base font-bold text-white">
              <AlertTriangle className="h-5 w-5 shake-hover" />
              窓口で断られた場合（水際作戦）
            </p>
          </div>
          <div className="p-5">
            <p className="mb-4 text-sm text-fg-secondary leading-relaxed">
              「まだ働ける」「親族に頼れ」などと言われて申請を受け付けてもらえないケースがあります。これは違法な対応です。以下の対策を取ってください：
            </p>
            <ul className="space-y-3">
              {["「申請します」と明確に意思表示する（書面で渡すとより確実）", "やりとりを録音する（スマホの録音アプリでOK）", "支援団体に同行を依頼する（つくろい東京ファンド、NPO法人もやいなど）"].map((text, i) => (
                <Reveal key={i} delay={i * 80} direction="left">
                  <li className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-fg">{text}</span>
                  </li>
                </Reveal>
              ))}
              <Reveal delay={240} direction="left">
                <li className="flex items-start gap-2.5 text-sm">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-fg">
                    法テラス（<a href="tel:0570-078374" className="font-bold text-accent underline">0570-078374</a>）に相談する
                  </span>
                </li>
              </Reveal>
            </ul>
          </div>
        </div>
      </MaskReveal>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mb-14">
        <Reveal>
          <h2 id="faq-heading" className="mb-5 flex items-center gap-2 text-lg font-extrabold text-fg">
            <HelpCircle className="h-5 w-5 text-accent" />
            よくある質問（Q&A）
          </h2>
        </Reveal>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 70}>
              <details className="group card overflow-hidden hover-expand">
                <summary className="flex cursor-pointer items-center gap-3 px-4 py-4 text-sm font-bold text-fg transition-colors hover:bg-accent-light [&::-webkit-details-marker]:hidden list-none">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-light text-xs font-extrabold text-accent">Q</span>
                  <span className="flex-1">{item.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-fg-secondary transition-transform duration-500 group-open:rotate-180" />
                </summary>
                <div className="border-t border-border px-4 py-4">
                  <div className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs font-extrabold text-emerald-600">A</span>
                    <p className="text-sm text-fg-secondary leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Municipality info */}
      <section aria-labelledby="municipality-heading" className="mb-14">
        <Reveal>
          <h2 id="municipality-heading" className="mb-4 flex items-center gap-2 text-lg font-extrabold text-fg">
            <MapPin className="h-5 w-5 text-accent" />
            自治体別の窓口
          </h2>
          <p className="mb-5 text-sm text-fg-secondary">
            お住まいの市区町村の「福祉事務所」が窓口です。「○○市 福祉事務所」で検索してください。
          </p>
        </Reveal>
        <StaggerChildren className="grid gap-3 sm:grid-cols-2" stagger={100}>
          {municipalities.map((area) => (
            <GlowCard key={area.region} className="p-4 spring-hover">
              <p className="mb-2 flex items-center gap-2 text-base font-bold text-fg">
                <MapPin className="h-4 w-4 text-accent" />
                {area.region}
              </p>
              <ul className="space-y-1.5">
                {area.examples.map((name) => (
                  <li key={name} className="text-sm text-fg-secondary pl-6">{name}</li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </StaggerChildren>
      </section>

      {/* CTA */}
      <MaskReveal direction="up">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 p-6 text-white hero-shimmer-line relative">
          <div className="relative z-10 flex items-start gap-3">
            <Phone className="mt-0.5 h-6 w-6 shrink-0" />
            <div>
              <p className="text-lg font-bold">困ったらまず電話を</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>よりそいホットライン：<a href="tel:0120-279-338" className="font-bold text-white underline">0120-279-338</a>（24時間・無料）</li>
                <li>法テラス：<a href="tel:0570-078374" className="font-bold text-white underline">0570-078374</a>（平日9:00-21:00 / 土曜9:00-17:00）</li>
                <li>生活困窮者自立支援窓口：お住まいの市区町村に設置</li>
              </ul>
            </div>
          </div>
        </div>
      </MaskReveal>
    </>
  );
}
