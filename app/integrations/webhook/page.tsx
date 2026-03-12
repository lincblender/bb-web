import { StructuredInfoPage } from "@/components/marketing/StructuredInfoPage";
import { developerPageContent } from "@/lib/marketing/content/developer";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "Webhooks",
  description:
    "Webhook direction for BidBlender so customers can react to opportunity, connector, and decision changes in real time.",
  path: "/integrations/webhook",
});

export default function WebhookPage() {
  return <StructuredInfoPage content={developerPageContent.webhook} path="/integrations/webhook" />;
}
