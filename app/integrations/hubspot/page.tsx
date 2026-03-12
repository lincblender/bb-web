import { IntegrationSpotlightPage } from "@/components/marketing/IntegrationSpotlightPage";
import { integrationSpotlights } from "@/lib/marketing/content/integration-spotlights";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "HubSpot Integration",
  description:
    "See how HubSpot gives BidBlender buyer memory, prior pursuit context, and stronger commercial history for bid qualification.",
  path: "/integrations/hubspot",
});

export default function HubSpotIntegrationPage() {
  return <IntegrationSpotlightPage content={integrationSpotlights.hubspot} path="/integrations/hubspot" />;
}
