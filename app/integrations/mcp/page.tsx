import { IntegrationSpotlightPage } from "@/components/marketing/IntegrationSpotlightPage";
import { integrationSpotlights } from "@/lib/marketing/content/integration-spotlights";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "MCP",
  description:
    "See how MCP helps BidBlender reach internal tools, knowledge sources, and custom resources during qualification workflows.",
  path: "/integrations/mcp",
});

export default function McpPage() {
  return <IntegrationSpotlightPage content={integrationSpotlights.mcp} path="/integrations/mcp" />;
}
