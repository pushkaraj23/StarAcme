import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Staracme",
  description:
    "Join Staracme and help organisations build personalised digital systems — thoughtful engineering, clear collaboration, and work that shows up in day-to-day operations.",
};

const WHY_JOIN = [
  {
    title: "Shape real operational impact",
    body:
      "We build systems that teams rely on every day — reporting, workflows, and platforms where quality and maintainability matter more than slide decks.",
  },
  {
    title: "Ownership without noise",
    body:
      "Small, focused squads, direct access to stakeholders, and room to propose better paths when requirements evolve. We prefer clarity over heroics.",
  },
  {
    title: "Grow with the problems we solve",
    body:
      "You will touch product thinking, integration work, and long-lived codebases — good ground for engineers and makers who like depth as well as breadth.",
  },
] as const;

const OPEN_ROLES = [
  {
    title: "Full-stack engineer",
    type: "Engineering",
    location: "Remote-friendly",
    description:
      "Design and ship features across modern web stacks, integrations, and APIs — with an eye on performance, accessibility, and testable structure.",
  },
  {
    title: "Product-minded UI engineer",
    type: "Design / Front-end",
    location: "Remote-friendly",
    description:
      "Partner with stakeholders to turn complex workflows into interfaces that feel obvious — component systems, motion where it helps, and resilient layouts.",
  },
  {
    title: "Solutions consultant",
    type: "Client delivery",
    location: "Operating globally",
    description:
      "Facilitate discovery, translate operations into sensible technical plans, and help clients navigate trade-offs with honesty and patience.",
  },
] as const;

export default function CareersPage() {
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
          <p className="text-base font-medium text-accent">Careers</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.35rem]">
            Build software that fits how organisations actually work
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary/72 sm:text-lg">
            Staracme partners with teams who are tired of brittle tools and manual workarounds. If you
            like craft, candid collaboration, and shipping systems that hold up over time — we would
            like to hear from you.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-stretch lg:gap-12">
          <div className="liquid-glass liquid-glass-readable flex flex-col justify-center rounded-[28px] px-7 py-8 text-left text-base leading-relaxed text-primary shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:px-8 sm:py-9">
            <p>
              We are a distributed team working with clients across sectors — from engagement and
              loyalty programmes to reporting and automation. You will collaborate closely with
              engineers and stakeholders, ship iteratively, and help clients evolve what they have
              rather than starting from zero every year.
            </p>
            <p className="mt-5">
              We value written communication, respect for focus time, and pragmatism: the right amount
              of process, documentation, and tooling for the problem at hand — not more.
            </p>
          </div>

          <div className="relative flex min-h-[220px] items-center justify-center rounded-[28px] border border-white/80 bg-gradient-to-br from-secondary via-background to-accent/[0.08] p-8 shadow-[var(--shadow-soft)] sm:min-h-[260px] sm:rounded-[32px]">
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(224,0,69,0.12),transparent_55%)]"
              aria-hidden
            />
            <p className="relative max-w-sm text-center text-sm font-medium leading-relaxed text-primary/75 sm:text-base">
              No ping-pong career ladders — we hire people who care about the work, explain their
              thinking, and leave codebases kinder than they found them.
            </p>
          </div>
        </div>

        <section className="mt-14 sm:mt-16" aria-labelledby="careers-values-heading">
          <div className="text-center">
            <h2
              id="careers-values-heading"
              className="text-xl font-semibold tracking-tight text-primary sm:text-2xl"
            >
              What it is like here
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
              A few reasons people choose Staracme — and stay — beyond the projects on our site.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-11 md:grid-cols-3 md:gap-6">
            {WHY_JOIN.map((item) => (
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

        <section className="mt-14 sm:mt-16" aria-labelledby="careers-open-roles-heading">
          <div className="text-center">
            <h2
              id="careers-open-roles-heading"
              className="text-xl font-semibold tracking-tight text-primary sm:text-2xl"
            >
              Open roles
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
              We keep this list current as we grow. Don&apos;t see a perfect match? Introduce yourself
              anyway — we often build roles around strong people.
            </p>
          </div>

          <ul className="mt-10 space-y-5 sm:mt-11">
            {OPEN_ROLES.map((role) => (
              <li
                key={role.title}
                className="liquid-glass liquid-glass-readable testimonial-unified-drop rounded-[22px] p-6 text-left shadow-[var(--shadow-soft)] sm:rounded-3xl sm:p-7"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-primary">{role.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent/90">
                      {role.type}
                      <span className="text-primary/35"> · </span>
                      {role.location}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary/72 sm:text-[0.9375rem]">
                      {role.description}
                    </p>
                  </div>
                  <a
                    href="mailto:hello@staracme.com?subject=Careers%20%E2%80%94%20Application"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)] transition-transform duration-200 hover:scale-[1.03] sm:mt-0"
                  >
                    Apply
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex justify-center gap-3 md:mt-12" aria-hidden>
          <span className="h-6 w-6 rounded-full border border-accent bg-transparent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
        </div>

        <div className="mx-auto mt-14 max-w-xl text-center sm:mt-16">
          <p className="text-sm leading-relaxed text-primary/65 sm:text-base">
            Send a short note, a CV or portfolio link, and a couple of sentences on what you want to do
            next. We read every message.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@staracme.com?subject=Careers%20%E2%80%94%20General%20inquiry"
              className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)] transition-transform duration-200 hover:scale-[1.03]"
            >
              Email hello@staracme.com
            </a>
            <Link
              href="/about"
              className="inline-flex rounded-full border border-primary/15 px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/[0.04]"
            >
              About Staracme
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
