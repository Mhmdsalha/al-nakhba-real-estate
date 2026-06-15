import { Building2, Clock3, MapPin, Navigation, Phone } from "lucide-react";
import { branches } from "@/data/site";

export function ContactFormFull() {
  const fields = ["الاسم", "رقم الجوال", "البريد الإلكتروني", "المدينة", "نوع الخدمة", "الرسالة"];

  return (
    <form className="form-card glass-dark">
      <div>
        <p className="eyebrow">تواصل معنا</p>
        <h1 className="section-title">ابدأ المحادثة</h1>
        <p className="muted">أرسل طلبك، وسيعود لك مستشار من النخبة بالمسار المناسب.</p>
      </div>
      <div className="form-grid">
        {fields.map((field, index) => (
          <label className={`form-field ${index === fields.length - 1 ? "full" : ""}`} key={field}>
            <span>{field}</span>
            {index === fields.length - 1 ? <textarea placeholder={field} /> : <input placeholder={field} />}
          </label>
        ))}
      </div>
      <button className="button gold" type="submit">
        إرسال
      </button>
    </form>
  );
}

export function BranchesMap() {
  return (
    <div className="branches-layout contact-branches-layout">
      <div className="contact-branches-copy">
        <p className="eyebrow">التواصل والفروع</p>
        <h1 className="section-title">عنوان قريب من قرارك</h1>
        <p className="muted">فرعان في الرياض وجدة لخدمة الملاك والمستثمرين بموعد خاص ومسار واضح قبل الزيارة.</p>
        <div className="branch-cards">
        {branches.map((branch) => (
          <article className="branch-card contact-branch-card glass-dark" key={branch.city}>
            <div className="branch-card-head">
              <span className="branch-icon">
                <Building2 size={18} />
              </span>
              <span className="chip">{branch.city}</span>
            </div>
            <h3>{branch.address}</h3>
            <p>
              <Phone size={15} />
              {branch.phone}
            </p>
            <p>
              <Clock3 size={15} />
              {branch.hours}
            </p>
            <a className="branch-directions" href="https://maps.google.com" target="_blank" rel="noreferrer">
              <Navigation size={15} />
              افتح الاتجاهات
            </a>
          </article>
        ))}
        </div>
      </div>
      <div className="map-panel contact-map-panel glass-dark" aria-label="خريطة واقعية لفروع النخبة في السعودية">
        <div className="real-map-frame" aria-hidden="true">
          <iframe
            title="خريطة السعودية"
            src="https://www.openstreetmap.org/export/embed.html?bbox=33.4%2C15.8%2C56.4%2C33.1&layer=mapnik"
            loading="lazy"
          />
        </div>
        <div className="map-vignette" />
        <div className="map-pin pin-riyadh">
          <MapPin size={18} />
          <strong>الرياض</strong>
          <span>حي العليا</span>
        </div>
        <div className="map-pin pin-jeddah">
          <MapPin size={18} />
          <strong>جدة</strong>
          <span>حي الشاطئ</span>
        </div>
      </div>
    </div>
  );
}
