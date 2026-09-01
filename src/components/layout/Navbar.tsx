"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("TR");

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Ana navigasyon">
        <a className="brand" href="#home" aria-label="METHER ana sayfa">
          <span className="brand-mark" aria-hidden="true"><i /><i /></span>
          <span>{siteConfig.name}</span>
        </a>

        <div className="desktop-navlinks">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="language-picker" aria-label="Dil seçimi">
            {siteConfig.languages.map((item) => (
              <button key={item} type="button" onClick={() => setLang(item)} aria-pressed={lang === item}>{item}</button>
            ))}
          </div>
          <a className="nav-contact" href="mailto:info@almether.com">Bize Ulaşın</a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        {siteConfig.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{item.label}</a>
        ))}
        <a className="mobile-legal-link" href="https://legal.almether.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          METHER Legal <span aria-hidden="true">↗</span>
        </a>
        <div className="mobile-menu-footer">
          <div className="language-picker" aria-label="Dil seçimi">
            {siteConfig.languages.map((item) => (
              <button key={item} type="button" onClick={() => setLang(item)} aria-pressed={lang === item} tabIndex={open ? 0 : -1}>{item}</button>
            ))}
          </div>
          <a href="mailto:info@almether.com" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Bize Ulaşın</a>
        </div>
      </div>
    </header>
  );
}
