import type { MarketingCardItem } from "@/components/marketing/MarketingCardSection";

export const heroParadigms = [
  { title: "History", detail: "Past bids, CRM records, buyer memory", href: "/four-evidence-pillars#history" },
  { title: "Capability", detail: "Skills, certifications, delivery readiness", href: "/four-evidence-pillars#capability" },
  { title: "Reach", detail: "Relationship density and decision-maker proximity", href: "/four-evidence-pillars#reach" },
  { title: "Opportunity", detail: "Tender discovery, timing, and market motion", href: "/four-evidence-pillars#opportunity" },
] as const;

export const heroDecisionMetrics = [
  ["Pursuit capacity", 76, "strong", "bg-bb-green"],
  ["Buyer access", 48, "mixed", "bg-bb-orange"],
  ["Delivery fit", 84, "strong", "bg-bb-green"],
  ["Strategic desire", 63, "mixed", "bg-bb-orange"],
  ["Evidence confidence", 58, "mixed", "bg-bb-orange"],
] as const;

export const homeStats = [
  {
    value: "4",
    label: "Data paradigms",
    detail: "History, Capability, Reach, and Opportunity blend into one system.",
  },
  {
    value: "1",
    label: "Decision lens",
    detail: "Every signal should improve a bid / research / no-bid decision.",
  },
  {
    value: "Amber",
    label: "Primary value zone",
    detail: "The product is strongest when a team needs evidence, not opinion.",
  },
  {
    value: "Live + Planned",
    label: "Product truth",
    detail: "Current capabilities are shown clearly while future workflows are signposted carefully.",
  },
] as const;

export const homeDifferentiators: MarketingCardItem[] = [
  {
    title: "Not just tender discovery",
    body: "Tender boards tell you what is in market. They do not tell you whether you have a credible path to win, whether the buyer is open, or whether the opportunity is worth scarce bid effort.",
  },
  {
    title: "Not just CRM reporting",
    body: "CRM systems hold deal history and buyer memory, but they do not turn that history into a procurement-specific opportunity qualification model unless a team does that work manually.",
  },
  {
    title: "Not just relationship mapping",
    body: "Relationship graphs matter, but network access without capability, opportunity timing, and strategic intent still produces weak decisions.",
  },
];

export const homeParadigmCards: MarketingCardItem[] = [
  {
    title: "History",
    body: "CRM records, prior bids, buyer context, past wins, losses, and contact memory provide the baseline for pattern matching, comparison, and commercial context.",
  },
  {
    title: "Capability",
    body: "Organisation profiles, certifications, case studies, delivery evidence, and eventually HCM/LMS signals reveal whether a team can credibly deliver what the buyer is asking for.",
  },
  {
    title: "Reach",
    body: "Relationship density, decision-maker adjacency, shared employers, and network reach show whether technical strength has a path into the buyer organisation.",
  },
  {
    title: "Opportunity",
    body: "Tender boards, panels, and public procurement signals define the market motion itself: what is live, what is changing, and where action should be taken now.",
  },
];

export const homeProcessSteps = [
  {
    title: "Connect sources",
    description:
      "Enable tender boards, connect CRM history, add relationship sources, and define the capability context your team wants the system to judge against.",
  },
  {
    title: "Review opportunities",
    description:
      "Use chat, the explorer, and the matrix to review live opportunities, compare them against prior work, and isolate where attention should go first.",
  },
  {
    title: "Resolve amber",
    description:
      "Use document review, context panels, strategy prompts, and relationship analysis to identify what evidence is still missing before escalation.",
  },
  {
    title: "Commit or deprioritise",
    description:
      "Move forward with a clear bid posture, or stop early with a defensible no-bid rationale before the team wastes effort.",
  },
] as const;

export const homeMedia = [
  {
    eyebrow: "Product Surface",
    title: "Chat-first workflow",
    description:
      "Placeholder for a guided walkthrough showing how a user asks about opportunities, uploads a document, and receives a structured bid / research / no-bid response.",
    variant: "interactive" as const,
  },
  {
    eyebrow: "Explainer Video",
    title: "Two-minute platform overview",
    description:
      "Placeholder for a short video demonstrating how BidBlender blends history, capability, reach, and opportunity into a winnability lens.",
    variant: "video" as const,
  },
];

export const homeComparisonColumns = [
  {
    title: "BidBlender",
    description: "Decision-oriented, procurement-specific, evidence-blending platform.",
  },
  {
    title: "Tender Portals",
    description: "Great for discovery, weak for qualification and pursuit strategy.",
  },
  {
    title: "Generic Sales Intent",
    description: "Good for market noise, weaker for procurement-grade bid decisions.",
  },
] as const;

export const homeComparisonRows = [
  {
    label: "Primary question answered",
    values: [
      "Should we pursue this, why, and what would change the decision?",
      "What tenders exist right now?",
      "Who might be showing broad commercial buying motion?",
    ],
  },
  {
    label: "Data model",
    values: [
      "History + capability + reach + opportunity",
      "Tender notice and document metadata",
      "Behavioural, firmographic, and engagement signals",
    ],
  },
  {
    label: "Best commercial value",
    values: [
      "Qualifying pursuit and resolving amber bids",
      "Monitoring market opportunities",
      "Early account identification and outreach",
    ],
  },
] as const;

export const homeFaqs = [
  {
    question: "Who is BidBlender for?",
    answer:
      "BidBlender is for bid teams, growth teams, capture managers, and consulting firms that need to decide where to compete before they commit expensive proposal effort.",
  },
  {
    question: "Is BidBlender a bid-writing platform?",
    answer:
      "Not primarily. The product is focused on bid qualification and opportunity intelligence. It is designed to help teams decide whether to pursue and what evidence they still need before committing full bid effort.",
  },
  {
    question: "What makes the platform different from generic CRM reporting?",
    answer:
      "CRM data is one input, not the outcome. BidBlender uses CRM history alongside capability, relationship, and market-opportunity signals to create a procurement-specific decision layer.",
  },
  {
    question: "What happens when the answer is not clearly yes or no?",
    answer:
      "That is the key value zone. BidBlender is designed to turn ambiguous opportunities into a research agenda: what to validate, who to contact, and what would move the decision.",
  },
] as const;
