import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Document Review",
  description:
    "Learn how BidBlender reviews uploaded tender documents and compares them against your organisation profile, prior bids, and current decision context.",
  path: "/document-review",
});

export default function DocumentReviewPage() {
  return <FeaturePage content={productPageContent.documentReview} path="/document-review" />;
}
