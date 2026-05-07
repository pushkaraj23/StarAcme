import { ExpertiseSection } from "@/src/components/sections/home/ExpertiseSection";
import { HomeHero } from "@/src/components/sections/home/HomeHero";
import { MetricsSection } from "@/src/components/sections/home/MetricsSection";
import { ProcessSection } from "@/src/components/sections/home/ProcessSection";
import { NeedSection } from "@/src/components/sections/home/NeedSection";
import { TestimonialsSection } from "@/src/components/sections/home/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-background">
      <div className="px-6 py-5 sm:px-10 lg:px-16">
        <HomeHero />
      </div>
      <ExpertiseSection />
      <MetricsSection />
      <NeedSection />
      <ProcessSection />
      <TestimonialsSection />
    </main>
  );
}
