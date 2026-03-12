const BASE_URL = "https://bidblender.com.au";
const ORG_NAME = "BidBlender";

function absoluteUrl(path: string) {
  return new URL(path, BASE_URL).toString();
}

function breadcrumbLabelFromSegment(segment: string) {
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function buildBreadcrumbSchema(title: string, path: string) {
  const segments = path.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
    ...segments.map((segment, index) => {
      const itemPath = `/${segments.slice(0, index + 1).join("/")}`;
      const isLast = index === segments.length - 1;

      return {
        "@type": "ListItem",
        position: index + 2,
        name: isLast ? title : breadcrumbLabelFromSegment(segment),
        item: absoluteUrl(itemPath),
      };
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function buildFaqSchema(
  items: readonly { question: string; answer: string }[],
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

export function buildArticleSchema(args: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    mainEntityOfPage: absoluteUrl(args.path),
    author: {
      "@type": "Organization",
      name: ORG_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: BASE_URL,
    },
  };
}

export function buildSoftwareApplicationSchema(args: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: args.title,
    description: args.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl(args.path),
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: BASE_URL,
    },
  };
}

export function buildProductSchema(args: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: args.title,
    description: args.description,
    brand: {
      "@type": "Brand",
      name: ORG_NAME,
    },
    category: "Opportunity intelligence platform",
    url: absoluteUrl(args.path),
  };
}
