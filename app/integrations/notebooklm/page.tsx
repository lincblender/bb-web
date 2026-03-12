import { StructuredInfoPage } from "@/components/marketing/StructuredInfoPage";
import { developerPageContent } from "@/lib/marketing/content/developer";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";

export const metadata = buildMarketingMetadata({
  title: "NotebookLM",
  description:
    "AI-powered research and knowledge synthesis with BidBlender opportunity context.",
  path: "/integrations/notebooklm",
});

export default function NotebookLMPage() {
  return <StructuredInfoPage content={developerPageContent.notebooklm} path="/integrations/notebooklm" />;
}
