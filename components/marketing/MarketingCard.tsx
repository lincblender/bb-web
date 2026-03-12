import { Card } from "@/components/ui/Card";
import { RelatedLinksBlock } from "@/components/marketing/RelatedLinksBlock";
import type { RelatedLink } from "@/lib/marketing/types";

interface MarketingCardProps {
  title: string;
  children: React.ReactNode;
  /** 0–1 links per card per interlinking guidelines */
  relatedLinks?: readonly RelatedLink[];
}

/**
 * Standard card for marketing pages.
 * Matches home page pattern: bb-section-title + bb-text-muted.
 */
export function MarketingCard({ title, children, relatedLinks }: MarketingCardProps) {
  return (
    <Card>
      <h3 className="bb-section-title">{title}</h3>
      <p className="mt-2 text-sm bb-text-muted">{children}</p>
      {relatedLinks?.length ? (
        <RelatedLinksBlock links={relatedLinks} label="Related:" />
      ) : null}
    </Card>
  );
}
