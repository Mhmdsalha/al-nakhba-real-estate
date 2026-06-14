import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>النخبة للعقارات</h3>
            <p className="muted">نختار العقار بعناية، ونحوّل الاهتمام إلى قرار واضح.</p>
          </div>
          <div>
            <h4>روابط</h4>
            <ul>
              <li>
                <Link href="/">الرئيسية</Link>
              </li>
              <li>
                <Link href="/about">من نحن</Link>
              </li>
              <li>
                <Link href="/contact">التواصل والفروع</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>خدماتنا</h4>
            <ul>
              <li>
                <Link href="/services/selling">البيع</Link>
              </li>
              <li>
                <Link href="/services/investment">الاستثمار</Link>
              </li>
              <li>
                <Link href="/services/management">إدارة العقارات</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>تواصل</h4>
            <ul>
              <li>الرياض، حي العليا</li>
              <li>جدة، حي الشاطئ</li>
              <li>+٩٦٦ ٥٥ ١٢٣ ٤٥٦٧</li>
            </ul>
          </div>
        </div>
        <div className="gold-line" style={{ marginBlockStart: 44 }} />
        <p className="stone-text">© ٢٠٢٦ النخبة للعقارات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
