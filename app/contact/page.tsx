import { BranchesMap, ContactFormFull } from "@/components/contact/ContactSections";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <main className="contact-page">
        <section className="section contact-branches-section">
          <div className="container">
            <BranchesMap />
          </div>
        </section>
        <section className="section contact-form-section">
          <div className="container">
            <ContactFormFull />
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
