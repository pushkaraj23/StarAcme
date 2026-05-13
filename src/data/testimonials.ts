export type TestimonialVariant = "light" | "muted" | "dark";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  variant: TestimonialVariant;
};

/** Full list — home shows a preview via `HOME_TESTIMONIAL_COUNT`. */
export const TESTIMONIALS: Testimonial[] = [
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
  {
    name: "Marcus Chen",
    role: "CTO, Harborline Finance",
    quote:
      "Security and velocity rarely arrive together — here they did. Engineering stayed in the loop, stakeholders saw progress every week, and we shipped a regulated workflow without cutting corners.",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&h=240&q=80",
    variant: "light",
  },
  {
    name: "Sarah Okonkwo",
    role: "VP Product, Meridian Mobility",
    quote:
      "Our roadmap finally matched reality. Discovery was thorough, UX decisions were defensible, and the handoff to our internal team was documented well enough that we could own it confidently.",
    imageUrl:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=240&h=240&q=80",
    variant: "muted",
  },
  {
    name: "Daniel Vogt",
    role: "Founder, Alpine Field Services",
    quote:
      "They treated our constraints as design inputs, not blockers. Offline-first behavior, crew-friendly flows, and reporting our dispatchers actually use — that is the bar, and they cleared it.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80",
    variant: "dark",
  },
];

export const HOME_TESTIMONIAL_COUNT = 3;
