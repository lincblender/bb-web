import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { RelatedLinksBlock } from "@/components/marketing/RelatedLinksBlock";
import { SignalBadges } from "@/components/marketing/SignalBadges";
import type { RelatedLink } from "@/lib/marketing/types";
import { PARADIGM_TONES } from "@/lib/marketing/paradigm-tones";

export interface ParadigmSectionItem {
  title: string;
  description: string;
  note?: string;
  outcomes?: readonly string[];
}

interface ParadigmSectionProps {
  title: string;
  intro?: string;
  items: readonly ParadigmSectionItem[];
  relatedLinks?: readonly RelatedLink[];
}

export function ParadigmSection({
  title,
  intro,
  items,
  relatedLinks,
}: ParadigmSectionProps) {
  return (
    <MarketingSection>
      <MarketingPageHeader title={title} intro={intro} as="h2" />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => {
          const tone = PARADIGM_TONES[index % PARADIGM_TONES.length];

          return (
            <article
              key={item.title}
              id={tone.label.toLowerCase()}
              className={`overflow-hidden rounded-[28px] border bg-[#0b1220]/95 p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.95)] ${tone.ring}`}
            >
              <div className={`-mx-6 -mt-6 h-1 bg-gradient-to-r ${tone.accent}`} />
              <div className="mt-5 flex items-center justify-between gap-4">
                <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${tone.eyebrow}`}>
                  {tone.label}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-400">
                  Evidence layer {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-300">
                {item.description}
              </p>
              {item.outcomes?.length ? (
                <SignalBadges items={item.outcomes} size="md" className="mt-5" />
              ) : null}
              {item.note ? (
                <p className="mt-5 border-t border-white/8 pt-4 text-sm leading-6 text-gray-400">
                  {item.note}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
      {relatedLinks?.length ? (
        <RelatedLinksBlock links={relatedLinks} className="mt-6" label="See also:" />
      ) : null}
    </MarketingSection>
  );
}
