import { RelatedLinksBlock } from "@/components/marketing/RelatedLinksBlock";
import type { RelatedLink } from "@/lib/marketing/types";

interface ProcessStep {
  title: string;
  description: string;
  relatedLinks?: readonly RelatedLink[];
}

interface ProcessStepsProps {
  title: string;
  intro?: string;
  steps: readonly ProcessStep[];
}

export function ProcessSteps({ title, intro, steps }: ProcessStepsProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <h2 className="bb-page-title">{title}</h2>
        {intro ? <p className="mt-4 bb-text-muted">{intro}</p> : null}
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-gray-700/50 bg-bb-dark-elevated p-6 shadow-card"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bb-coral/20 text-sm font-semibold text-bb-coral">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-100">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">{step.description}</p>
            {step.relatedLinks?.length ? (
              <RelatedLinksBlock links={step.relatedLinks} label="Related:" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export type { ProcessStep };
