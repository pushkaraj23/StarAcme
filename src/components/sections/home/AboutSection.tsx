import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="mt-32 grid gap-6 lg:min-h-[820px] lg:grid-cols-[0.33fr_0.67fr]">
      <article className="flex flex-col rounded-[34px] bg-primary px-8 py-10 text-secondary shadow-[var(--shadow-soft)] lg:h-[90%] lg:self-start lg:overflow-y-auto">
        <p className="text-lg text-secondary/85">About us</p>

        <h2 className="mt-4 max-w-[340px] text-4xl font-semibold leading-[1.08] tracking-tight">
          Technology That Adapts To Your Business
        </h2>

        <p className="mt-5 max-w-[320px] text-base leading-relaxed text-secondary/80">
          Businesses get stuck at a point where the micromanagement, like spreadsheets,
          disconnected tools, and manual follow-ups, costs you more than what you save.
        </p>

        <Link
          href="/about"
          className="mt-6 inline-flex w-fit items-center gap-2 self-start border-b border-secondary/60 pb-2 text-xl font-semibold leading-none transition-opacity hover:opacity-80"
        >
          Learn More
          <span aria-hidden>→</span>
        </Link>

        <div className="mt-auto">
          <div className="mt-10 flex items-center gap-3">
            <span className="h-6 w-6 rounded-full border border-secondary/85 bg-transparent" />
            <span className="h-6 w-6 rounded-full bg-accent" />
            <span className="h-6 w-6 rounded-full bg-accent" />
          </div>
        </div>
      </article>

      <div className="flex flex-col-reverse lg:flex-col">
        <div className="liquid-glass liquid-glass-readable rounded-[32px] px-7 py-7 text-base leading-relaxed text-primary">
          <p>
            StarAcme was built to overcome this gap.
            <br />
            We partner with organisations to build personalised digital systems, removing friction,
            improving decision-making, and optimising the workflow of the companies. Rather than
            letting businesses adapt to generic software, we build solutions that adapt to the way
            businesses actually work.
          </p>
          <p className="mt-5">
            From reward and engagement ecosystems to intelligent reporting to workflow automation, we
            assist organisations to function with more clarity, speed, and focus.
          </p>
        </div>

        <div className="relative mt-4 flex justify-center">
          <Image
            src="/graphics/home/about-image.svg"
            alt="Staracme team discussion"
            width={1040}
            height={720}
            className="h-auto w-full lg:w-[92%]"
          />
        </div>
      </div>
    </section>
  );
}
