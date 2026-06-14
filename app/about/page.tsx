import { AboutHero, Achievements, Journey, TeamGrid, Testimonials } from "@/components/about/AboutSections";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function AboutPage() {
  return (
    <SiteLayout>
      <main>
        <AboutHero />
        <Achievements />
        <Journey />
        <TeamGrid />
        <Testimonials />
      </main>
    </SiteLayout>
  );
}
