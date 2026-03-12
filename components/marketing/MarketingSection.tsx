import { cn } from "@/lib/utils";

interface MarketingSectionProps {
  children: React.ReactNode;
  /** Max width: "6xl" (default, matches home page) or "3xl" (narrow, for long-form content) */
  maxWidth?: "6xl" | "3xl";
  /** HTML element: section (default) or article */
  as?: "section" | "article";
  className?: string;
}

const maxWidthClasses = {
  "6xl": "max-w-6xl",
  "3xl": "max-w-3xl",
};

export function MarketingSection({
  children,
  maxWidth = "6xl",
  as: Component = "section",
  className,
}: MarketingSectionProps) {
  return (
    <Component
      className={cn("mx-auto px-6 py-16", maxWidthClasses[maxWidth], className)}
    >
      {children}
    </Component>
  );
}
