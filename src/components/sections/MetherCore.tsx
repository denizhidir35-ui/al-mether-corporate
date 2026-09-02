import { socialLinks } from "@/lib/config/social";
import type { Dictionary } from "@/lib/i18n/config";
import { MetherCoreScene } from "@/experience/mether-core/MetherCoreScene";
import styles from "./MetherCore.module.css";

export function MetherCore({ copy, footerCopy }: { copy: Dictionary["corporate"]; footerCopy: Dictionary["footer"] }) {
  return (
    <section id="contact" className={styles.section} aria-labelledby="corporate-title">
      <div className={styles.stage}>
        <div className={styles.ambient} aria-hidden="true" />
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.noise} aria-hidden="true" />
        <div className={styles.lightStreams} aria-hidden="true"><i /><i /><i /></div>
        <MetherCoreScene ariaLabel={copy.coreAria} />

        <div className={styles.content}>
          <div className={styles.heroLayer}>
            <header className={styles.identity}>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h2 id="corporate-title">
                {copy.titleStart}
                <span>{copy.titleAccent}</span>
              </h2>
              <p className={styles.summary}>{copy.summary}</p>
            </header>
            <div className={styles.visualSpace} aria-hidden="true" />
          </div>

          <div className={styles.actions}>
            <a
              className={styles.legal}
              href="https://legal.almether.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.legalAria}
            >
              <span className={styles.actionTopline}>
                <span className={styles.actionLabel}>{copy.ecosystemLabel}</span>
                <span className={styles.live}><i aria-hidden="true" />{copy.liveLabel}</span>
              </span>
              <span className={styles.actionBody}>
                <span>
                  <strong>METHER Legal</strong>
                  <p>{copy.legalDescription}</p>
                </span>
                <i className={styles.arrow} aria-hidden="true" dir="ltr">↗</i>
              </span>
            </a>

            <div className={styles.contact}>
              <span className={styles.actionLabel}>{copy.contactLabel}</span>
              <div className={styles.contactBody}>
                <div>
                  <h3>{copy.contactTitleStart}<br />{copy.contactTitleEnd}</h3>
                  <a className={styles.email} href="mailto:info@almether.com">info@almether.com</a>
                </div>
                <a className={styles.contactCta} href="mailto:info@almether.com">{copy.contactCta} <span aria-hidden="true" dir="ltr">→</span></a>
              </div>
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
