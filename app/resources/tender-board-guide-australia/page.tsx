import { ArticlePage } from "@/components/marketing/ArticlePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { resourceArticles } from "@/lib/marketing/content/resource-articles";

export const metadata = buildMarketingMetadata({
  title: "Tender Board Guide Australia",
  description: "A practical guide to using Australian tender-board sources inside a broader qualification workflow.",
  path: "/resources/tender-board-guide-australia",
});

export default function TenderBoardGuideAustraliaArticlePage() {
  return <ArticlePage content={resourceArticles.tenderBoardGuideAustralia} path="/resources/tender-board-guide-australia" description="A practical guide to using Australian tender-board sources inside a broader qualification workflow." />;
}
