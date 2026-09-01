import { dictionaries, localePaths, locales, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const dictionary = dictionaries[locale];

  return (
    <nav className="language-switcher" aria-label={dictionary.languageSwitcher.label}>
      {locales.map((candidate) => {
        const shortLabel = candidate === "ar" ? "ع" : candidate.toUpperCase();
        return (
          <a
            key={candidate}
            href={localePaths[candidate]}
            hrefLang={candidate}
            lang={candidate}
            aria-label={`${shortLabel} — ${dictionaries[candidate].localeName}`}
            aria-current={candidate === locale ? "page" : undefined}
          >
            {shortLabel}
          </a>
        );
      })}
    </nav>
  );
}
