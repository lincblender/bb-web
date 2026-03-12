import { cn } from "@/lib/utils";

interface MarketingCardGridProps {
  children: React.ReactNode;
  /** Number of columns on md+ breakpoint: 2 or 3 (default) */
  cols?: 2 | 3;
  /** Layout: grid (default) or stacked (space-y-8) */
  layout?: "grid" | "stacked";
  className?: string;
}

/**
 * Standard card grid for marketing pages.
 * Matches home page pattern: mt-12 grid gap-6 md:grid-cols-{2|3}
 */
export function MarketingCardGrid({
  children,
  cols = 3,
  layout = "grid",
  className,
}: MarketingCardGridProps) {
  return (
    <div
      className={cn(
        "mt-12",
        layout === "grid" && "grid gap-6",
        layout === "grid" && cols === 2 && "md:grid-cols-2",
        layout === "grid" && cols === 3 && "md:grid-cols-3",
        layout === "stacked" && "space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}
