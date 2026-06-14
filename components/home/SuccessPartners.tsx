import { partners } from "@/data/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SuccessPartners() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="شركاء النجاح"
          title="علاقات تصنع الثقة"
          description="نعمل ضمن شبكة موثوقة من المطورين، المقيمين، والمستشارين لدعم قرار العميل من كل زاوية."
          center
        />
        <div className="partners-grid">
          {partners.map((partner) => (
            <GlassCard className="partner-card" key={partner}>
              <span>{partner}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
