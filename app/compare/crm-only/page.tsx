import { FeaturePage } from "@/components/marketing/FeaturePage";
import { comparisonPageContent } from "@/lib/marketing/content/comparison-pages";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "BidBlender vs CRM-only",
  description:
    "See why CRM history matters, and why procurement qualification still needs capability, reach, and opportunity evidence.",
  path: "/compare/crm-only",
});

export default function CompareCrmOnlyPage() {
  return <FeaturePage content={comparisonPageContent.crmOnly} path="/compare/crm-only" />;
}
