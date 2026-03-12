import type { MarketingCardItem } from "@/components/marketing/MarketingCardSection";

export const investorsIntro =
  "Bid teams waste time and budget pursuing opportunities they shouldn't. BidBlender helps them decide earlier: bid, research further, or no-bid. One platform that blends CRM, tender boards, capability data, and relationship intelligence into a single decision surface.";

export const investorsSignalBadges = [
  "Blended evidence",
  "Traffic-light decisions",
  "Procurement-specific",
] as const;

export const investorsStats = [
  {
    value: "4",
    label: "Data paradigms",
    detail: "History, Capability, Reach, and Opportunity blend into one decision system.",
  },
  {
    value: "4",
    label: "Pricing tiers",
    detail: "Free, Starter, Team, and Enterprise packaging for different levels of maturity.",
  },
  {
    value: "Amber",
    label: "Primary value zone",
    detail: "The product is strongest when teams need evidence, not opinion.",
  },
  {
    value: "Live",
    label: "Product status",
    detail: "Core platform in use; integrations and expansion path in active development.",
  },
] as const;

export const investorsExploreLinks = [
  {
    title: "Platform overview",
    href: "/platform",
    description: "How the platform blends four paradigms into one decision model.",
    badges: ["Chat-first", "Decision surface", "Connected evidence"],
  },
  {
    title: "Bid / No Bid",
    href: "/bid-no-bid",
    description: "The traffic-light qualification model and why it matters.",
    badges: ["Green / Amber / Red", "Evidence-led", "Rationale"],
  },
  {
    title: "Integrations",
    href: "/integrations",
    description: "HubSpot, Salesforce, LinkedIn, tender boards, API, and more.",
    badges: ["CRM", "Reach", "Opportunity"],
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Free tier, Starter, Team, and Enterprise packaging.",
    badges: ["Ad-supported free", "Paid tiers", "Enterprise"],
  },
  {
    title: "Four evidence pillars",
    href: "/four-evidence-pillars",
    description: "The four paradigms explained: why blended evidence matters.",
    badges: ["History", "Capability", "Reach", "Opportunity"],
  },
  {
    title: "Contact",
    href: "/contact",
    description: "General enquiries, demos, and partnerships.",
    badges: ["Demos", "Partnerships"],
  },
] as const;

export const investorsCards: MarketingCardItem[] = [
  {
    title: "The problem",
    body: "Most bid tools do one thing: tender feeds, CRM dashboards, or generic sales intent. Teams stitch them together manually. The real question—should we pursue this?—gets answered too late, with too little evidence, and too much guesswork.",
  },
  {
    title: "The product",
    body: "BidBlender connects the evidence: tender boards for what's in market, CRM for history, HCM/LMS for capability, LinkedIn for reach. A chat-first interface lets teams interrogate opportunities and get traffic-light recommendations—bid, research, or no-bid—with supporting rationale.",
  },
  {
    title: "Commercial model",
    body: "Free tier (ad-supported) for evaluation. Paid tiers from $19/mo (Starter) to $79/mo (Team) for ad-free, multi-user workflows. Enterprise for larger rollouts. Target: government suppliers, capture managers, bid teams, and consultancies.",
  },
  {
    title: "Category thesis",
    body: "Procurement qualification is a blended-evidence problem. No single data source answers it. BidBlender's four paradigms—History, Capability, Reach, Opportunity—give the platform a defensible narrative and a modular integration story.",
  },
  {
    title: "Commercial wedge",
    body: "The highest value is in ambiguous opportunities: not obvious wins or obvious losses, but the middle band where teams need evidence to decide whether to commit. That's where BidBlender earns its keep.",
  },
  {
    title: "Expansion path",
    body: "API access, deeper integrations, workflow automation, and stronger decision infrastructure for larger procurement teams. The platform is built to extend without re-architecting.",
  },
];
