import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { ContactForm } from "@/components/services/ContactForm";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { investmentProjects } from "@/data/site";
import { images } from "@/lib/images";

export default function InvestmentPage() {
  return (
    <SiteLayout>
      <main>
        <ServiceHero
          eyebrow="خدمة الاستثمار"
          title="استثمار برؤية واضحة"
          description="فرص عقارية منتقاة بعائد مفهوم وموقع مدروس ومتابعة بعد التملك."
          cta="احجز استشارة"
          image={images.meeting}
        />
        <ServiceDetails
          title="قراءة قبل القرار"
          details={["فرص منتقاة في مواقع نشطة.", "قراءة مبسطة للعائد.", "مقارنة بين الرياض وجدة.", "متابعة بعد الشراء."]}
        />
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="فرص استثمارية" title="عائد وموقع" />
            <ProjectsGrid projects={investmentProjects} compact />
          </div>
        </section>
        <ContactForm
          fields={["الاسم", "رقم الجوال", "ميزانية الاستثمار", "المدينة المفضلة", "الرسالة"]}
          submit="طلب استشارة"
        />
        <CTASection title="استثمر بثقة" description="نساعدك على قراءة الفرصة قبل الدخول فيها." />
      </main>
    </SiteLayout>
  );
}
