import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { trustPageContent } from "@/lib/marketing/content/trust-pages";

export const metadata = buildMarketingMetadata({
  title: "Methodology",
  description: "Understand the BidBlender reasoning model across four paradigms, decision dimensions, and traffic-light outcomes.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return <FeaturePage content={trustPageContent.methodology} path="/methodology" />;
}
