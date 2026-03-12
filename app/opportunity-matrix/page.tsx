import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Opportunity Matrix",
  description:
    "Understand how BidBlender uses a visual matrix to compare fit, access, and decision posture across live opportunities.",
  path: "/opportunity-matrix",
});

export default function OpportunityMatrixPage() {
  return <FeaturePage content={productPageContent.opportunityMatrix} path="/opportunity-matrix" />;
}
