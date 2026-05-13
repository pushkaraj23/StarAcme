export type ServiceSolutionDetail = {
  ledeTitle: string;
  lede: string;
  outcomesHeading: string;
  outcomesSub: string;
  outcomes: { title: string; body: string }[];
  situationTitle: string;
  situationBody: string;
  situationBullets: string[];
  capabilitiesHeading: string;
  capabilitiesSub: string;
  capabilities: { title: string; body: string }[];
  frameworkTitle: string;
  frameworkSub: string;
  frameworkItems: { title: string; body: string }[];
  processHeading: string;
  processSub: string;
  process: { step: string; title: string; body: string }[];
  assuranceTitle: string;
  assuranceBody: string;
  assurancePoints: { title: string; body: string }[];
};

export type ExpertService = {
  slug: string;
  title: string;
  description: string;
  image: string;
  dark: boolean;
  /** When set, the service detail route renders a full solution narrative below the hero. */
  solutionDetail?: ServiceSolutionDetail;
};

export const EXPERT_SERVICES: ExpertService[] = [
  {
    slug: "reward-engagement-programs",
    title: "Reward & Engagement Programs",
    description:
      "For stronger engagement, improved performance, and building lasting loyalty across teams, channels, and key stakeholders.",
    image: "/graphics/home/service1.svg",
    dark: false,
    solutionDetail: {
      ledeTitle: "Recognition that reinforces the behaviours you need",
      lede:
        "Effective reward and engagement programmes connect clear rules, timely recognition, and fulfilment people trust — without burying your teams in spreadsheets or vendor lock-in. We design the journeys, tooling, and governance so programmes feel fair, stay on-brand, and scale as your channels and partners grow.",
      outcomesHeading: "What a mature programme delivers",
      outcomesSub:
        "We align incentives with how you measure success — so engagement is not a side campaign but part of how teams and partners operate day to day.",
      outcomes: [
        {
          title: "Higher participation, less noise",
          body:
            "Simple eligibility, transparent progress, and relevant touchpoints — so people understand what to do and why it matters, instead of chasing clarification over email.",
        },
        {
          title: "Performance you can steer",
          body:
            "Dashboards on uptake, tier movement, redemption, and cost-to-serve — so you adjust rules and budgets with evidence, not gut feel after the quarter closes.",
        },
        {
          title: "Loyalty that outlasts a single campaign",
          body:
            "Programmes structured for seasons, regions, and partner types — with extension points for new products or channels without rebuilding from zero each time.",
        },
      ],
      situationTitle: "Where engagement programmes usually stall",
      situationBody:
        "Many organisations start with good intent — then complexity, manual fulfilment, and unclear ownership erode trust in the programme itself.",
      situationBullets: [
        "Rules live in decks and inboxes: sales, HR, and partners hear different versions of who qualifies for what, and when.",
        "Recognition arrives late or feels generic — so it stops reinforcing the behaviours you care about.",
        "Fulfilment depends on a few heroes updating trackers; errors are hard to trace and even harder to explain to finance or auditors.",
        "Channel and partner models differ, but the tooling assumes one-size-fits-all — so local teams improvise workarounds outside your stack.",
      ],
      capabilitiesHeading: "What we design and build with you",
      capabilitiesSub:
        "From a focused pilot in one region or channel to a multi-audience platform — depth matches your risk appetite and internal capacity.",
      capabilities: [
        {
          title: "Programme design and rules modelling",
          body:
            "Workshops to translate objectives into tiers, milestones, guardrails, and exception paths — then a clear rule model your admins can evolve without breaking history.",
        },
        {
          title: "Participant and partner experiences",
          body:
            "Web and mobile-friendly surfaces for progress, claims, and support — tuned to the roles that matter: reps, managers, distributors, or end customers.",
        },
        {
          title: "Catalogue, rewards, and fulfilment hooks",
          body:
            "Integration with vouchers, merchandise, payouts, or internal recognition — with status tracking so nobody is left wondering where their reward went.",
        },
        {
          title: "Comms and nudges in rhythm",
          body:
            "Triggered messages aligned to your tone of voice — launches, reminders at the right cadence, and escalations when someone is stuck or at risk of dropping off.",
        },
        {
          title: "Admin, audit, and controls",
          body:
            "Role-based access, approval queues for sensitive adjustments, and immutable logs for who changed what — so compliance conversations stay short.",
        },
        {
          title: "Analytics and experimentation",
          body:
            "Cohort views, A/B-friendly structures where appropriate, and export paths for finance — without turning every question into a custom report request.",
        },
      ],
      frameworkTitle: "A programme architecture that stays fair and governable",
      frameworkSub:
        "Engagement touches people’s pay, reputation, and trust. We bake in clarity, proportionality, and change control from the start.",
      frameworkItems: [
        {
          title: "Single source of truth for rules",
          body:
            "Published definitions, version notes, and effective dates — so “the policy” is what the system enforces, not what someone remembers from last year’s deck.",
        },
        {
          title: "Proportional risk controls",
          body:
            "Separation of duties, limits, and review paths sized to your regulatory and internal policy context — not checkbox theatre that slows every claim.",
        },
        {
          title: "Brand and narrative consistency",
          body:
            "Templates, imagery, and copy patterns your marketing team can own — while we keep the technical rails stable underneath.",
        },
        {
          title: "Roadmap for audiences and markets",
          body:
            "Modular rollout: prove value with one segment, then extend eligibility, currencies, or partner hierarchies without rewriting core flows.",
        },
      ],
      processHeading: "From concept to a programme people actually use",
      processSub:
        "We keep sponsors, operations, and IT aligned — so launch is not the first time someone discovers a blocking constraint.",
      process: [
        {
          step: "01",
          title: "Objectives, audiences, and constraints",
          body:
            "We map who you need to move, what “good” looks like in behaviour and revenue terms, and non-negotiables (policy, brand, partner contracts, timelines).",
        },
        {
          step: "02",
          title: "Prototype journeys and rule walkthroughs",
          body:
            "Clickable flows and sample scenarios with finance and HR in the room — so edge cases surface before engineering commits to brittle shortcuts.",
        },
        {
          step: "03",
          title: "Build, integrate, and pilot",
          body:
            "Ship to a bounded cohort first: integrate with HR, CRM, or partner data where needed, harden fulfilment, and tune messaging from real feedback.",
        },
        {
          step: "04",
          title: "Scale, handover, and continuous improvement",
          body:
            "Playbooks for admins, training for support teams, and a backlog driven by adoption metrics — so the programme tightens instead of drifting.",
        },
      ],
      assuranceTitle: "Runbooks, ownership, and room to evolve",
      assuranceBody:
        "Your teams should run day-two operations without constant vendor dependency. We document decisions, train operators, and leave extension points that match your roadmap.",
      assurancePoints: [
        {
          title: "Admin and support guides",
          body: "Step-by-step handling for common adjustments, disputes, and escalations — written for the people who will answer the tickets.",
        },
        {
          title: "Change windows you can trust",
          body: "Lightweight release rhythm for rule updates, with testing hooks so surprises show up in staging, not on pay day.",
        },
        {
          title: "Technical clarity",
          body: "Integration maps and data contracts so your internal teams or future partners know where boundaries sit.",
        },
      ],
    },
  },
  {
    slug: "integrated-business-reporting",
    title: "Integrated Business Reporting",
    description:
      "For transforming field force activity and operational data into real-time visibility, driving faster decisions, stronger accountability, and clearer performance insights.",
    image: "/graphics/home/service2.svg",
    dark: false,
    solutionDetail: {
      ledeTitle: "One operating picture, grounded in how you work",
      lede:
        "Integrated business reporting is not a prettier chart — it is a disciplined way to pull activity, pipeline, inventory, service, and finance signals into views that match your cadence. We design the data layer, role-based experiences, and rollout so leaders see the same truth, and teams spend less time reconciling spreadsheets.",
      outcomesHeading: "What changes when reporting actually integrates",
      outcomesSub:
        "These are the outcomes we design toward with your stakeholders — measurable in how meetings run, how fast exceptions surface, and how much manual consolidation disappears.",
      outcomes: [
        {
          title: "Faster, calmer decisions",
          body:
            "Leaders move from debating whose export is right to discussing what to do next. Dashboards and drill paths reflect the KPIs you already use in reviews.",
        },
        {
          title: "Accountability in the field",
          body:
            "Territory, visit, and outcome data connect to targets and exceptions — so managers coach from facts, and frontline teams see how their work rolls up.",
        },
        {
          title: "Less month-end theatre",
          body:
            "Critical metrics refresh on a rhythm you trust. Finance and operations share definitions, reducing the scramble to restate numbers before every board pack.",
        },
      ],
      situationTitle: "Why reporting still feels fragmented",
      situationBody:
        "Most organisations already generate plenty of data. The pain is consistency: different tools, partial exports, and metrics that change meaning between teams.",
      situationBullets: [
        "Field systems, CRM, ERP, and spreadsheets each tell part of the story — but no single view matches how leadership actually reviews performance.",
        "Definitions drift: “active customer”, “visit completed”, and “revenue recognised” mean different things in different departments.",
        "Latency and manual stitching mean reviews look backward; exceptions are found late, after effort and margin are already spent.",
        "Mobile and role realities are ignored: what a rep needs on the road differs from what a regional head needs in a Friday stand-up.",
      ],
      capabilitiesHeading: "Capabilities we combine for you",
      capabilitiesSub:
        "We tailor depth to your maturity — from a focused first slice (for example field force plus revenue) to a broader programme spanning multiple business units.",
      capabilities: [
        {
          title: "Source-aware data integration",
          body:
            "Connectors, APIs, and controlled batch loads from the systems you already run — with clear ownership of refresh windows, error handling, and audit-friendly logs.",
        },
        {
          title: "Metric catalogue and lineage",
          body:
            "A shared layer of definitions, dimensions, and approved calculations so “one number” stays one number as filters and hierarchies change.",
        },
        {
          title: "Executive and operational dashboards",
          body:
            "Layouts tuned to real rituals: weekly sales reviews, service level stand-ups, or supply exceptions — not generic widgets bolted on.",
        },
        {
          title: "Drill-down and explainability",
          body:
            "From region to territory, SKU to customer, or ticket to root cause — within the guardrails of your access policies.",
        },
        {
          title: "Alerts and exception routing",
          body:
            "Threshold-based signals that land where work happens (email, chat, task queues) so issues surface without someone refreshing ten tabs.",
        },
        {
          title: "Performance-friendly mobile views",
          body:
            "Light, reliable surfaces for managers and field roles on constrained networks — focused tasks, not a shrunken desktop.",
        },
      ],
      frameworkTitle: "A reporting model that survives contact with reality",
      frameworkSub:
        "Sustainable reporting depends on definitions, security, and evolution paths — not a one-off build that freezes the day after launch.",
      frameworkItems: [
        {
          title: "Governed semantics",
          body:
            "Business-owned definitions with technical backing: version changes are visible, approved, and communicated — so trust in the numbers does not erode quietly.",
        },
        {
          title: "Role-based access by design",
          body:
            "Row- and column-level patterns aligned to how you already think about sensitive customer, pricing, and payroll-adjacent data.",
        },
        {
          title: "Observability and data quality",
          body:
            "Monitoring on pipelines and key checks — late arrivals, null spikes, reconciliation deltas — with playbooks your team can run.",
        },
        {
          title: "Roadmap for depth",
          body:
            "We sequence so early wins fund credibility: start with the decisions that hurt most today, then expand dimensions and history without rewriting from scratch.",
        },
      ],
      processHeading: "From fragmented inputs to a steady reporting rhythm",
      processSub:
        "A pragmatic path that keeps business users in the loop — so the system reflects nuance your vendor template never captured.",
      process: [
        {
          step: "01",
          title: "Decision and metric mapping",
          body:
            "We inventory sources, review rituals, and the questions that repeat in meetings — then prioritise the smallest set of metrics that unlock the most leverage.",
        },
        {
          step: "02",
          title: "Prototype views and walkthroughs",
          body:
            "Interactive slices early: validate filters, hierarchies, and drill paths with real stakeholders before we harden pipelines at scale.",
        },
        {
          step: "03",
          title: "Integration and hardening",
          body:
            "Production ingestion, reconciliation checks, access control, and performance tuning — shipped in slices where it reduces risk.",
        },
        {
          step: "04",
          title: "Enablement and iteration",
          body:
            "Training, admin handover, and a backlog fed by how people actually use the tools — so adoption sticks and the model improves every quarter.",
        },
      ],
      assuranceTitle: "Documentation, ownership, and a clean operating model",
      assuranceBody:
        "Reporting programmes succeed when your people can run them. We leave you with clarity on what feeds what, who approves changes, and how to extend without starting over.",
      assurancePoints: [
        {
          title: "Runbooks and metric docs",
          body: "Plain-language definitions, source mappings, and escalation paths when feeds misbehave.",
        },
        {
          title: "Sensible change control",
          body: "Lightweight patterns for proposing, testing, and publishing definition updates.",
        },
        {
          title: "Architecture you can grow",
          body: "Modular design so new sources or business units plug in without rebuilding the entire stack.",
        },
      ],
    },
  },
  {
    slug: "workflow-automation-programs",
    title: "Workflow Automation Programs",
    description:
      "For improved efficiency, eliminate repetitive manual work and reduce manual follow-ups by replacing them with streamlined digital workflows.",
    image: "/graphics/home/service3.svg",
    dark: true,
    solutionDetail: {
      ledeTitle: "Workflows that match how approvals and handoffs really happen",
      lede:
        "Automation is not about removing people — it is about removing duplicate data entry, mystery status, and endless chasing across inboxes. We map the critical paths, introduce structured digital steps with clear ownership, and integrate where work already lives — so teams get time back and nothing important slips between tools.",
      outcomesHeading: "What good workflow automation feels like",
      outcomesSub:
        "We measure success by fewer dropped balls, faster cycle times, and audit trails your risk team can rely on — not by how many bots you deployed.",
      outcomes: [
        {
          title: "Predictable cycle times",
          body:
            "Requests, approvals, and fulfilment move on visible SLAs with reminders that escalate sensibly — instead of dying in someone’s unread folder.",
        },
        {
          title: "One place to see status",
          body:
            "Initiators and approvers share a single thread of truth: what stage a case is in, who owns the next action, and what is still missing.",
        },
        {
          title: "Less re-keying, fewer errors",
          body:
            "Data is captured once and propagated with validation rules — cutting the reconciliation work that follows every manual copy-paste between systems.",
        },
      ],
      situationTitle: "Why “we’ll just use email and spreadsheets” stops scaling",
      situationBody:
        "Informal coordination works until volume, compliance, or distributed teams make exceptions expensive. That is usually when quality and morale both dip.",
      situationBullets: [
        "The same information is typed into three systems because integrations were never prioritised — and nobody agrees which system is authoritative.",
        "Approvals are implicit: “I thought Bob was handling it” becomes the root cause of missed deadlines and customer impact.",
        "Audits hurt: reconstructing who approved what, when, and on what basis means archaeology across threads and attachments.",
        "Exceptions balloon: every edge case becomes a manual workaround known only to a few veterans — fragile when they rotate or go on leave.",
      ],
      capabilitiesHeading: "Building blocks we assemble for your context",
      capabilitiesSub:
        "We favour composable patterns — forms, queues, notifications, integrations — over a monolithic “platform” that fights your existing stack.",
      capabilities: [
        {
          title: "Process discovery and friction mapping",
          body:
            "Structured interviews and shadowing to find the highest-cost loops: where wait time, rework, and compliance risk concentrate — so automation starts where ROI is obvious.",
        },
        {
          title: "Digital intake and structured tasks",
          body:
            "Guided forms, attachments, and validation so submissions arrive complete — reducing the ping-pong before work can even start.",
        },
        {
          title: "Routing, delegation, and escalation",
          body:
            "Rules that reflect real reporting lines, cover roles, and out-of-office behaviour — with override paths that are logged, not invisible side doors.",
        },
        {
          title: "System integration and idempotent updates",
          body:
            "APIs, webhooks, or controlled batch sync into ERP, CRM, HRIS, or ticketing — designed so retries and partial failures do not corrupt downstream records.",
        },
        {
          title: "Human-in-the-loop where judgment matters",
          body:
            "Checkpoints, commentary, and attachments for decisions that should not be fully algorithmic — while the machine handles everything around them.",
        },
        {
          title: "Observability and operational dashboards",
          body:
            "Bottleneck views, SLA breaches, and volume trends — so operations can tune thresholds and staffing instead of reacting to complaints.",
        },
      ],
      frameworkTitle: "Reliability and governance built into the flow",
      frameworkSub:
        "Workflows touch money, people, and customer commitments. We design for failure modes, access control, and change management — not just the happy path demo.",
      frameworkItems: [
        {
          title: "Audit trails by default",
          body:
            "Immutable event history: who acted, what changed, and which policy version applied — exportable for internal review or external audit.",
        },
        {
          title: "Access aligned to reality",
          body:
            "Least-privilege patterns and segregation of duties where your policies require them — without making everyday approvers jump through impossible hoops.",
        },
        {
          title: "Versioned definitions and safe rollout",
          body:
            "Staged publishing for routing and validation changes, with rollback paths when a new rule misbehaves in production.",
        },
        {
          title: "Operational playbooks",
          body:
            "Runbooks for stuck jobs, integration outages, and manual intervention — so support is repeatable instead of heroic.",
        },
      ],
      processHeading: "From fragile coordination to dependable digital handoffs",
      processSub:
        "We ship in slices so risk stays visible: prove value on one workflow family, then reuse patterns across adjacent processes.",
      process: [
        {
          step: "01",
          title: "Select and scope the first family",
          body:
            "Pick a cluster of related requests (onboarding, vendor setup, service tickets, capex — whatever hurts most) with clear sponsors and success metrics.",
        },
        {
          step: "02",
          title: "Model, prototype, and stress-test",
          body:
            "Walkthroughs with real approvers on edge cases: partial data, rejections, delegated authority, and peak-volume days — before we wire production integrations.",
        },
        {
          step: "03",
          title: "Integrate and harden",
          body:
            "Production connectors, error handling, monitoring, and access control — with parallel run or shadow mode where the business needs extra confidence.",
        },
        {
          step: "04",
          title: "Train, hand over, and expand",
          body:
            "Enablement for initiators and admins, clear ownership for changes, then reuse components to tackle the next process family without reinventing the wheel.",
        },
      ],
      assuranceTitle: "Handover your operations team can own",
      assuranceBody:
        "Automation that only the vendor understands becomes shadow IT again. We prioritise documentation, sensible admin tooling, and patterns your engineers can extend.",
      assurancePoints: [
        {
          title: "Documentation that matches reality",
          body: "Architecture notes, integration contracts, and decision logs — updated as part of delivery, not as an afterthought.",
        },
        {
          title: "Safe change habits",
          body: "Promotion paths from dev to production, checklists for rule changes, and monitoring hooks so regressions surface early.",
        },
        {
          title: "Reuse, not one-offs",
          body: "Shared components for notifications, task lists, and approvals — so the second and tenth workflows cost less than the first.",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ExpertService | undefined {
  return EXPERT_SERVICES.find((s) => s.slug === slug);
}
