import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { commercialPageContent } from "@/lib/marketing/content/commercial-pages";

export const metadata = buildMarketingMetadata({
  title: "Resources",
  description:
    "Read tender-focused BidBlender resources on bid qualification, opportunity scoring, network strength, and connected-data strategy.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <FeaturePage content={commercialPageContent.resources} path="/resources" />;
}
