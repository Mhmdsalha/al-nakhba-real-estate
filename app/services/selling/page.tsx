import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { ContactForm } from "@/components/services/ContactForm";
import { FeaturedSales, SellingHero, SellingServiceDetails } from "@/components/services/SellingPageSections";
import { SellingProjectsCarousel } from "@/components/services/SellingProjectsCarousel";
import { sellingProjects } from "@/data/site";
import { images } from "@/lib/images";

const extendedSellingProjects = [
  ...sellingProjects,
  {
    title: "بنتهاوس بإطلالة مفتوحة",
    location: "الرياض، العقيق",
    badge: "مميز",
    price: "٤٫٢ مليون ر.س",
    image: images.tower,
  },
  {
    title: "فيلا عصرية بحوش خاص",
    location: "جدة، الشاطئ",
    badge: "جاهز",
    price: "٥٫٨ مليون ر.س",
    image: images.pool,
  },
  {
    title: "تاون هاوس عائلي",
    location: "الرياض، الياسمين",
    badge: "عرض خاص",
    price: "٢٫٧ مليون ر.س",
    image: images.sellingHero,
  },
  {
    title: "شقة فندقية مخدومة",
    location: "جدة، الكورنيش",
    badge: "عوائد",
    price: "١٫٦ مليون ر.س",
    image: images.majlis,
  },
  {
    title: "فيلا حجرية زاوية",
    location: "الرياض، حطين",
    badge: "حصري",
    price: "٧٫١ مليون ر.س",
    image: images.villa,
  },
  {
    title: "دور مستقل بتشطيب فاخر",
    location: "الرياض، الملقا",
    badge: "جديد",
    price: "٣٫٤ مليون ر.س",
    image: images.interior,
  },
];

export default function SellingPage() {
  return (
    <SiteLayout>
      <main>
        <SellingHero />
        <FeaturedSales />
        <SellingServiceDetails />
        <SellingProjectsCarousel projects={extendedSellingProjects} />
        <ContactForm
          fields={["الاسم", "رقم الجوال", "نوع العقار", "المدينة", "الرسالة"]}
          submit="إرسال الطلب"
        />
        <CTASection title="بيع أوضح" description="شاركنا تفاصيل عقارك، ونقترح لك مسار العرض المناسب." />
      </main>
    </SiteLayout>
  );
}
