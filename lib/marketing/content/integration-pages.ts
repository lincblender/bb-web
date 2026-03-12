import type { FeaturePageContent } from "@/components/marketing/FeaturePage";

export const integrationPageContent: Record<
  | "hub"
  | "hubspot"
  | "linkedin"
  | "salesforce"
  | "workday"
  | "cornerstone"
  | "tenderlink"
  | "austender",
  FeaturePageContent
> = {
  hub: {
    title: "Integrations for procurement opportunity intelligence",
    intro:
      "BidBlender becomes more useful as more real evidence is connected. Integrations should be explained in terms of the decisions they improve, not just the systems they connect to.",
    cardSections: [
      {
        items: [
          {
            title: "HubSpot",
            body: "CRM history, deals, contacts, and buyer context.",
            href: "/integrations/hubspot",
            iconType: "hubspot",
            badges: ["Deal memory", "Buyer context", "Prior pursuits"],
          },
          {
            title: "LinkedIn",
            body: "Relationship reach and network proximity.",
            href: "/integrations/linkedin",
            iconType: "linkedin",
            badges: ["Buyer access", "Network reach", "Adjacency"],
          },
          {
            title: "Salesforce",
            body: "CRM history, account structure, pipeline memory, and customer context.",
            href: "/integrations/salesforce",
            iconType: "salesforce",
            badges: ["Account history", "Pipeline memory", "Buyer context"],
          },
          {
            title: "AusTender",
            body: "Commonwealth opportunity discovery and procurement monitoring.",
            href: "/integrations/austender",
            iconType: "austender",
            badges: ["Gov tenders", "Market visibility", "Deadlines"],
          },
          {
            title: "API",
            body: "Programmatic access to structured opportunity intelligence.",
            href: "/integrations/api",
            iconType: "api",
            badges: ["Programmatic access", "Structured outputs", "Sync workflows"],
          },
          {
            title: "MCP",
            body: "Flexible tool and resource connectivity for technical teams.",
            href: "/integrations/mcp",
            iconType: "mcp",
            badges: ["Internal tools", "Knowledge access", "Research depth"],
          },
          {
            title: "Webhooks",
            body: "Push BidBlender events into external workflows.",
            href: "/integrations/webhook",
            iconType: "webhook",
            badges: ["Event push", "Automation", "Workflow triggers"],
          },
          {
            title: "Zapier",
            body: "Connect BidBlender to thousands of apps via Zapier automation.",
            href: "/integrations/zapier",
            iconType: "zapier",
            badges: ["No-code flows", "App automation", "Notifications"],
          },
          {
            title: "NotebookLM",
            body: "AI-powered research and knowledge synthesis with BidBlender context.",
            href: "/integrations/notebooklm",
            iconType: "notebooklm",
            badges: ["Research synthesis", "Knowledge analysis", "Document context"],
          },
        ],
        cols: 2,
        relatedLinks: [
          { label: "Platform", href: "/platform" },
          { label: "Connectors", href: "/connectors" },
          { label: "Resources", href: "/resources" },
        ],
      },
    ],
  },
  hubspot: {
    title: "HubSpot integration",
    iconType: "hubspot",
    signalBadges: ["Deal memory", "Buyer context", "Prior pursuits"],
    intro:
      "For BidBlender, HubSpot belongs to the History paradigm. It is not the whole product, but it is a valuable source of past deals, account history, contacts, and buyer memory that can improve qualification accuracy.",
    cardSections: [
      {
        items: [
          {
            title: "What HubSpot contributes",
            body: "Deals, contacts, companies, tickets, notes, and historical account activity help BidBlender understand what your team has already sold, who it knows, and how similar buyers have behaved previously.",
          },
          {
            title: "What HubSpot does not replace",
            body: "HubSpot does not replace relationship graphing, tender discovery, or capability evidence. It strengthens history and buyer context, but it is one paradigm in a broader system.",
            inlineLinks: [
              { anchor: "relationship graphing", href: "/network-intelligence" },
              { anchor: "tender discovery", href: "/connectors" },
            ],
            relatedLinks: [{ label: "Connectors", href: "/connectors" }],
          },
          {
            title: "How the data should be used",
            body: "Use HubSpot to compare new opportunities against prior work, understand buyer familiarity, surface account history, and enrich the early commercial picture before committing pursuit effort.",
          },
          {
            title: "What the website should state clearly",
            body: "The right message is that HubSpot powers history. It should not be framed as the whole opportunity intelligence story, because the product depends on capability, reach, and opportunity data as well.",
            inlineLinks: [{ anchor: "opportunity intelligence", href: "/opportunity-intelligence" }],
            relatedLinks: [{ label: "CRM Data for Bid Teams", href: "/resources/crm-data-for-bid-teams" }],
          },
        ],
        cols: 2,
      },
    ],
    faqSection: {
      items: [
        {
          question: "Would a HubSpot integration use MCP auth apps or another HubSpot API path?",
          answer:
            "For a user-facing production integration, the appropriate path is HubSpot's standard app and OAuth ecosystem for CRM data access. MCP auth apps are useful in the MCP tooling context, but they are not the core product integration story the public site should lead with.",
        },
        {
          question: "Why is HubSpot valuable in BidBlender?",
          answer:
            "Because it gives the product memory. BidBlender can use that memory to compare opportunities against prior pursuits, known buyers, internal deal context, and commercial history.",
        },
        {
          question: "What category should HubSpot sit under in the connectors story?",
          answer:
            "History. It is a clear fit with the paradigm model already present in the product: History, Capability, Reach, Opportunity.",
        },
        {
          question: "What should be implied cautiously?",
          answer:
            "Deeper CRM-driven intelligence, richer account scoring, and stronger buyer-history comparison are all credible future capabilities, but the site should distinguish between what is live, what is connected, and what is planned.",
        },
      ],
    },
  },
  linkedin: {
    title: "LinkedIn integration",
    iconType: "linkedin",
    signalBadges: ["Buyer access", "Network reach", "Adjacency"],
    intro:
      "LinkedIn belongs primarily to the Reach paradigm. It helps BidBlender reason about network proximity, buyer adjacency, and relationship pathways that can affect whether a technically strong opportunity has a credible path to attention.",
    cardSections: [
      {
        items: [
          {
            title: "What LinkedIn contributes",
            body: "Relationship paths, shared history, employer overlap, and human network context can help a team understand where buyer access may be strong or thin.",
          },
          {
            title: "What it should not be mistaken for",
            body: "LinkedIn is not the whole product and should not be presented as a guarantee of influence. It is a reach signal that becomes more valuable when combined with capability and opportunity evidence.",
            relatedLinks: [{ label: "Network Intelligence", href: "/network-intelligence" }],
          },
          {
            title: "Why the integration matters",
            body: "Many bids are won or lost partly on buyer familiarity and access. LinkedIn gives BidBlender one of the clearest pathways for modelling that reality.",
          },
          {
            title: "What needs careful messaging",
            body: "Consent, source limits, and what is actually accessible through authorised integrations all need to be described carefully and honestly.",
          },
        ],
        cols: 2,
      },
    ],
    faqSection: {
      items: [
        {
          question: "Does LinkedIn make BidBlender a social selling tool?",
          answer:
            "No. The role of LinkedIn in BidBlender is procurement-specific reach analysis: understanding network proximity and possible access paths in the context of bid qualification.",
        },
        {
          question: "How should the site talk about verified signals?",
          answer:
            "Carefully. Verification can improve confidence in consenting user data, but it is not a substitute for broader opportunity or source-confidence logic.",
        },
      ],
    },
  },
  salesforce: {
    title: "Salesforce integration",
    iconType: "salesforce",
    signalBadges: ["Account history", "Pipeline memory", "Buyer context"],
    intro:
      "Salesforce sits in the History paradigm alongside HubSpot. For customers who already run deal history, account structures, and buyer memory through Salesforce, BidBlender should use that context to improve opportunity qualification rather than asking teams to rebuild it manually.",
    cardSections: [
      {
        items: [
          {
            title: "What Salesforce contributes",
            body: "Accounts, contacts, opportunities, notes, activity history, and prior deal context help the platform understand what the team has seen before and where the buyer relationship already exists.",
          },
          {
            title: "Why history matters",
            body: "Past pursuits and customer memory make new opportunities more intelligible. They help BidBlender reason about similarity, strategic relevance, and account familiarity.",
          },
          {
            title: "What it does not replace",
            body: "Salesforce strengthens history and account context, but it still needs to be blended with capability, reach, and live opportunity signals.",
            inlineLinks: [{ anchor: "opportunity signals", href: "/opportunity-intelligence" }],
            relatedLinks: [{ label: "CRM Data for Bid Teams", href: "/resources/crm-data-for-bid-teams" }],
          },
          {
            title: "Who this matters to",
            body: "Larger and more process-heavy organisations that already live in Salesforce will want BidBlender to augment that system, not compete with it.",
          },
        ],
        cols: 2,
      },
    ],
  },
  workday: {
    title: "Workday integration",
    iconType: "workday",
    signalBadges: ["Skills evidence", "Team readiness", "Capability depth"],
    intro:
      "Workday fits the Capability paradigm. It matters because procurement decisions are partly about whether a team actually has the people, skills, and delivery readiness to back up what it intends to bid.",
    cardSections: [
      {
        items: [
          {
            title: "Capability evidence",
            body: "People data, team structures, roles, skills, and availability signals can help BidBlender reason about whether delivery claims are grounded in real organisational capacity.",
          },
          {
            title: "Why this matters",
            body: "Bid teams often rely on static assumptions about internal capability. Workday-style data can make those assumptions more current and defensible.",
          },
          {
            title: "What should be framed carefully",
            body: "The site should talk about capability context and delivery readiness, not imply that every HR field automatically becomes procurement intelligence.",
          },
          {
            title: "Best role in the system",
            body: "Workday is strongest when it enriches the organisation profile and helps ground delivery fit in real team evidence.",
          },
        ],
        cols: 2,
      },
    ],
  },
  cornerstone: {
    title: "Cornerstone integration",
    iconType: "cornerstone",
    signalBadges: ["Training signals", "Credential coverage", "Readiness"],
    intro:
      "Cornerstone and similar LMS platforms fit the Capability paradigm by adding learning, certification, and workforce-readiness evidence that a static organisation profile may not capture well on its own.",
    cardSections: [
      {
        items: [
          {
            title: "Learning and readiness signals",
            body: "Training completion, certification coverage, and role readiness can strengthen BidBlender's view of delivery capability for regulated or specialist work.",
          },
          {
            title: "Why LMS data matters",
            body: "In some tenders, capability is not just what the team says it can do. It is what the team can demonstrate through maintained credentials and current training.",
          },
          {
            title: "What the site should avoid",
            body: "The site should avoid implying that LMS data alone proves delivery success. It is one useful evidence layer inside a broader capability model.",
          },
          {
            title: "How it fits commercially",
            body: "Cornerstone-style integrations are most compelling for teams where credentials, compliance, and current learning status materially affect whether a bid is believable.",
          },
        ],
        cols: 2,
      },
    ],
  },
  tenderlink: {
    title: "Tenderlink integration",
    iconType: "tenderlink",
    signalBadges: ["Tender discovery", "Market monitoring", "Procurement timing"],
    intro:
      "Tenderlink belongs to the Opportunity paradigm. It helps BidBlender identify what is live in market and bring those signals into the same qualification workflow used for buyer access, capability fit, and strategy.",
    cardSections: [
      {
        items: [
          {
            title: "What Tenderlink contributes",
            body: "Tender discovery, source links, document access, deadlines, and procurement movement all help the system understand what opportunities are emerging and how quickly teams need to respond.",
          },
          {
            title: "Why it matters",
            body: "Without opportunity sources, BidBlender has nothing live to evaluate. Tenderlink provides one of the practical entry points into procurement market visibility.",
          },
          {
            title: "What it does not solve alone",
            body: "Tender discovery is necessary but not sufficient. The value comes when those opportunities are ranked and qualified against internal evidence and buyer access.",
          },
          {
            title: "What the site should emphasise",
            body: "Tenderlink helps power opportunity visibility. BidBlender adds the qualification layer on top.",
          },
        ],
        cols: 2,
      },
    ],
  },
  austender: {
    title: "AusTender integration",
    iconType: "austender",
    signalBadges: ["Commonwealth work", "Opportunity feed", "Procurement visibility"],
    intro:
      "AusTender is a key Opportunity source for Commonwealth procurement. In BidBlender, it should be framed as one of the foundational market inputs that help teams monitor, review, and qualify live government work.",
    cardSections: [
      {
        items: [
          {
            title: "Government opportunity visibility",
            body: "AusTender can supply current notices, source links, buyer context, and procurement timing relevant to Commonwealth work.",
          },
          {
            title: "Why it matters for BidBlender",
            body: "For public-sector suppliers, Commonwealth visibility is a core part of the opportunity picture. BidBlender becomes more useful when that feed is blended with buyer history, capability, and reach.",
          },
          {
            title: "Where the value sits",
            body: "The commercial value is not in mirroring AusTender. It is in using AusTender as a source inside a richer qualification and prioritisation workflow.",
          },
          {
            title: "How to talk about it publicly",
            body: "The site should explain AusTender as a practical opportunity input without overstating coverage or pretending every procurement source behaves the same way.",
          },
        ],
        cols: 2,
      },
    ],
  },
};
