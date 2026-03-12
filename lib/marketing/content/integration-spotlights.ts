import type { IntegrationSpotlightContent } from "@/components/marketing/IntegrationSpotlightPage";

export const integrationSpotlights: Record<"hubspot" | "mcp", IntegrationSpotlightContent> = {
  hubspot: {
    title: "HubSpot for bid memory and buyer context",
    intro:
      "HubSpot is valuable to BidBlender users because it gives the platform commercial memory: what your team has sold before, who it already knows, which buyers resemble each other, and where account familiarity should shape a bid / research / no-bid decision.",
    iconType: "hubspot",
    eyebrow: "History Integration",
    accentClass: "text-[#ff7a59]",
    accentSoftClass: "bg-[#ff7a59]/8",
    accentBorderClass: "border-[#ff7a59]/25",
    leadPoints: [
      "Compare a live tender against prior deals, related buyers, and earlier pursuit context instead of starting from zero.",
      "Surface who in your team has already touched the account, what similar work has been won or lost, and where institutional memory changes the quality of the decision.",
      "Feed BidBlender a stronger History layer so opportunity scoring is grounded in real commercial evidence rather than generic matching alone.",
    ],
    diagram: {
      left: {
        title: "From HubSpot",
        items: [
          "Deals and past opportunities",
          "Companies, contacts, and notes",
          "Tickets, activity, and account history",
        ],
      },
      center: {
        title: "Inside BidBlender",
        items: [
          "Buyer familiarity scoring",
          "Similar-pursuit comparison",
          "History-informed qualification context",
        ],
      },
      right: {
        title: "What the user gets",
        items: [
          "Stronger bid / research / no-bid judgment",
          "Better account memory during document review",
          "Clearer context in the opportunity panel",
        ],
      },
      caption:
        "The point is not to mirror a CRM. It is to let BidBlender use CRM history as one of the evidence layers that improves qualification, prioritisation, and buyer-context awareness.",
    },
    signalStrip: {
      title: "Where HubSpot helps most",
      items: [
        "Prior work comparison",
        "Buyer familiarity",
        "Deal memory",
        "Known contacts",
        "Account context",
      ],
    },
    cardSections: [
      {
        title: "Why HubSpot makes BidBlender sharper",
        items: [
          {
            title: "Stops every new tender feeling brand new",
            body: "A procurement notice may be new, but the buyer often is not. HubSpot lets BidBlender recognise shared context, related prior pursuits, and existing account memory before the team overreacts to a fresh document.",
          },
          {
            title: "Improves the quality of amber decisions",
            body: "Ambiguous bids become easier to reason about when the platform can say this buyer looks similar to previous wins, this account has weak prior contact, or this pursuit resembles one your team dropped for a clear reason.",
          },
          {
            title: "Supports better opportunity context",
            body: "HubSpot helps enrich the right-hand opportunity context with commercial history, familiar names, and account-level evidence that would otherwise stay trapped in CRM screens or human memory.",
          },
          {
            title: "Gives growth and bid teams shared commercial memory",
            body: "One of the practical wins is that HubSpot history can stop handoff loss. The same underlying account memory becomes visible to the team qualifying the opportunity, not just the team managing the account.",
          },
        ],
        cols: 2,
      },
    ],
    processSection: {
      title: "How HubSpot should improve a BidBlender workflow",
      intro:
        "The commercial logic is straightforward: connect history once, then reuse it everywhere the team needs better judgment.",
      steps: [
        {
          title: "Connect account and deal history",
          description:
            "Bring companies, contacts, deals, and related activity into BidBlender so the platform can understand what commercial memory already exists.",
        },
        {
          title: "Match live opportunities against known context",
          description:
            "Use that history to compare a new opportunity to similar buyers, similar work, and prior pursuits instead of evaluating it in isolation.",
        },
        {
          title: "Enrich the decision surface",
          description:
            "Expose the strongest history signals inside chat, the opportunity panel, and strategy views where the team is already making qualification decisions.",
        },
        {
          title: "Direct action with better memory",
          description:
            "Help the team know whether this is a familiar buyer, a cold account, a repeat shape of work, or a pursuit that resembles something already learned the hard way.",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Why is HubSpot more than a nice-to-have in BidBlender?",
          answer:
            "Because it provides one of the strongest low-friction sources of commercial memory. That memory improves qualification quality well before a team writes a proposal.",
        },
        {
          question: "Does HubSpot replace the need for reach, capability, or opportunity data?",
          answer:
            "No. It strengthens the History paradigm. BidBlender still needs Capability, Reach, and Opportunity evidence to produce a balanced procurement-specific decision.",
        },
        {
          question: "What type of BidBlender user benefits most?",
          answer:
            "Teams that already hold valuable buyer and pursuit context in HubSpot but are not yet using it systematically during bid qualification will benefit most.",
        },
      ],
    },
    cta: {
      title: "See how CRM history improves qualification",
      description:
        "If HubSpot already contains your buyer memory, BidBlender should be able to turn that memory into better early pursuit judgment rather than leaving it trapped in the CRM.",
    },
  },
  mcp: {
    title: "MCP for extensible bid intelligence",
    intro: [
      "Traditionally, gathering data from all of your sources, such as your CRM, your company's skills library, your network presence, organisational interests, and competitive position, was a tiresome, time-consuming venture. It could take months, the data would age before you could use it, and the results were difficult to parse, blend, and compare.",
      "With BidBlender, we leverage MCP (Model Context Protocol) to bring that data to you instantaneously from all of your sources, giving you immediate opportunity intelligence.",
    ],
    iconType: "mcp",
    eyebrow: "Extensibility Layer",
    accentClass: "text-white",
    accentSoftClass: "bg-white/5",
    accentBorderClass: "border-white/15",
    leadPoints: [
      "Pull in internal files, knowledge bases, and structured resources without waiting for every source to become a dedicated product connector.",
      "Let BidBlender resolve amber bids with richer internal context, not just public tender data and generic prompts.",
      "Make the platform more useful for technical teams that already have tools and data worth surfacing inside procurement workflows.",
    ],
    diagram: {
      left: {
        title: "Through MCP",
        items: [
          "Internal file systems",
          "Knowledge bases and wikis",
          "Custom tools and resources",
        ],
      },
      center: {
        title: "Inside BidBlender",
        items: [
          "Tool-assisted research",
          "Internal evidence retrieval",
          "Richer context for amber decisions",
        ],
      },
      right: {
        title: "What the user gets",
        items: [
          "Faster research on real internal sources",
          "Less copy-paste between systems",
          "More credible decision support",
        ],
      },
      caption:
        "MCP is not just another integration logo. It is the mechanism that lets BidBlender become more context-aware in environments where the important evidence lives across internal systems and tools.",
    },
    signalStrip: {
      title: "Where MCP helps most",
      items: [
        "Internal knowledge",
        "Tool access",
        "Custom resources",
        "Research depth",
        "Amber resolution",
      ],
    },
    cardSections: [
      {
        title: "Why MCP is strategically useful in BidBlender",
        items: [
          {
            title: "Bridges the gap between product and customer reality",
            body: "Many teams have critical pursuit evidence in internal systems that do not warrant a full native connector. MCP gives BidBlender a route to that context without pretending every environment should look the same.",
          },
          {
            title: "Improves research-heavy qualification work",
            body: "MCP is especially useful when the answer depends on internal documents, prior proposals, team knowledge, or niche systems that need to be consulted during an amber decision.",
          },
          {
            title: "Reduces brittle manual workflows",
            body: "Without something like MCP, users end up copy-pasting between tabs, summarising internal material by hand, and hoping the model keeps track. MCP gives that process more structure.",
          },
          {
            title: "Makes BidBlender more attractive to technical buyers",
            body: "For teams that already manage internal tools seriously, MCP signals that BidBlender can adapt to their operating environment instead of forcing everything through a fixed connector list.",
          },
        ],
        cols: 2,
      },
    ],
    processSection: {
      title: "How MCP should work for a BidBlender user",
      intro:
        "The value is not the protocol itself. The value is how quickly it improves the quality of a live qualification workflow.",
      steps: [
        {
          title: "Connect an MCP-accessible source",
          description:
            "Attach the internal tool, resource server, or knowledge source that holds the evidence your team actually needs during qualification.",
        },
        {
          title: "Query that source inside BidBlender",
          description:
            "Let BidBlender reach into the connected resource when the user is reviewing a tender, investigating a blocker, or trying to resolve an amber decision.",
        },
        {
          title: "Blend internal and external context",
          description:
            "Use MCP alongside the existing History, Capability, Reach, and Opportunity evidence rather than treating internal tools as a separate disconnected workflow.",
        },
        {
          title: "Shorten the path to a defensible decision",
          description:
            "Turn scattered internal context into something the team can actually act on while the opportunity is still fresh and worth qualifying properly.",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Who will care most about MCP in BidBlender?",
          answer:
            "Technically mature teams, internal platform groups, and customers with important evidence trapped in bespoke internal systems will care the most.",
        },
        {
          question: "Is MCP a replacement for native integrations?",
          answer:
            "No. It is an extensibility model. Native integrations still matter, but MCP gives BidBlender a practical way to reach useful sources that would otherwise stay outside the qualification workflow.",
        },
        {
          question: "Why does MCP belong on the public site at all?",
          answer:
            "Because it communicates that BidBlender is not limited to a fixed connector list. It signals a more adaptable platform story for technical buyers and implementation-minded teams.",
        },
      ],
    },
    cta: {
      title: "Make BidBlender more context-aware",
      description:
        "If the evidence your team needs is spread across internal tools and knowledge sources, MCP is one of the clearest ways to bring that context into the qualification workflow.",
    },
  },
};
