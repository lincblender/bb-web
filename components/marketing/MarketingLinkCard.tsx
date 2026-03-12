import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignalBadges } from "@/components/marketing/SignalBadges";

interface MarketingLinkCardProps {
  title: string;
  href: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  badges?: readonly string[];
}

/**
 * Marketing card that is fully clickable. Whole card links to href;
 * button is visual only (avoids nested links).
 */
export function MarketingLinkCard({
  title,
  href,
  description,
  icon,
  className,
  badges,
}: MarketingLinkCardProps) {
  return (
    <Link href={href} className={cn("block", className)}>
      <Card className="bb-card-interactive group flex h-full flex-col transition-all hover:border-bb-coral/50">
        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="bb-section-title">{title}</h3>
                <ChevronRight size={16} className="mt-0.5 shrink-0 text-gray-500 transition-colors group-hover:text-bb-powder-blue" />
              </div>
              <p className="mt-2 text-sm bb-text-muted">{description}</p>
              {badges?.length ? <SignalBadges items={badges} maxItems={3} className="mt-4" /> : null}
            </div>
            {icon && (
              <div className="shrink-0 flex items-center justify-center [&_img]:object-contain">
                {icon}
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
