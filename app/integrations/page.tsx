import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { integrationPageContent } from "@/lib/marketing/content/integration-pages";

export const metadata = buildMarketingMetadata({
  title: "Integrations",
  description:
    "Explore the systems BidBlender connects to for CRM history, capability evidence, network reach, and tender opportunity data.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  return <FeaturePage content={integrationPageContent.hub} path="/integrations" />;
}
