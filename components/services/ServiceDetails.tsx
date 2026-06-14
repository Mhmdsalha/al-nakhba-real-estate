import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceDetailsProps = {
  title: string;
  details: string[];
};

export function ServiceDetails({ title, details }: ServiceDetailsProps) {
  return (
    <section className="section">
      <div className="container content-grid">
        <SectionHeading eyebrow="تفاصيل الخدمة" title={title} description="خطوات قليلة، لكن كل خطوة لها أثر واضح." />
        <div className="details-list">
          {details.map((detail) => (
            <GlassCard className="detail-row" key={detail}>
              <span className="dot" />
              <span>{detail}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
