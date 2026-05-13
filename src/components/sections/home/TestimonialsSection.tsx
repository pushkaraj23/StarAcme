import Link from "next/link";
import { TestimonialCard } from "@/src/components/testimonials/TestimonialCard";
import { HOME_TESTIMONIAL_COUNT, TESTIMONIALS } from "@/src/data/testimonials";

const homePreview = TESTIMONIALS.slice(0, HOME_TESTIMONIAL_COUNT);

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
          {homePreview.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 md:mt-12">
          <div className="flex justify-center gap-3" aria-hidden>
            <span className="h-6 w-6 rounded-full border border-accent bg-transparent" />
            <span className="h-6 w-6 rounded-full bg-accent" />
            <span className="h-6 w-6 rounded-full bg-accent" />
          </div>
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-accent underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Read all testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
