import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { useCasePageContent } from "@/lib/marketing/content/use-case-pages";

export const metadata = buildMarketingMetadata({
  title: "For Systems Integrators",
  description: "See how BidBlender helps systems integrators qualify complex pursuits across broad capability and partner footprints.",
  path: "/for-systems-integrators",
});

export default function ForSystemsIntegratorsPage() {
  return <FeaturePage content={useCasePageContent.systemsIntegrators} path="/for-systems-integrators" />;
}
