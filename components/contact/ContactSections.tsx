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
    <div className="branches-layout">
      <div className="details-list">
        {branches.map((branch) => (
          <article className="branch-card glass-dark" key={branch.city}>
            <span className="chip">{branch.city}</span>
            <h3>{branch.address}</h3>
            <p className="muted">{branch.phone}</p>
            <p className="stone-text">{branch.hours}</p>
            <a className="button glass" href="https://wa.me/966551234567">
              تواصل واتساب
            </a>
          </article>
        ))}
      </div>
      <div className="map-panel glass-dark" aria-label="خريطة الفروع">
        <span className="map-pin pin-riyadh" />
        <span className="map-pin pin-jeddah" />
      </div>
    </div>
  );
}
