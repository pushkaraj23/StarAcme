import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  return {
    title: `${service.title} | Staracme`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const isDark = service.dark;

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

        <div
          className={`mt-10 overflow-hidden rounded-[28px] border px-6 py-10 sm:rounded-[32px] sm:px-10 sm:py-12 ${
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
            We design and deliver this capability around your operating model — data, roles, and
            rollout cadence — so adoption sticks and outcomes are measurable from day one.
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
      </div>
    </main>
  );
}
