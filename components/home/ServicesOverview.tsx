import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/site";

export function ServicesOverview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="خدمات النخبة"
          title="مسارات واضحة"
          description="كل خدمة مصممة لتقودك من الاهتمام الأول إلى قرار عقاري مطمئن."
        />
        <div className="grid-3">
          {services.map((service, index) => (
            <Reveal className="service-card card glass-dark" delay={index * 0.07} key={service.title}>
              <div className="service-card-image">
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 980px) 100vw, 33vw" />
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <Link className="button glass" href={service.href}>
                اكتشف الخدمة
                <ArrowDownLeft size={18} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
