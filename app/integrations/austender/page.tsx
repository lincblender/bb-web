import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { integrationPageContent } from "@/lib/marketing/content/integration-pages";

export const metadata = buildMarketingMetadata({
  title: "AusTender Integration",
  description:
    "See how AusTender can contribute Commonwealth procurement opportunity signals to BidBlender.",
  path: "/integrations/austender",
});

export default function AusTenderIntegrationPage() {
  return <FeaturePage content={integrationPageContent.austender} path="/integrations/austender" />;
}
