import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { images } from "@/lib/images";

export function MashrabiyaHero() {
  return (
    <section className="hero-frame lattice" aria-label="واجهة النخبة للعقارات">
      <div className="hero-bg">
        <Image src={images.hero} alt="فيلا فاخرة بإضاءة معمارية" fill priority sizes="100vw" />
      </div>
      <div className="hero-scrim" />
      <div className="hero-content">
        <div className="hero-copy">
          <span className="chip">الرياض وجدة</span>
          <h1 className="display-title hero-title-wordmark">
            <span className="hero-title-mobile">عقارك يبدأ من النخبة</span>
            <span aria-hidden="true" className="hero-title-desktop">
              عقارك يبدأ
            </span>
            <span aria-hidden="true" className="hero-title-desktop hero-title-stretch">
              مــــن
            </span>
            <span aria-hidden="true" className="hero-title-desktop">
              النخبة
            </span>
          </h1>
          <p>فرص عقارية مختارة في الرياض وجدة، بخبرة تحفظ القرار والقيمة.</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">تحدث مع مستشار</ButtonLink>
            <ButtonLink href="#projects" variant="glass">
              استعرض المشاريع
            </ButtonLink>
          </div>
        </div>
        <div className="hero-card-cluster">
          <GlassCard className="hero-floating start">
            <Image className="floating-brand-symbol" src="/brand/al-nakhba-symbol.png" alt="" width={32} height={30} aria-hidden="true" />
            <span className="eyebrow">متاح الآن</span>
            <strong>٤٥</strong>
            <span className="muted">مشروعاً وفرصة مختارة بين الرياض وجدة.</span>
          </GlassCard>
          <GlassCard className="hero-floating end">
            <Image className="floating-brand-symbol" src="/brand/al-nakhba-symbol.png" alt="" width={32} height={30} aria-hidden="true" />
            <span className="eyebrow">استشارة خاصة</span>
            <strong>٢٤ ساعة</strong>
            <span className="muted">نراجع احتياجك ونرشح المسار الأنسب.</span>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
