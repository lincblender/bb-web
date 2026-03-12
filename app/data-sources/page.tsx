import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { trustPageContent } from "@/lib/marketing/content/trust-pages";

export const metadata = buildMarketingMetadata({
  title: "Data Sources",
  description: "See how BidBlender uses history, capability, reach, and opportunity data sources to support procurement decisions.",
  path: "/data-sources",
});

export default function DataSourcesPage() {
  return <FeaturePage content={trustPageContent.dataSources} path="/data-sources" />;
}
