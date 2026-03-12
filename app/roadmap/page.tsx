import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { trustPageContent } from "@/lib/marketing/content/trust-pages";

export const metadata = buildMarketingMetadata({
  title: "Roadmap",
  description: "See the BidBlender direction across product depth, integrations, transparency, and interactive product storytelling.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return <FeaturePage content={trustPageContent.roadmap} path="/roadmap" />;
}
