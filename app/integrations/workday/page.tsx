import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { integrationPageContent } from "@/lib/marketing/content/integration-pages";

export const metadata = buildMarketingMetadata({
  title: "Workday Integration",
  description:
    "See how Workday can contribute capability and workforce-readiness evidence to BidBlender.",
  path: "/integrations/workday",
});

export default function WorkdayIntegrationPage() {
  return <FeaturePage content={integrationPageContent.workday} path="/integrations/workday" />;
}
