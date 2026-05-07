import Image from "next/image";

type TestimonialVariant = "light" | "muted" | "dark";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  variant: TestimonialVariant;
};

const testimonials: Testimonial[] = [
  {
    name: "James Richardson",
    role: "Managing Director, Northfield Logistics",
    quote:
      "StarAcme gave us a single view of field performance we could actually trust. We stopped debating spreadsheets and started improving delivery consistency and team accountability within weeks.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=240&h=240&q=80",
    variant: "light",
  },
  {
    name: "Elena Marchetti",
    role: "COO, Brightline Consumer Brands",
    quote:
      "The rollout was structured and calm — clear milestones, no surprises. Our regional leads adopted the workflows because they finally mirrored how the business actually operates.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80",
    variant: "muted",
  },
  {
    name: "Priya Natarajan",
    role: "Head of Operations, Kaveri Health",
    quote:
      "We needed reliability, not another dashboard. The solution is stable, auditable, and our clinical ops team finally has one place to see patient flow, inventory, and escalations.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=80",
    variant: "dark",
  },
];

function variantClasses(variant: TestimonialVariant) {
  switch (variant) {
    case "light":
      return "liquid-glass liquid-glass-readable testimonial-unified-drop testimonial-glass-light text-primary";
    case "muted":
      return "liquid-glass liquid-glass-readable testimonial-unified-drop testimonial-glass-muted text-primary";
    case "dark":
      return "border border-secondary/12 bg-primary text-secondary testimonial-card-dark-solid";
    default:
      return "";
  }
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const isDark = item.variant === "dark";
  return (
    <article
      className={`flex h-full flex-col rounded-[1.75rem] p-6 sm:rounded-[2rem] sm:p-8 ${variantClasses(item.variant)}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent sm:h-16 sm:w-16 ${isDark ? "ring-1 ring-accent/40" : ""}`}
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={128}
            height={128}
            className="h-full w-full object-cover"
            sizes="64px"
          />
        </div>
        <div className="min-w-0 pt-0.5">
          <p className={`font-semibold leading-tight ${isDark ? "text-secondary" : "text-primary"}`}>
            {item.name}
          </p>
          <p
            className={`mt-1 text-sm leading-snug ${isDark ? "text-secondary/75" : "text-primary/65"}`}
          >
            {item.role}
          </p>
        </div>
      </div>
      <p
        className={`mt-5 text-sm leading-relaxed sm:mt-6 sm:text-[0.9375rem] ${isDark ? "text-secondary/88" : "text-primary/80"}`}
      >
        {item.quote}
      </p>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="mb-24 mt-36 w-full sm:mb-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 text-center sm:px-10 lg:px-16">
        <p className="text-base font-medium text-accent">Testimonials</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.35rem]">
          What Clients Say in Our Praise
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary/72 sm:text-lg">
          We believe true value is reflected in the confidence, trust, and satisfaction our clients
          experience.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left md:mt-14 md:grid-cols-3 md:gap-5 lg:gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3 md:mt-12" aria-hidden>
          <span className="h-6 w-6 rounded-full border border-accent bg-transparent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
