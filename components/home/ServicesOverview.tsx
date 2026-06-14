import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/site";
import { images } from "@/lib/images";

export function ServicesOverview() {
  return (
    <section className="section services-desk-section">
      <div className="container">
        <SectionHeading
          eyebrow="خدمات النخبة"
          title="مكتب قرار عقاري"
          description="بدل عرض الخدمات كقائمة، نرتبها كجلسة استشارية: نقرأ هدفك، نرشح المسار، ثم نتابع القرار حتى نهايته."
        />
        <div className="services-desk">
          <div className="services-desk-media">
            <Image src={images.serviceDesk} alt="مستشار عقاري يراجع مخطط مشروع فاخر" fill sizes="(max-width: 980px) 100vw, 48vw" />
            <GlassCard className="services-desk-note">
              <span className="eyebrow">منهجية النخبة</span>
              <strong>استشارة، اختيار، تنفيذ</strong>
              <p>كل خدمة تبدأ بفهم الهدف قبل عرض العقار.</p>
            </GlassCard>
          </div>
          <div className="services-desk-list">
            {services.map((service, index) => (
              <Link className="service-route glass-dark" href={service.href} key={service.title}>
                <span className="service-route-index">٠{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-route-proof">
                    <CheckCircle2 size={16} />
                    مسار واضح مع مستشار متخصص
                  </span>
                </div>
                <ArrowDownLeft className="service-route-arrow" size={22} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
