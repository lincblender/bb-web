import { FeaturePage } from "@/components/marketing/FeaturePage";
import { productPageContent } from "@/lib/marketing/content/product-pages";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "Four Evidence Pillars",
  description:
    "Learn how BidBlender blends History, Capability, Reach, and Opportunity into one procurement-specific qualification model.",
  path: "/four-evidence-pillars",
});

export default function FourEvidencePillarsPage() {
  return <FeaturePage content={productPageContent.fourEvidencePillars} path="/four-evidence-pillars" />;
}
