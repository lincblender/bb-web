import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { integrationPageContent } from "@/lib/marketing/content/integration-pages";

export const metadata = buildMarketingMetadata({
  title: "Salesforce Integration",
  description:
    "See how Salesforce can contribute CRM history, account context, and prior pursuit memory to BidBlender.",
  path: "/integrations/salesforce",
});

export default function SalesforceIntegrationPage() {
  return <FeaturePage content={integrationPageContent.salesforce} path="/integrations/salesforce" />;
}
