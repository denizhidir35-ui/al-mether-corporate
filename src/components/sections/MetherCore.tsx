import { socialLinks } from "@/lib/config/social";
import type { Dictionary } from "@/lib/i18n/config";
import styles from "./MetherCore.module.css";

export function MetherCore({ copy, footerCopy }: { copy: Dictionary["corporate"]; footerCopy: Dictionary["footer"] }) {
  return (
    <section id="contact" className={styles.section} aria-labelledby="corporate-title">
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <header className={styles.intro}>
          <div className={styles.identity}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 id="corporate-title">
              {copy.titleStart}
              <span>{copy.titleAccent}</span>
            </h2>
            <p className={styles.summary}>{copy.summary}</p>
          </div>

          <aside className={styles.vision} aria-labelledby="vision-title">
            <span className={styles.visionIndex}>{copy.visionLabel}</span>
            <div className={styles.orbit} aria-hidden="true"><i /><i /></div>
            <h3 id="vision-title">{copy.visionTitleStart}<br />{copy.visionTitleEnd}</h3>
            <p>{copy.visionText}</p>
          </aside>
        </header>

        <div className={styles.areas} aria-label={copy.areasAria}>
          {copy.areas.map((area, index) => (
            <div key={area} className={styles.area}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{area}</strong>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            className={styles.legal}
            href="https://legal.almether.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.legalAria}
          >
            <span className={styles.actionLabel}>{copy.ecosystemLabel}</span>
            <strong>METHER Legal</strong>
            <p>{copy.legalDescription}</p>
            <i aria-hidden="true" dir="ltr">↗</i>
          </a>

          <div className={styles.contact}>
            <span className={styles.actionLabel}>{copy.contactLabel}</span>
            <h3>{copy.contactTitleStart}<br />{copy.contactTitleEnd}</h3>
            <div className={styles.contactLinks}>
              <a href="mailto:info@almether.com">info@almether.com</a>
              <a className={styles.contactCta} href="mailto:info@almether.com">{copy.contactCta} <span aria-hidden="true" dir="ltr">→</span></a>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <strong>METHER</strong>
          <span>Engineering Tomorrow.</span>
        </div>
        <span className={styles.copyright}>© 2026 METHER</span>
        <nav className={styles.footerLinks} aria-label={footerCopy.navigationAria}>
          <a href="mailto:info@almether.com">info@almether.com</a>
          <a href="https://legal.almether.com" target="_blank" rel="noopener noreferrer">{footerCopy.legal}</a>
          {socialLinks.map((social) => (
            <a key={social.platform} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>{social.label}</a>
          ))}
        </nav>
      </footer>
    </section>
  );
}
