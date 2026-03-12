import { cn } from "@/lib/utils";

const SIGNAL_TONES = [
  {
    dot: "bg-bb-powder-blue",
    pill: "border-bb-powder-blue/30 bg-bb-powder-blue/10 text-bb-powder-blue-light",
  },
  {
    dot: "bg-bb-coral",
    pill: "border-bb-coral/30 bg-bb-coral/10 text-bb-coral-light",
  },
  {
    dot: "bg-bb-orange",
    pill: "border-bb-orange/30 bg-bb-orange/10 text-bb-orange-light",
  },
] as const;

interface SignalBadgesProps {
  items: readonly string[];
  maxItems?: number;
  className?: string;
  size?: "sm" | "md";
}

export function SignalBadges({
  items,
  maxItems,
  className,
  size = "sm",
}: SignalBadgesProps) {
  const visibleItems = typeof maxItems === "number" ? items.slice(0, maxItems) : items;

  if (!visibleItems.length) {
    return null;
  }

  const sizeClasses =
    size === "md"
      ? "gap-2.5 px-4 py-2 text-sm"
      : "gap-2 px-3 py-1.5 text-xs font-medium";

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {visibleItems.map((item, index) => {
        const tone = SIGNAL_TONES[index % SIGNAL_TONES.length];

        return (
          <span
            key={item}
            className={cn(
              "inline-flex items-center rounded-full border",
              tone.pill,
              sizeClasses,
            )}
          >
            <span className={cn("h-2 w-2 rounded-full", tone.dot)} />
            {item}
          </span>
        );
      })}
    </div>
  );
}
