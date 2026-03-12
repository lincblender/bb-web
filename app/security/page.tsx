import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { trustPageContent } from "@/lib/marketing/content/trust-pages";

export const metadata = buildMarketingMetadata({
  title: "Security",
  description: "Understand how BidBlender approaches data protection, operational security, and customer trust.",
  path: "/security",
});

export default function SecurityPage() {
  return <FeaturePage content={trustPageContent.security} path="/security" />;
}
