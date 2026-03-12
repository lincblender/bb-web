import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { integrationPageContent } from "@/lib/marketing/content/integration-pages";

export const metadata = buildMarketingMetadata({
  title: "LinkedIn Integration",
  description:
    "See how LinkedIn can contribute network reach, buyer adjacency, and relationship context to BidBlender.",
  path: "/integrations/linkedin",
});

export default function LinkedInIntegrationPage() {
  return <FeaturePage content={integrationPageContent.linkedin} path="/integrations/linkedin" />;
}
