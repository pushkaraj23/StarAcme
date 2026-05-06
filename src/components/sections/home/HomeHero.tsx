import { AboutSection } from "@/src/components/sections/home/AboutSection";
import { Navbar } from "@/src/components/layout/Navbar";
import { HeroSection } from "@/src/components/sections/home/HeroSection";
import { ServicesSection } from "@/src/components/sections/home/ServicesSection";

export function HomeHero() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col">
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </div>
    </section>
  );
}
