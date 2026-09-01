import { MetherHero } from "@/components/hero/MetherHero";
import { MetherCore } from "@/components/sections/MetherCore";
import MetherTechnologies from "@/components/sections/Technologies/MetherTechnologies";
import { StructuredData } from "@/components/StructuredData";
import { getDictionary, type Locale } from "@/lib/i18n/config";

export function MetherHome({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <StructuredData />
      <main>
        <MetherHero locale={locale} copy={dictionary.hero} />
        <MetherTechnologies copy={dictionary.technologies} />
        <MetherCore copy={dictionary.corporate} footerCopy={dictionary.footer} />
      </main>
    </>
  );
}
