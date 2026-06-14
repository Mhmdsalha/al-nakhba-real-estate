import Image from "next/image";
import { ArrowDownLeft, BadgeCheck, Camera, FileCheck2, ShieldCheck, TrendingUp } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

const salesHighlights = [
  { value: "٢١ يوم", label: "متوسط تجهيز العرض", icon: Camera },
  { value: "٩٤٪", label: "طلبات مؤهلة قبل المعاينة", icon: BadgeCheck },
  { value: "٣ مدن", label: "شبكة مشترين نشطة", icon: TrendingUp },
  { value: "إغلاق موثق", label: "تفاوض حتى الإفراغ", icon: ShieldCheck },
];

const sellingSteps = [
  {
    number: "٠١",
    title: "قراءة الأصل",
    body: "نراجع الموقع، التشطيب، وثائق الملكية، ونحدد زاوية القيمة التي يستحق أن يظهر بها العقار.",
  },
  {
    number: "٠٢",
    title: "تسعير يحمي القيمة",
    body: "نقارن السوق الفعلي لا الإعلانات فقط، ثم نضع نطاقًا سعريًا واضحًا للتفاوض بثقة.",
  },
  {
    number: "٠٣",
    title: "إخراج وتسويق",
    body: "تصوير معماري، نص بيع مختصر، وتوزيع هادئ على مشترين مناسبين بدل نشر عشوائي.",
  },
  {
    number: "٠٤",
    title: "إغلاق منضبط",
    body: "نؤهل الجادين، ندير المعاينات، ونرافق التفاوض والإفراغ حتى نهاية الصفقة.",
  },
];

export function SellingHero() {
  return (
    <section className="selling-hero-section">
      <div className="container">
        <div className="selling-hero glass-dark">
          <div className="selling-hero-copy">
            <p className="eyebrow">خدمة البيع</p>
            <h1 className="display-title">بيع يليق بعقارك</h1>
            <p>
              نُعيد تقديم عقارك كأصل فاخر له قصة وقيمة، من قراءة السوق إلى التفاوض والإغلاق، بعرض بصري يختصر القرار على
              المشتري الجاد.
            </p>
            <div className="selling-hero-actions">
              <ButtonLink href="/contact">اطلب تقييم العقار</ButtonLink>
              <ButtonLink href="#selling-projects" variant="glass">
                شاهد العروض
              </ButtonLink>
            </div>
          </div>
          <div className="selling-hero-gallery" aria-label="عرض عقاري فاخر">
            <div className="selling-main-photo">
              <Image src={images.sellingHeroMain} alt="فيلا سعودية فاخرة جاهزة للبيع" fill priority sizes="(max-width: 980px) 100vw, 56vw" />
            </div>
            <GlassCard className="selling-market-card">
              <span>نطاق البيع المتوقع</span>
              <strong>٦٫٥ - ٧٫٢ مليون ر.س</strong>
              <small>بعد التقييم والمعاينة</small>
            </GlassCard>
            <div className="selling-side-photo">
              <Image src={images.sellingHeroDetail} alt="تفاصيل داخلية فاخرة لعقار معروض" fill sizes="(max-width: 980px) 42vw, 18vw" />
            </div>
            <GlassCard className="selling-hero-note">
              <FileCheck2 size={18} />
              <span>ملف بيع متكامل قبل أول معاينة</span>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedSales() {
  return (
    <section className="section featured-sales-section">
      <div className="container">
        <SectionHeading
          eyebrow="مبيعاتنا المميزة"
          title="نجهز العرض قبل نشره"
          description="البيع الفاخر لا يبدأ بإعلان. يبدأ بملف مقنع، مشترين مؤهلين، ومسار تفاوض يعرف أين يقف."
          center
        />
        <div className="sales-highlight-grid">
          {salesHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard className="sales-highlight-card" key={item.label}>
                <Icon size={22} />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SellingServiceDetails() {
  return (
    <section className="section selling-process-section">
      <div className="container selling-process-layout">
        <div className="selling-process-intro">
          <SectionHeading
            eyebrow="تفاصيل الخدمة"
            title="مسار بيع محسوب"
            description="بدل خطوات مسطحة، نعامل العقار كأصل يحتاج قراءة، إخراج، جمهور صحيح، وإغلاق نظيف."
          />
          <GlassCard className="process-assurance-card">
            <span className="eyebrow">ضمانة المسار</span>
            <strong>لا نعرض العقار قبل اكتمال زاوية البيع.</strong>
            <p>كل عقار يحصل على ملخص قيمة، مواد عرض، وخطة وصول للمشترين المناسبين.</p>
            <ArrowDownLeft size={22} />
          </GlassCard>
        </div>
        <div className="selling-process-grid">
          {sellingSteps.map((step) => (
            <article className="selling-step-card glass-dark" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
