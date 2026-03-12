import { RelatedLinksBlock } from "@/components/marketing/RelatedLinksBlock";
import type { RelatedLink } from "@/lib/marketing/types";

interface FAQItem {
  question: string;
  answer: string;
  relatedLinks?: readonly RelatedLink[];
}

interface FAQSectionProps {
  title?: string;
  intro?: string;
  items: readonly FAQItem[];
}

export function FAQSection({
  title = "Frequently Asked Questions",
  intro,
  items,
}: FAQSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <h2 className="bb-page-title">{title}</h2>
        {intro ? <p className="mt-4 bb-text-muted">{intro}</p> : null}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-gray-700/50 bg-bb-dark-elevated p-6 shadow-card"
          >
            <h3 className="text-base font-semibold text-gray-100">{item.question}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">{item.answer}</p>
            {item.relatedLinks?.length ? (
              <RelatedLinksBlock links={item.relatedLinks} label="Related:" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export type { FAQItem };
