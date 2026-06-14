import { Achievements, CompanyStory, TeamGrid, Testimonials } from "@/components/about/AboutSections";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function AboutPage() {
  return (
    <SiteLayout>
      <main>
        <CompanyStory />
        <Achievements />
        <TeamGrid />
        <Testimonials />
      </main>
    </SiteLayout>
  );
}
