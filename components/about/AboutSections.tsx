import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats, team, testimonials } from "@/data/site";
import { images } from "@/lib/images";

const journey = [
  {
    year: "٢٠١٢",
    title: "بداية الرياض",
    text: "انطلق الفريق باستشارات بيع خاصة للأصول السكنية الراقية في شمال الرياض.",
  },
  {
    year: "٢٠١٦",
    title: "محفظة مختارة",
    text: "تحول العمل إلى انتقاء مشاريع كاملة مع تقييم وتسويق وإغلاق منظم.",
  },
  {
    year: "٢٠١٩",
    title: "حضور جدة",
    text: "أضفنا مكتب جدة لخدمة ملاك ومشترين يبحثون عن عقارات بحرية وحضرية ناضجة.",
  },
  {
    year: "٢٠٢٢",
    title: "إدارة الأصول",
    text: "بدأنا تشغيل محافظ عقارية بتقارير واضحة ومؤشرات أداء تحفظ قيمة العقار.",
  },
  {
    year: "٢٠٢٦",
    title: "نموذج القرار",
    text: "نربط البيع والاستثمار والإدارة في تجربة واحدة تبدأ من السؤال وتنتهي بخطوة واثقة.",
  },
];

const testimonialTones = ["stone", "light", "brass"] as const;

export function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="container about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">من نحن</p>
          <h1>نقرأ السوق قبل العقار</h1>
          <p>
            النخبة للعقارات شركة سعودية تعمل بين الرياض وجدة لتصنع قراراً عقارياً أوضح: تقييم أدق، فرصة أنسب، ومسار
            يخدم قيمة الأصل قبل سرعة الصفقة.
          </p>
          <div className="about-hero-actions">
            <a href="/contact">ابدأ قرارك</a>
            <span>بيع، استثمار، وإدارة بعقل واحد.</span>
          </div>
        </div>

        <div className="about-hero-proof" aria-label="ملخص خبرة النخبة">
          <span>الرياض</span>
          <span>جدة</span>
          <span>استشارات خاصة</span>
        </div>

        <div className="about-hero-board" aria-label="مشهد معماري يعبر عن النخبة للعقارات">
          <div className="about-hero-panorama">
            <Image
              src={images.hero}
              alt="واجهة معمارية فاخرة مضاءة"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <GlassCard className="about-hero-quote" variant="light">
            <span>قيمة القرار</span>
            <strong>نختار العقار كما يختار صاحبه خطوته.</strong>
          </GlassCard>
          <div className="about-hero-metrics">
            <div>
              <strong>٢</strong>
              <span>مدن رئيسية</span>
            </div>
            <div>
              <strong>٣٢٠</strong>
              <span>عميل نخبة</span>
            </div>
          </div>
          <div className="about-hero-stamp">من ٢٠١٢</div>
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="أرقامنا"
          title="أثر واضح"
          description="إشارات مختصرة على خبرة الفريق وتنوع القرارات التي رافقناها."
          center
        />
        <div className="grid-4">
          {stats.map((stat) => (
            <GlassCard className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamGrid() {
  return (
    <section className="section about-team-section">
      <div className="container">
        <SectionHeading
          eyebrow="الفريق"
          title="وجوه تعرف التفاصيل"
          description="فريق سعودي يجمع خبرة السوق، انضباط التقييم، وحس الضيافة في لحظة القرار."
        />
        <div className="team-grid">
          {team.map((member) => (
            <GlassCard className="team-card" key={member.name}>
              <div className="portrait saudi-portrait">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 980px) 100vw, 25vw"
                  loading="eager"
                  unoptimized
                />
              </div>
              <div className="team-card-body">
                <span className="chip">{member.city}</span>
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="section journey-section">
      <div className="container">
        <SectionHeading
          eyebrow="مسيرتنا"
          title="محطات صنعت الطريقة"
          description="كل محطة أضافت طبقة جديدة لطريقة النخبة: من البيع الخاص إلى إدارة القرار العقاري كاملاً."
          center
        />
        <div className="journey-track">
          {journey.map((item, index) => (
            <GlassCard className="journey-card" key={item.year}>
              <span className="journey-index">٠{index + 1}</span>
              <strong>{item.year}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHeading
          eyebrow="آراء العملاء"
          title="تجارب تقول الكثير"
          description="نُظهر رأي العميل كجزء من تجربة القرار، لا كمجرد اقتباس عابر."
        />
        <div className="testimonials-layout">
          <GlassCard className="testimonial-feature testimonial-tone-dark">
            <span className="testimonial-mark">،،</span>
            <p>{featured.quote}</p>
            <footer>
              <strong>{featured.name}</strong>
              <span className="testimonial-city">{featured.city}</span>
            </footer>
          </GlassCard>
          <div className="testimonial-stack">
            {rest.map((testimonial, index) => (
              <GlassCard
                className={`testimonial-card testimonial-tone-${testimonialTones[index % testimonialTones.length]}`}
                key={testimonial.name}
              >
                <p>{testimonial.quote}</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span className="testimonial-city">{testimonial.city}</span>
                </footer>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
