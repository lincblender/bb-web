import { CTA } from "@/components/marketing/CTA";
import { FAQSection } from "@/components/marketing/FAQSection";
import { IntegrationIcon, type IntegrationIconType } from "@/components/marketing/IntegrationIcons";
import { SignalBadges } from "@/components/marketing/SignalBadges";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingCardSection, type MarketingCardItem } from "@/components/marketing/MarketingCardSection";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { JsonLd } from "@/components/marketing/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/marketing/schema";
import { AvailabilityLegend } from "@/components/marketing/AvailabilityLegend";

interface IntegrationDiagramColumn {
  title: string;
  items: readonly string[];
}

interface IntegrationSpotlightContent {
  title: string;
  intro: string | readonly string[];
  iconType: IntegrationIconType;
  eyebrow: string;
  accentClass: string;
  accentSoftClass: string;
  accentBorderClass: string;
  leadPoints: readonly string[];
  diagram: {
    left: IntegrationDiagramColumn;
    center: IntegrationDiagramColumn;
    right: IntegrationDiagramColumn;
    caption: string;
  };
  signalStrip: {
    title: string;
    items: readonly string[];
  };
  cardSections?: Array<{
    title?: string;
    intro?: string;
    items: readonly MarketingCardItem[];
    cols?: 2 | 3;
  }>;
  processSection?: {
    title: string;
    intro?: string;
    steps: readonly { title: string; description: string }[];
  };
  faqSection?: {
    title?: string;
    intro?: string;
    items: readonly { question: string; answer: string }[];
  };
  cta?: {
    title?: string;
    description?: string;
  };
  showAvailabilityLegend?: boolean;
}

export function IntegrationSpotlightPage({
  content,
  path,
}: {
  content: IntegrationSpotlightContent;
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
        <div className="max-w-5xl">
          <div className="mb-6 flex items-center gap-4">
            <IntegrationIcon type={content.iconType} className="h-12 w-12 shrink-0" />
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${content.accentClass}`}>
              {content.eyebrow}
            </p>
          </div>

          <MarketingPageHeader title={content.title} intro={content.intro} />

          <SignalBadges items={content.signalStrip.items} className="mt-6" />
        </div>
      </MarketingSection>

      <MarketingSection>
        <div className={`max-w-5xl rounded-3xl border p-6 shadow-card ${content.accentBorderClass} ${content.accentSoftClass}`}>
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <h2 className="bb-section-title">Why this matters in BidBlender</h2>
            <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${content.accentClass}`}>
              Integration value
            </span>
          </div>
          <div className="mt-4 divide-y divide-white/10">
            {content.leadPoints.map((point, index) => (
              <div key={point} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${content.accentBorderClass} ${content.accentClass}`}>
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </MarketingSection>

      <MarketingSection>
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${content.accentClass}`}>
                Flow Diagram
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-100">How the integration changes the workflow</h2>
            </div>
          </div>

          <div className="mt-2 grid gap-3 xl:grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)_20px_minmax(0,1fr)] xl:items-stretch">
            <StageCard title={content.diagram.left.title} items={content.diagram.left.items} accentClass={content.accentClass} />
            <FlowConnector accentClass={content.accentClass} />
            <StageCard title={content.diagram.center.title} items={content.diagram.center.items} accentClass={content.accentClass} highlight />
            <FlowConnector accentClass={content.accentClass} />
            <StageCard title={content.diagram.right.title} items={content.diagram.right.items} accentClass={content.accentClass} />
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-gray-400">{content.diagram.caption}</p>
        </div>
      </MarketingSection>

      {content.cardSections?.map((section, index) => (
        <MarketingCardSection
          key={`${content.title}-cards-${index}`}
          title={section.title}
          intro={section.intro}
          items={section.items}
          cols={section.cols}
        />
      ))}

      {content.processSection ? (
        <ProcessSteps
          title={content.processSection.title}
          intro={content.processSection.intro}
          steps={content.processSection.steps}
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

function StageCard({
  title,
  items,
  accentClass,
  highlight = false,
}: {
  title: string;
  items: readonly string[];
  accentClass: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-3xl border border-gray-700/70 bg-bb-dark-elevated/85 p-5 ${highlight ? "shadow-card ring-1 ring-white/10" : ""}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${highlight ? accentClass : "text-gray-500"}`}>
        {title}
      </p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-gray-700/60 bg-bb-dark/70 px-4 py-3 text-sm leading-6 text-gray-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowConnector({ accentClass }: { accentClass: string }) {
  return (
    <div className="flex items-center justify-center xl:flex-col">
      <div className="flex items-center gap-2 xl:hidden">
        <div className="h-8 w-px bg-gray-700" />
      </div>
      <div className="hidden h-full items-center justify-center xl:flex">
        <div className="flex w-full items-center gap-1">
          <div className="h-px flex-1 bg-gray-700" />
          <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${accentClass}`}>
            To
          </span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

export type { IntegrationSpotlightContent };
