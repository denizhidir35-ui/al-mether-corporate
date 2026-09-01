import { notFound } from "next/navigation";
import { MetherHome } from "@/components/MetherHome";
import { isRoutedLocale } from "@/lib/i18n/config";

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();
  return <MetherHome locale={locale} />;
}
