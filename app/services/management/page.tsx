import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { ContactForm } from "@/components/services/ContactForm";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { managedProjects } from "@/data/site";
import { images } from "@/lib/images";

export default function ManagementPage() {
  return (
    <SiteLayout>
      <main>
        <ServiceHero
          eyebrow="إدارة العقارات"
          title="إدارة تحفظ القيمة"
          description="تشغيل ومتابعة وتقارير دورية تساعد المالك على رؤية الأصل بوضوح."
          cta="ناقش محفظتك"
          image={images.interior}
        />
        <ServiceDetails
          title="تشغيل منظم"
          details={["متابعة التأجير والتحصيل.", "تقارير دورية واضحة.", "صيانة وتشغيل منظم.", "تحسين الإشغال والعائد."]}
        />
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="مشاريع مدارة" title="قيمة مستمرة" />
            <ProjectsGrid projects={managedProjects} compact />
          </div>
        </section>
        <ContactForm
          fields={["الاسم", "رقم الجوال", "عدد العقارات", "المدينة", "الرسالة"]}
          submit="طلب إدارة"
        />
        <CTASection title="إدارة أهدأ" description="حوّل محفظتك العقارية إلى تجربة منظمة قابلة للمتابعة." />
      </main>
    </SiteLayout>
  );
}
