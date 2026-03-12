import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "How It Works",
  description:
    "See how BidBlender combines connected evidence, opportunity review, document analysis, and structured decisioning to help bid teams qualify pursuit earlier.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return <FeaturePage content={productPageContent.howItWorks} path="/how-it-works" />;
}
