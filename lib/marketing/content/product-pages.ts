import { CONNECTOR_PARADIGMS } from "@/lib/connectors/paradigms";
import type { FeaturePageContent } from "@/components/marketing/FeaturePage";

export const productPageContent: Record<
  | "howItWorks"
  | "opportunityIntelligence"
  | "fourEvidencePillars"
  | "networkIntelligence"
  | "connectors"
  | "bidNoBid"
  | "documentReview"
  | "organisationProfile"
  | "opportunityExplorer"
  | "opportunityMatrix"
  | "strategyRecommendations",
  FeaturePageContent
> = {
  howItWorks: {
    title: "How BidBlender works for bid qualification",
    intro:
      "BidBlender combines multiple evidence types into one procurement-specific workflow. The point is not to generate more data. The point is to improve judgment before expensive bid work begins.",
    processSection: {
      title: "A practical product workflow",
      steps: [
        {
          title: "Connect evidence sources",
          description:
            "Start with the systems that already hold memory and context: tender boards, CRM history, relationship sources, and eventually capability systems such as HCM and LMS platforms.",
        },
        {
          title: "Interrogate opportunities",
          description:
            "Use chat, the opportunity explorer, the matrix, and the detail panel to understand what is in market, how it matches the team, and where access or evidence is weak.",
        },
        {
          title: "Review documents and signals",
          description:
            "Upload an RFT or related material, compare it against known internal evidence, and bring the findings back into the same decision surface rather than splitting work across disconnected tools.",
        },
        {
          title: "Take a bid, research, or no-bid path",
          description:
            "The system should help users move to a clear traffic-light state with blockers, movers, and next-best actions instead of leaving them with vague summaries.",
        },
      ],
    },
    cardSections: [
      {
        items: [
          {
            title: "Opportunity scanner",
            body: "BidBlender is designed to scan tender and opportunity sources to surface what is relevant, but scanning alone is not the product. The value is in what happens after the opportunity is found.",
          },
          {
            title: "Organisation intelligence",
            body: "Organisation profile, certifications, case studies, personnel, and strategic preferences help the platform understand whether the team can credibly deliver what the buyer is asking for.",
          },
          {
            title: "Network mapping",
            body: "Relationship data helps teams understand whether capability has a path to buyer attention. BidBlender treats reach as a major decision input, not a decorative data point.",
          },
          {
            title: "Decision engine",
            body: "The intended output is not just a score. It is a structured decision with rationale, confidence, blockers, and recommended actions for ambiguous opportunities.",
          },
        ],
        cols: 2,
      },
      {
        title: "Key product surfaces visitors should understand",
        intro:
          "The public site should not assume the console explains itself. The workflow needs to be made explicit so buyers understand what they can actually do inside the product.",
        items: [
          {
            title: "Dashboard chat",
            body: "The chat is the governing interface. Users should be able to ask about bids, buyers, movement, strategy, document review, and opportunity selection without needing to know which underlying screen owns the answer.",
            relatedLinks: [{ label: "Opportunity intelligence", href: "/opportunity-intelligence" }],
          },
          {
            title: "Opportunity detail panel",
            body: "The right-side detail panel is where source context, decision state, documents, and opportunity facts become visible beside the conversation. It turns chat from a generic assistant into a context-rich qualification surface.",
            relatedLinks: [{ label: "Opportunity explorer", href: "/opportunity-explorer" }],
          },
          {
            title: "Connectors and settings",
            body: "Users should be able to choose which tender boards, CRM systems, relationship sources, and capability systems feed the model, and understand why each source changes the quality of the decision.",
            relatedLinks: [{ label: "Connectors", href: "/connectors" }],
          },
          {
            title: "Document review inside the same workflow",
            body: "The product should not push document analysis into a separate dead-end tool. Uploaded RFTs and supporting material need to feed back into the same opportunity context and bid/no-bid judgment.",
            relatedLinks: [{ label: "Document review", href: "/document-review" }],
          },
        ],
        cols: 2,
      },
    ],
    faqSection: {
      items: [
        {
          question: "Is BidBlender intended to replace a bid team?",
          answer:
            "No. The product is meant to improve team judgment, not remove it. It should make qualification faster, more evidence-led, and easier to explain internally.",
        },
        {
          question: "What is the main problem the workflow solves?",
          answer:
            "Teams commit too much effort before they have enough confidence. BidBlender is meant to move qualification earlier and reduce avoidable proposal waste.",
        },
        {
          question: "Where does the most value come from?",
          answer:
            "From ambiguous opportunities. The strongest commercial value is in helping teams understand what they still need to learn before a real pursuit commitment is made.",
        },
        {
          question: "Why explain the workflow in so much detail on the site?",
          answer:
            "Because the category is not yet self-explanatory. The website needs to teach buyers what the platform does, how it works, and why the workflow is different from a simple tender feed or CRM dashboard.",
        },
      ],
    },
  },
  opportunityIntelligence: {
    title: "Opportunity intelligence for teams that need more than a tender feed",
    signalBadges: [
      "History + capability + reach + opportunity",
      "Traffic-light qualification",
      "Amber-resolution actions",
    ],
    intro:
      "Most teams do not need more tender alerts. They need a stronger way to judge whether a live opportunity is real, reachable, winnable, and worth the effort before internal time, partner effort, and bid budget start to burn.",
    paradigmSection: {
      title: "BidBlender treats opportunity intelligence as a blended evidence problem",
      intro:
        "A tender only becomes commercially meaningful once it is judged through four evidence pillars. That is the core product logic: History tells you what the team has done, Capability tells you what it can credibly deliver, Reach tells you whether buyer attention is plausible, and Opportunity tells you what is actually in market now.",
      items: [
        {
          title: "History turns a live tender into a familiar commercial problem",
          description:
            "CRM memory, prior pursuits, notes, wins, losses, and account context stop the team from treating every opportunity like a blank slate. Opportunity intelligence gets sharper when the product knows what similar work has already been sold, who touched the account, and where the team has learned expensive lessons before.",
          outcomes: ["Buyer memory", "Prior pursuit context", "Commercial pattern matching"],
          note: "Without History, opportunity intelligence becomes shallow. It can spot a tender, but it cannot tell whether the work resembles deals you have won, lost, or wisely avoided.",
        },
        {
          title: "Capability keeps the page honest about what you can actually deliver",
          description:
            "A compelling opportunity is still the wrong pursuit if the team lacks the certifications, skills, delivery readiness, or internal capacity to execute. BidBlender uses capability evidence to stop attractive buyer motion from being mistaken for genuine delivery fit.",
          outcomes: ["Skill coverage", "Delivery readiness", "Resource credibility"],
          note: "Without Capability, teams over-index on excitement and under-index on execution risk.",
        },
        {
          title: "Reach shows whether technical fit has a path to buyer attention",
          description:
            "Some opportunities are strong on paper but weak in reality because access is thin, stakeholder familiarity is low, or the incumbent has a better path into the buyer. Reach gives BidBlender a way to distinguish theoretical fit from pursuable fit.",
          outcomes: ["Buyer access", "Network adjacency", "Relationship posture"],
          note: "Without Reach, the system can say a bid looks good while ignoring whether anyone will really listen.",
        },
        {
          title: "Opportunity provides the timing, urgency, and market trigger",
          description:
            "Tender boards, procurement notices, addenda, due dates, and issuer movement tell the platform what is live, how fast it is moving, and where a pursuit window may be opening or closing. This is the market-facing side of the model, but it is only one quarter of the decision.",
          outcomes: ["Live market visibility", "Deadline clarity", "Procurement timing"],
          note: "Without Opportunity, the rest of the model has no trigger. Without the other three, it is just another feed.",
        },
      ],
      relatedLinks: [
        { label: "Four Evidence Pillars", href: "/four-evidence-pillars" },
        { label: "Connectors", href: "/connectors" },
      ],
    },
    processSection: {
      title: "What the page needs to make visitors feel",
      intro:
        "BidBlender should not read like another market-monitoring product. The story needs to move from noise to judgment: what is happening, why it matters, whether the team can win, and what should happen next if certainty is still weak.",
      steps: [
        {
          title: "Spot the work that matters",
          description:
            "Bring live tenders, notices, and procurement motion into one surface so the team is not manually bouncing between boards and inboxes just to understand what changed.",
        },
        {
          title: "Blend it with internal evidence",
          description:
            "Pull in account memory, capability proof, and relationship context so the opportunity stops being a generic listing and starts behaving like a real pursuit question.",
        },
        {
          title: "Score for judgment, not novelty",
          description:
            "Assess pursuit capacity, buyer access, delivery fit, strategic desire, and evidence confidence so the result is meaningful enough to guide a real bid/no-bid conversation.",
        },
        {
          title: "Turn uncertainty into action",
          description:
            "When the answer is amber, the product should not shrug. It should tell the user which blockers matter, what evidence is missing, and which next actions can move the decision toward green or red.",
        },
      ],
    },
    cardSections: [
      {
        title: "What strong opportunity intelligence should answer",
        intro:
          "The useful output is not a pile of observations. It is a short list of decisions the team can actually act on.",
        items: [
          {
            title: "Is this worth real pursuit effort?",
            body: "The first question is not whether a tender exists. It is whether this specific opportunity deserves partner time, solution design effort, executive attention, and bid budget compared with everything else in play.",
          },
          {
            title: "Why would we actually win?",
            body: "Opportunity intelligence should surface the win logic, not just the fit logic. That means understanding buyer familiarity, evidence-backed capability, market timing, and whether the pursuit has a credible route to attention.",
          },
          {
            title: "What is keeping this amber?",
            body: "The highest-value output is usually the blocker view: incumbent uncertainty, weak access, incomplete capability proof, budget ambiguity, panel restrictions, or missing buyer context that still needs to be resolved.",
          },
          {
            title: "What should happen next?",
            body: "A strong page should make clear that BidBlender does not stop at assessment. It should tell teams whether to bid, research, or walk away, and when research is required, what to investigate first.",
          },
        ],
        cols: 2,
        relatedLinks: [
          { label: "Bid / No Bid", href: "/bid-no-bid" },
          { label: "Document review", href: "/document-review" },
        ],
      },
      {
        title: "Why this is stronger than a tender feed or generic intent tool",
        items: [
          {
            title: "Tender boards show what is live",
            body: "That matters, but it does not tell you whether the work resembles anything you have won, whether the buyer is accessible, or whether your team can staff the solution credibly.",
            relatedLinks: [{ label: "BidBlender vs tender-board-only", href: "/compare/tender-board-only" }],
          },
          {
            title: "CRMs show what your team remembers",
            body: "That matters too, but a CRM alone does not tell you what is entering market now, how a tender document compares with capability evidence, or whether current procurement motion deserves action.",
            relatedLinks: [{ label: "BidBlender vs CRM-only", href: "/compare/crm-only" }],
          },
          {
            title: "Generic intent platforms show broad buying motion",
            body: "Those tools are built for sales development, not procurement qualification. BidBlender is deliberately narrower and more useful for bid teams: it is about winnability, evidence, and pursuit posture.",
            relatedLinks: [{ label: "BidBlender vs generic sales intent", href: "/compare/generic-sales-intent" }],
          },
          {
            title: "BidBlender blends all four evidence pillars",
            body: "That is the real differentiator. The product is strongest when History, Capability, Reach, and Opportunity are all present and made visible in one decision system.",
            relatedLinks: [{ label: "Four Evidence Pillars", href: "/four-evidence-pillars" }],
          },
        ],
        cols: 2,
      },
    ],
    mediaSection: {
      items: [
        {
          eyebrow: "Interactive concept",
          title: "See the four evidence pillars blend into one pursuit decision",
          description:
            "Placeholder for a more animated explanation of how History, Capability, Reach, and Opportunity flow into BidBlender’s traffic-light decision model.",
          variant: "interactive",
        },
        {
          eyebrow: "Product walkthrough",
          title: "Follow an amber opportunity from first signal to next-best action",
          description:
            "Placeholder for a walkthrough showing how the explorer, document review, detail panel, and chat collaborate on a real qualification workflow.",
          variant: "product",
        },
      ],
    },
    comparisonSection: {
      title: "What real opportunity intelligence should cover",
      intro:
        "This category gets muddied quickly. BidBlender’s claim should be stronger than discovery, more procurement-specific than generic intent software, and more action-oriented than a passive CRM view.",
      columns: [
        {
          title: "BidBlender",
          description: "Procurement-specific qualification and pursuit judgment.",
        },
        {
          title: "Tender Feed",
          description: "Discovery and listing.",
        },
        {
          title: "Generic CRM View",
          description: "Historical account context and internal memory.",
        },
        {
          title: "Generic Intent Tool",
          description: "Broad buying activity signals.",
        },
      ],
      rows: [
        { label: "Opportunity discovery", values: ["Yes", "Yes", "Limited", "Sometimes"] },
        { label: "Bid / research / no-bid framing", values: ["Yes", "Weak", "Weak", "No"] },
        { label: "Buyer access context", values: ["Yes", "No", "Sometimes", "Weak"] },
        { label: "Capability comparison", values: ["Yes", "No", "Sometimes", "No"] },
        { label: "Amber-resolution guidance", values: ["Yes", "No", "No", "No"] },
        { label: "Procurement-specific posture", values: ["Yes", "Yes", "Limited", "No"] },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Why use the term opportunity intelligence?",
          answer:
            "Because the product is broader than tender monitoring and narrower than vague market intent. It is about understanding opportunities in a bid-team context: timing, reach, fit, posture, and evidence.",
        },
        {
          question: "How does opportunity intelligence differ from document review?",
          answer:
            "Document review is one input into a broader decision. Opportunity intelligence is the larger system that combines the document, the buyer context, the internal capability view, and the relationship picture.",
        },
        {
          question: "Why are the four evidence pillars so important to this page?",
          answer:
            "Because the category claim only becomes credible when the site explains exactly what data is being blended and why. History, Capability, Reach, and Opportunity are the core public logic behind how BidBlender evaluates procurement opportunities.",
        },
        {
          question: "Why is this page important for SEO?",
          answer:
            "Because category-defining terms need dedicated pages with enough depth to rank and enough clarity to teach the market what the product actually does.",
        },
        {
          question: "What should future versions of this page add?",
          answer:
            "Case studies, detailed methodology, screenshots, video walkthroughs, and comparisons against tender-board-only or sales-intent-only workflows should all be added over time.",
        },
      ],
    },
  },
  fourEvidencePillars: {
    title: "The four evidence pillars behind BidBlender",
    signalBadges: [
      "History",
      "Capability",
      "Reach",
      "Opportunity",
    ],
    intro:
      "BidBlender is built on four evidence pillars: History, Capability, Reach, and Opportunity. This is not branding filler. It is the model that explains why the platform needs certain connections, what each data source contributes, and why a procurement decision becomes weak when one pillar is missing.",
    paradigmSection: {
      title: "The model that holds the product together",
      intro:
        "Most platforms list features. BidBlender needs to teach a system. The four evidence pillars explain the connectors, the scoring logic, the chat responses, and the difference between a shallow recommendation and a defensible one.",
      items: [
        {
          title: "History is the commercial memory layer",
          description:
            "History captures prior deals, account context, contacts, meetings, notes, wins, losses, and pursuit patterns. It tells BidBlender what your organisation already knows, what similar work has looked like before, and whether a new opportunity resembles something you have actually navigated.",
          outcomes: ["Past bids", "Account familiarity", "Win/loss learning"],
          note: "Typical sources: HubSpot, Salesforce, internal CRM records, pursuit notes, and other deal-memory systems.",
        },
        {
          title: "Capability is the delivery-proof layer",
          description:
            "Capability captures who can deliver, what credentials exist, which certifications are current, and where delivery readiness is strong or thin. It stops the system from confusing market attractiveness with practical delivery strength.",
          outcomes: ["Skill inventory", "Certifications", "Delivery readiness"],
          note: "Typical sources: Workday, Cornerstone, LMS systems, HRIS platforms, capability libraries, and internal delivery records.",
        },
        {
          title: "Reach is the buyer-access layer",
          description:
            "Reach captures relationship density, stakeholder adjacency, and how likely it is that your team can get heard. It is not a promise of a win. It is a reality check on whether technical fit is paired with a credible path to buyer attention.",
          outcomes: ["Network proximity", "Stakeholder adjacency", "Access posture"],
          note: "Typical sources: LinkedIn, contact graphs, CRM contacts, partner ecosystems, and relationship-intelligence tooling.",
        },
        {
          title: "Opportunity is the market-timing layer",
          description:
            "Opportunity captures what is live in market, when deadlines matter, how procurement motion is changing, and where new work is emerging. It gives the other three pillars something to react to instead of leaving them as static internal context.",
          outcomes: ["Tender discovery", "Deadline tracking", "Market motion"],
          note: "Typical sources: AusTender, Tenderlink, procurement portals, panel notices, and public market disclosures.",
        },
      ],
      relatedLinks: [
        { label: "Opportunity intelligence", href: "/opportunity-intelligence" },
        { label: "Integrations", href: "/integrations" },
      ],
    },
    cardSections: [
      {
        title: "What breaks when a pillar is missing",
        items: [
          {
            title: "Without History",
            body: "The system can find a tender but cannot tell whether the buyer resembles a market you already know, whether the work rhymes with a prior win, or whether account memory changes the risk profile.",
          },
          {
            title: "Without Capability",
            body: "The system can get excited about attractive revenue without enough evidence that the team can staff, certify, and deliver the work responsibly.",
          },
          {
            title: "Without Reach",
            body: "The system can overrate clean paper fit while ignoring whether the buyer is actually accessible, whether the incumbent has relational advantage, or whether the team will struggle to get heard.",
          },
          {
            title: "Without Opportunity",
            body: "The system knows plenty about the organisation but has no live procurement trigger. Insight without market timing is not opportunity intelligence.",
          },
        ],
        cols: 2,
      },
      {
        title: "How the pillars map to the product",
        items: [
          {
            title: "Connectors",
            body: "Every connection should map cleanly to one or more pillars so users understand why the integration exists and what decision quality it improves.",
            relatedLinks: [{ label: "Connectors", href: "/connectors" }],
          },
          {
            title: "Opportunity intelligence",
            body: "The pillars come together most visibly in qualification. That is where market motion, commercial memory, capability proof, and buyer access have to be judged together.",
            relatedLinks: [{ label: "Opportunity intelligence", href: "/opportunity-intelligence" }],
          },
          {
            title: "Bid / no-bid",
            body: "The traffic-light decision only makes sense if all four evidence classes are represented clearly enough for the recommendation to be defended internally.",
            relatedLinks: [{ label: "Bid / No Bid", href: "/bid-no-bid" }],
          },
          {
            title: "Chat and detail views",
            body: "The product should make these pillars visible in the language it uses, the signals it surfaces, and the context it attaches to each opportunity.",
          },
        ],
        cols: 2,
      },
    ],
    mediaSection: {
      items: [
        {
          eyebrow: "Interactive explainer",
          title: "Explore each pillar and watch the decision change",
          description:
            "Placeholder for an interactive module where visitors toggle History, Capability, Reach, and Opportunity on or off to see how BidBlender’s decision confidence changes.",
          variant: "interactive",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Why call them evidence pillars?",
          answer:
            "Because the point is not branding theatre. The term makes the job of each layer explicit: each pillar adds a distinct kind of evidence that improves the quality of a procurement decision.",
        },
        {
          question: "Are these pillars just for the connectors page?",
          answer:
            "No. They explain the whole product. Connectors map into the pillars, opportunity intelligence blends them, and the bid/no-bid workflow depends on them being present and legible.",
        },
        {
          question: "Why not rely on opportunity data alone?",
          answer:
            "Because a tender notice can tell you something is live, but it cannot tell you whether your team can deliver, whether your buyer access is real, or whether account history should change your posture.",
        },
        {
          question: "Should every customer connect all four immediately?",
          answer:
            "Not necessarily. The platform should be useful incrementally. But the site should be honest that the strongest version of BidBlender emerges when all four pillars are represented over time.",
        },
      ],
    },
  },
  networkIntelligence: {
    title: "Network intelligence",
    intro:
      "Relationship graphs matter in bid outcomes, but they matter most when combined with opportunity timing, capability evidence, and strategic intent. BidBlender treats reach as a serious decision input rather than an ornamental metric.",
    cardSections: [
      {
        items: [
          {
            title: "Why reach matters",
            body: "In many procurement environments, capability alone is not enough. Teams still need paths into buyers, stakeholder familiarity, or at least a credible strategy for gaining attention.",
          },
          {
            title: "Primary relationship source",
            body: "The current product story positions LinkedIn-authorised data as the primary source for relationship intelligence because it speaks most directly to human network proximity.",
          },
          {
            title: "Supporting sources",
            body: "CRM data, public company information, enrichment tools, and buyer org context can all strengthen understanding, but they do not replace the actual relationship graph.",
          },
          {
            title: "Commercial output",
            body: "Network intelligence should help a team understand not just whether someone knows someone, but whether buyer access is strong enough to alter pursuit posture and confidence.",
          },
        ],
        cols: 2,
      },
    ],
    faqSection: {
      items: [
        {
          question: "Is network intelligence just a contact list?",
          answer:
            "No. The product narrative should focus on density, adjacency, shared history, decision-maker proximity, and how relationship strength affects actual pursuit choices.",
        },
        {
          question: "Why should this page exist separately from connectors?",
          answer:
            "Because network intelligence is one of the strongest differentiators in the product story. It deserves a dedicated page explaining the decision logic, not just a mention on an integrations screen.",
        },
        {
          question: "What should the site avoid claiming?",
          answer:
            "The site should avoid implying that relationship data guarantees a win. Reach is one part of the system. Capability, opportunity, and strategic desire still matter.",
        },
        {
          question: "What future evolution is reasonable to hint at?",
          answer:
            "Richer graph analysis, stronger buyer-team mapping, and better stakeholder insight are reasonable future extensions, but they should be described carefully as planned or evolving capabilities.",
        },
      ],
    },
  },
  connectors: {
    title: "Connectors that explain why the product works",
    signalBadges: ["History", "Capability", "Reach", "Opportunity"],
    intro:
      "Connectors should not look like a random list of logos. BidBlender groups them into four paradigms that explain why the data matters: History, Capability, Reach, and Opportunity.",
    cardSections: [
      {
        title: "Why the connector model matters",
        items: CONNECTOR_PARADIGMS.map((paradigm) => ({
          title: paradigm.title,
          body: `${paradigm.why}${paradigm.note ? ` ${paradigm.note}` : ""}`,
        })),
        cols: 2,
        relatedLinks: [
          { label: "Integrations", href: "/integrations" },
          { label: "Platform", href: "/platform" },
          { label: "Four Evidence Pillars", href: "/four-evidence-pillars" },
        ],
      },
      {
        title: "What settings should let the user control",
        intro:
          "The settings story matters because connected data should be intentional. Users need to understand what is included, what is optional, and what each connection improves.",
        items: [
          {
            title: "Opportunity sources",
            body: "Users should be able to choose the tender boards and procurement sources that define their market view so discovery reflects the sectors and channels they actually care about.",
            relatedLinks: [{ label: "BidBlender vs tender-board-only", href: "/compare/tender-board-only" }],
          },
          {
            title: "History sources",
            body: "CRM and deal-memory systems should be added because they improve commercial memory, buyer familiarity, and prior-pursuit comparison, not because more integrations automatically look impressive.",
            relatedLinks: [{ label: "BidBlender vs CRM-only", href: "/compare/crm-only" }],
          },
          {
            title: "Reach and capability sources",
            body: "Relationship and workforce systems should be introduced carefully so users can see exactly how access posture and delivery readiness change the recommendation quality.",
            relatedLinks: [{ label: "Four Evidence Pillars", href: "/four-evidence-pillars" }],
          },
          {
            title: "Truthfulness about status",
            body: "The site and product should use the same language for availability: live now, connected via integration, or planned. That keeps the story commercially useful without pretending unfinished work already exists.",
          },
        ],
        cols: 2,
      },
    ],
    mediaSection: {
      items: [
        {
          eyebrow: "Connector Explorer",
          title: "Explain the why, not just the integration",
          description:
            "Placeholder for an interactive module where visitors switch between History, Capability, Reach, and Opportunity to understand what data each category contributes and how it changes product outputs.",
          variant: "interactive",
        },
        {
          eyebrow: "Comparison",
          title: "Why connected evidence beats a tender-board-only workflow",
          description:
            "Placeholder for a visual comparison showing how tender discovery becomes more useful once it is paired with internal history, capability, and reach.",
          variant: "product",
        },
      ],
    },
  },
  bidNoBid: {
    title: "Bid / No Bid decisioning",
    intro:
      "BidBlender is designed to help teams answer a harder question than simple fit: can we win this, do we want to win it, and what would change the decision if the answer is not yet clear?",
    cardSections: [
      {
        items: [
          {
            title: "Green: Bid",
            body: "The opportunity is attractive enough, evidence is strong enough, and the path to buyer attention and delivery credibility is real enough to justify pursuit effort.",
          },
          {
            title: "Amber: Research",
            body: "This is the highest-value state. BidBlender is meant to tell the user exactly what should be validated before a serious bid commitment is made.",
          },
          {
            title: "Red: No bid",
            body: "The system should help teams stop early when access is weak, capability is misaligned, strategic desire is low, or evidence shows that the opportunity is not commercially sensible.",
          },
          {
            title: "Why this matters",
            body: "Most teams already have reasonable instinct on obvious greens and reds. The commercial value comes from turning ambiguity into a clear research agenda instead of vague internal debate.",
          },
        ],
        cols: 2,
      },
    ],
    processSection: {
      title: "The intended decision model",
      steps: [
        {
          title: "Assess pursuit capacity",
          description: "Can the team resource the pursuit and still protect delivery quality and pipeline discipline?",
        },
        {
          title: "Assess buyer access",
          description: "Does the team have enough reach into the buyer or into adjacent stakeholders to justify belief in a path to attention?",
        },
        {
          title: "Assess delivery fit",
          description: "Do capability evidence, certifications, case studies, and experience support a credible delivery story?",
        },
        {
          title: "Assess strategic desire",
          description: "Even if the team could bid, is this the kind of work it actually wants, given margin, positioning, and strategic direction?",
        },
      ],
    },
    mediaSection: {
      items: [
        {
          eyebrow: "Decision UI",
          title: "Traffic-light decision card",
          description:
            "Placeholder for a visual module showing Green, Amber, and Red outputs with blockers, movers, confidence, and recommended research actions.",
          variant: "interactive",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Why not call every opportunity a score?",
          answer:
            "A score without an action model is weak. BidBlender should help teams decide what to do next, not just show a number that still needs interpretation.",
        },
        {
          question: "Why is amber so important?",
          answer:
            "Because amber is where effort is most often wasted. The product should turn amber into a checklist of evidence gaps, relationship tests, and commercial validation steps.",
        },
        {
          question: "What is the difference between bid and research?",
          answer:
            "Bid means the current evidence supports immediate pursuit. Research means the product sees a plausible path, but decisive uncertainty remains and should be resolved before major effort is committed.",
        },
        {
          question: "Can the model be tailored?",
          answer:
            "Yes. The long-term commercial logic is that each customer should be able to tailor assumptions and emphasis while BidBlender still preserves a clear decision framework.",
        },
      ],
    },
  },
  documentReview: {
    title: "Document review for opportunity qualification",
    intro:
      "A tender document should not be treated as a blob of text. BidBlender is intended to use uploaded documents to improve opportunity context, surface missing evidence, and anchor strategy in the actual requirements being asked.",
    cardSections: [
      {
        items: [
          {
            title: "Upload into chat",
            body: "The current product direction supports document upload directly into the chat workflow so users can ask bid/no-bid questions without leaving the decision surface.",
          },
          {
            title: "Compare against organisational evidence",
            body: "The point is not merely extraction. The document should be compared against known capabilities, certifications, delivery history, and prior wins or losses where relevant.",
          },
          {
            title: "Improve the opportunity record",
            body: "Document-derived context should enrich the opportunity detail panel, source summary, decision posture, and associated strategy views.",
          },
          {
            title: "Preserve honesty",
            body: "If extraction fails or text is not readable, the system should say so clearly. BidBlender should not pretend it reviewed a document it could not actually access.",
          },
        ],
        cols: 2,
      },
    ],
    mediaSection: {
      items: [
        {
          eyebrow: "Workflow",
          title: "Upload, extract, compare, decide",
          description:
            "Placeholder for a product walkthrough showing drag-and-drop upload, extraction status, structured review, and the resulting impact on the opportunity context panel.",
          variant: "product",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "What document types should the public site mention?",
          answer:
            "The current product direction already points to support for PDF, DOCX, and text-like formats. The site should explain those clearly and note that scanned documents may require extra handling.",
        },
        {
          question: "Why is document review commercially important?",
          answer:
            "Because bid teams often waste effort summarising a document before they have decided whether the opportunity deserves serious pursuit. Document review should improve qualification, not just produce extraction output.",
        },
        {
          question: "What is the right tone for this feature on the public site?",
          answer:
            "Specific and honest. The site should explain what is reviewed, how it improves decision quality, and where the system still depends on available readable text and configured context.",
        },
        {
          question: "What future capability should be hinted at?",
          answer:
            "Richer extraction, evidence lineage, requirement mapping, and stronger comparison against internal knowledge are all credible future extensions, but they should be described as planned rather than implied as fully live.",
        },
      ],
    },
  },
  organisationProfile: {
    title: "Organisation profile",
    intro:
      "BidBlender needs a capability baseline before it can judge whether a tender is worth pursuing. The organisation profile is where credentials, delivery evidence, case studies, and strategic preferences become structured context rather than scattered reference material.",
    cardSections: [
      {
        title: "What the profile should hold",
        items: [
          {
            title: "Capability evidence",
            body: "Service lines, delivery strengths, certifications, panels, and domain expertise help the system understand what the team can credibly promise.",
          },
          {
            title: "Case-study library",
            body: "Prior wins, relevant projects, reference clients, and proof of delivery create the evidence base for comparison against new work.",
          },
          {
            title: "People and roles",
            body: "Leadership, specialists, and bid contributors matter because pursuit capacity and delivery readiness are team questions, not just organisation questions.",
          },
          {
            title: "Strategic preferences",
            body: "Margin expectations, target buyers, preferred sectors, and no-go zones help BidBlender distinguish technical possibility from strategic desirability.",
          },
        ],
        cols: 2,
      },
    ],
    mediaSection: {
      items: [
        {
          eyebrow: "Profile View",
          title: "Capability context that feeds every decision",
          description:
            "Placeholder for a walkthrough of the organisation profile, showing capability mapping, evidence cards, certifications, and case-study coverage.",
          variant: "product",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Why give organisation profile its own page?",
          answer:
            "Because capability is one of the four core paradigms. Buyers need to understand that BidBlender is comparing opportunities against a structured internal evidence model, not generic text matching.",
        },
        {
          question: "What should be live versus planned here?",
          answer:
            "The site can describe current profile, certification, and case-study concepts clearly, while more advanced people-data, HCM, or LMS enrichment should be marked as connected or planned where appropriate.",
        },
      ],
    },
  },
  opportunityExplorer: {
    title: "Opportunity explorer",
    intro:
      "The explorer should help teams sort, filter, and review what matters before a chat prompt is even written. It is the structured view for ranking work, spotting patterns, and directing attention across a live pipeline of opportunities.",
    cardSections: [
      {
        items: [
          {
            title: "Filter what matters",
            body: "Sector, buyer, deadline, fit, reach, and decision posture should help teams narrow the field quickly instead of scanning long flat lists.",
          },
          {
            title: "Rank by pursuit value",
            body: "The explorer should support prioritisation by winnability, confidence, urgency, and strategic value rather than defaulting to publication date alone.",
          },
          {
            title: "Open context fast",
            body: "A strong explorer is not just a table. It should lead directly into document context, decision rationale, buyer background, and next actions.",
          },
          {
            title: "Support team review",
            body: "Teams need to move from browse mode into action mode. The explorer should support that handoff cleanly by surfacing why a result deserves attention.",
          },
        ],
        cols: 2,
      },
    ],
    mediaSection: {
      items: [
        {
          eyebrow: "Explorer UI",
          title: "Filter, rank, and review live opportunities",
          description:
            "Placeholder for an explorer walkthrough showing filter sets, ranking logic, shortlist actions, and linked decision context.",
          variant: "product",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "How is the explorer different from a tender board?",
          answer:
            "Tender boards are source systems. The explorer is the decision surface that ranks opportunities against the team, not just a feed of what exists in market.",
        },
        {
          question: "Why should this page exist separately from opportunity intelligence?",
          answer:
            "Opportunity intelligence defines the category. The explorer explains the day-to-day workflow teams use to review and triage real opportunities inside the product.",
        },
      ],
    },
  },
  opportunityMatrix: {
    title: "Opportunity matrix",
    intro:
      "The matrix is where BidBlender turns multiple signals into a visual decision pattern. It helps a team see not just what is in front of them, but which opportunities combine genuine fit with a credible path to attention.",
    cardSections: [
      {
        items: [
          {
            title: "Fit versus access",
            body: "A matrix view makes tradeoffs visible. Strong fit with weak access is different from strong access with weak delivery fit, and those should not collapse into the same score.",
          },
          {
            title: "Visual prioritisation",
            body: "Teams should be able to identify likely bid candidates, likely no-bids, and the ambiguous middle at a glance rather than reading every opportunity in full.",
          },
          {
            title: "Decision support, not decoration",
            body: "The matrix should help teams reason. It needs meaningful axes, clear labels, and direct links into the evidence behind each plotted opportunity.",
          },
          {
            title: "Great for workshops",
            body: "A visual distribution of live opportunities is especially useful in internal review meetings where teams need to align quickly on what deserves attention.",
          },
        ],
        cols: 2,
      },
    ],
    mediaSection: {
      items: [
        {
          eyebrow: "Matrix Preview",
          title: "See the field, not just the list",
          description:
            "Placeholder for a matrix explainer showing how opportunities move between quadrants as reach, fit, and evidence change.",
          variant: "interactive",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "Why use a matrix at all?",
          answer:
            "Because visual structure makes tradeoffs easier to see. A matrix helps teams reason about competing opportunities faster than a flat ranked list alone.",
        },
        {
          question: "What should future versions add?",
          answer:
            "Hover detail, filters, quadrant explanations, and live links into blockers, movers, and detail context are natural extensions of the current matrix story.",
        },
      ],
    },
  },
  strategyRecommendations: {
    title: "Strategy recommendations",
    intro:
      "Not every good opportunity should be pursued the same way. Strategy recommendations are where BidBlender translates evidence into posture, sequencing, and team action rather than leaving users with raw signals alone.",
    cardSections: [
      {
        items: [
          {
            title: "Choose the right posture",
            body: "Some opportunities deserve direct pursuit. Others need a partner, a research step, or an early stop. Strategy recommendations should help teams select the right approach, not just a yes or no.",
          },
          {
            title: "Expose blockers and movers",
            body: "The strategy layer should call out what is in the way and what would materially change the decision so teams know where to spend time next.",
          },
          {
            title: "Guide team action",
            body: "Recommendations should help bid, capture, and growth teams coordinate around concrete actions such as who to contact, what to validate, and what to prepare.",
          },
          {
            title: "Preserve confidence context",
            body: "Advice is only as useful as the confidence behind it. The site should explain that BidBlender is designed to pair recommendations with evidence confidence and source visibility.",
          },
        ],
        cols: 2,
      },
    ],
    mediaSection: {
      items: [
        {
          eyebrow: "Strategy Panel",
          title: "Recommended next actions, not vague commentary",
          description:
            "Placeholder for a strategy walkthrough showing blockers, research tasks, and posture recommendations attached to a live opportunity.",
          variant: "product",
        },
      ],
    },
    faqSection: {
      items: [
        {
          question: "How is this different from bid/no-bid?",
          answer:
            "Bid/no-bid defines the current decision state. Strategy recommendations explain what posture that state implies and what the team should actually do next.",
        },
        {
          question: "Why should this page exist separately?",
          answer:
            "Because it communicates that BidBlender is not only diagnostic. It is also meant to help teams operationalise the decision with clearer guidance and sequencing.",
        },
      ],
    },
  },
};
