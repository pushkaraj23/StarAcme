import type { Metadata } from "next";
import Link from "next/link";
import { TestimonialCard } from "@/src/components/testimonials/TestimonialCard";
import { TESTIMONIALS } from "@/src/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Staracme",
  description:
    "What clients say about working with Staracme — trust, delivery, and outcomes across logistics, consumer brands, healthcare, and more.",
};

export default function TestimonialsPage() {
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
          <p className="text-base font-medium text-accent">Testimonials</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.35rem]">
            What Clients Say in Our Praise
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary/72 sm:text-lg">
            We believe true value is reflected in the confidence, trust, and satisfaction our clients
            experience. Here is a fuller picture of the partnerships we are grateful to grow alongside.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:mt-14 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3 md:mt-12" aria-hidden>
          <span className="h-6 w-6 rounded-full border border-accent bg-transparent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
        </div>

        <div className="mx-auto mt-14 max-w-xl text-center sm:mt-16">
          <p className="text-sm leading-relaxed text-primary/65 sm:text-base">
            Considering a project? We would love to hear your goals and explore whether we are the right
            fit.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)] transition-transform duration-200 hover:scale-[1.03]"
            >
              Start a conversation
            </Link>
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-primary/15 px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/[0.04]"
            >
              View projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
