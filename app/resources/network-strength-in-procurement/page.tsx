import { ArticlePage } from "@/components/marketing/ArticlePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { resourceArticles } from "@/lib/marketing/content/resource-articles";

export const metadata = buildMarketingMetadata({
  title: "Network Strength In Procurement",
  description: "Learn how network strength should be assessed in procurement without confusing access with guaranteed influence.",
  path: "/resources/network-strength-in-procurement",
});

export default function NetworkStrengthArticlePage() {
  return <ArticlePage content={resourceArticles.networkStrength} path="/resources/network-strength-in-procurement" description="Learn how network strength should be assessed in procurement without confusing access with guaranteed influence." />;
}
