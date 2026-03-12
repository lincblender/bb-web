import { APP_SIGNUP_URL } from "./config";

export interface MarketingNavLink {
  label: string;
  href: string;
  description?: string;
}

export interface MarketingNavGroup {
  label: string;
  items: MarketingNavLink[];
}

export const headerNavGroups: MarketingNavGroup[] = [
  {
    label: "Platform",
    items: [
      {
        label: "Platform overview",
        href: "/platform",
        description: "See how BidBlender blends history, capability, reach, and opportunity.",
      },
      {
        label: "Four Evidence Pillars",
        href: "/four-evidence-pillars",
        description: "Learn the History, Capability, Reach, and Opportunity model behind the product.",
      },
      {
        label: "Bid / No Bid",
        href: "/bid-no-bid",
        description: "Understand the traffic-light decision model and amber-resolution workflows.",
      },
      {
        label: "Document review",
        href: "/document-review",
        description: "Compare tender documents against your delivery profile and prior work.",
      },
      {
        label: "Connectors",
        href: "/connectors",
        description: "See how CRM, capability, reach, and tender sources feed the platform.",
      },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        label: "Opportunity intelligence",
        href: "/opportunity-intelligence",
        description: "Qualify live opportunities before expensive bid effort starts.",
      },
      {
        label: "Network intelligence",
        href: "/network-intelligence",
        description: "Assess relationship reach, thin access zones, and buyer adjacency.",
      },
      {
        label: "How it works",
        href: "/how-it-works",
        description: "Walk through the product flow from source connection to decision.",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Integrations",
        href: "/integrations",
        description: "Explore the integration model across native connectors and platform extensibility.",
      },
      {
        label: "HubSpot",
        href: "/integrations/hubspot",
        description: "Bring CRM history into BidBlender for bid memory and buyer context.",
      },
      {
        label: "API",
        href: "/integrations/api",
        description: "Programmatic access for teams that want BidBlender inside their own systems.",
      },
      {
        label: "MCP",
        href: "/integrations/mcp",
        description: "Use MCP for faster extensibility into internal tools and data surfaces.",
      },
      {
        label: "Webhooks",
        href: "/integrations/webhook",
        description: "Push change events into downstream workflow and automation layers.",
      },
    ],
  },
];

export const headerNavLinks: MarketingNavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export const footerLinkGroups = [
  {
    title: "Platform",
    links: [
      { label: "Platform overview", href: "/platform" },
      { label: "Four Evidence Pillars", href: "/four-evidence-pillars" },
      { label: "Bid / No Bid", href: "/bid-no-bid" },
      { label: "Document review", href: "/document-review" },
      { label: "Opportunity intelligence", href: "/opportunity-intelligence" },
      { label: "Network intelligence", href: "/network-intelligence" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Integrations", href: "/integrations" },
      { label: "HubSpot integration", href: "/integrations/hubspot" },
      { label: "API", href: "/integrations/api" },
      { label: "MCP", href: "/integrations/mcp" },
      { label: "Webhooks", href: "/integrations/webhook" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Book a demo", href: "/book-a-demo" },
      { label: "Contact", href: "/contact" },
      { label: "Media", href: "/media" },
      { label: "Investors", href: "/investors" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Start free", href: APP_SIGNUP_URL },
    ],
  },
] as const;
