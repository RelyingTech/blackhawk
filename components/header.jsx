"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import BrandLogo from "@/components/brand-logo";
import { primaryNavigation } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand-link" href="/" aria-label="BlackHawk Ventures home">
          <BrandLogo variant="header" className="header" priority />
        </Link>

        <button
          className={`menu-toggle${isOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav${isOpen ? " is-open" : ""}`} id="site-nav">
          {primaryNavigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
