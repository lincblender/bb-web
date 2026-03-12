import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { commercialPageContent } from "@/lib/marketing/content/commercial-pages";

export const metadata = buildMarketingMetadata({
  title: "Contact",
  description:
    "Contact BidBlender for demos, partnerships, integrations, and procurement-specific opportunity intelligence conversations.",
  path: "/contact",
});

export default function ContactPage() {
  return <FeaturePage content={commercialPageContent.contact} path="/contact" />;
}
