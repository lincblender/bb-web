import { StructuredInfoPage } from "@/components/marketing/StructuredInfoPage";
import { developerPageContent } from "@/lib/marketing/content/developer";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "Zapier",
  description:
    "Connect BidBlender to thousands of apps via Zapier automation for opportunity intelligence workflows.",
  path: "/integrations/zapier",
});

export default function ZapierPage() {
  return <StructuredInfoPage content={developerPageContent.zapier} path="/integrations/zapier" />;
}
