import Link from "next/link";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { MarketingCardSection } from "@/components/marketing/MarketingCardSection";
import { MarketingLinkCard } from "@/components/marketing/MarketingLinkCard";
import { JsonLd } from "@/components/marketing/JsonLd";
import { AvailabilityLegend } from "@/components/marketing/AvailabilityLegend";
import { StatGrid } from "@/components/marketing/StatGrid";
import { SignalBadges } from "@/components/marketing/SignalBadges";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import { buildBreadcrumbSchema } from "@/lib/marketing/schema";
import {
  investorsCards,
  investorsExploreLinks,
  investorsIntro,
  investorsSignalBadges,
  investorsStats,
} from "@/lib/marketing/content/investors";

export const metadata = buildMarketingMetadata({
  title: "Investors",
  description:
    "Investor-facing overview of the BidBlender thesis, product category, commercial model, and platform direction.",
  path: "/investors",
});

export default function InvestorsPage() {
  return (
    <MarketingLayout>
      <JsonLd data={buildBreadcrumbSchema("Investors", "/investors")} />
      {/* Hero-style header */}
      <section className="overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(134,179,213,0.12),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(253,116,123,0.08),_transparent_35%),linear-gradient(180deg,_#0f1419,_#111820)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bb-powder-blue">
            For investors
          </p>
          <MarketingPageHeader title="Investors" intro={investorsIntro} />
          <SignalBadges items={investorsSignalBadges} className="mt-6" size="md" />
        </div>
      </section>

      <StatGrid
        title="At a glance"
        intro="The thesis in numbers: four paradigms, four pricing tiers, and a clear wedge in the ambiguous middle."
        items={investorsStats}
      />

      <MarketingCardSection
        title="The thesis"
        intro="BidBlender is building a procurement-specific opportunity intelligence category. The core logic is defensible, the commercial model is clear, and the expansion path is modular."
        items={investorsCards}
        cols={2}
        relatedLinks={[
          { label: "Platform", href: "/platform" },
          { label: "Bid / No Bid", href: "/bid-no-bid" },
        ]}
      />

      <MarketingSection>
        <MarketingPageHeader
          as="h2"
          title="Explore further"
          intro="Dig into the product, the decision model, and the commercial structure. The public site explains BidBlender in detail."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {investorsExploreLinks.map((link) => (
            <MarketingLinkCard
              key={link.href}
              title={link.title}
              href={link.href}
              description={link.description}
              badges={link.badges}
            />
          ))}
        </div>
      </MarketingSection>

      <AvailabilityLegend />

      {/* Contact block with accent */}
      <section className="border-t border-gray-700/50 bg-[radial-gradient(ellipse_at_center,_rgba(134,179,213,0.06),_transparent_70%)] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="bb-page-title">Reach out for a prospectus</h2>
          <p className="mt-4 bb-text-muted">
            For more detail on the thesis, commercial model, and roadmap, get in touch directly.
          </p>
          <div className="mt-8 rounded-2xl border border-bb-powder-blue/20 bg-bb-dark-elevated/80 p-8 shadow-card">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
              <span className="font-semibold text-gray-100">Lincoln Maurice</span>
              <span className="rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-400">
                Founder
              </span>
            </div>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
              <Link
                href="mailto:lincoln@bidblender.com.au"
                className="text-bb-powder-blue transition hover:underline"
              >
                lincoln@bidblender.com.au
              </Link>
              <Link
                href="tel:+61408749777"
                className="text-bb-powder-blue transition hover:underline"
              >
                +61 408 749 777
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
