import { ClipboardCheck, FileText, Gauge, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { ContactForm } from "@/components/services/ContactForm";
import { ServiceHighlights, ServiceProcessDetails, ServiceShowcaseHero } from "@/components/services/ServiceExperienceSections";
import { ServiceProjectsCarousel } from "@/components/services/ServiceProjectsCarousel";
import { managedProjects } from "@/data/site";
import { images } from "@/lib/images";

const extendedManagedProjects = [
  ...managedProjects,
  {
    title: "مجمع فلل مؤجر",
    location: "الرياض، النرجس",
    badge: "إشغال ٩٦٪",
    price: "إدارة وتشغيل",
    image: images.managementHeroMain,
  },
  {
    title: "برج شقق مخدومة",
    location: "جدة، الروضة",
    badge: "تقارير أسبوعية",
    price: "تشغيل كامل",
    image: images.projectBuilding,
  },
  {
    title: "مكاتب تجارية متعددة",
    location: "الرياض، العليا",
    badge: "تحصيل منظم",
    price: "متابعة عقود",
    image: images.investmentHeroMain,
  },
  {
    title: "محفظة وحدات عائلية",
    location: "جدة، السلامة",
    badge: "صيانة دورية",
    price: "إدارة أصول",
    image: images.managementHeroDetail,
  },
  {
    title: "فلل ضيافة خاصة",
    location: "الرياض، حطين",
    badge: "تشغيل ممتاز",
    price: "حفظ قيمة",
    image: images.projectEstate,
  },
  {
    title: "مبنى سكني حديث",
    location: "جدة، أبحر",
    badge: "تحسين إشغال",
    price: "إدارة كاملة",
    image: images.interior,
  },
];

const managementHighlights = [
  { value: "٩٢٪", label: "متوسط إشغال في المحافظ المدارة", icon: Gauge },
  { value: "تقارير شهرية", label: "رؤية واضحة للدخل والمصاريف", icon: FileText },
  { value: "صيانة منظمة", label: "متابعة أعطال وموردين دون ارتباك", icon: Wrench },
  { value: "عقود موثقة", label: "أرشفة ومتابعة واستحقاقات", icon: ClipboardCheck },
];

const managementSteps = [
  {
    number: "٠١",
    title: "استلام المحفظة",
    body: "نراجع العقود، حالة الوحدات، جدول التحصيل، والصيانة المؤجلة قبل بدء التشغيل.",
  },
  {
    number: "٠٢",
    title: "تنظيم التشغيل",
    body: "نحدد مسؤوليات التأجير، التحصيل، الصيانة، وخدمة المستأجر ضمن مسار واضح.",
  },
  {
    number: "٠٣",
    title: "تقارير قابلة للقراءة",
    body: "تقرير مختصر يوضح الدخل، المصاريف، الإشغال، والملاحظات التي تحتاج قراراً.",
  },
  {
    number: "٠٤",
    title: "تحسين مستمر",
    body: "نراجع الأسعار، الشواغر، والصيانة المتكررة لرفع العائد وحفظ قيمة الأصل.",
  },
];

export default function ManagementPage() {
  return (
    <SiteLayout>
      <main>
        <ServiceShowcaseHero
          eyebrow="إدارة العقارات"
          title="إدارة تحفظ القيمة"
          description="نحوّل المحفظة العقارية من متابعة يومية مرهقة إلى تشغيل واضح، تقارير مختصرة، وصيانة تحفظ الأصل."
          primaryCta="ناقش محفظتك"
          secondaryCta="شاهد المحافظ"
          secondaryHref="#management-projects"
          mainImage={images.managementHeroMain}
          detailImage={images.managementHeroDetail}
          mainAlt="مجمع سكني فاخر تحت الإدارة"
          detailAlt="فيلا ومشروع حديث بإدارة عقارية"
          metricLabel="متوسط الإشغال"
          metricValue="٩٢٪ في المحافظ المدارة"
          metricHint="مع متابعة شهرية للدخل والمصاريف"
          note="لوحة متابعة واضحة للمالك"
        />
        <ServiceHighlights
          eyebrow="إدارة تشغيلية"
          title="هدوء قابل للقياس"
          description="المالك لا يحتاج تفاصيل مرهقة. يحتاج مؤشرات واضحة، صيانة منضبطة، وتحسين مستمر للعائد."
          highlights={managementHighlights}
        />
        <ServiceProcessDetails
          eyebrow="تفاصيل الخدمة"
          title="مسار إدارة منظم"
          description="نبدأ بجرد الحالة، ثم نبني تشغيلًا يوميًا وتقارير تساعدك على رؤية المحفظة دون متابعة مرهقة."
          assuranceEyebrow="ضمانة التشغيل"
          assuranceTitle="لا نبدأ الإدارة قبل وضوح العقود والحالة التشغيلية."
          assuranceBody="كل محفظة تحصل على ملف استلام، جدول متابعة، وتقارير دورية قابلة للقراءة واتخاذ القرار."
          steps={managementSteps}
        />
        <ServiceProjectsCarousel
          eyebrow="مشاريع مدارة"
          title="محافظ تحت التشغيل"
          description="مجموعات من أصول سكنية وتجارية نديرها بمنهجية تحفظ القيمة وتوضح الأداء."
          projects={extendedManagedProjects}
          sectionId="management-projects"
          allLabel="عرض كل المحافظ"
        />
        <ContactForm
          fields={["الاسم", "رقم الجوال", "عدد العقارات", "المدينة", "الرسالة"]}
          submit="طلب إدارة"
        />
        <CTASection title="إدارة أهدأ" description="حوّل محفظتك العقارية إلى تجربة منظمة قابلة للمتابعة." />
      </main>
    </SiteLayout>
  );
}
