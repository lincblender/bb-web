import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { useCasePageContent } from "@/lib/marketing/content/use-case-pages";

export const metadata = buildMarketingMetadata({
  title: "For Bid Teams",
  description: "See how BidBlender helps bid teams qualify opportunities earlier and reduce wasted proposal effort.",
  path: "/for-bid-teams",
});

export default function ForBidTeamsPage() {
  return <FeaturePage content={useCasePageContent.bidTeams} path="/for-bid-teams" />;
}
