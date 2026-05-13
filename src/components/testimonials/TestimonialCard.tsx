import Image from "next/image";
import type { Testimonial, TestimonialVariant } from "@/src/data/testimonials";

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

export function TestimonialCard({ item }: { item: Testimonial }) {
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
