import type { ServiceSolutionDetail } from "@/src/data/services";

type Props = {
  detail: ServiceSolutionDetail;
};

export function ServiceSolutionSections({ detail }: Props) {
  return (
    <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
      <section aria-labelledby="sol-lede-heading">
        <div className="liquid-glass liquid-glass-readable testimonial-unified-drop testimonial-glass-light rounded-[28px] px-7 py-8 text-left sm:rounded-[32px] sm:px-9 sm:py-10">
          <h2
            id="sol-lede-heading"
            className="text-lg font-semibold tracking-tight text-primary sm:text-xl"
          >
            {detail.ledeTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/78 sm:text-[1.0625rem]">
            {detail.lede}
          </p>
        </div>
      </section>

      <section aria-labelledby="sol-outcomes-heading">
        <div className="text-center">
          <p className="text-sm font-medium text-accent sm:text-base">Outcomes</p>
          <h2
            id="sol-outcomes-heading"
            className="mx-auto mt-2 max-w-2xl text-xl font-semibold tracking-tight text-primary sm:text-2xl"
          >
            {detail.outcomesHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
            {detail.outcomesSub}
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-11 md:grid-cols-3 md:gap-6">
          {detail.outcomes.map((item) => (
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

      <section
        className="border-t border-primary/[0.08] pt-14 sm:pt-16"
        aria-labelledby="sol-situation-heading"
      >
        <div className="text-center">
          <p className="text-sm font-medium text-accent sm:text-base">The gap</p>
          <h2
            id="sol-situation-heading"
            className="mx-auto mt-2 max-w-2xl text-xl font-semibold tracking-tight text-primary sm:text-2xl"
          >
            {detail.situationTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
            {detail.situationBody}
          </p>
        </div>
        <ul className="mx-auto mt-8 max-w-3xl list-disc space-y-2.5 pl-5 text-left text-sm leading-relaxed text-primary/78 marker:text-accent sm:mt-9 sm:text-[0.9375rem]">
          {detail.situationBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sol-cap-heading">
        <div className="text-center">
          <p className="text-sm font-medium text-accent sm:text-base">What we build</p>
          <h2
            id="sol-cap-heading"
            className="mx-auto mt-2 max-w-2xl text-xl font-semibold tracking-tight text-primary sm:text-2xl"
          >
            {detail.capabilitiesHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
            {detail.capabilitiesSub}
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-11 md:grid-cols-2 md:gap-6">
          {detail.capabilities.map((item, i) => {
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
        className="border-t border-primary/[0.08] pt-14 sm:pt-16"
        aria-labelledby="sol-framework-heading"
      >
        <div className="text-center">
          <p className="text-sm font-medium text-accent sm:text-base">Data and definitions</p>
          <h2
            id="sol-framework-heading"
            className="mx-auto mt-2 max-w-2xl text-xl font-semibold tracking-tight text-primary sm:text-2xl"
          >
            {detail.frameworkTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
            {detail.frameworkSub}
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-11 lg:grid-cols-2 lg:gap-6">
          {detail.frameworkItems.map((item) => (
            <li
              key={item.title}
              className="liquid-glass liquid-glass-readable rounded-[22px] p-6 text-left sm:rounded-3xl sm:p-7"
            >
              <h3 className="text-base font-semibold text-primary sm:text-[1.0625rem]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary/72 sm:text-[0.9375rem]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sol-process-heading">
        <div className="text-center">
          <p className="text-sm font-medium text-accent sm:text-base">How we deliver</p>
          <h2
            id="sol-process-heading"
            className="mx-auto mt-2 max-w-2xl text-xl font-semibold tracking-tight text-primary sm:text-2xl"
          >
            {detail.processHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base">
            {detail.processSub}
          </p>
        </div>
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:mt-11 lg:grid-cols-2 lg:gap-5">
          {detail.process.map((item) => (
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

      <section aria-labelledby="sol-assurance-heading">
        <div className="overflow-hidden rounded-[28px] bg-primary px-7 py-10 text-secondary shadow-[var(--shadow-soft)] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-accent sm:text-base">Governance and adoption</p>
            <h2
              id="sol-assurance-heading"
              className="mt-2 text-xl font-semibold leading-tight tracking-tight sm:text-2xl"
            >
              {detail.assuranceTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-secondary/78 sm:text-base">
              {detail.assuranceBody}
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {detail.assurancePoints.map((item) => (
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

      <div className="flex justify-center gap-3" aria-hidden>
        <span className="h-6 w-6 rounded-full border border-accent bg-transparent" />
        <span className="h-6 w-6 rounded-full bg-accent" />
        <span className="h-6 w-6 rounded-full bg-accent" />
      </div>
    </div>
  );
}
