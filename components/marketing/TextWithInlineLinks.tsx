"use client";

import Link from "next/link";
import type { InlineLink } from "@/lib/marketing/types";

interface TextWithInlineLinksProps {
  text: string;
  links: readonly InlineLink[];
  /** Optional class for the link elements */
  linkClassName?: string;
}

/**
 * Renders text with inline links. Each anchor must appear exactly once in the text.
 * Links are applied in order; anchors are replaced on first occurrence.
 */
export function TextWithInlineLinks({
  text,
  links,
  linkClassName = "text-bb-powder-blue underline decoration-bb-powder-blue/40 underline-offset-2 transition hover:text-bb-powder-blue/90 hover:decoration-bb-powder-blue",
}: TextWithInlineLinksProps) {
  if (!links.length) return <>{text}</>;

  const segments: React.ReactNode[] = [];
  let remaining = text;

  links.forEach(({ anchor, href }, i) => {
    const idx = remaining.indexOf(anchor);
    if (idx === -1) return;
    segments.push(remaining.slice(0, idx));
    segments.push(
      <Link key={`${href}-${i}`} href={href} className={linkClassName}>
        {anchor}
      </Link>
    );
    remaining = remaining.slice(idx + anchor.length);
  });
  segments.push(remaining);

  return <>{segments}</>;
}
