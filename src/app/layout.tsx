import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "METHER | Corporate Technology",
  description: "METHER official corporate technology website.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
