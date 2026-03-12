import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Opportunity Explorer",
  description:
    "See how BidBlender helps teams filter, rank, and review live opportunities through a dedicated explorer workflow.",
  path: "/opportunity-explorer",
});

export default function OpportunityExplorerPage() {
  return <FeaturePage content={productPageContent.opportunityExplorer} path="/opportunity-explorer" />;
}
