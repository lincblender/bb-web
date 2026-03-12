import type { StructuredInfoPageContent } from "@/components/marketing/StructuredInfoPage";

export const developerPageContent: Record<
  "api" | "mcp" | "webhook" | "zapier" | "notebooklm",
  StructuredInfoPageContent
> = {
  api: {
    title: "API",
    iconType: "api",
    signalBadges: ["Programmatic access", "Structured outputs", "Workflow sync"],
    intro:
      "The BidBlender API should eventually give customers a direct way to bring opportunity intelligence into their own workflows, data models, and internal systems without forcing every interaction through the UI.",
    cards: [
      {
        title: "What the API should expose",
        body: "Opportunity records, assessments, decision states, connector status, and organisation context are the most obvious initial API surfaces.",
      },
      {
        title: "Why it matters",
        body: "Some customers will want BidBlender to sit inside a broader revenue, bid, or data stack. An API makes that possible without reducing the product to manual exports.",
      },
      {
        title: "What should be stated carefully",
        body: "The site should signal the API as part of the platform direction, but distinguish clearly between current internal APIs and any future customer-facing API program.",
      },
      {
        title: "Where API value is strongest",
        body: "Teams with their own dashboards, BI layers, workflow tools, or internal knowledge systems will benefit most from direct access to structured BidBlender outputs.",
      },
    ],
    faqItems: [
      {
        question: "Is there a customer API today?",
        answer:
          "This page should frame the API as part of the platform direction unless and until a formal customer-facing API is released with authentication, docs, and support expectations.",
      },
      {
        question: "What would the API be used for first?",
        answer:
          "The highest-value early use cases are pulling opportunity assessments, pushing internal context, and synchronising structured decision outputs into customer systems.",
      },
      {
        question: "Why should the site include this page now?",
        answer:
          "Because it helps signal the platform direction to technical buyers, data teams, and implementation-minded customers without overclaiming current delivery.",
      },
      {
        question: "How should API access be commercialised?",
        answer:
          "API access is a natural candidate for higher-tier plans or usage-governed packaging, especially where customers want deeper integration or higher-volume programmatic usage.",
      },
    ],
  },
  mcp: {
    title: "MCP",
    iconType: "mcp",
    signalBadges: ["Internal tools", "Knowledge access", "Research depth"],
    intro:
      "Model Context Protocol support matters because it gives BidBlender a structured way to connect external tools and data sources without treating every integration as a custom one-off build.",
    cards: [
      {
        title: "Why MCP matters",
        body: "MCP provides a cleaner pattern for bringing external systems into the product as tools, resources, or connected data surfaces.",
      },
      {
        title: "Where MCP fits",
        body: "MCP is especially relevant when a customer already has internal systems or knowledge sources that are not worth integrating through a traditional native connector first.",
      },
      {
        title: "What the site should avoid",
        body: "The site should avoid presenting MCP as a replacement for standard customer-facing integrations. It is a platform extensibility story, not the only integration model.",
      },
      {
        title: "Commercial significance",
        body: "MCP support can make BidBlender more attractive to technically mature teams because it lowers the friction of proving value with existing internal systems.",
      },
    ],
  },
  webhook: {
    title: "Webhooks",
    iconType: "webhook",
    signalBadges: ["Event push", "Automation", "Workflow triggers"],
    intro:
      "Webhook support is the right pattern when customers want BidBlender to push change events outward instead of polling for them.",
    cards: [
      {
        title: "Likely webhook events",
        body: "Opportunity created, decision state changed, connector status changed, document analysed, and assessment updated are the most obvious high-value event types.",
      },
      {
        title: "Why webhooks matter",
        body: "They let customers trigger internal workflows when new intelligence appears instead of forcing users to manually check the product.",
      },
      {
        title: "How this fits the product story",
        body: "Webhooks reinforce the idea that BidBlender is a platform and a system of intelligence, not just a static dashboard.",
      },
      {
        title: "How this should be positioned today",
        body: "Signal webhook readiness as part of the platform direction, with care around what is internal versus what is exposed for customers.",
      },
    ],
  },
  zapier: {
    title: "Zapier",
    iconType: "zapier",
    signalBadges: ["No-code flows", "App automation", "Notifications"],
    intro:
      "BidBlender can connect to thousands of apps via Zapier, enabling automation between opportunity intelligence and your existing workflows.",
    cards: [
      {
        title: "What Zapier enables",
        body: "Trigger workflows when opportunities change, sync assessments to CRM, notify teams of new opportunities, and automate data flow between BidBlender and your stack.",
      },
      {
        title: "Why it matters",
        body: "Teams already using Zapier for CRM, Slack, email, or project tools can extend those automations to include BidBlender without custom development.",
      },
      {
        title: "Coming soon",
        body: "Zapier integration is part of our platform roadmap. Contact us to express interest or discuss early access.",
      },
    ],
  },
  notebooklm: {
    title: "NotebookLM",
    iconType: "notebooklm",
    signalBadges: ["Research synthesis", "Knowledge analysis", "Document context"],
    intro:
      "NotebookLM combines AI-powered research with your knowledge. BidBlender context can enrich how you understand opportunities and procurement intelligence.",
    cards: [
      {
        title: "What NotebookLM contributes",
        body: "NotebookLM excels at synthesising documents and research. BidBlender context on opportunities, buyers, and fit can supplement that research.",
      },
      {
        title: "Why it matters",
        body: "For complex bids, combining BidBlender's qualification signals with NotebookLM's research synthesis can deepen your understanding before committing.",
      },
      {
        title: "Integration direction",
        body: "NotebookLM integration is part of our platform roadmap. Contact us to express interest or discuss how BidBlender and NotebookLM could work together.",
      },
    ],
  },
};
