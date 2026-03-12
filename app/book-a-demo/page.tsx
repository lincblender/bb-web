import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { commercialPageContent } from "@/lib/marketing/content/commercial-pages";

export const metadata = buildMarketingMetadata({
  title: "Book A Demo",
  description:
    "Book a BidBlender demo to walk through opportunity qualification, document review, connected data, and procurement-specific decisioning.",
  path: "/book-a-demo",
});

export default function BookDemoPage() {
  return <FeaturePage content={commercialPageContent.bookDemo} path="/book-a-demo" />;
}
