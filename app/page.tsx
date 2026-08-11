import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
