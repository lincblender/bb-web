import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Network Intelligence",
  description:
    "Understand how BidBlender uses relationship reach, decision-maker proximity, and network evidence to improve procurement opportunity qualification.",
  path: "/network-intelligence",
});

export default function NetworkIntelligencePage() {
  return <FeaturePage content={productPageContent.networkIntelligence} path="/network-intelligence" />;
}
