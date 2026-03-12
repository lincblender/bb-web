import { FeaturePage } from "@/components/marketing/FeaturePage";
import { comparisonPageContent } from "@/lib/marketing/content/comparison-pages";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "BidBlender vs Tender-board-only",
  description:
    "See why tender discovery is necessary but still incomplete without buyer, capability, and decision context.",
  path: "/compare/tender-board-only",
});

export default function CompareTenderBoardOnlyPage() {
  return <FeaturePage content={comparisonPageContent.tenderBoardOnly} path="/compare/tender-board-only" />;
}
