import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/data/site";

export function StatsBento() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="أرقامنا"
          title="ثقة تقرأ بالأرقام"
          description="أرقام مختصرة تعكس خبرة النخبة في اختيار الفرص وإدارة القرار العقاري."
          center
        />
        <div className="grid-4">
          {stats.map((stat, index) => (
            <Reveal className="stat-card glass-dark" delay={index * 0.06} key={stat.label}>
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <span className="stone-text">نتائج مبنية على اختيار وتراكم خبرة.</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
