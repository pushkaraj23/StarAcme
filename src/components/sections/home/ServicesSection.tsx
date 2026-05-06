import Image from "next/image";

const services = [
  {
    title: "Reward & Engagement Programs",
    description:
      "For stronger engagement, improved performance, and building lasting loyalty across teams, channels, and key stakeholders.",
    image: "/graphics/home/service1.svg",
    dark: false,
  },
  {
    title: "Integrated Business Reporting",
    description:
      "For transforming field force activity and operational data into real-time visibility, driving faster decisions, stronger accountability, and clearer performance insights.",
    image: "/graphics/home/service2.svg",
    dark: false,
  },
  {
    title: "Workflow Automation Programs",
    description:
      "For improved efficiency, eliminate repetitive manual work and reduce manual follow-ups by replacing them with streamlined digital workflows.",
    image: "/graphics/home/service3.svg",
    dark: true,
  },
];

export function ServicesSection() {
  return (
    <section className="mt-36">
      <div className="text-center">
        <p className="text-base font-medium text-accent">Our Expert Services</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Focused Solutions. Real Business Impact.
        </h2>
      </div>

      <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`flex min-h-[560px] flex-col justify-center rounded-[30px] border px-6 py-8 shadow-[var(--shadow-soft)] ${
              service.dark
                ? "border-primary/30 bg-primary text-secondary"
                : index === 1
                  ? "border-primary/10 bg-primary/12 text-primary"
                  : "border-secondary/65 bg-secondary/28 text-primary"
            }`}
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
          </article>
        ))}
      </div>
    </section>
  );
}
