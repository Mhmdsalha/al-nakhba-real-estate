import { ButtonLink } from "@/components/ui/ButtonLink";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "قرار عقاري أوضح",
  description = "ابدأ بمحادثة قصيرة، ونبني لك مساراً يناسب هدفك وميزانيتك وموقعك.",
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-section glass-dark">
          <p className="eyebrow">تواصل مباشر</p>
          <h2 className="section-title">{title}</h2>
          <p className="muted">{description}</p>
          <div className="actions-row" style={{ marginBlockStart: 24 }}>
            <ButtonLink href="/contact">تحدث مع مستشار</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
