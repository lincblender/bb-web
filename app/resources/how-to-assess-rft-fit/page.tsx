import { ArticlePage } from "@/components/marketing/ArticlePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { resourceArticles } from "@/lib/marketing/content/resource-articles";

export const metadata = buildMarketingMetadata({
  title: "How To Assess RFT Fit",
  description: "Learn how to assess RFT fit using delivery evidence, buyer context, and procurement-specific qualification logic.",
  path: "/resources/how-to-assess-rft-fit",
});

export default function AssessRftFitArticlePage() {
  return <ArticlePage content={resourceArticles.assessRftFit} path="/resources/how-to-assess-rft-fit" description="Learn how to assess RFT fit using delivery evidence, buyer context, and procurement-specific qualification logic." />;
}
