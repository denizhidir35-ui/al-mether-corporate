import type { MetadataRoute } from "next";
import { localePaths, locales, siteUrl } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}${localePaths[locale]}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "tr" ? 1 : 0.9,
    alternates: {
      languages: {
        tr: `${siteUrl}/`,
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
      },
    },
  }));
}
