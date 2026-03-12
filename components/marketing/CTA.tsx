import { Button } from "@/components/ui/Button";
import { APP_SIGNUP_URL } from "@/lib/marketing/config";

interface CTAProps {
  title?: string;
  description?: string;
}

export function CTA({
  title = "See BidBlender in action",
  description = "Explore the demo to understand how opportunity intelligence shapes your bid strategy.",
}: CTAProps) {
  return (
    <section className="bb-panel-border border-t bg-bb-dark-elevated py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="bb-page-title">{title}</h2>
        <p className="mt-4 bb-text-muted">{description}</p>
        <div className="mt-8">
          <Button href={APP_SIGNUP_URL} variant="primary" className="px-8 py-3">
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
}
