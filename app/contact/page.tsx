import { BranchesMap, ContactFormFull } from "@/components/contact/ContactSections";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <main className="service-hero">
        <section className="section">
          <div className="container">
            <ContactFormFull />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <BranchesMap />
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
