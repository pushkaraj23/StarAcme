export type ExpertService = {
  slug: string;
  title: string;
  description: string;
  image: string;
  dark: boolean;
};

export const EXPERT_SERVICES: ExpertService[] = [
  {
    slug: "reward-engagement-programs",
    title: "Reward & Engagement Programs",
    description:
      "For stronger engagement, improved performance, and building lasting loyalty across teams, channels, and key stakeholders.",
    image: "/graphics/home/service1.svg",
    dark: false,
  },
  {
    slug: "integrated-business-reporting",
    title: "Integrated Business Reporting",
    description:
      "For transforming field force activity and operational data into real-time visibility, driving faster decisions, stronger accountability, and clearer performance insights.",
    image: "/graphics/home/service2.svg",
    dark: false,
  },
  {
    slug: "workflow-automation-programs",
    title: "Workflow Automation Programs",
    description:
      "For improved efficiency, eliminate repetitive manual work and reduce manual follow-ups by replacing them with streamlined digital workflows.",
    image: "/graphics/home/service3.svg",
    dark: true,
  },
];

export function getServiceBySlug(slug: string): ExpertService | undefined {
  return EXPERT_SERVICES.find((s) => s.slug === slug);
}
