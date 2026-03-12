import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { integrationPageContent } from "@/lib/marketing/content/integration-pages";

export const metadata = buildMarketingMetadata({
  title: "Tenderlink Integration",
  description:
    "See how Tenderlink can contribute opportunity discovery and tender monitoring to BidBlender.",
  path: "/integrations/tenderlink",
});

export default function TenderlinkIntegrationPage() {
  return <FeaturePage content={integrationPageContent.tenderlink} path="/integrations/tenderlink" />;
}
