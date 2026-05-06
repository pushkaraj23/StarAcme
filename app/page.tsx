import { ExpertiseSection } from "@/src/components/sections/home/ExpertiseSection";
import { HomeHero } from "@/src/components/sections/home/HomeHero";
import { MetricsSection } from "@/src/components/sections/home/MetricsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-6 py-5 sm:px-10 lg:px-16">
        <HomeHero />
      </div>
      <ExpertiseSection />
      <MetricsSection />
    </main>
  );
}
