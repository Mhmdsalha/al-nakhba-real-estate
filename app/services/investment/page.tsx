import { BarChart3, BadgeCheck, Building2, Globe2 } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { ContactForm } from "@/components/services/ContactForm";
import { ServiceHighlights, ServiceProcessDetails, ServiceShowcaseHero } from "@/components/services/ServiceExperienceSections";
import { ServiceProjectsCarousel } from "@/components/services/ServiceProjectsCarousel";
import { investmentProjects } from "@/data/site";
import { images } from "@/lib/images";

const extendedInvestmentProjects = [
  ...investmentProjects,
  {
    title: "برج أعمال مؤجر",
    location: "الرياض، مركز الملك عبدالله المالي",
    badge: "دخل قائم",
    price: "عائد ٧٫٦٪ سنوياً",
    image: images.projectBuilding,
  },
  {
    title: "مجمع شقق مخدومة",
    location: "جدة، السلامة",
    badge: "إشغال مرتفع",
    price: "عائد ٨٫١٪ سنوياً",
    image: images.investmentHeroDetail,
  },
  {
    title: "أرض تطوير مختلطة",
    location: "الرياض، شمال المدينة",
    badge: "نمو رأسمالي",
    price: "من ٤٫٨ مليون ر.س",
    image: images.projectEstate,
  },
  {
    title: "وحدات سكنية بعقود طويلة",
    location: "جدة، أبحر",
    badge: "تدفق مستقر",
    price: "عائد ٧٫٩٪ سنوياً",
    image: images.villa,
  },
  {
    title: "مكاتب مرنة للشركات",
    location: "الرياض، العليا",
    badge: "طلب نشط",
    price: "من ١٫٤ مليون ر.س",
    image: images.tower,
  },
  {
    title: "أصل ضيافة بوتيكي",
    location: "جدة، الواجهة البحرية",
    badge: "فرصة نوعية",
    price: "عائد ٨٫٤٪ سنوياً",
    image: images.pool,
  },
];

const investmentHighlights = [
  { value: "٨٪", label: "عوائد مستهدفة مدروسة حسب نوع الأصل", icon: BarChart3 },
  { value: "١٢ أصل", label: "فرص منتقاة بعد قراءة السوق", icon: Building2 },
  { value: "مستثمرون دوليون", label: "مسار واضح للملكية والمتابعة", icon: Globe2 },
  { value: "تقييم مستقل", label: "مراجعة قبل الدخول في الصفقة", icon: BadgeCheck },
];

const investmentSteps = [
  {
    number: "٠١",
    title: "فرز الفرص",
    body: "نستبعد الضجيج ونبقي الأصول التي تملك موقعاً وطلباً وقابلية نمو واضحة.",
  },
  {
    number: "٠٢",
    title: "قراءة العائد",
    body: "نقارن الدخل المتوقع، الإشغال، مصاريف التشغيل، وحساسية السوق قبل التوصية.",
  },
  {
    number: "٠٣",
    title: "هيكلة القرار",
    body: "نوضح المخاطر، مدة الاحتفاظ، وسيناريو الخروج حتى يكون الاستثمار مقروءاً.",
  },
  {
    number: "٠٤",
    title: "متابعة بعد التملك",
    body: "نربط المستثمر بالتشغيل والتقارير، ونراجع أداء الأصل بعد الدخول.",
  },
];

export default function InvestmentPage() {
  return (
    <SiteLayout>
      <main>
        <ServiceShowcaseHero
          eyebrow="خدمة الاستثمار"
          title="استثمار برؤية واضحة"
          description="نختار أصولاً عقارية لها منطق مالي وموقع قابل للنمو، ونترجم الفرصة إلى أرقام ومخاطر ومسار متابعة."
          primaryCta="احجز استشارة"
          secondaryCta="شاهد الفرص"
          secondaryHref="#investment-projects"
          mainImage={images.investmentHeroMain}
          detailImage={images.investmentHeroDetail}
          mainAlt="برج استثماري حديث في مدينة سعودية"
          detailAlt="فيلا ومشروع عقاري مميز للاستثمار"
          metricLabel="العائد المستهدف"
          metricValue="٧٫٥٪ - ٨٫٤٪ سنوياً"
          metricHint="حسب الأصل ومدة الاحتفاظ"
          note="ملف فرصة قبل قرار الاستثمار"
        />
        <ServiceHighlights
          eyebrow="استثمارات منتقاة"
          title="أرقام قبل الوعود"
          description="نضع العائد والمخاطر وسيناريو الخروج في نفس الصفحة، حتى لا يدخل المستثمر بقرار ناقص."
          highlights={investmentHighlights}
        />
        <ServiceProcessDetails
          eyebrow="تفاصيل الخدمة"
          title="مسار استثمار محسوب"
          description="الفرصة لا تُقاس بالسعر وحده. نقرأ الأصل، الدخل، السوق، ثم نحدد هل يستحق الدخول."
          assuranceEyebrow="ضمانة القرار"
          assuranceTitle="لا نرشح فرصة قبل اكتمال قراءة العائد والمخاطر."
          assuranceBody="كل فرصة تحصل على ملخص مالي، قراءة موقع، ملاحظات مخاطر، وسيناريو متابعة بعد التملك."
          steps={investmentSteps}
        />
        <ServiceProjectsCarousel
          eyebrow="فرص استثمارية"
          title="مجموعات العائد"
          description="كل مجموعة تضم ثلاث فرص متقاربة في مستوى العائد ونوع الأصل لتسهيل المقارنة."
          projects={extendedInvestmentProjects}
          sectionId="investment-projects"
          allLabel="عرض كل الفرص"
        />
        <ContactForm
          fields={["الاسم", "رقم الجوال", "ميزانية الاستثمار", "المدينة المفضلة", "الرسالة"]}
          submit="طلب استشارة"
        />
        <CTASection title="استثمر بثقة" description="نساعدك على قراءة الفرصة قبل الدخول فيها." />
      </main>
    </SiteLayout>
  );
}
