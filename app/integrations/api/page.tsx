import { StructuredInfoPage } from "@/components/marketing/StructuredInfoPage";
import { developerPageContent } from "@/lib/marketing/content/developer";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "API",
  description:
    "BidBlender API direction for customers who want to push or pull opportunity, capability, relationship, and decision data into their own systems.",
  path: "/integrations/api",
});

export default function ApiPage() {
  return <StructuredInfoPage content={developerPageContent.api} path="/integrations/api" />;
}
