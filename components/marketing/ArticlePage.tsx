import Link from "next/link";
import { CTA } from "@/components/marketing/CTA";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { RelatedLinksBlock } from "@/components/marketing/RelatedLinksBlock";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { JsonLd } from "@/components/marketing/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/marketing/schema";
import type { RelatedLink } from "@/lib/marketing/types";

export interface ArticleSection {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  /** 0–2 links per section per interlinking guidelines */
  relatedLinks?: readonly RelatedLink[];
}

export interface ArticleContent {
  title: string;
  intro: string;
  eyebrow?: string;
  sections: readonly ArticleSection[];
  relatedLinks?: readonly { label: string; href: string }[];
  cta?: {
    title?: string;
    description?: string;
  };
}

export function ArticlePage({
  content,
  path,
  description,
}: {
  content: ArticleContent;
  path: string;
  description: string;
}) {
  const schemas = [
    buildBreadcrumbSchema(content.title, path),
    buildArticleSchema({ title: content.title, description, path }),
  ];

  return (
    <MarketingLayout>
      <JsonLd data={schemas} />
      <MarketingSection maxWidth="3xl" as="article">
        {content.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bb-powder-blue">
            {content.eyebrow}
          </p>
        ) : null}
        <div className={content.eyebrow ? "mt-4" : undefined}>
          <MarketingPageHeader title={content.title} intro={content.intro} />
        </div>

        <div className="mt-12 space-y-10 text-sm leading-7 text-gray-300">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="bb-section-title mb-3">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-400">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {section.relatedLinks?.length ? (
                <RelatedLinksBlock links={section.relatedLinks} label="Related:" />
              ) : null}
            </section>
          ))}
        </div>

        {content.relatedLinks?.length ? (
          <section className="mt-12 rounded-3xl border border-gray-700/50 bg-bb-dark-elevated p-6 shadow-card">
            <h2 className="bb-section-title">Related pages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-gray-700 px-4 py-2 text-sm text-bb-powder-blue transition hover:border-gray-600 hover:text-gray-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </MarketingSection>

      {content.cta ? <CTA title={content.cta.title} description={content.cta.description} /> : null}
    </MarketingLayout>
  );
}
