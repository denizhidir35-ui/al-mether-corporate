import type { Metadata } from "next";
import { buildMetadata, dictionaries } from "@/lib/i18n/config";
import "../globals.css";

export const metadata: Metadata = buildMetadata("tr");

export default function TurkishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const dictionary = dictionaries.tr;

  return (
    <html lang="tr" dir={dictionary.direction}>
      <body>{children}</body>
    </html>
  );
}
