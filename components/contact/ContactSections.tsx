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
      <div className="map-panel contact-map-panel glass-dark" aria-label="خريطة ثابتة لفروع النخبة في السعودية">
        <div className="flat-saudi-map" aria-hidden="true">
          <svg className="flat-map-art" viewBox="0 0 820 680" role="img" aria-label="خريطة السعودية">
            <defs>
              <linearGradient id="flatLand" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#d8c49b" />
                <stop offset="45%" stopColor="#b9975f" />
                <stop offset="100%" stopColor="#7f6542" />
              </linearGradient>
              <linearGradient id="flatSea" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#7f9892" />
                <stop offset="100%" stopColor="#485f5d" />
              </linearGradient>
              <filter id="landShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="-14" dy="22" stdDeviation="10" floodColor="#221b14" floodOpacity="0.32" />
              </filter>
            </defs>
            <rect className="flat-map-paper" width="820" height="680" rx="44" />
            <path
              className="flat-map-sea"
              d="M42 56 C118 144 142 232 122 342 C104 448 82 546 34 638 L0 680 L0 0 Z"
            />
            <path
              className="flat-map-sea flat-map-gulf"
              d="M726 48 C790 124 814 234 788 342 C766 430 726 498 670 570 L820 680 L820 0 Z"
            />
            <path
              className="flat-saudi-land"
              filter="url(#landShadow)"
              d="M234 76 390 42 552 94 660 214 688 340 644 454 692 552 548 632 396 602 268 540 178 414 154 284 184 154Z"
            />
            <path className="flat-terrain" d="M236 150 C310 104 444 100 540 156" />
            <path className="flat-terrain" d="M210 260 C314 214 498 224 602 292" />
            <path className="flat-terrain" d="M224 426 C338 372 520 394 626 478" />
            <path className="flat-route" d="M272 390 C346 344 446 288 548 230" />
            <path className="flat-route soft" d="M338 492 C414 410 478 324 548 230" />
            <circle className="flat-city-node" cx="548" cy="230" r="12" />
            <circle className="flat-city-node" cx="272" cy="390" r="12" />
            <circle className="flat-landmark-node" cx="500" cy="262" r="8" />
            <circle className="flat-landmark-node" cx="330" cy="458" r="8" />
            <circle className="flat-landmark-node" cx="360" cy="146" r="8" />
            <g className="flat-map-icon icon-riyadh" transform="translate(520 142)">
              <path d="M34 0 62 74 46 74 38 52 27 74 10 74Z" />
              <rect x="25" y="74" width="22" height="42" rx="5" />
            </g>
            <g className="flat-map-icon icon-jeddah" transform="translate(238 302)">
              <rect x="20" y="24" width="48" height="58" rx="8" />
              <path d="M10 82 C28 62 58 62 78 82" />
              <circle cx="44" cy="18" r="12" />
            </g>
            <g className="flat-map-icon icon-diriyah" transform="translate(444 278)">
              <rect x="8" y="30" width="74" height="48" rx="7" />
              <path d="M16 30 16 14 30 14 30 30M52 30 52 14 66 14 66 30" />
            </g>
            <g className="flat-map-icon icon-alula" transform="translate(318 86)">
              <path d="M4 78 26 10 44 78Z" />
              <path d="M44 78 60 28 82 78Z" />
            </g>
          </svg>
          <div className="flat-landmark-card landmark-riyadh-card">
            <strong>الرياض</strong>
            <span>برج المملكة</span>
          </div>
          <div className="flat-landmark-card landmark-jeddah-card">
            <strong>جدة</strong>
            <span>الواجهة البحرية</span>
          </div>
          <div className="flat-landmark-card landmark-diriyah-card">
            <strong>الدرعية</strong>
            <span>إرث عمراني</span>
          </div>
          <div className="flat-landmark-card landmark-alula-card">
            <strong>العلا</strong>
            <span>وجهة فاخرة</span>
          </div>
        </div>
        <div className="flat-map-legend">
          <span>فروع النخبة</span>
          <strong>الرياض · جدة</strong>
        </div>
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
