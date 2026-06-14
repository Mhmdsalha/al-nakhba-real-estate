import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  image: string;
};

export function ServiceHero({ eyebrow, title, description, cta, image }: ServiceHeroProps) {
  return (
    <section className="service-hero">
      <div className="container">
        <div className="split-hero glass-dark">
          <div className="split-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="section-title">{title}</h1>
            <p className="muted">{description}</p>
            <div className="actions-row" style={{ justifyContent: "flex-start" }}>
              <ButtonLink href="/contact">{cta}</ButtonLink>
            </div>
          </div>
          <div className="split-media">
            <Image src={image} alt={title} fill priority sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
