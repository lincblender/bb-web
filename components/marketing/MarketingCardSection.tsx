import { IntegrationIcon, type IntegrationIconType } from "@/components/marketing/IntegrationIcons";
import { MarketingCard } from "@/components/marketing/MarketingCard";
import { MarketingCardGrid } from "@/components/marketing/MarketingCardGrid";
import { MarketingLinkCard } from "@/components/marketing/MarketingLinkCard";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { RelatedLinksBlock } from "@/components/marketing/RelatedLinksBlock";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { SignalBadges } from "@/components/marketing/SignalBadges";
import { TextWithInlineLinks } from "@/components/marketing/TextWithInlineLinks";
import type { InlineLink, RelatedLink } from "@/lib/marketing/types";

export interface MarketingCardItem {
  title: string;
  body: string;
  href?: string;
  iconType?: IntegrationIconType;
  badges?: readonly string[];
  /** 0–1 links per card per interlinking guidelines */
  relatedLinks?: readonly RelatedLink[];
  /** Inline links within body text; anchors must appear exactly once */
  inlineLinks?: readonly InlineLink[];
}

interface MarketingCardSectionProps {
  title?: string;
  intro?: string;
  items: readonly MarketingCardItem[];
  cols?: 2 | 3;
  /** 0–2 links for the whole section */
  relatedLinks?: readonly RelatedLink[];
}

export function MarketingCardSection({
  title,
  intro,
  items,
  cols = 3,
  relatedLinks,
}: MarketingCardSectionProps) {
  return (
    <MarketingSection>
      {title ? <MarketingPageHeader as="h2" title={title} intro={intro} /> : null}
      <MarketingCardGrid cols={cols} className={title ? undefined : "mt-0"}>
        {items.map((item) =>
          item.href ? (
            <div key={item.title} className="flex flex-col">
              <MarketingLinkCard
                title={item.title}
                href={item.href}
                description={
                  item.inlineLinks?.length ? (
                    <TextWithInlineLinks text={item.body} links={item.inlineLinks} />
                  ) : (
                    item.body
                  )
                }
                badges={item.badges}
              icon={
                  item.iconType ? (
                    <IntegrationIcon type={item.iconType} className="h-12 w-12 shrink-0" />
                  ) : undefined
                }
              />
              {item.relatedLinks?.length ? (
                <RelatedLinksBlock links={item.relatedLinks} />
              ) : null}
            </div>
          ) : (
            <MarketingCard
              key={item.title}
              title={item.title}
              relatedLinks={item.relatedLinks}
            >
              <>
                {item.iconType ? (
                  <span className="mb-3 inline-flex items-center justify-center">
                    <IntegrationIcon type={item.iconType} className="h-12 w-12 shrink-0" />
                  </span>
                ) : null}
                {item.inlineLinks?.length ? (
                  <TextWithInlineLinks text={item.body} links={item.inlineLinks} />
                ) : (
                  item.body
                )}
                {item.badges?.length ? <SignalBadges items={item.badges} maxItems={3} className="mt-4" /> : null}
              </>
            </MarketingCard>
          )
        )}
      </MarketingCardGrid>
      {relatedLinks?.length ? (
        <RelatedLinksBlock links={relatedLinks} className="mt-6" label="Related:" />
      ) : null}
    </MarketingSection>
  );
}
