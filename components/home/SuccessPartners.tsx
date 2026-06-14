import { partners } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SuccessPartners() {
  const loop = [...partners, ...partners];

  return (
    <section className="section partners-section">
      <div className="container">
        <SectionHeading
          eyebrow="شركاء النجاح"
          title="شبكة عقارية موثوقة"
          description="شريط متحرك لشركات سعودية وعالمية نستلهم منها معايير الثقة والتطوير والتقييم في السوق العقاري."
          center
        />
      </div>
      <div className="partners-marquee" aria-label="شركاء النجاح">
        <div className="partners-track">
          {loop.map((partner, index) => (
            <div className="partner-logo-card glass-dark" key={`${partner.name}-${index}`}>
              <span className="partner-logo">{partner.name}</span>
              <small>{partner.field}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
