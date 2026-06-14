import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats, team, testimonials } from "@/data/site";

export function CompanyStory() {
  return (
    <section className="service-hero">
      <div className="container about-story">
        <GlassCard className="quote-card">
          <p className="eyebrow">من نحن</p>
          <blockquote>نختار العقار كما يختار صاحبه قراره؛ بهدوء، ومعرفة، ومسؤولية.</blockquote>
        </GlassCard>
        <div>
          <h1 className="section-title">خبرة تعرف السوق</h1>
          <p className="muted">
            تعمل النخبة للعقارات بين الرياض وجدة على بناء علاقة أهدأ مع القرار العقاري: بحث أقل، وضوح أكثر، وفرص
            مختارة بعناية.
          </p>
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
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="الفريق" title="فريق سعودي قريب من السوق" />
        <div className="team-grid">
          {team.map((member) => (
            <GlassCard className="team-card" key={member.name}>
              <div className="portrait saudi-portrait">
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 980px) 100vw, 25vw" />
              </div>
              <h3>{member.name}</h3>
              <p className="muted">{member.title}</p>
              <span className="chip">{member.city}</span>
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
          <GlassCard className="testimonial-feature">
            <span className="testimonial-mark">،،</span>
            <p>{featured.quote}</p>
            <div>
              <strong>{featured.name}</strong>
              <span>{featured.city}</span>
            </div>
          </GlassCard>
          <div className="testimonial-stack">
            {rest.map((testimonial) => (
              <GlassCard className="testimonial-card" key={testimonial.name}>
                <p>{testimonial.quote}</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span className="stone-text">{testimonial.city}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
