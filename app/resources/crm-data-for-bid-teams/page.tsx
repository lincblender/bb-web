import { ArticlePage } from "@/components/marketing/ArticlePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { resourceArticles } from "@/lib/marketing/content/resource-articles";

export const metadata = buildMarketingMetadata({
  title: "CRM Data For Bid Teams",
  description: "Learn how bid teams can use CRM data as a memory layer inside a stronger procurement qualification workflow.",
  path: "/resources/crm-data-for-bid-teams",
});

export default function CrmDataForBidTeamsArticlePage() {
  return <ArticlePage content={resourceArticles.crmDataForBidTeams} path="/resources/crm-data-for-bid-teams" description="Learn how bid teams can use CRM data as a memory layer inside a stronger procurement qualification workflow." />;
}
