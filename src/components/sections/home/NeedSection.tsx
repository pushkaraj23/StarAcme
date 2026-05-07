import Image from "next/image";

const painPointsLeft = [
  {
    title: "Delayed Decisions",
    description: "Late data slows timely action.",
  },
  {
    title: "Poor Visibility",
    description: "Leaders can't act on what they can't see.",
  },
  {
    title: "Low Team Momentum",
    description: "Unrecognised effort weakens performance.",
  },
  {
    title: "Manual Workload",
    description: "Routine tasks consume valuable hours.",
  },
] as const;

const painPointsRight = [
  {
    title: "Disconnected Tools",
    description: "Too many systems, no real control.",
  },
  {
    title: "Growth Pressure",
    description: "Old processes break under scale.",
  },
  {
    title: "Approval Bottlenecks",
    description: "Slow approvals delay progress.",
  },
  {
    title: "Data Overload",
    description: "Too much data, too little clarity.",
  },
] as const;

function PainCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-xl border border-primary/[0.06] bg-secondary px-4 py-3 shadow-[var(--shadow-soft)] sm:px-4 sm:py-3.5">
      <h3 className="text-sm font-semibold leading-snug text-primary sm:text-[0.9375rem]">
        {title}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-primary/72 sm:text-sm">{description}</p>
    </article>
  );
}

export function NeedSection() {
  return (
    <section className="mt-36 w-full">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="liquid-glass liquid-glass-readable rounded-[8vw] p-8 shadow-[var(--shadow-soft)] sm:rounded-[5vw] sm:p-10 md:rounded-[4vw] lg:p-14 xl:p-16">
          <header className="grid gap-6 md:grid-cols-2 md:items-start md:gap-10 lg:gap-12">
            <h2 className="max-w-xl text-2xl font-semibold leading-[1.12] tracking-tight text-accent sm:text-3xl lg:text-[2rem] xl:text-[2.35rem]">
              Why Businesses Are Rebuilding their Operation Flow
            </h2>
            <p className="max-w-md text-base leading-relaxed text-primary/78 md:pt-1 md:text-lg">
              Markets are moving faster. Teams are scattered. Manual systems fail to catch up with the
              speeding market.
            </p>
          </header>

          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.92fr_minmax(0,1.42fr)_0.92fr] lg:items-center lg:gap-5 xl:gap-8">
            <div className="order-2 flex flex-col gap-3 lg:order-1">
              {painPointsLeft.map((item) => (
                <PainCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <Image
                src="/graphics/home/need-image.svg"
                alt="Business challenges around operations: decisions, visibility, tools, and scale"
                width={900}
                height={800}
                className="h-auto w-full max-w-[min(100%,520px)] object-contain sm:max-w-[min(100%,600px)] lg:max-w-[min(100%,720px)] xl:max-w-[min(100%,800px)]"
                priority={false}
              />
            </div>

            <div className="order-3 flex flex-col gap-3">
              {painPointsRight.map((item) => (
                <PainCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
