import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "METHER | Corporate Technology",
  description:
    "METHER; fiber altyapı, yapay zekâ, kurumsal yazılım ve METHER Legal hukuk teknolojilerini aynı çekirdek üzerinde birleştirir.",
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
