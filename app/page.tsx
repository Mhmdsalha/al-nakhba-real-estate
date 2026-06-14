import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { MashrabiyaHero } from "@/components/home/MashrabiyaHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StatsBento } from "@/components/home/StatsBento";
import { SuccessPartners } from "@/components/home/SuccessPartners";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";

export default function HomePage() {
  return (
    <SiteLayout>
      <main>
        <MashrabiyaHero />
        <ServicesOverview />
        <FeaturedProjects />
        <StatsBento />
        <SuccessPartners />
        <CTASection />
      </main>
    </SiteLayout>
  );
}
