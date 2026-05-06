import { ExpertiseCard } from "@/src/components/sections/home/ExpertiseCard";

const expertiseItems = [
  {
    subtitle: "Customized",
    title: "Architecture",
    image: "/graphics/home/expertise1.svg",
  },
  {
    subtitle: "Operational",
    title: "Intelligence",
    image: "/graphics/home/expertise2.svg",
  },
  {
    subtitle: "Performance-Led",
    title: "Thinking",
    image: "/graphics/home/expertise3.svg",
  },
  {
    subtitle: "Scalable",
    title: "Systems",
    image: "/graphics/home/expertise4.svg",
  },
  {
    subtitle: "Enterprise",
    title: "Reliability",
    image: "/graphics/home/expertise5.svg",
  },
  {
    subtitle: "Seamless",
    title: "Integrations",
    image: "/graphics/home/expertise6.svg",
  },
  {
    subtitle: "Adoption-Focused",
    title: "UX",
    image: "/graphics/home/expertise7.svg",
  },
  {
    subtitle: "Long-term",
    title: "Value",
    image: "/graphics/home/expertise8.svg",
  },
] as const;

function expertiseStaggerClass(index: number) {
  const col = index % 4;
  const shiftUp = col === 0 || col === 2;
  return shiftUp ? "lg:-translate-y-4" : "lg:translate-y-4";
}

export function ExpertiseSection() {
  return (
    <section className="mt-36 w-full">
      <div className="w-full bg-primary text-secondary">
        <div className="mx-auto w-full max-w-[1280px] p-6 sm:p-10 lg:p-16">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-base font-medium text-accent">Our Expertise</p>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-secondary sm:text-4xl">
              Built for Operational Complexity.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-secondary/75">
              We combine business understanding with execution-focused technology to solve systems
              that others oversimplify.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 pt-1 sm:pt-0">
            <span className="h-6 w-6 rounded-full border border-secondary/90 bg-transparent" />
            <span className="h-6 w-6 rounded-full bg-accent" />
            <span className="h-6 w-6 rounded-full bg-accent" />
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-10 overflow-visible sm:grid-cols-2 sm:gap-10 lg:mt-14 lg:grid-cols-4 lg:gap-12">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard
              key={item.title + item.subtitle}
              item={item}
              staggerClassName={expertiseStaggerClass(index)}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
