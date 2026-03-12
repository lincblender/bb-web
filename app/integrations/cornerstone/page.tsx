import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { integrationPageContent } from "@/lib/marketing/content/integration-pages";

export const metadata = buildMarketingMetadata({
  title: "Cornerstone Integration",
  description:
    "See how Cornerstone can contribute learning, certification, and delivery-readiness evidence to BidBlender.",
  path: "/integrations/cornerstone",
});

export default function CornerstoneIntegrationPage() {
  return <FeaturePage content={integrationPageContent.cornerstone} path="/integrations/cornerstone" />;
}
