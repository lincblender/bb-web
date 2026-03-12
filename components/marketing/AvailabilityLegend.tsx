import { MarketingSection } from "@/components/marketing/MarketingSection";

const AVAILABILITY_ITEMS = [
  {
    label: "Live now",
    tone: "border-bb-green/30 bg-bb-green/10 text-bb-green-light",
    description:
      "Core product surfaces and workflows that already exist in the current BidBlender experience.",
  },
  {
    label: "Connected",
    tone: "border-bb-powder-blue/30 bg-bb-powder-blue/10 text-bb-powder-blue-light",
    description:
      "Capabilities that depend on configured data sources, integrations, or customer-specific setup.",
  },
  {
    label: "Planned",
    tone: "border-bb-orange/30 bg-bb-orange/10 text-bb-orange-light",
    description:
      "Directionally important workflows and platform extensions that are signposted carefully, not overstated as available.",
  },
] as const;

export function AvailabilityLegend() {
  return (
    <MarketingSection className="py-8">
      <div className="rounded-3xl border border-white/8 bg-bb-dark-elevated/70 p-6 shadow-card">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bb-powder-blue">
            Reading the site
          </p>
          <h2 className="mt-3 text-xl font-semibold text-gray-100">
            How BidBlender labels capability status
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-300">
            The public site distinguishes between what is already available, what becomes useful once
            data is connected, and what is still part of the product direction. That keeps the story
            clear without flattening everything into one vague promise.
          </p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {AVAILABILITY_ITEMS.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/8 bg-bb-dark/60 p-4">
              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${item.tone}`}>
                {item.label}
              </span>
              <p className="mt-4 text-sm leading-6 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MarketingSection>
  );
}
