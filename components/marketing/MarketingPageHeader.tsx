interface MarketingPageHeaderProps {
  title: string;
  intro?: string | readonly string[];
  /** Heading level: h1 (default for sub-pages) or h2 (for section titles) */
  as?: "h1" | "h2";
}

/**
 * Standard page/section header for marketing pages.
 * Uses bb-page-title and bb-text-muted to match home page typography.
 */
export function MarketingPageHeader({
  title,
  intro,
  as: Heading = "h1",
}: MarketingPageHeaderProps) {
  return (
    <>
      <Heading className="bb-page-title">{title}</Heading>
      {intro &&
        (Array.isArray(intro) ? (
          <div className="mt-4 space-y-4">
            {intro.map((paragraph, i) => (
              <p key={i} className="bb-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-4 bb-text-muted">{intro}</p>
        ))}
    </>
  );
}
