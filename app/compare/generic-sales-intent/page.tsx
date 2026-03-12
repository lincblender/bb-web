import { FeaturePage } from "@/components/marketing/FeaturePage";
import { comparisonPageContent } from "@/lib/marketing/content/comparison-pages";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "BidBlender vs Generic Sales Intent",
  description:
    "See why procurement-specific opportunity intelligence requires a different model from broad sales-intent tooling.",
  path: "/compare/generic-sales-intent",
});

export default function CompareGenericSalesIntentPage() {
  return <FeaturePage content={comparisonPageContent.genericSalesIntent} path="/compare/generic-sales-intent" />;
}
