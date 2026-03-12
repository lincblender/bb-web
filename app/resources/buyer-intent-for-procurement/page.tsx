import { ArticlePage } from "@/components/marketing/ArticlePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { resourceArticles } from "@/lib/marketing/content/resource-articles";

export const metadata = buildMarketingMetadata({
  title: "Buyer Intent For Procurement",
  description: "Learn why buyer intent in procurement differs from generic sales intent and how BidBlender approaches it.",
  path: "/resources/buyer-intent-for-procurement",
});

export default function BuyerIntentForProcurementArticlePage() {
  return <ArticlePage content={resourceArticles.buyerIntentForProcurement} path="/resources/buyer-intent-for-procurement" description="Learn why buyer intent in procurement differs from generic sales intent and how BidBlender approaches it." />;
}
