import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceSolutionSections } from "@/src/components/services/ServiceSolutionSections";
import { EXPERT_SERVICES, getServiceBySlug } from "@/src/data/services";

export function generateStaticParams() {
  return EXPERT_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Staracme" };
  const raw =
    service.solutionDetail != null
      ? `${service.description} ${service.solutionDetail.lede}`
      : service.description;
  const description = raw.length > 320 ? `${raw.slice(0, 317).trimEnd()}…` : raw;
  return {
    title: `${service.title} | Staracme`,
    description,
  };
}

function SimpleServiceHero({
  service,
}: {
  service: NonNullable<ReturnType<typeof getServiceBySlug>>;
}) {
  const isDark = service.dark;
  return (
    <div
      className={`overflow-hidden rounded-[28px] border px-6 py-10 sm:rounded-[32px] sm:px-10 sm:py-12 ${
        isDark
          ? "border-secondary/12 bg-primary text-secondary"
          : "liquid-glass liquid-glass-readable testimonial-unified-drop testimonial-glass-light border-white/40 text-primary"
      }`}
    >
      <div className="flex justify-center">
        <Image
          src={service.image}
          alt=""
          width={340}
          height={280}
          className="h-auto w-full max-w-[300px]"
        />
      </div>
      <h1
        className={`mt-8 text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          isDark ? "text-secondary" : "text-primary"
        }`}
      >
        {service.title}
      </h1>
      <p
        className={`mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed sm:text-lg ${
          isDark ? "text-secondary/85" : "text-primary/78"
        }`}
      >
        {service.description}
      </p>
      <p
        className={`mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed sm:text-[0.9375rem] ${
          isDark ? "text-secondary/72" : "text-primary/65"
        }`}
      >
        We design and deliver this capability around your operating model — data, roles, and rollout
        cadence — so adoption sticks and outcomes are measurable from day one.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className={`inline-flex rounded-full px-8 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] ${
            isDark
              ? "bg-secondary text-primary"
              : "bg-primary text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)]"
          }`}
        >
          Start a conversation
        </Link>
        <Link
          href="/#expert-services"
          className={`inline-flex rounded-full border px-8 py-3 text-sm font-semibold transition-colors ${
            isDark
              ? "border-secondary/35 text-secondary hover:bg-secondary/10"
              : "border-primary/15 text-primary hover:bg-primary/[0.04]"
          }`}
        >
          View all services
        </Link>
      </div>
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const detail = service.solutionDetail;
  const isDark = service.dark;

  if (detail) {
    return (
      <main className="w-full flex-1 bg-background px-6 pb-24 pt-[7.5rem] sm:px-10 sm:pb-28 sm:pt-[8.5rem] lg:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <Link
            href="/#expert-services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary/65 transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span>
            Back to services
          </Link>

          <header className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12">
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/80 via-secondary/40 to-accent/[0.12] blur-2xl sm:-inset-4 sm:rounded-[2.25rem]"
                  aria-hidden
                />
                <Image
                  src={service.image}
                  alt=""
                  width={520}
                  height={420}
                  className="relative z-[1] mx-auto h-auto w-full max-w-[340px] drop-shadow-[0_20px_48px_rgba(55,55,55,0.12)] lg:max-w-none"
                  priority
                />
              </div>
            </div>

            <div
              className={`flex flex-col justify-center overflow-hidden rounded-[28px] border px-7 py-9 sm:rounded-[32px] sm:px-9 sm:py-10 ${
                isDark
                  ? "border-secondary/12 bg-primary text-secondary"
                  : "liquid-glass liquid-glass-readable testimonial-unified-drop testimonial-glass-light border-white/40 text-primary"
              }`}
            >
              <p className={`text-sm font-medium sm:text-base ${isDark ? "text-accent" : "text-accent"}`}>
                Solution
              </p>
              <h1
                className={`mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.15rem] ${
                  isDark ? "text-secondary" : "text-primary"
                }`}
              >
                {service.title}
              </h1>
              <p
                className={`mt-4 text-base leading-relaxed sm:text-lg ${
                  isDark ? "text-secondary/85" : "text-primary/78"
                }`}
              >
                {service.description}
              </p>
              <p
                className={`mt-5 text-sm leading-relaxed sm:text-[0.9375rem] ${
                  isDark ? "text-secondary/72" : "text-primary/65"
                }`}
              >
                We design and deliver this capability around your operating model — data, roles, and
                rollout cadence — so adoption sticks and outcomes are measurable from day one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
                <Link
                  href="/"
                  className={`inline-flex rounded-full px-7 py-2.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] sm:px-8 sm:py-3 ${
                    isDark
                      ? "bg-secondary text-primary"
                      : "bg-primary text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)]"
                  }`}
                >
                  Start a conversation
                </Link>
                <Link
                  href="/#expert-services"
                  className={`inline-flex rounded-full border px-7 py-2.5 text-sm font-semibold transition-colors sm:px-8 sm:py-3 ${
                    isDark
                      ? "border-secondary/35 text-secondary hover:bg-secondary/10"
                      : "border-primary/15 text-primary hover:bg-primary/[0.04]"
                  }`}
                >
                  View all services
                </Link>
              </div>
            </div>
          </header>

          <ServiceSolutionSections detail={detail} />

          <div className="mx-auto mt-4 max-w-xl pb-2 text-center sm:mt-6">
            <p className="text-sm leading-relaxed text-primary/65 sm:text-base">
              Want to see how we have approached similar challenges on past engagements?
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/projects"
                className="inline-flex rounded-full border border-primary/15 px-7 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/[0.04] sm:px-8 sm:py-3"
              >
                View projects
              </Link>
              <Link
                href="/"
                className="inline-flex rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)] transition-transform duration-200 hover:scale-[1.03] sm:px-8 sm:py-3"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full flex-1 bg-background px-6 pb-20 pt-[7.5rem] sm:px-10 sm:pt-[8.5rem] lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <Link
          href="/#expert-services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary/65 transition-colors hover:text-accent"
        >
          <span aria-hidden>←</span>
          Back to services
        </Link>

        <div className="mt-10">
          <SimpleServiceHero service={service} />
        </div>
      </div>
    </main>
  );
}
