import type { MarketingCardItem } from "@/components/marketing/MarketingCardSection";
import type { RelatedLink } from "@/lib/marketing/types";

export const platformCards: MarketingCardItem[] = [
  {
    title: "Chat-first workflow",
    body: "The dashboard chat is the governing interface for asking about bids, buyers, movement, strategy, document review, and bid/no-bid. It is designed to expose context progressively, not make the user bounce through disconnected tools.",
    inlineLinks: [
      { anchor: "document review", href: "/document-review" },
      { anchor: "bid/no-bid", href: "/bid-no-bid" },
    ],
  },
  {
    title: "Structured decision outputs",
    body: "The product is moving toward a traffic-light decision model with supporting dimensions such as pursuit capacity, buyer access, delivery fit, strategic desire, and evidence confidence.",
    inlineLinks: [{ anchor: "traffic-light decision model", href: "/bid-no-bid" }],
  },
  {
    title: "Context-rich opportunity views",
    body: "Opportunity records are not just list rows. The platform is designed to attach documents, strategy assessments, network insight, source provenance, and next research actions to each opportunity.",
    inlineLinks: [
      { anchor: "network insight", href: "/network-intelligence" },
      { anchor: "Opportunity records", href: "/opportunity-intelligence" },
    ],
  },
  {
    title: "Connected evidence, not one-source truth",
    body: "BidBlender is strongest when multiple sources are pooled: CRM for history, HCM/LMS for capability, LinkedIn or equivalent for reach, and tender boards for opportunity. Each source improves the decision rather than pretending to be the whole picture.",
    inlineLinks: [
      { anchor: "CRM", href: "/resources/crm-data-for-bid-teams" },
      { anchor: "LinkedIn", href: "/integrations/linkedin" },
      { anchor: "tender boards", href: "/connectors" },
    ],
  },
];

export const platformSectionRelatedLinks: RelatedLink[] = [
  { label: "Integrations", href: "/integrations" },
  { label: "Bid / No Bid", href: "/bid-no-bid" },
  { label: "Four Evidence Pillars", href: "/four-evidence-pillars" },
  { label: "Compare against CRM-only", href: "/compare/crm-only" },
];

export const platformSteps = [
  {
    title: "Ingest evidence",
    description:
      "Connect tender boards, CRM history, capability systems, and relationship sources so the product has enough context to evaluate work in the same way a good bid team would.",
    relatedLinks: [{ label: "Connectors", href: "/connectors" }],
  },
  {
    title: "Surface opportunities",
    description:
      "Review opportunities through chat, the opportunity explorer, or the matrix. Compare timing, fit, access, and strategic posture before anything reaches proposal mode.",
    relatedLinks: [
      { label: "Opportunity explorer", href: "/opportunity-explorer" },
      { label: "Opportunity matrix", href: "/opportunity-matrix" },
    ],
  },
  {
    title: "Interrogate documents and context",
    description:
      "Upload documents, inspect the opportunity context panel, and pressure-test where evidence is still missing. The platform should help users understand not only the answer, but the quality of the answer.",
    relatedLinks: [
      { label: "Document review", href: "/document-review" },
      { label: "Opportunity intelligence", href: "/opportunity-intelligence" },
    ],
  },
  {
    title: "Direct action",
    description:
      "Turn ambiguous opportunities into explicit next actions: who to contact, what to verify, where capability is thin, and whether the team should commit or stop.",
    relatedLinks: [{ label: "Bid / No Bid", href: "/bid-no-bid" }],
  },
] as const;

export const platformMedia = [
  {
    eyebrow: "Interactive Story",
    title: "Four paradigms blending into one decision",
    description:
      "Placeholder for a GSAP-driven explainer showing how history, capability, reach, and opportunity signals blend into a structured bid / research / no-bid recommendation.",
    variant: "interactive" as const,
  },
  {
    eyebrow: "Product Walkthrough",
    title: "Console surface overview",
    description:
      "Placeholder for a guided product preview covering dashboard chat, the opportunity explorer, detail panel, matrix, network view, strategy recommendations, and connectors.",
    variant: "product" as const,
  },
];

export const platformFaqs = [
  {
    question: "What does BidBlender do today?",
    answer:
      "Today the product already communicates a chat-first dashboard, opportunity exploration, strategy views, network views, organisation profiling, connectors, and document-aware workflows. The public site should explain those surfaces clearly and honestly.",
    relatedLinks: [{ label: "How it works", href: "/how-it-works" }],
  },
  {
    question: "What is the platform designed to support next?",
    answer:
      "Deeper CRM ingestion, richer capability evidence from HCM/LMS, more robust relationship graphing, stronger source provenance, and more explicit amber-resolution workflows are natural extensions of the existing product shape.",
  },
  {
    question: "Why is this a platform rather than a single feature?",
    answer:
      "Because no single data source can answer procurement-grade bid questions well. The platform exists to turn multiple incomplete inputs into a useful, structured decision system.",
  },
  {
    question: "How should the public site talk about planned features?",
    answer:
      "Carefully. Planned features should be signposted as designed, in development, or coming soon, never implied as live if they are not already available.",
  },
] as const;
