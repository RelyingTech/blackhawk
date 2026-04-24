import Script from "next/script";

import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import { siteSettings } from "@/content/site";

import "./globals.css";

export const metadata = {
  title: {
    default: `${siteSettings.name} | ${siteSettings.tagline}`,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteSettings.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="js-class" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js");`}
        </Script>
        <div className="page-shell">
          <Header />
          <main className="site-main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
