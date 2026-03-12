import { ArticlePage } from "@/components/marketing/ArticlePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { resourceArticles } from "@/lib/marketing/content/resource-articles";

export const metadata = buildMarketingMetadata({
  title: "Bid / No Bid Framework",
  description: "A practical guide to using a bid/no-bid framework to improve procurement qualification and reduce wasted effort.",
  path: "/resources/bid-no-bid-framework",
});

export default function BidNoBidFrameworkArticlePage() {
  return <ArticlePage content={resourceArticles.bidNoBidFramework} path="/resources/bid-no-bid-framework" description="A practical guide to using a bid/no-bid framework to improve procurement qualification and reduce wasted effort." />;
}
