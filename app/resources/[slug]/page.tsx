import { notFound } from "next/navigation";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { buildMarketingMetadata } from "@/lib/marketing/metadata";
import Link from "next/link";

const RESOURCE_SLUGS: Record<
  string,
  { title: string; description: string }
> = {
  "bid-no-bid-framework": {
    title: "Bid / No Bid Framework",
    description:
      "A practical guide to the difference between obvious green bids, obvious red bids, and the amber opportunities where decision quality matters most.",
  },
  "opportunity-scoring": {
    title: "Opportunity Scoring",
    description:
      "How fit, access, strategy, and evidence confidence should work together in a procurement-specific qualification model.",
  },
  "network-strength-in-procurement": {
    title: "Network Strength In Procurement",
    description:
      "Why relationship density and decision-maker adjacency matter in bid outcomes, and why they still need to be combined with capability and opportunity evidence.",
  },
  "crm-data-for-bid-teams": {
    title: "CRM Data For Bid Teams",
    description:
      "How systems like HubSpot can supply buyer memory and past-pursuit context without being mistaken for the whole decision layer.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = RESOURCE_SLUGS[slug];
  if (!resource) return {};
  return buildMarketingMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${slug}`,
  });
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = RESOURCE_SLUGS[slug];
  if (!resource) notFound();

  return (
    <MarketingLayout>
      <MarketingSection>
        <MarketingPageHeader
          title={resource.title}
          intro={resource.description}
        />
        <p className="mt-6 text-sm bb-text-muted">
          This resource is being developed.{" "}
          <Link href="/book-a-demo" className="text-bb-powder-blue hover:underline">
            Book a demo
          </Link>{" "}
          to learn more about how BidBlender applies these concepts.
        </p>
      </MarketingSection>
    </MarketingLayout>
  );
}
