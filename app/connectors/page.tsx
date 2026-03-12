import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Connectors",
  description:
    "See how BidBlender uses connected systems across History, Capability, Reach, and Opportunity to improve bid qualification and opportunity intelligence.",
  path: "/connectors",
});

export default function ConnectorsMarketingPage() {
  return <FeaturePage content={productPageContent.connectors} path="/connectors" />;
}
