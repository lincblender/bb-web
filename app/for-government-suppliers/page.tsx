import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { useCasePageContent } from "@/lib/marketing/content/use-case-pages";

export const metadata = buildMarketingMetadata({
  title: "For Government Suppliers",
  description: "See how BidBlender helps public-sector suppliers monitor and qualify procurement opportunities more effectively.",
  path: "/for-government-suppliers",
});

export default function ForGovernmentSuppliersPage() {
  return <FeaturePage content={useCasePageContent.governmentSuppliers} path="/for-government-suppliers" />;
}
