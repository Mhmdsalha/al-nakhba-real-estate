import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "النخبة للعقارات",
  description: "شركة عقارية سعودية فاخرة في الرياض وجدة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
