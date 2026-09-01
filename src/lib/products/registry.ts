export type MetherProduct = {
  id: string;
  name: string;
  status: "core" | "active" | "prototype" | "future";
  description: string;
  href?: string;
  external?: boolean;
  accent: "cyan" | "blue" | "violet";
};

export const productRegistry: MetherProduct[] = [
  { id: "core", name: "METHER Core", status: "core", description: "Tüm METHER ürünlerini birleştiren ortak platform ve mimari temel.", accent: "violet" },
  { id: "ai", name: "METHER AI", status: "future", description: "METHER ekosisteminin yaşayan yapay zekâ ve otomasyon katmanı.", accent: "cyan" },
  {
    id: "legal",
    name: "METHER Legal",
    status: "active",
    description: "Avukatlar ve hukuk ekipleri için kritik süre, belge ve dava süreçlerini tek platformda yöneten hukuk teknolojisi.",
    href: "https://legal.almether.com",
    external: true,
    accent: "blue",
  },
  { id: "field", name: "METHER Field", status: "prototype", description: "Fiber altyapı planlama, saha operasyonu ve finans katmanı.", accent: "cyan" },
  { id: "workforce", name: "METHER Workforce", status: "prototype", description: "Ekip, vardiya ve iş gücü operasyonlarını tek merkezde yönetir.", accent: "violet" },
  { id: "cfo", name: "METHER CFO", status: "future", description: "Nakit akışı, tahminleme ve şirket finansı için karar zekâsı.", accent: "blue" },
];
