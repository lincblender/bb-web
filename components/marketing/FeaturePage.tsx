import { CTA } from "@/components/marketing/CTA";
import { FAQSection, type FAQItem } from "@/components/marketing/FAQSection";
import { IntegrationIcon, type IntegrationIconType } from "@/components/marketing/IntegrationIcons";
import { SignalBadges } from "@/components/marketing/SignalBadges";
import type { RelatedLink } from "@/lib/marketing/types";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingCardSection, type MarketingCardItem } from "@/components/marketing/MarketingCardSection";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { MediaPlaceholder } from "@/components/marketing/MediaPlaceholder";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { ParadigmSection, type ParadigmSectionItem } from "@/components/marketing/ParadigmSection";
import { JsonLd } from "@/components/marketing/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/marketing/schema";
import { AvailabilityLegend } from "@/components/marketing/AvailabilityLegend";

interface FeaturePageContent {
  title: string;
  intro: string;
  iconType?: IntegrationIconType;
  signalBadges?: readonly string[];
  paradigmSection?: {
    title: string;
    intro?: string;
    items: readonly ParadigmSectionItem[];
    relatedLinks?: readonly RelatedLink[];
  };
  cardSections?: Array<{
    title?: string;
    intro?: string;
    items: readonly MarketingCardItem[];
    cols?: 2 | 3;
    relatedLinks?: readonly RelatedLink[];
  }>;
  processSection?: {
    title: string;
    intro?: string;
    steps: readonly { title: string; description: string }[];
  };
  mediaSection?: {
    items: readonly {
      eyebrow: string;
      title: string;
      description: string;
      variant: "interactive" | "video" | "product";
      caption?: string;
      youtubeVideoId?: string;
    }[];
  };
  comparisonSection?: {
    title: string;
    intro?: string;
    columns: readonly { title: string; description: string }[];
    rows: readonly { label: string; values: readonly string[] }[];
  };
  faqSection?: {
    title?: string;
    intro?: string;
    items: readonly FAQItem[];
  };
  cta?: {
    title?: string;
    description?: string;
  };
  showAvailabilityLegend?: boolean;
}

export function FeaturePage({
  content,
  path,
}: {
  content: FeaturePageContent;
  path?: string;
}) {
  const schemas = [
    ...(path ? [buildBreadcrumbSchema(content.title, path)] : []),
    ...(content.faqSection?.items?.length ? [buildFaqSchema(content.faqSection.items)] : []),
  ];

  return (
    <MarketingLayout>
      {schemas.length ? <JsonLd data={schemas} /> : null}
      <MarketingSection>
        {content.iconType ? (
          <div className="mb-6 flex items-center justify-center [&_img]:object-contain">
            <IntegrationIcon type={content.iconType} className="h-14 w-14 shrink-0" />
          </div>
        ) : null}
        <MarketingPageHeader title={content.title} intro={content.intro} />
        {content.signalBadges?.length ? <SignalBadges items={content.signalBadges} className="mt-6" /> : null}
      </MarketingSection>

      {content.paradigmSection ? (
        <ParadigmSection
          title={content.paradigmSection.title}
          intro={content.paradigmSection.intro}
          items={content.paradigmSection.items}
          relatedLinks={content.paradigmSection.relatedLinks}
        />
      ) : null}

      {content.cardSections?.map((section, index) => (
        <MarketingCardSection
          key={`${content.title}-cards-${index}`}
          title={section.title}
          intro={section.intro}
          items={section.items}
          cols={section.cols}
          relatedLinks={section.relatedLinks}
        />
      ))}

      {content.processSection ? (
        <ProcessSteps
          title={content.processSection.title}
          intro={content.processSection.intro}
          steps={content.processSection.steps}
        />
      ) : null}

      {content.mediaSection ? (
        <MarketingSection>
          <div className={`grid gap-8 ${content.mediaSection.items.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {content.mediaSection.items.map((item) => (
              <MediaPlaceholder
                key={item.title}
                eyebrow={item.eyebrow}
                title={item.title}
                description={item.description}
                variant={item.variant}
                caption={item.caption}
                youtubeVideoId={item.youtubeVideoId}
              />
            ))}
          </div>
        </MarketingSection>
      ) : null}

      {content.comparisonSection ? (
        <ComparisonTable
          title={content.comparisonSection.title}
          intro={content.comparisonSection.intro}
          columns={content.comparisonSection.columns}
          rows={content.comparisonSection.rows}
        />
      ) : null}

      {content.faqSection ? (
        <FAQSection
          title={content.faqSection.title}
          intro={content.faqSection.intro}
          items={content.faqSection.items}
        />
      ) : null}

      {content.showAvailabilityLegend === false ? null : <AvailabilityLegend />}

      {content.cta ? <CTA title={content.cta.title} description={content.cta.description} /> : null}
    </MarketingLayout>
  );
}

export type { FeaturePageContent };
