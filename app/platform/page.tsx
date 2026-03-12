import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CTA } from "@/components/marketing/CTA";
import { MarketingCardSection } from "@/components/marketing/MarketingCardSection";
import { JsonLd } from "@/components/marketing/JsonLd";
import { AvailabilityLegend } from "@/components/marketing/AvailabilityLegend";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductSchema,
  buildSoftwareApplicationSchema,
} from "@/lib/marketing/schema";
import { platformCards, platformFaqs, platformMedia, platformSectionRelatedLinks, platformSteps } from "@/lib/marketing/content/platform";

const PLATFORM_DESCRIPTION =
  "Understand how BidBlender blends CRM history, capability evidence, relationship reach, and tender opportunity data into a procurement-specific decision platform.";

export const metadata = buildMarketingMetadata({
  title: "Platform Overview",
  description: PLATFORM_DESCRIPTION,
  path: "/platform",
});

export default function PlatformPage() {
  const schemas = [
    buildBreadcrumbSchema("Platform Overview", "/platform"),
    buildSoftwareApplicationSchema({
      title: "BidBlender Platform",
      description: PLATFORM_DESCRIPTION,
      path: "/platform",
    }),
    buildProductSchema({
      title: "BidBlender",
      description: PLATFORM_DESCRIPTION,
      path: "/platform",
    }),
    buildFaqSchema(platformFaqs),
  ];

  return (
    <MarketingLayout>
      <JsonLd data={schemas} />
      <MarketingSection>
        <MarketingPageHeader
          title="Procurement opportunity intelligence platform"
          intro="BidBlender is a procurement-specific opportunity intelligence layer for teams that need to qualify pursuit before they commit full bid effort. The platform blends four paradigms into one decision model: history, capability, reach, and opportunity."
        />
      </MarketingSection>

      <MarketingCardSection items={platformCards} cols={2} relatedLinks={platformSectionRelatedLinks} />

      <ProcessSteps
        title="How the platform is intended to work end-to-end"
        intro="The commercial logic is simple: get to a better decision faster, and make the reasoning visible enough that teams can trust it."
        steps={platformSteps}
      />

      <MarketingSection>
        <div className="grid gap-8 lg:grid-cols-2">
          {platformMedia.map((item) => (
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

      <FAQSection items={platformFaqs} />

      <AvailabilityLegend />

      <CTA
        title="See how BidBlender fits into a real bid workflow"
        description="Explore the feature pages to understand how the platform handles qualification, document review, strategy, network reach, and connected evidence."
      />
    </MarketingLayout>
  );
}
