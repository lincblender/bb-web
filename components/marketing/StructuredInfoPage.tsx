import { FAQSection } from "@/components/marketing/FAQSection";
import { IntegrationIcon, type IntegrationIconType } from "@/components/marketing/IntegrationIcons";
import { SignalBadges } from "@/components/marketing/SignalBadges";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingCardSection, type MarketingCardItem } from "@/components/marketing/MarketingCardSection";
import { JsonLd } from "@/components/marketing/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/marketing/schema";
import { AvailabilityLegend } from "@/components/marketing/AvailabilityLegend";

export interface StructuredInfoPageContent {
  title: string;
  intro: string;
  iconType?: IntegrationIconType;
  signalBadges?: readonly string[];
  cards: readonly MarketingCardItem[];
  faqItems?: readonly { question: string; answer: string }[];
  showAvailabilityLegend?: boolean;
}

export function StructuredInfoPage({
  content,
  path,
}: {
  content: StructuredInfoPageContent;
  path?: string;
}) {
  const schemas = [
    ...(path ? [buildBreadcrumbSchema(content.title, path)] : []),
    ...(content.faqItems?.length ? [buildFaqSchema(content.faqItems)] : []),
  ];

  return (
    <MarketingLayout>
      {schemas.length ? <JsonLd data={schemas} /> : null}
      <MarketingSection>
        {content.iconType ? (
          <div className="mb-6 inline-flex items-center justify-center [&_img]:object-contain">
            <IntegrationIcon type={content.iconType} className="h-12 w-12 shrink-0" />
          </div>
        ) : null}
        <MarketingPageHeader title={content.title} intro={content.intro} />
        {content.signalBadges?.length ? <SignalBadges items={content.signalBadges} className="mt-6" /> : null}
      </MarketingSection>
      <MarketingCardSection items={content.cards} cols={2} />
      {content.faqItems?.length ? <FAQSection items={content.faqItems} /> : null}
      {content.showAvailabilityLegend === false ? null : <AvailabilityLegend />}
    </MarketingLayout>
  );
}
