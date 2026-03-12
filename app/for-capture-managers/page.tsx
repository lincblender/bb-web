import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { useCasePageContent } from "@/lib/marketing/content/use-case-pages";

export const metadata = buildMarketingMetadata({
  title: "For Capture Managers",
  description: "See how BidBlender helps capture managers understand posture, blockers, and next actions for live pursuits.",
  path: "/for-capture-managers",
});

export default function ForCaptureManagersPage() {
  return <FeaturePage content={useCasePageContent.captureManagers} path="/for-capture-managers" />;
}
