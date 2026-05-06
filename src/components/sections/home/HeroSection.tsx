import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative isolate mt-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="pointer-events-none absolute -left-24 top-[52%] z-0 h-[18rem] w-[18rem] -translate-y-1/2 rounded-full bg-accent/12 blur-[85px] lg:-left-44 lg:h-[30rem] lg:w-[30rem] lg:bg-accent/24 lg:blur-[120px]" />
      <div className="pointer-events-none absolute -right-10 top-6 z-0 h-[16rem] w-[16rem] rounded-full bg-accent/10 blur-[80px] lg:-right-24 lg:h-[26rem] lg:w-[26rem] lg:bg-accent/20 lg:blur-[120px]" />

      <div className="relative z-10 space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-6xl">
            Building Smarter Tech For Efficient &amp; Frictionless Business
          </h1>
          <p className="max-w-[540px] text-base leading-relaxed text-primary/80 sm:text-xl">
            We let you focus on your core business by building personalised digital solutions that
            improve performance, enhance visibility, and eliminate repetitive work.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="rounded-full bg-accent px-9 py-4 text-base font-semibold text-secondary"
          >
            Explore Solutions
          </a>
          <a
            href="#"
            className="liquid-glass inline-flex items-center rounded-full px-9 py-4 text-base font-semibold text-primary hover:bg-secondary/80"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="flex items-center gap-3 pt-8">
          <span className="h-6 w-6 rounded-full border border-primary bg-transparent" />
          <span className="h-6 w-6 rounded-full bg-primary/95" />
          <span className="h-6 w-6 rounded-full bg-primary/95" />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <Image
          src="/graphics/home/hero-image.svg"
          alt="Staracme team collaborating around analytics dashboard"
          width={1040}
          height={880}
          priority
          className="h-auto w-full max-w-[1040px]"
        />
      </div>
    </div>
  );
}
