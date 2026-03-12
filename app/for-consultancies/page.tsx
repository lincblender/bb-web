import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { useCasePageContent } from "@/lib/marketing/content/use-case-pages";

export const metadata = buildMarketingMetadata({
  title: "For Consultancies",
  description: "See how BidBlender helps consultancies qualify work more selectively and use their evidence more effectively.",
  path: "/for-consultancies",
});

export default function ForConsultanciesPage() {
  return <FeaturePage content={useCasePageContent.consultancies} path="/for-consultancies" />;
}
