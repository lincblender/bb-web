/** A related link for section-level placement (after a block of content). */
export interface RelatedLink {
  label: string;
  href: string;
}

/** Inline link: anchor text must appear exactly once in the surrounding paragraph. */
export interface InlineLink {
  anchor: string;
  href: string;
}
