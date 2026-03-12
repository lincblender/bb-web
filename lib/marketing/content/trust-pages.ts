import type { FeaturePageContent } from "@/components/marketing/FeaturePage";

export const trustPageContent: Record<"security" | "dataSources" | "methodology" | "roadmap", FeaturePageContent> = {
  security: {
    title: "Security",
    intro:
      "BidBlender handles commercially sensitive bid context, so the public site needs to explain security posture in plain language: how data is protected, where responsibility sits, and what customers should expect as the platform matures.",
    cardSections: [
      {
        title: "What this page should communicate",
        items: [
          {
            title: "Protected access",
            body: "User authentication, tenant separation, and access controls should be described clearly so customers understand that BidBlender is built for team and organisation boundaries, not public data exposure.",
          },
          {
            title: "Data handling",
            body: "The site should explain that customer-provided data, uploaded documents, and connected-source context are handled as protected business information rather than treated casually as marketing data.",
          },
          {
            title: "Operational security",
            body: "Infrastructure, logging, secret management, and change control should be described at the level needed to build trust without publishing unnecessary operational detail.",
          },
          {
            title: "Shared responsibility",
            body: "Customers also need to understand what remains in their control: connector scopes, document uploads, user permissions, and internal governance around sensitive material.",
          },
        ],
        cols: 2,
      },
    ],
    faqSection: {
      items: [
        {
          question: "Should this page over-promise certifications?",
          answer:
            "No. The page should be specific about current practices and careful about any future certifications or compliance work that is not yet complete.",
        },
        {
          question: "How detailed should public security copy be?",
          answer:
            "Detailed enough to build buyer confidence, but not so detailed that it becomes an unnecessary disclosure of internal operational specifics.",
        },
      ],
    },
  },
  dataSources: {
    title: "Data sources",
    intro:
      "BidBlender only becomes useful when buyers understand what kinds of evidence sit inside the system. The data-sources page should explain what comes from connected systems, what comes from public procurement sources, and what is inferred from combined evidence.",
    cardSections: [
      {
        title: "Core source classes",
        items: [
          {
            title: "History",
            body: "CRM systems, prior opportunities, account notes, and internal pursuit memory provide the baseline commercial context for comparison and qualification.",
          },
          {
            title: "Capability",
            body: "Organisation profiles, certifications, case studies, and eventually HCM or LMS systems provide the evidence base for delivery fit and readiness.",
          },
          {
            title: "Reach",
            body: "Relationship and network sources help BidBlender reason about proximity, adjacency, and likely paths into the buyer side of a pursuit.",
          },
          {
            title: "Opportunity",
            body: "Tender boards, government procurement portals, and live market signals provide the actual opportunities that the system then qualifies against the other paradigms.",
          },
        ],
        cols: 2,
      },
    ],
    faqSection: {
      items: [
        {
          question: "Why does this page matter?",
          answer:
            "Because source transparency builds trust. Customers need to understand what BidBlender knows directly, what it derives from connected systems, and what remains incomplete.",
        },
        {
          question: "Should the site claim universal coverage?",
          answer:
            "No. Coverage should be explained realistically by source type, geography, and connection depth rather than implied as complete by default.",
        },
      ],
    },
  },
  methodology: {
    title: "Methodology",
    intro:
      "The methodology page should explain how BidBlender reasons about bid/no-bid decisions, why the four paradigms matter, and how the system is designed to pair recommendation with evidence confidence instead of hiding the logic behind black-box scoring.",
    cardSections: [
      {
        title: "How the model should be explained",
        items: [
          {
            title: "Four paradigms",
            body: "History, Capability, Reach, and Opportunity are the core evidence classes that shape how BidBlender interprets pursuit quality.",
          },
          {
            title: "Decision dimensions",
            body: "Pursuit capacity, buyer access, delivery fit, strategic desire, and evidence confidence provide a clearer model than a single opaque score.",
          },
          {
            title: "Traffic-light outcomes",
            body: "Green, Amber, and Red give the product an action-oriented output rather than forcing users to interpret a raw number without guidance.",
          },
          {
            title: "Confidence and blockers",
            body: "The methodology should make clear that ambiguous opportunities are often about missing evidence, not middling quality, and that the system should surface blockers and movers explicitly.",
          },
        ],
        cols: 2,
      },
    ],
    faqSection: {
      items: [
        {
          question: "Should this page expose the exact scoring implementation?",
          answer:
            "It should explain the logic and the reasoning structure clearly, but it does not need to publish every internal weighting or implementation detail.",
        },
        {
          question: "Why is methodology a trust page, not just a feature page?",
          answer:
            "Because it helps customers understand that BidBlender is structured and reasoned, not simply generating persuasive-looking summaries without a clear decision model.",
        },
      ],
    },
  },
  roadmap: {
    title: "Roadmap",
    intro:
      "The roadmap page should show where the platform is headed without making undisciplined promises. It should help buyers, partners, and investors understand the development direction across product depth, integrations, trust, and interactivity.",
    cardSections: [
      {
        title: "Current direction",
        items: [
          {
            title: "Deeper product surfaces",
            body: "Opportunity explorer, matrix, strategy recommendations, and organisation profile all deepen the qualification layer beyond a simple chat or tender feed.",
          },
          {
            title: "More evidence connections",
            body: "CRM, relationship, capability, and procurement-source integrations expand the quality of the decisions the platform can support.",
          },
          {
            title: "Trust and transparency",
            body: "Source visibility, methodology, confidence signalling, and honest limitations are all part of making the platform commercially credible.",
          },
          {
            title: "Interactive explanation",
            body: "The public site itself should increasingly show the product in motion through guided storytelling, walkthroughs, and interactive previews.",
          },
        ],
        cols: 2,
      },
    ],
    faqSection: {
      items: [
        {
          question: "How should planned work be described?",
          answer:
            "Using careful language such as live now, connected, in development, or planned. The roadmap should create confidence, not ambiguity or overclaiming.",
        },
        {
          question: "Why publish a roadmap at all?",
          answer:
            "Because BidBlender is establishing a category. Buyers need to understand both the current product and the direction of travel.",
        },
      ],
    },
  },
};
