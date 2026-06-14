"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="container">
          <div className="nav-inner glass-dark">
            <Link className="brand" href="/" aria-label="النخبة للعقارات">
              النخبة للعقارات
              <span>استشارات وفرص عقارية مختارة</span>
            </Link>
            <nav className="nav-links" aria-label="التنقل الرئيسي">
              {navLinks.map((link) => (
                <Link className="nav-link" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="nav-cta">
              <Link className="button glass" href="/contact">
                تحدث مع مستشار
              </Link>
            </div>
            <button
              className="mobile-toggle"
              type="button"
              aria-label="فتح القائمة"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-panel glass-dark">
          <div className="mobile-menu-header">
            <Link className="brand" href="/" onClick={() => setOpen(false)}>
              النخبة للعقارات
              <span>واجهة عقارية فاخرة</span>
            </Link>
            <button className="mobile-toggle" type="button" aria-label="إغلاق القائمة" onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <div className="mobile-links">
            {navLinks.map((link) => (
              <Link className="mobile-link" href={link.href} key={link.href} onClick={() => setOpen(false)}>
                {link.label}
                <span>↙</span>
              </Link>
            ))}
            <Link className="button gold" href="/contact" onClick={() => setOpen(false)}>
              تحدث مع مستشار
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
