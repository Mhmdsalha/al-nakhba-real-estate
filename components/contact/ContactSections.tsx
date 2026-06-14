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
      <div className="map-panel contact-map-panel glass-dark" aria-label="خريطة تفاعلية لفروع النخبة">
        <div className="map-grid" />
        <svg className="saudi-map" viewBox="0 0 620 520" role="img" aria-label="مواقع الرياض وجدة">
          <path
            className="saudi-map-land"
            d="M171 102 286 70 402 104 485 202 510 322 447 425 315 461 191 405 112 302 123 183Z"
          />
          <path className="saudi-map-route" d="M226 318 C278 292 334 260 391 232" />
          <circle className="map-city-dot jeddah-dot" cx="226" cy="318" r="9" />
          <circle className="map-city-dot riyadh-dot" cx="391" cy="232" r="9" />
        </svg>
        <a className="map-pin pin-riyadh" href="https://maps.google.com" target="_blank" rel="noreferrer">
          <MapPin size={18} />
          <strong>الرياض</strong>
          <span>حي العليا</span>
        </a>
        <a className="map-pin pin-jeddah" href="https://maps.google.com" target="_blank" rel="noreferrer">
          <MapPin size={18} />
          <strong>جدة</strong>
          <span>حي الشاطئ</span>
        </a>
      </div>
    </div>
  );
}
