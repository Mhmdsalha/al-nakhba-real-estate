import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <div className="cta-section glass-dark">
          <p className="eyebrow">النخبة للعقارات</p>
          <h1 className="section-title">الصفحة غير موجودة</h1>
          <p className="muted">يمكنك العودة للرئيسية ومتابعة استعراض الخدمات.</p>
          <Link className="button gold" href="/">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
