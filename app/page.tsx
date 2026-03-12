import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Hero } from "@/components/marketing/Hero";
import { CTA } from "@/components/marketing/CTA";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { StatGrid } from "@/components/marketing/StatGrid";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { FAQSection } from "@/components/marketing/FAQSection";
import { MarketingCardSection } from "@/components/marketing/MarketingCardSection";
import { ParadigmSynergySection } from "@/components/marketing/ParadigmSynergySection";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import {
  homeComparisonColumns,
  homeComparisonRows,
  homeDifferentiators,
  homeFaqs,
  homeMedia,
  homeParadigmCards,
  homeProcessSteps,
  homeStats,
} from "@/lib/marketing/content/home";

export const metadata = buildMarketingMetadata({
  title: "Opportunity Intelligence For Bid Teams",
  description:
    "BidBlender helps bid teams decide where they can win before they commit bid effort by blending CRM history, capability evidence, relationship reach, and tender opportunity data.",
  path: "/",
});

export default function HomePage() {
  return (
    <MarketingLayout>
      <Hero />

      <StatGrid
        title="What BidBlender Is Designed To Resolve"
        intro="Most teams already have instinct for obvious yes and no opportunities. BidBlender is designed to make those calls faster and make the ambiguous middle defensible."
        items={homeStats}
      />

      <MarketingCardSection
        title="A procurement-specific category, not a generic sales-intent clone"
        intro="BidBlender is built for teams that must qualify tenders, understand buyer access, validate delivery fit, and decide whether pursuit effort is commercially justified."
        items={homeDifferentiators}
      />

      <ParadigmSynergySection
        title="Four paradigms, one decision system"
        intro="The public site should explain BidBlender the same way the product works: every meaningful decision is made from connected evidence, not one data source."
        items={homeParadigmCards}
      />

      <ProcessSteps
        title="How teams use BidBlender"
        intro="The workflow is intentionally front-loaded. The system is meant to help teams qualify pursuit before they burn time in bid production."
        steps={homeProcessSteps}
      />

      <MarketingSection>
        <div className="grid gap-8 lg:grid-cols-2">
          {homeMedia.map((item) => (
            <MediaPlaceholder
              key={item.title}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              variant={item.variant}
            />
          ))}
        </div>
      </MarketingSection>

      <ComparisonTable
        title="Why BidBlender is different"
        intro="The public site needs to state the distinction directly. BidBlender is a procurement-specific decision layer across multiple evidence classes."
        columns={homeComparisonColumns}
        rows={homeComparisonRows}
      />

      <FAQSection
        intro="These are the questions the public site should answer clearly so that buyers, partners, and search engines all understand what BidBlender actually does."
        items={homeFaqs}
      />

      <CTA
        title="Explore the product surface in more detail"
        description="The public site now maps the product to real bid-team problems: qualification, evidence, access, capability, and the discipline to stop early when the work is not worth chasing."
      />
    </MarketingLayout>
  );
}
