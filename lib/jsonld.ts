export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "生活支援ナビ",
    url: "https://seikatsu-shien-navi.jp",
    description:
      "生活保護・公的支援制度の情報を網羅。困ったときに頼れる情報ハブサイト。",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://seikatsu-shien-navi.jp/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://seikatsu-shien-navi.jp${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: "生活支援ナビ編集部",
    },
    publisher: {
      "@type": "Organization",
      name: "生活支援ナビ",
    },
  };
}

export function generateFAQJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
