import { images } from "@/lib/images";

export const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "البيع", href: "/services/selling" },
  { label: "الاستثمار", href: "/services/investment" },
  { label: "إدارة العقارات", href: "/services/management" },
  { label: "من نحن", href: "/about" },
  { label: "التواصل والفروع", href: "/contact" },
];

export const services = [
  {
    title: "البيع",
    href: "/services/selling",
    description: "إدارة بيع العقار بتقييم مدروس وتسويق يحفظ قيمة الأصل.",
    image: images.villa,
  },
  {
    title: "الاستثمار",
    href: "/services/investment",
    description: "فرص منتقاة بعائد واضح وموقع قادر على النمو.",
    image: images.tower,
  },
  {
    title: "إدارة العقارات",
    href: "/services/management",
    description: "تشغيل ومتابعة وتقارير تحفظ الهدوء والقيمة للمالك.",
    image: images.interior,
  },
];

export const featuredProjects = [
  {
    title: "فلل واجهة الرياض",
    location: "الرياض، حي حطين",
    badge: "حصري",
    price: "من ٤٫٨ مليون ر.س",
    image: images.villa,
  },
  {
    title: "مساكن الواجهة",
    location: "جدة، الشاطئ",
    badge: "جاهز",
    price: "من ٢٫٢ مليون ر.س",
    image: images.pool,
  },
  {
    title: "برج النخبة",
    location: "الرياض، مركز الملك عبدالله المالي",
    badge: "استثماري",
    price: "عائد ٨٪ سنوياً",
    image: images.tower,
  },
];

export const sellingProjects = [
  {
    title: "فيلا خاصة بواجهة حجرية",
    location: "الرياض، النرجس",
    badge: "متاح",
    price: "٦٫٥ مليون ر.س",
    image: images.villa,
  },
  {
    title: "دوبلكس عائلي فاخر",
    location: "جدة، أبحر",
    badge: "جديد",
    price: "٣٫١ مليون ر.س",
    image: images.interior,
  },
  {
    title: "شقة بانورامية",
    location: "الرياض، الملقا",
    badge: "موثق",
    price: "١٫٩ مليون ر.س",
    image: images.majlis,
  },
];

export const investmentProjects = [
  {
    title: "أجنحة فندقية مخدومة",
    location: "جدة، الكورنيش",
    badge: "عائد ٨٪ سنوياً",
    price: "من ١٫٢ مليون ر.س",
    image: images.pool,
  },
  {
    title: "وحدات مكتبية مرنة",
    location: "الرياض، العليا",
    badge: "مخاطر متوسطة",
    price: "من ٩٥٠ ألف ر.س",
    image: images.tower,
  },
  {
    title: "مجمع سكني مؤجر",
    location: "الرياض، الياسمين",
    badge: "عائد مستقر",
    price: "من ٢٫٤ مليون ر.س",
    image: images.villa,
  },
];

export const managedProjects = [
  {
    title: "محفظة فلل خاصة",
    location: "الرياض",
    badge: "إشغال ٩٢٪",
    price: "تشغيل وتأجير",
    image: images.villa,
  },
  {
    title: "مبنى شقق مخدومة",
    location: "جدة",
    badge: "تقارير شهرية",
    price: "إدارة كاملة",
    image: images.interior,
  },
  {
    title: "مكاتب تجارية",
    location: "الرياض",
    badge: "صيانة وتشغيل",
    price: "متابعة عقود",
    image: images.tower,
  },
];

export const stats = [
  { value: "١٢", label: "سنوات الخبرة" },
  { value: "٤٥", label: "مشاريع مختارة" },
  { value: "٣٢٠", label: "عملاء نخبة" },
  { value: "٢", label: "مدن رئيسية" },
];

export const partners = [
  { name: "ROSHN", field: "تطوير مجتمعات" },
  { name: "Dar Al Arkan", field: "تطوير عقاري" },
  { name: "Emaar", field: "مشاريع عالمية" },
  { name: "JLL", field: "استشارات عقارية" },
  { name: "CBRE", field: "إدارة أصول" },
  { name: "Knight Frank", field: "تقييم واستشارات" },
  { name: "Savills", field: "أسواق عالمية" },
  { name: "Bayut", field: "منصات عقارية" },
  { name: "Wasalt", field: "تقنية عقارية" },
];

export const team = [
  {
    name: "عبدالعزيز الناصر",
    title: "الرئيس التنفيذي",
    city: "الرياض",
    image: images.portrait1,
  },
  {
    name: "نورة الخالد",
    title: "مديرة المبيعات",
    city: "جدة",
    image: images.portrait2,
  },
  {
    name: "فيصل الرشيد",
    title: "مستشار الاستثمار",
    city: "الرياض",
    image: images.portrait3,
  },
  {
    name: "لينا العمري",
    title: "إدارة الأصول",
    city: "جدة",
    image: images.portrait4,
  },
];

export const testimonials = [
  {
    quote: "تعامل هادئ وواضح. كل خطوة كانت محسوبة قبل اتخاذ القرار.",
    name: "سلمان العتيبي",
    city: "الرياض",
  },
  {
    quote: "اختصروا علينا البحث، وقدموا فرصة تناسب العائد والموقع.",
    name: "مها الشريف",
    city: "جدة",
  },
  {
    quote: "إدارة العقار أصبحت أكثر تنظيماً، والتقارير جعلت الصورة أوضح.",
    name: "خالد الحربي",
    city: "الرياض",
  },
];

export const branches = [
  {
    city: "الرياض",
    address: "طريق الملك فهد، حي العليا",
    phone: "+٩٦٦ ٥٥ ١٢٣ ٤٥٦٧",
    hours: "الأحد إلى الخميس، ٩ صباحاً - ٦ مساءً",
  },
  {
    city: "جدة",
    address: "طريق الأمير سلطان، حي الشاطئ",
    phone: "+٩٦٦ ٥٥ ٧٦٥ ٤٣٢١",
    hours: "الأحد إلى الخميس، ٩ صباحاً - ٦ مساءً",
  },
];
