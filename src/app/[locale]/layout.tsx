import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, dictionaries, isRoutedLocale } from "@/lib/i18n/config";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();
  return buildMetadata(locale);
}

export default async function LocalizedRootLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();
  const dictionary = dictionaries[locale];

  return (
    <html lang={locale} dir={dictionary.direction}>
      <body>{children}</body>
    </html>
  );
}
