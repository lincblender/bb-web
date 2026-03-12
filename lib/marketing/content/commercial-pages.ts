import type { FeaturePageContent } from "@/components/marketing/FeaturePage";

export const commercialPageContent: Record<
  "resources" | "bookDemo" | "contact",
  FeaturePageContent
> = {
  resources: {
    title: "Bid intelligence resources for procurement teams",
    intro:
      "This section is where BidBlender should build depth, search coverage, and credibility. The content should explain procurement-specific opportunity intelligence in plain, useful terms.",
    cardSections: [
      {
        items: [
          {
            title: "Bid / No Bid Framework",
            body: "A practical guide to the difference between obvious green bids, obvious red bids, and the amber opportunities where decision quality matters most.",
            href: "/resources/bid-no-bid-framework",
          },
          {
            title: "Opportunity Scoring",
            body: "How fit, access, strategy, and evidence confidence should work together in a procurement-specific qualification model.",
            href: "/resources/opportunity-scoring",
          },
          {
            title: "Network Strength In Procurement",
            body: "Why relationship density and decision-maker adjacency matter in bid outcomes, and why they still need to be combined with capability and opportunity evidence.",
            href: "/resources/network-strength-in-procurement",
          },
          {
            title: "How To Assess RFT Fit",
            body: "How to assess fit using delivery evidence, buyer context, and a more rigorous procurement-specific qualification lens.",
            href: "/resources/how-to-assess-rft-fit",
          },
          {
            title: "Tender Board Guide Australia",
            body: "How to think about Australian tender-board coverage and why discovery alone is not enough.",
            href: "/resources/tender-board-guide-australia",
          },
          {
            title: "CRM Data For Bid Teams",
            body: "How systems like HubSpot and Salesforce can contribute history without pretending to be the whole decision layer.",
            href: "/resources/crm-data-for-bid-teams",
          },
          {
            title: "Buyer Intent For Procurement",
            body: "Why procurement intent differs from generic sales intent and what a more defensible signal model looks like.",
            href: "/resources/buyer-intent-for-procurement",
          },
        ],
        cols: 2,
      },
      {
        title: "Comparison guides",
        intro:
          "These pages help buyers understand where BidBlender sits relative to common but incomplete alternatives.",
        items: [
          {
            title: "BidBlender vs CRM-only",
            body: "Why account memory matters, and why procurement qualification still needs capability, reach, and live opportunity context.",
            href: "/compare/crm-only",
          },
          {
            title: "BidBlender vs tender-board-only",
            body: "Why discovery matters, but still leaves teams without the buyer, capability, and decision context needed for real bid judgment.",
            href: "/compare/tender-board-only",
          },
          {
            title: "BidBlender vs generic sales intent",
            body: "Why bid teams need a more procurement-specific model than broad account-level buying signals.",
            href: "/compare/generic-sales-intent",
          },
        ],
        cols: 3,
      },
    ],
  },
  bookDemo: {
    title: "Book a bid intelligence demo",
    intro:
      "A useful demo should not be a generic product tour. It should show how BidBlender helps your team qualify work earlier, resolve ambiguity faster, and connect the evidence you already hold across systems.",
    processSection: {
      title: "What a demo should cover",
      steps: [
        {
          title: "Your current qualification workflow",
          description:
            "How your team currently decides what to pursue, where effort gets wasted, and where confidence is thin.",
        },
        {
          title: "Connected evidence",
          description:
            "Which CRM, capability, reach, and tender sources matter most in your environment.",
        },
        {
          title: "Product walkthrough",
          description:
            "A focused walkthrough of the dashboard, detail context, document review, matrix, strategy, and connectors.",
        },
        {
          title: "Rollout path",
          description:
            "What a practical first use case looks like, what should be connected first, and how to evaluate whether the product is genuinely useful.",
        },
      ],
    },
  },
  contact: {
    title: "Contact",
    intro:
      "This page should support demo requests, partnership conversations, integration enquiries, and direct product feedback without forcing every conversation through a generic sales form.",
    cardSections: [
      {
        items: [
          {
            title: "Demo enquiries",
            body: "Use this route when you want to see how BidBlender would fit your current bid workflow and existing systems.",
          },
          {
            title: "Integration discussions",
            body: "Use this route for CRM, LinkedIn, tender-board, HCM, LMS, and evidence-source conversations.",
          },
          {
            title: "Partnerships and product feedback",
            body: "Use this route for implementation partners, pilots, feedback, and market collaboration discussions.",
          },
        ],
        cols: 3,
      },
    ],
  },
};
