import { Button } from "@/components/ui/Button";
import { SignalBadges } from "@/components/marketing/SignalBadges";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { AdSupportedNotice } from "@/components/marketing/AdSupportedNotice";
import { AdSupportedSignupButton } from "@/components/marketing/AdSupportedSignupButton";
import { FAQSection } from "@/components/marketing/FAQSection";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { StatGrid } from "@/components/marketing/StatGrid";
import { JsonLd } from "@/components/marketing/JsonLd";
import { AvailabilityLegend } from "@/components/marketing/AvailabilityLegend";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/marketing/schema";
import {
  pricingComparisonColumns,
  pricingComparisonRows,
  pricingFaqs,
  pricingPlans,
  pricingStats,
} from "@/lib/marketing/content/pricing";

const PRICING_DESCRIPTION =
  "BidBlender pricing for evaluation, individual use, team rollout, and enterprise deployment.";

export const metadata = buildMarketingMetadata({
  title: "Pricing",
  description: PRICING_DESCRIPTION,
  path: "/pricing",
});

export default function PricingPage() {
  const schemas = [
    buildBreadcrumbSchema("Pricing", "/pricing"),
    buildFaqSchema(pricingFaqs),
  ];

  return (
    <MarketingLayout>
      <JsonLd data={schemas} />
      <MarketingSection>
        <MarketingPageHeader
          title="Bid intelligence pricing"
          intro="BidBlender pricing is designed to support evaluation, individual use, team adoption, and tailored enterprise rollout without forcing every customer into the same commercial shape."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl border p-6 shadow-card ${
                plan.name === "Team"
                  ? "border-bb-coral/40 bg-bb-coral/10"
                  : "border-gray-700/50 bg-bb-dark-elevated"
              }`}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-100">{plan.name}</h2>
                <SignalBadges items={[plan.badge]} className="mt-2" />
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
              </div>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight text-gray-100">{plan.price}</span>
                {plan.cadence ? <span className="pb-1 text-sm text-gray-500">{plan.cadence}</span> : null}
              </div>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-gray-300">
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {plan.name === "Free" ? (
                <div className="mt-6 rounded-xl border border-gray-700/50 bg-bb-dark-elevated/60 p-4">
                  <AdSupportedNotice />
                </div>
              ) : null}
              <div className="mt-auto pt-8">
                {plan.name === "Free" ? (
                  <AdSupportedSignupButton />
                ) : (
                  <Button href={plan.href} variant={plan.name === "Team" ? "primary" : "secondary"} className="w-full">
                    {plan.cta}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </MarketingSection>

      <StatGrid
        title="How the pricing is structured"
        intro="The public pricing page should communicate fit, packaging, and upgrade path clearly without exposing internal commercial logic."
        items={pricingStats}
      />

      <ComparisonTable
        title="How the tiers differ"
        intro="Choose the plan that matches how broadly BidBlender needs to sit inside your bid workflow today."
        columns={pricingComparisonColumns}
        rows={pricingComparisonRows}
      />

      <FAQSection items={pricingFaqs} />

      <AvailabilityLegend />
    </MarketingLayout>
  );
}
