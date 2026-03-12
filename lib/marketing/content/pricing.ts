export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    cadence: "/month",
    badge: "Ad-supported",
    description:
      "A generous evaluation tier for teams that want to understand the workflow before committing to a paid plan.",
    points: [
      "Core dashboard, chat, and opportunity review",
      "Good for evaluation and light ongoing use",
      "A practical starting point for solo users and early exploration",
    ],
    cta: "Start free",
    href: "/auth/signup",
  },
  {
    name: "Starter",
    price: "$19",
    cadence: "AUD inc GST /m",
    badge: "For individuals",
    description:
      "For solo operators and small consultancies that want a cleaner, ad-free workflow.",
    points: [
      "Ads removed completely",
      "Designed for one active user",
      "Stronger day-to-day usage posture",
      "A clear entry point for regular bid qualification work",
    ],
    cta: "Choose Starter",
    href: "/book-a-demo",
  },
  {
    name: "Team",
    price: "$79",
    cadence: "AUD inc GST /m",
    badge: "For active teams",
    description:
      "For teams connecting CRM, relationship, and tender sources across shared workflows.",
    points: [
      "Multi-user collaboration posture",
      "Better suited to active bid and growth teams",
      "Stronger fit for connected-data workflows",
      "A more practical tier for regular shared use",
    ],
    cta: "Talk to us",
    href: "/book-a-demo",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    badge: "Tailored rollout",
    description:
      "For larger teams that need heavier integration, governance, and deployment support.",
    points: [
      "Commercially tailored rollout",
      "Integration and workflow depth",
      "Implementation and governance support",
      "Appropriate for larger procurement or consulting teams",
    ],
    cta: "Contact sales",
    href: "/contact",
  },
] as const;

export const pricingStats = [
  {
    value: "4",
    label: "Plan paths",
    detail: "Free, Starter, Team, and Enterprise packaging for different levels of maturity.",
  },
  {
    value: "Ad-free",
    label: "Paid experience",
    detail: "Paid plans remove advertising and support a cleaner day-to-day workflow.",
  },
  {
    value: "Flexible",
    label: "Growth path",
    detail: "Start small, then move into team-wide and integration-heavy usage as needs expand.",
  },
  {
    value: "Tailored",
    label: "Enterprise rollout",
    detail: "Larger customers can align packaging to integration, governance, and deployment needs.",
  },
] as const;

export const pricingComparisonColumns = [
  {
    title: "Free",
    description: "Ad-supported evaluation tier.",
  },
  {
    title: "Starter",
    description: "Individual or very small team paid tier.",
  },
  {
    title: "Team",
    description: "Connected, shared workflow tier.",
  },
  {
    title: "Enterprise",
    description: "Tailored deployment and governance tier.",
  },
] as const;

export const pricingComparisonRows = [
  {
    label: "Ads",
    values: ["Yes", "No", "No", "No"],
  },
  {
    label: "Best fit",
    values: [
      "Evaluation and discovery",
      "Solo operator or small consultancy",
      "Active multi-user bid team",
      "Larger, integration-heavy customer",
    ],
  },
  {
    label: "Workflow posture",
    values: [
      "Low-friction entry",
      "Ad-free individual use",
      "Shared team workflows",
      "Tailored rollout and support",
    ],
  },
] as const;

export const pricingFaqs = [
  {
    question: "Why keep a free tier at all?",
    answer:
      "Because the product category still needs education. A free tier gives teams room to understand the workflow before they commit to a paid plan.",
  },
  {
    question: "What changes when you move to a paid plan?",
    answer:
      "Paid plans remove ads and better suit teams that want BidBlender to become part of regular bid qualification work rather than occasional evaluation.",
  },
  {
    question: "Who is Starter for?",
    answer:
      "Starter is aimed at solo operators, independent consultants, and smaller firms that want a cleaner working environment without jumping immediately into a team rollout.",
  },
  {
    question: "When should a customer talk to sales?",
    answer:
      "Once the need moves beyond individual use into shared workflows, integration depth, governance, or a broader organisational rollout, a direct commercial conversation makes more sense.",
  },
] as const;
