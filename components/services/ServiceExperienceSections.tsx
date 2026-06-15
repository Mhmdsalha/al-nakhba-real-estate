import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowDownLeft, FileCheck2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  mainImage: string;
  detailImage: string;
  mainAlt: string;
  detailAlt: string;
  metricLabel: string;
  metricValue: string;
  metricHint: string;
  note: string;
};

type Highlight = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type HighlightsProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: Highlight[];
};

type Step = {
  number: string;
  title: string;
  body: string;
};

type ProcessProps = {
  eyebrow: string;
  title: string;
  description: string;
  assuranceEyebrow: string;
  assuranceTitle: string;
  assuranceBody: string;
  steps: Step[];
};

export function ServiceShowcaseHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  secondaryHref,
  mainImage,
  detailImage,
  mainAlt,
  detailAlt,
  metricLabel,
  metricValue,
  metricHint,
  note,
}: HeroProps) {
  return (
    <section className="selling-hero-section">
      <div className="container">
        <div className="selling-hero glass-dark">
          <div className="selling-hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-title">{title}</h1>
            <p>{description}</p>
            <div className="selling-hero-actions">
              <ButtonLink href="/contact">{primaryCta}</ButtonLink>
              <ButtonLink href={secondaryHref} variant="glass">
                {secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <div className="selling-hero-gallery" aria-label={title}>
            <div className="selling-main-photo">
              <Image src={mainImage} alt={mainAlt} fill priority sizes="(max-width: 980px) 100vw, 56vw" unoptimized />
            </div>
            <GlassCard className="selling-market-card">
              <Image className="floating-brand-symbol" src="/brand/al-nakhba-symbol.png" alt="" width={30} height={28} aria-hidden="true" />
              <span>{metricLabel}</span>
              <strong>{metricValue}</strong>
              <small>{metricHint}</small>
            </GlassCard>
            <div className="selling-side-photo">
              <Image src={detailImage} alt={detailAlt} fill sizes="(max-width: 980px) 42vw, 18vw" unoptimized />
            </div>
            <GlassCard className="selling-hero-note">
              <Image className="floating-brand-symbol" src="/brand/al-nakhba-symbol.png" alt="" width={28} height={26} aria-hidden="true" />
              <FileCheck2 size={18} />
              <span>{note}</span>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceHighlights({ eyebrow, title, description, highlights }: HighlightsProps) {
  return (
    <section className="section featured-sales-section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} center />
        <div className="sales-highlight-grid">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard className="sales-highlight-card" key={item.label}>
                <Icon size={22} />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceProcessDetails({
  eyebrow,
  title,
  description,
  assuranceEyebrow,
  assuranceTitle,
  assuranceBody,
  steps,
}: ProcessProps) {
  return (
    <section className="section selling-process-section">
      <div className="container selling-process-layout">
        <div className="selling-process-intro">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          <GlassCard className="process-assurance-card">
            <span className="eyebrow">{assuranceEyebrow}</span>
            <strong>{assuranceTitle}</strong>
            <p>{assuranceBody}</p>
            <ArrowDownLeft size={22} />
          </GlassCard>
        </div>
        <div className="selling-process-grid">
          {steps.map((step) => (
            <article className="selling-step-card glass-dark" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
