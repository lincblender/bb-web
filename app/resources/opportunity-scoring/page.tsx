import { ArticlePage } from "@/components/marketing/ArticlePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { resourceArticles } from "@/lib/marketing/content/resource-articles";

export const metadata = buildMarketingMetadata({
  title: "Opportunity Scoring",
  description: "Learn how a procurement-specific opportunity-scoring model should support prioritisation, posture, and action.",
  path: "/resources/opportunity-scoring",
});

export default function OpportunityScoringArticlePage() {
  return <ArticlePage content={resourceArticles.opportunityScoring} path="/resources/opportunity-scoring" description="Learn how a procurement-specific opportunity-scoring model should support prioritisation, posture, and action." />;
}
