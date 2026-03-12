import Link from "next/link";
import type { RelatedLink } from "@/lib/marketing/types";
import { cn } from "@/lib/utils";

interface RelatedLinksBlockProps {
  links: readonly RelatedLink[];
  className?: string;
  linkClassName?: string;
  /** Optional label, e.g. "Related:" or "See also:" */
  label?: string;
}

/**
 * Renders a list of related links. Themed for BidBlender.
 * Use sparingly: 0–2 links per block per the interlinking guidelines.
 */
export function RelatedLinksBlock({
  links,
  className,
  linkClassName,
  label,
}: RelatedLinksBlockProps) {
  if (!links.length) return null;
  return (
    <div className={cn("mt-3 flex flex-wrap items-baseline gap-x-1 gap-y-1 text-sm", className)}>
      {label ? (
        <span className="mr-1 text-gray-500">{label}</span>
      ) : null}
      <span className="flex flex-wrap items-baseline gap-x-1">
        {links.map((link, i) => (
          <span key={link.href} className="inline-flex items-baseline gap-x-1">
            {i > 0 ? <span className="text-gray-500">•</span> : null}
            <Link
              href={link.href}
              className={cn(
                "text-bb-powder-blue transition hover:underline",
                linkClassName
              )}
            >
              {link.label}
            </Link>
          </span>
        ))}
      </span>
    </div>
  );
}
