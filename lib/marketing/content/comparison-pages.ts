import type { FeaturePageContent } from "@/components/marketing/FeaturePage";

export const comparisonPageContent: Record<
  "crmOnly" | "tenderBoardOnly" | "genericSalesIntent",
  FeaturePageContent
> = {
  crmOnly: {
    title: "BidBlender vs CRM-only bid qualification",
    signalBadges: ["History is vital", "History is not enough", "Procurement-specific judgment"],
    intro:
      "A CRM can remember deals, contacts, notes, and account history. That matters. But CRM-only qualification still leaves bid teams blind on delivery evidence, buyer reach, and live market motion. BidBlender is built to use CRM memory as one pillar inside a broader procurement decision model, not mistake it for the whole answer.",
    cardSections: [
      {
        title: "Where CRM-only workflows break down",
        items: [
          {
            title: "Strong memory, weak market visibility",
            body: "A CRM can tell you what the team knows about an account, but not what is entering market now, how a procurement is changing, or when a new pursuit window is opening.",
          },
          {
            title: "Commercial context without delivery proof",
            body: "CRM records say plenty about past deals and people, but very little about whether the current team, certifications, and delivery shape actually fit the work.",
          },
          {
            title: "Account familiarity without access logic",
            body: "Knowing the account exists is not the same as understanding buyer adjacency, relationship density, or whether someone credible can get the team heard.",
          },
          {
            title: "Pipeline language instead of procurement posture",
            body: "CRMs are built around sales progression. Bid teams need bid, research, and no-bid judgment with evidence confidence and amber-resolution actions.",
          },
        ],
        cols: 2,
      },
    ],
    comparisonSection: {
      title: "What changes when CRM history becomes one pillar instead of the whole system",
      columns: [
        { title: "BidBlender", description: "History blended with capability, reach, and opportunity." },
        { title: "CRM-only workflow", description: "History and account memory." },
      ],
      rows: [
        { label: "Account memory", values: ["Yes", "Yes"] },
        { label: "Live opportunity visibility", values: ["Yes", "Limited"] },
        { label: "Capability proof", values: ["Yes", "Weak"] },
        { label: "Buyer access context", values: ["Yes", "Sometimes"] },
        { label: "Traffic-light qualification", values: ["Yes", "No"] },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Is BidBlender replacing the CRM?",
          answer:
            "No. The CRM remains the history layer. BidBlender uses that history as evidence inside a broader procurement-specific qualification workflow.",
          relatedLinks: [{ label: "HubSpot integration", href: "/integrations/hubspot" }],
        },
        {
          question: "Why compare against CRM-only at all?",
          answer:
            "Because many teams already have CRM data and assume the missing step is reporting. The real gap is not reporting. It is blending CRM history with capability, reach, and live opportunity context.",
          relatedLinks: [{ label: "Four Evidence Pillars", href: "/four-evidence-pillars" }],
        },
      ],
    },
  },
  tenderBoardOnly: {
    title: "BidBlender vs tender-board-only workflows",
    signalBadges: ["Discovery matters", "Discovery is not qualification", "Amber resolution"],
    intro:
      "Tender boards are essential for discovery. They are not enough for bid judgment. A tender notice can tell a team something is live, but it cannot tell them whether the work is winnable, whether access exists, or whether the bid deserves scarce internal effort.",
    cardSections: [
      {
        title: "Where tender-board-only workflows stop short",
        items: [
          {
            title: "They show what is live",
            body: "That is valuable. It gets opportunities onto the radar quickly and keeps teams informed about due dates, addenda, and issuer activity.",
          },
          {
            title: "They do not explain why you would win",
            body: "A listing does not know your team, your buyer familiarity, your certifications, or your access posture. Those are the factors that turn a notice into a real pursuit choice.",
          },
          {
            title: "They create volume, not prioritisation",
            body: "Without internal context, every promising notice can feel urgent. BidBlender is meant to direct attention toward work that is not only live, but actually worth pursuit effort.",
          },
          {
            title: "They do not resolve amber",
            body: "When an opportunity is unclear, the next question is what to research, who to contact, and which blocker matters most. A tender feed alone cannot provide that agenda.",
          },
        ],
        cols: 2,
      },
    ],
    comparisonSection: {
      title: "Discovery alone versus discovery blended with internal evidence",
      columns: [
        { title: "BidBlender", description: "Discovery plus procurement-specific qualification." },
        { title: "Tender-board-only workflow", description: "Discovery and notice monitoring." },
      ],
      rows: [
        { label: "Tender discovery", values: ["Yes", "Yes"] },
        { label: "Buyer access context", values: ["Yes", "No"] },
        { label: "Capability comparison", values: ["Yes", "No"] },
        { label: "Bid / research / no-bid posture", values: ["Yes", "Weak"] },
        { label: "Next-best research actions", values: ["Yes", "No"] },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Does BidBlender still need tender boards?",
          answer:
            "Yes. Opportunity data is one of the four evidence pillars. The point is not to dismiss tender boards, but to stop treating them as the entire workflow.",
          relatedLinks: [{ label: "Connectors", href: "/connectors" }],
        },
        {
          question: "Who should read this comparison?",
          answer:
            "Any team currently living in tender alerts, spreadsheets, and inbox triage. It explains why discovery is necessary but still commercially incomplete.",
          relatedLinks: [{ label: "Opportunity intelligence", href: "/opportunity-intelligence" }],
        },
      ],
    },
  },
  genericSalesIntent: {
    title: "BidBlender vs generic sales-intent tools",
    signalBadges: ["Procurement-specific", "Winnability over noise", "Evidence over abstraction"],
    intro:
      "Generic sales-intent tools are useful for broad buying motion, account selection, and outreach prioritisation. Bid teams have a narrower, harder problem. They need to decide whether a specific procurement opportunity is worth pursuing and what evidence still needs to be validated before committing bid effort.",
    cardSections: [
      {
        title: "Why procurement needs a different model",
        items: [
          {
            title: "Bid teams are not SDR teams",
            body: "The core question is not who to prospect next. It is whether a live or emerging procurement opportunity deserves real pursuit effort.",
          },
          {
            title: "Signals need to map to delivery reality",
            body: "General intent data may suggest interest, but procurement judgment depends on capability proof, buyer access, timing, and internal desire to win the work.",
          },
          {
            title: "The output needs to drive posture",
            body: "Bid teams need recommendation quality: bid, research, or no bid. Broad intent tools usually stop at ranking or account heat, not procurement-specific next actions.",
          },
          {
            title: "Amber is where the value sits",
            body: "BidBlender is built to expose blockers, movers, and next-best actions when an opportunity is unclear. That is a more decision-heavy job than generic market scoring.",
          },
        ],
        cols: 2,
      },
    ],
    comparisonSection: {
      title: "Broad intent versus procurement-specific opportunity intelligence",
      columns: [
        { title: "BidBlender", description: "Procurement qualification and pursuit judgment." },
        { title: "Generic sales-intent tool", description: "Broad account and buying-motion signals." },
      ],
      rows: [
        { label: "Tender-specific posture", values: ["Yes", "No"] },
        { label: "Capability evidence", values: ["Yes", "Weak"] },
        { label: "Buyer access context", values: ["Yes", "Sometimes"] },
        { label: "Amber-resolution guidance", values: ["Yes", "No"] },
        { label: "Bid-team workflow fit", values: ["Yes", "Limited"] },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Is BidBlender anti-intent data?",
          answer:
            "No. It is simply more specific. Broad intent can be one input, but procurement teams still need a tighter model that reflects how bid decisions are actually made.",
          relatedLinks: [{ label: "Buyer Intent for Procurement", href: "/resources/buyer-intent-for-procurement" }],
        },
        {
          question: "Why make this distinction on the website?",
          answer:
            "Because buyers will otherwise map BidBlender into the wrong category. The product is about procurement-specific opportunity intelligence, not generic sales prospecting.",
          relatedLinks: [{ label: "Opportunity intelligence", href: "/opportunity-intelligence" }],
        },
      ],
    },
  },
};
