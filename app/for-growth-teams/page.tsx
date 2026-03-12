import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { useCasePageContent } from "@/lib/marketing/content/use-case-pages";

export const metadata = buildMarketingMetadata({
  title: "For Growth Teams",
  description: "See how BidBlender helps growth teams prioritise real pursuit value, not just market noise.",
  path: "/for-growth-teams",
});

export default function ForGrowthTeamsPage() {
  return <FeaturePage content={useCasePageContent.growthTeams} path="/for-growth-teams" />;
}
