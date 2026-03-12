import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { productPageContent } from "@/lib/marketing/content/product-pages";

export const metadata = buildMarketingMetadata({
  title: "Organisation Profile",
  description:
    "See how BidBlender models capability, case studies, certifications, and strategic preferences through the organisation profile.",
  path: "/organisation-profile",
});

export default function OrganisationProfilePage() {
  return <FeaturePage content={productPageContent.organisationProfile} path="/organisation-profile" />;
}
