import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Staracme",
  description:
    "Staracme builds personalised digital systems that adapt to how your organisation works — from engagement platforms to reporting and workflow automation.",
};

const VALUES = [
  {
    title: "Built around your reality",
    body:
      "We invest time in understanding workflows, constraints, and how decisions are made — so software feels native to your teams instead of fighting them.",
  },
  {
    title: "Clarity over complexity",
    body:
      "We favour straightforward architectures and honest trade-offs. The goal is dependable systems you can evolve, not a maze of one-off fixes.",
  },
  {
    title: "Outcomes you can feel",
    body:
      "From less manual follow-up to faster reporting, we measure success by whether day-to-day work gets easier and leadership gets a clearer picture.",
  },
] as const;

const FOCUS_AREAS = [
  {
    title: "Visibility without the scramble",
    body:
      "Dashboards and reporting that reflect how your business is measured — not exports stitched together at month-end.",
  },
  {
    title: "Workflows that stay in sync",
    body:
      "Hand-offs, approvals, and notifications designed around real roles — fewer duplicate entries and fewer things falling through the cracks.",
  },
  {
    title: "Engagement that feels intentional",
    body:
      "Programs and touchpoints that reward the behaviour you want, with tooling your teams can run without constant vendor dependency.",
  },
  {
    title: "Platforms you can grow into",
    body:
      "We design for the next constraint: permissions, audit trails, and extension points so you are not boxed in after launch.",
  },
] as const;

const ENGAGEMENT_PHASES = [
  {
    step: "01",
    title: "Discovery & alignment",
    body:
      "We map the current journey, pain points, and what “good” looks like for stakeholders — so scope reflects reality, not assumptions.",
  },
  {
    step: "02",
    title: "Design & validation",
    body:
      "Flows, data models, and interfaces take shape early. You see prototypes before we commit to the heavy build, and we adjust while change is cheap.",
  },
  {
    step: "03",
    title: "Build & integrate",
    body:
      "We ship in slices where it helps: integrate with existing tools, migrate carefully, and keep risk visible instead of hiding it until the end.",
  },
  {
    step: "04",
    title: "Launch & steady improvement",
    body:
      "Training, monitoring, and a clear ownership model. After go-live we stay close until the new rhythm feels normal — then we help you iterate.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="w-full flex-1 bg-background px-6 pb-24 pt-[7.5rem] sm:px-10 sm:pb-28 sm:pt-[8.5rem] lg:px-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary/65 transition-colors hover:text-accent"
        >
          <span aria-hidden>←</span>
          Back to home
        </Link>

        <header className="mt-10 text-center sm:mt-12">
          <p className="text-base font-medium text-accent">About us</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.35rem]">
            Technology that adapts to your business
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary/72 sm:text-lg">
            Businesses often get stuck where spreadsheets, disconnected tools, and manual follow-ups
            cost more than they save. Staracme exists to close that gap with systems shaped around how
            you actually operate.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12">
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/80 via-secondary/40 to-accent/[0.12] blur-2xl sm:-inset-4 sm:rounded-[2.25rem]"
                aria-hidden
              />
              <Image
                src="/graphics/home/about-image.svg"
                alt="Collaborative discussion about digital products"
                width={1040}
                height={720}
                className="relative z-[1] h-auto w-full drop-shadow-[0_20px_48px_rgba(55,55,55,0.12)]"
                priority
              />
            </div>
          </div>

          <div className="liquid-glass liquid-glass-readable rounded-[28px] px-7 py-8 text-left text-base leading-relaxed text-primary shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:px-8 sm:py-9">
            <p>
              Staracme partners with organisations to build personalised digital systems that remove
              friction, improve decision-making, and optimise workflows. Rather than asking you to bend
              around generic software, we shape solutions around the way your teams already work.
            </p>
            <p className="mt-5">
              From reward and engagement ecosystems to intelligent reporting and workflow automation, we
              help you move with more clarity, speed, and focus — without losing the nuance of your
              operations.
            </p>
          </div>
        </div>

        <section className="mt-14 sm:mt-16" aria-labelledby="about-values-heading">
          <div className="text-center">
            <h2
              id="about-values-heading"
              className="text-xl font-semibold tracking-tight text-primary sm:text-2xl"
            >
              How we work with you
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
              A few principles that stay consistent across every engagement — whether we are shipping a
              first release or iterating with your internal teams.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-11 md:grid-cols-3 md:gap-6">
            {VALUES.map((item) => (
              <li
                key={item.title}
                className="liquid-glass liquid-glass-readable testimonial-unified-drop testimonial-glass-muted flex flex-col rounded-[22px] p-6 text-left sm:rounded-3xl sm:p-7"
              >
                <h3 className="text-base font-semibold leading-snug text-primary sm:text-[1.0625rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/72 sm:text-[0.9375rem]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex justify-center gap-3 sm:mt-12" aria-hidden>
          <span className="h-6 w-6 rounded-full border border-accent bg-transparent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
        </div>

        <section
          className="mt-14 border-t border-primary/[0.08] pt-14 sm:mt-16 sm:pt-16"
          aria-labelledby="about-focus-heading"
        >
          <div className="text-center">
            <p className="text-sm font-medium text-accent sm:text-base">Focus</p>
            <h2
              id="about-focus-heading"
              className="mx-auto mt-2 max-w-2xl text-xl font-semibold tracking-tight text-primary sm:text-2xl"
            >
              Where we tend to add the most leverage
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
              Every organisation is different — but these are the places we see compounding returns when
              software is designed with context, not templates.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-11 md:grid-cols-2 md:gap-6">
            {FOCUS_AREAS.map((item, i) => {
              const muted = i % 2 === 1;
              return (
                <li
                  key={item.title}
                  className={`liquid-glass liquid-glass-readable testimonial-unified-drop flex flex-col rounded-[22px] p-6 text-left sm:rounded-3xl sm:p-7 ${
                    muted ? "testimonial-glass-muted" : "testimonial-glass-light"
                  }`}
                >
                  <h3 className="text-base font-semibold leading-snug text-primary sm:text-[1.0625rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary/72 sm:text-[0.9375rem]">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="mt-14 border-t border-primary/[0.08] pt-14 sm:mt-16 sm:pt-16"
          aria-labelledby="about-phases-heading"
        >
          <div className="text-center">
            <p className="text-sm font-medium text-accent sm:text-base">Process</p>
            <h2
              id="about-phases-heading"
              className="mx-auto mt-2 max-w-2xl text-xl font-semibold tracking-tight text-primary sm:text-2xl"
            >
              How an engagement usually unfolds
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
              Not a rigid contract checklist — a rhythm we adapt to your stakeholders, compliance needs,
              and release appetite.
            </p>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:mt-11 lg:grid-cols-2 lg:gap-5">
            {ENGAGEMENT_PHASES.map((item) => (
              <li
                key={item.step}
                className="liquid-glass liquid-glass-readable rounded-[22px] p-6 text-left sm:rounded-3xl sm:p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.step}
                </span>
                <h3 className="mt-2 text-base font-semibold text-primary sm:text-[1.0625rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/72 sm:text-[0.9375rem]">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mt-14 sm:mt-16"
          aria-labelledby="about-commitment-heading"
        >
          <div className="overflow-hidden rounded-[28px] bg-primary px-7 py-10 text-secondary shadow-[var(--shadow-soft)] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium text-accent sm:text-base">Commitment</p>
              <h2
                id="about-commitment-heading"
                className="mt-2 text-xl font-semibold leading-tight tracking-tight sm:text-2xl"
              >
                Ownership, security, and a clean handover
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-secondary/78 sm:text-base">
                We document what we build, align access and roles with your policies, and make sure your
                team can operate the system without us in the room. When third-party tools are involved,
                we favour integrations that keep your data where you want it — and interfaces your people
                will actually adopt.
              </p>
            </div>
            <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {[
                {
                  title: "Clear documentation",
                  body: "Runbooks, admin notes, and decision logs so knowledge does not live in one person’s head.",
                },
                {
                  title: "Sensible access control",
                  body: "Role-based patterns that match how you govern sensitive data and approvals today.",
                },
                {
                  title: "Room to evolve",
                  body: "We avoid one-off magic: you get a codebase and architecture you can extend with us or internally.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="liquid-glass-dark liquid-glass-readable rounded-2xl border border-secondary/10 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  <h3 className="text-sm font-semibold text-secondary sm:text-[0.9375rem]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-secondary/72 sm:text-sm">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-12 flex justify-center gap-3 sm:mt-14" aria-hidden>
          <span className="h-6 w-6 rounded-full border border-accent bg-transparent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center sm:mt-14">
          <p className="text-sm leading-relaxed text-primary/65 sm:text-base">
            Tell us what feels slow, fragile, or opaque today — we will help you map a practical path
            to something steadier.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)] transition-transform duration-200 hover:scale-[1.03]"
            >
              View projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
