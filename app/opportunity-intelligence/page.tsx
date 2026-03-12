import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Opportunity Intelligence",
  description:
    "See how BidBlender blends History, Capability, Reach, and Opportunity to help bid teams qualify live work before expensive pursuit effort starts.",
  path: "/opportunity-intelligence",
});

export default function OpportunityIntelligencePage() {
  return <FeaturePage content={productPageContent.opportunityIntelligence} path="/opportunity-intelligence" />;
}
