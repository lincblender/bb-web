import type { Metadata } from "next";

const SITE_NAME = "BidBlender";
const BASE_URL = "https://bidblender.com.au";

interface MarketingMetadataInput {
  title: string;
  description: string;
  path?: string;
}

export function buildMarketingMetadata({
  title,
  description,
  path = "/",
}: MarketingMetadataInput): Metadata {
  const url = new URL(path, BASE_URL).toString();
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
