import Link from "next/link";

import BrandLogo from "@/components/brand-logo";
import { primaryNavigation, siteSettings } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-note">
          <BrandLogo variant="footer" className="footer" />
          <h3>{siteSettings.tagline}</h3>
          <p>{siteSettings.footerNote}</p>
          <div className="footer-meta">
            <span>{siteSettings.name}</span>
            <span>{siteSettings.primaryFocus}</span>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {primaryNavigation.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
