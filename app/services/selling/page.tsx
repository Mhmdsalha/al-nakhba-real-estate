import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { ContactForm } from "@/components/services/ContactForm";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sellingProjects } from "@/data/site";
import { images } from "@/lib/images";

export default function SellingPage() {
  return (
    <SiteLayout>
      <main>
        <ServiceHero
          eyebrow="خدمة البيع"
          title="بيع يليق بعقارك"
          description="نرتب عملية البيع من التقييم إلى الإغلاق، ونحافظ على قيمة العقار وهيبة عرضه."
          cta="اطلب تقييم العقار"
          image={images.sellingHero}
        />
        <ServiceDetails
          title="خطوات محسوبة"
          details={["تقييم أولي مدروس.", "تصوير وتسويق احترافي.", "ترشيح المشترين الجادين.", "تفاوض وإغلاق منظم."]}
        />
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="مشاريع للبيع" title="عروض مختارة" />
            <ProjectsGrid projects={sellingProjects} compact />
          </div>
        </section>
        <ContactForm
          fields={["الاسم", "رقم الجوال", "نوع العقار", "المدينة", "الرسالة"]}
          submit="إرسال الطلب"
        />
        <CTASection title="بيع أوضح" description="شاركنا تفاصيل عقارك، ونقترح لك مسار العرض المناسب." />
      </main>
    </SiteLayout>
  );
}
