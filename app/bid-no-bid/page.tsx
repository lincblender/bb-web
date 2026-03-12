import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Bid / No Bid Decisioning",
  description:
    "Understand how BidBlender frames bid qualification using a bid, research, and no-bid lens backed by structured evidence and next-step guidance.",
  path: "/bid-no-bid",
});

export default function BidNoBidPage() {
  return <FeaturePage content={productPageContent.bidNoBid} path="/bid-no-bid" />;
}
