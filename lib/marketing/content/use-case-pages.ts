import type { FeaturePageContent } from "@/components/marketing/FeaturePage";

export const useCasePageContent: Record<
  | "bidTeams"
  | "growthTeams"
  | "captureManagers"
  | "consultancies"
  | "governmentSuppliers"
  | "systemsIntegrators",
  FeaturePageContent
> = {
  bidTeams: {
    title: "For bid teams",
    intro:
      "Bid teams need more than tender visibility. They need a defensible way to decide where effort should go, what evidence is missing, and how to stop early when a pursuit is not worth the burn.",
    cardSections: [
      {
        items: [
          { title: "Qualify earlier", body: "BidBlender helps bid teams move qualification forward so expensive proposal effort is reserved for work with a credible path to win." },
          { title: "Resolve ambiguity", body: "Amber opportunities are where internal debate and wasted time accumulate. The platform is designed to turn that uncertainty into research steps and clearer judgment." },
          { title: "Compare against real evidence", body: "Case studies, certifications, relationship context, and prior pursuits help a team judge more rigorously than generic gut feel alone." },
          { title: "Work across one surface", body: "Chat, explorer, matrix, and detail context should support the same decision rather than scattering the workflow across disconnected systems." },
        ],
        cols: 2,
      },
    ],
  },
  growthTeams: {
    title: "For growth teams",
    intro:
      "Growth teams need to know where real pursuit value exists, not just where there is market noise. BidBlender is designed to help growth leaders see what is emerging, what is plausible, and what deserves coordinated attention.",
    cardSections: [
      {
        items: [
          { title: "Prioritise the right opportunities", body: "Use opportunity, reach, and history signals to focus on the work most likely to justify team attention." },
          { title: "Connect sales memory to procurement reality", body: "CRM context becomes more useful when it is interpreted through procurement-specific qualification rather than generic pipeline reporting." },
          { title: "Spot access gaps early", body: "Growth teams can use network context to see where they have a path into the buyer and where they need to build one." },
          { title: "Align with bid teams faster", body: "A shared qualification layer helps growth and bid teams reason from the same evidence instead of handoff friction and opinion drift." },
        ],
        cols: 2,
      },
    ],
  },
  captureManagers: {
    title: "For capture managers",
    intro:
      "Capture managers need a clearer way to understand posture, influence, and the evidence gaps that still separate a plausible pursuit from a real one. BidBlender is built to support that discipline.",
    cardSections: [
      {
        items: [
          { title: "See posture clearly", body: "Capture decisions are not only yes or no. They often depend on whether more shaping, more access, or more capability proof is needed first." },
          { title: "Track blockers and movers", body: "A useful capture workflow highlights what is unresolved and what would materially change the likelihood of pursuit success." },
          { title: "Coordinate internal action", body: "Capture work touches relationships, capability proof, partner strategy, and bid planning. BidBlender should help make those dependencies visible." },
          { title: "Avoid shallow scoring", body: "Capture teams need more than a number. They need rationale, confidence, and visible evidence for why an opportunity should be advanced or deprioritised." },
        ],
        cols: 2,
      },
    ],
  },
  consultancies: {
    title: "For consultancies",
    intro:
      "Consultancies often win or lose work based on a mix of positioning, proof, and buyer access. BidBlender is meant to help smaller and mid-sized advisory teams qualify more selectively and present stronger pursuit logic internally.",
    cardSections: [
      {
        items: [
          { title: "Protect scarce bid effort", body: "Smaller firms cannot afford to chase everything. BidBlender helps consultancies stop earlier and focus on better-fit work." },
          { title: "Use prior work well", body: "Case studies, sectors, buyers, and past pursuits become more reusable when the system can map new opportunities back to what the firm already knows." },
          { title: "Assess access honestly", body: "Consultancies often rely heavily on partner networks and buyer familiarity. Reach should be visible as part of the decision, not left implicit." },
          { title: "Build a repeatable qualification model", body: "The platform should help founder-led and small-team consultancies turn ad hoc judgment into a more consistent pursuit discipline." },
        ],
        cols: 2,
      },
    ],
  },
  governmentSuppliers: {
    title: "For government suppliers",
    intro:
      "Government suppliers need procurement-specific qualification, not generic market-intent tooling. BidBlender is designed to reason about public-sector opportunities where panels, compliance, timing, and buyer familiarity all matter.",
    cardSections: [
      {
        items: [
          { title: "Monitor the right boards", body: "Public-sector suppliers need practical visibility across the government procurement sources that matter to their market." },
          { title: "Respect procurement reality", body: "Government work often carries panel logic, mandatory credentials, and process discipline that generic B2B tooling handles poorly." },
          { title: "Blend evidence classes", body: "Opportunity discovery, buyer history, capability proof, and reach all need to work together if a public-sector supplier is going to qualify well." },
          { title: "Support defensible no-bid decisions", body: "Some government pursuits look attractive but are operationally thin, misaligned, or access-constrained. The platform should help teams stop with confidence." },
        ],
        cols: 2,
      },
    ],
  },
  systemsIntegrators: {
    title: "For systems integrators",
    intro:
      "Systems integrators often manage complex capability footprints, partner models, and broad opportunity portfolios. BidBlender is intended to help them qualify work across that complexity without collapsing everything into a shallow pipeline view.",
    cardSections: [
      {
        items: [
          { title: "Map broad capability to real pursuits", body: "Large service breadth can make almost any opportunity look technically plausible. BidBlender should help SIs distinguish plausibility from the work they genuinely want and can win." },
          { title: "Use partner and buyer context", body: "Systems integrators often pursue through ecosystem relationships as much as direct delivery fit. Reach and partner posture need to be part of qualification." },
          { title: "Coordinate across teams", body: "Growth, capture, bid, and delivery leaders need shared context if opportunity decisions are going to be coherent at scale." },
          { title: "Handle integration depth", body: "SIs are also likely candidates for richer CRM, HCM, and extensibility integrations, which makes the broader BidBlender platform story commercially relevant." },
        ],
        cols: 2,
      },
    ],
  },
};
