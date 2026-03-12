import type { ArticleContent } from "@/components/marketing/ArticlePage";

export const resourceArticles: Record<
  | "bidNoBidFramework"
  | "opportunityScoring"
  | "networkStrength"
  | "assessRftFit"
  | "tenderBoardGuideAustralia"
  | "crmDataForBidTeams"
  | "buyerIntentForProcurement",
  ArticleContent
> = {
  bidNoBidFramework: {
    eyebrow: "Resources",
    title: "Bid / No Bid Framework",
    intro:
      "A useful bid/no-bid framework is not a ritual approval step. It is a disciplined way to decide whether a real pursuit deserves scarce team attention, and what evidence still needs to be gathered when the answer is not yet obvious.",
    sections: [
      {
        title: "Why most teams need a framework",
        paragraphs: [
          "Teams often rely on instinct for obvious yes and obvious no opportunities. That works until an ambiguous pursuit consumes time, internal politics, and proposal effort without ever becoming commercially sensible.",
          "A structured framework gives teams a common language for judging opportunities consistently instead of improvising criteria every time a new RFT appears.",
        ],
      },
      {
        title: "The three practical states",
        paragraphs: [
          "The most useful operating model is Green, Amber, and Red. Green means the team has enough evidence to pursue. Red means the team has enough evidence to stop. Amber means the decision hinges on one or more unresolved questions.",
          "Amber is often where the commercial value sits, because it is where teams either learn what matters next or waste time pretending uncertainty is progress.",
        ],
        bullets: [
          "Green: enough positive evidence and confidence to pursue",
          "Amber: mixed signals or decisive unknowns that need resolution",
          "Red: enough negative evidence and confidence to stop early",
        ],
      },
      {
        title: "What the framework should test",
        paragraphs: [
          "A serious bid/no-bid model needs to cover more than surface fit. At minimum it should ask whether the team can resource the pursuit, whether it has a plausible path to buyer attention, whether it can credibly deliver, and whether it genuinely wants the work.",
        ],
        bullets: [
          "Pursuit capacity",
          "Buyer access",
          "Delivery fit",
          "Strategic desire",
          "Evidence confidence",
        ],
      },
    ],
    relatedLinks: [
      { label: "Bid / No Bid", href: "/bid-no-bid" },
      { label: "Methodology", href: "/methodology" },
    ],
    cta: {
      title: "See how BidBlender turns framework into workflow",
      description: "Explore the product pages to see how traffic-light decisions, blockers, and next-best actions fit together inside the platform.",
    },
  },
  opportunityScoring: {
    eyebrow: "Resources",
    title: "Opportunity Scoring",
    intro:
      "Opportunity scoring only becomes useful when it reflects the actual decision a team is trying to make. Procurement teams do not need another abstract score. They need a score that supports prioritisation, action, and honest confidence.",
    sections: [
      {
        title: "Why generic scoring fails",
        paragraphs: [
          "Many scoring models collapse too much into one number. The result looks tidy but hides the very tradeoffs teams need to discuss, such as strong fit with weak access or high strategic desire with low confidence.",
          "A procurement-specific model should show the component reasoning, not just the output.",
        ],
      },
      {
        title: "What should be scored",
        paragraphs: [
          "A strong opportunity score is usually multidimensional. It should separate different kinds of strength so a team can see why an opportunity lands where it does and what would need to change for the score to improve.",
        ],
        bullets: [
          "Capability and delivery fit",
          "Buyer access and relationship reach",
          "Commercial attractiveness",
          "Strategic relevance",
          "Evidence confidence",
        ],
      },
      {
        title: "Why scoring still needs actions",
        paragraphs: [
          "A score becomes far more useful when paired with blockers, movers, and recommended next steps. That is what turns scoring from passive reporting into a real qualification tool.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Opportunity Intelligence", href: "/opportunity-intelligence" },
      { label: "Opportunity Matrix", href: "/opportunity-matrix" },
    ],
  },
  networkStrength: {
    eyebrow: "Resources",
    title: "Network Strength In Procurement",
    intro:
      "Relationship context matters in procurement, but it matters as part of a broader system. A useful network-strength model should help a team understand whether it has a plausible path to attention, not encourage shallow claims about influence.",
    sections: [
      {
        title: "Why network strength matters",
        paragraphs: [
          "Technical capability is often necessary but not sufficient. In many environments, buyer familiarity, stakeholder proximity, and network reach influence whether a supplier gets heard early enough to matter.",
        ],
      },
      {
        title: "What weak models get wrong",
        paragraphs: [
          "Simple contact counts or social metrics are not enough. A strong network model should consider role relevance, adjacency, shared history, and whether the relationship has any plausible bearing on the pursuit at hand.",
        ],
      },
      {
        title: "How to use it responsibly",
        paragraphs: [
          "Network strength should influence posture, not override the rest of the decision. It should be used with capability evidence, opportunity timing, and strategic desire so the team does not confuse access with merit.",
        ],
        relatedLinks: [{ label: "Opportunity Intelligence", href: "/opportunity-intelligence" }],
      },
    ],
    relatedLinks: [
      { label: "Network Intelligence", href: "/network-intelligence" },
      { label: "LinkedIn Integration", href: "/integrations/linkedin" },
    ],
  },
  assessRftFit: {
    eyebrow: "Resources",
    title: "How To Assess RFT Fit",
    intro:
      "Assessing RFT fit properly means going beyond whether the scope sounds familiar. Teams need to judge whether they can credibly deliver, whether the buyer is accessible, and whether the pursuit is worth doing at all.",
    sections: [
      {
        title: "Start with delivery truth",
        paragraphs: [
          "Fit begins with whether the team can actually deliver what the document asks for. That means capability evidence, relevant credentials, case studies, and team readiness all matter.",
        ],
      },
      {
        title: "Then test pursuit reality",
        paragraphs: [
          "A technically plausible RFT may still be a poor pursuit if buyer access is thin, incumbency is strong, or the commercial shape is strategically unattractive.",
        ],
      },
      {
        title: "Use the document as evidence, not as truth alone",
        paragraphs: [
          "The RFT matters, but it should be interpreted alongside internal history, buyer context, and relationship evidence. Fit is strongest when the document and the broader evidence picture align.",
        ],
        relatedLinks: [{ label: "Document Review", href: "/document-review" }],
      },
    ],
    relatedLinks: [
      { label: "Document Review", href: "/document-review" },
      { label: "Organisation Profile", href: "/organisation-profile" },
    ],
  },
  tenderBoardGuideAustralia: {
    eyebrow: "Resources",
    title: "Tender Board Guide Australia",
    intro:
      "Australian suppliers often need to monitor more than one procurement source. The right tender-board strategy depends on which buyers matter, what level of government you serve, and how much qualification work you want to do after discovery.",
    sections: [
      {
        title: "Why tender-board strategy matters",
        paragraphs: [
          "Different boards cover different segments of the market. A useful monitoring approach needs to match the supplier's real target buyers rather than assuming one source covers everything that matters.",
        ],
      },
      {
        title: "Discovery is only the start",
        paragraphs: [
          "Tender boards are important inputs, but they are not decision systems. The real value comes when discovered opportunities are qualified against internal capability, buyer history, and relationship reach.",
        ],
      },
      {
        title: "What BidBlender adds",
        paragraphs: [
          "Instead of stopping at discovery, BidBlender is designed to use those sources as one part of a larger qualification workflow. That makes procurement monitoring more commercially useful.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Connectors", href: "/connectors" },
      { label: "AusTender Integration", href: "/integrations/austender" },
      { label: "Tenderlink Integration", href: "/integrations/tenderlink" },
    ],
  },
  crmDataForBidTeams: {
    eyebrow: "Resources",
    title: "CRM Data For Bid Teams",
    intro:
      "CRM platforms contain valuable memory for bid qualification, but they rarely provide a procurement-specific decision layer on their own. Bid teams need CRM context interpreted through the lens of pursuit quality, not just account activity.",
    sections: [
      {
        title: "What CRM does well",
        paragraphs: [
          "CRM systems capture account history, contact notes, previous deals, and internal commercial context. That makes them strong sources for history and buyer familiarity.",
        ],
      },
      {
        title: "What CRM does not solve alone",
        paragraphs: [
          "A CRM usually does not know whether the team has the right delivery evidence, whether buyer access is strong enough, or whether a tender is strategically worth pursuing. Those are broader qualification questions.",
        ],
      },
      {
        title: "How BidBlender should use CRM data",
        paragraphs: [
          "BidBlender should treat CRM as a memory layer inside a larger decision system. That is how buyer history becomes more useful for procurement qualification rather than just sales reporting.",
        ],
      },
    ],
    relatedLinks: [
      { label: "HubSpot Integration", href: "/integrations/hubspot" },
      { label: "Salesforce Integration", href: "/integrations/salesforce" },
    ],
  },
  buyerIntentForProcurement: {
    eyebrow: "Resources",
    title: "Buyer Intent For Procurement",
    intro:
      "Buyer intent in procurement is different from generic sales intent. It is usually more document-driven, more procedural, and more constrained by formal procurement steps. That means the signal model has to change too.",
    sections: [
      {
        title: "Why procurement intent is different",
        paragraphs: [
          "Generic intent tooling often looks for behavioural noise across the open market. Procurement intent is usually better understood through opportunity signals, public procurement activity, buyer history, and the evidence surrounding a live or emerging pursuit.",
        ],
      },
      {
        title: "What low-cost high-confidence intent looks like",
        paragraphs: [
          "The best signals tend to be attributable and explainable: live notices, addenda, buyer history, organisation fit, network reach, and document evidence. Those sources are usually more commercially defensible than broad probabilistic noise.",
        ],
      },
      {
        title: "How BidBlender fits",
        paragraphs: [
          "BidBlender is not trying to imitate generic sales-intent vendors. It is trying to apply a bid and RFX lens to the problem by blending history, capability, reach, and opportunity into one qualification model.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Opportunity Intelligence", href: "/opportunity-intelligence" },
      { label: "Methodology", href: "/methodology" },
    ],
  },
};
