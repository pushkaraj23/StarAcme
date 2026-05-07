import Image from "next/image";
import Link from "next/link";
import { EXPERT_SERVICES } from "@/src/data/services";

function serviceCardSurface(index: number, dark: boolean) {
  if (dark) {
    return "border border-secondary/12 bg-primary text-secondary testimonial-card-dark-solid";
  }
  if (index === 1) {
    return "liquid-glass liquid-glass-readable testimonial-unified-drop testimonial-glass-muted text-primary";
  }
  return "liquid-glass liquid-glass-readable testimonial-unified-drop testimonial-glass-light text-primary";
}

export function ServicesSection() {
  return (
    <section id="expert-services" className="mt-36 scroll-mt-28">
      <div className="text-center">
        <p className="text-base font-medium text-accent">Our Expert Services</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Focused Solutions. Real Business Impact.
        </h2>
      </div>

      <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {EXPERT_SERVICES.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={`group flex min-h-[560px] flex-col justify-center rounded-[30px] px-6 py-8 transition-transform duration-300 hover:scale-[1.01] ${serviceCardSurface(index, service.dark)}`}
          >
            <div className={`flex justify-center ${index === 1 ? "order-2 mt-5" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                width={310}
                height={260}
                className="h-auto w-full max-w-[260px]"
              />
            </div>

            <h3 className={`text-xl font-semibold leading-tight sm:text-2xl ${index === 1 ? "order-1 mt-1" : "mt-7"}`}>
              {service.title}
            </h3>
            <p
              className={`text-base leading-relaxed ${index === 1 ? "order-1 mt-5" : "mt-5"} ${
                service.dark ? "text-secondary/85" : "text-primary/82"
              }`}
            >
              {service.description}
            </p>
            <p
              className={`mt-6 text-sm font-semibold ${service.dark ? "text-accent" : "text-accent group-hover:underline"}`}
            >
              View details →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
