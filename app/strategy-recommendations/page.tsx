import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Strategy Recommendations",
  description:
    "See how BidBlender translates opportunity evidence into pursuit posture, blockers, movers, and recommended next actions.",
  path: "/strategy-recommendations",
});

export default function StrategyRecommendationsPage() {
  return <FeaturePage content={productPageContent.strategyRecommendations} path="/strategy-recommendations" />;
}
