import type { Metadata } from "next";

export const locales = ["tr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];
export type RoutedLocale = Exclude<Locale, "tr">;

export const defaultLocale: Locale = "tr";
export const siteUrl = "https://www.almether.com";

type TechnologyCard = {
  title: string;
  text: string;
};

export type Dictionary = {
  localeName: string;
  direction: "ltr" | "rtl";
  metadata: {
    title: string;
    description: string;
    ogLocale: string;
    keywords: string[];
  };
  languageSwitcher: {
    label: string;
  };
  navigation: {
    home: string;
    technologies: string;
    corporate: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    projectsCta: string;
    contactCta: string;
    socialLabel: string;
    socialAria: string;
    videoFallback: string;
  };
  technologies: {
    eyebrow: string;
    titleLines: [string, string, string, string, string];
    description: string;
    cta: string;
    cards: TechnologyCard[];
  };
  corporate: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    summary: string;
    visionLabel: string;
    visionTitleStart: string;
    visionTitleEnd: string;
    visionText: string;
    areasAria: string;
    areas: string[];
    ecosystemLabel: string;
    legalDescription: string;
    legalAria: string;
    contactLabel: string;
    contactTitleStart: string;
    contactTitleEnd: string;
    contactCta: string;
  };
  footer: {
    navigationAria: string;
    legal: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    localeName: "Türkçe",
    direction: "ltr",
    metadata: {
      title: "METHER | Geleceğin İletişim Altyapıları",
      description: "METHER; fiber altyapı, yapay zekâ, bulut, veri, güvenlik ve kurumsal yazılımı tek teknoloji omurgasında birleştirir.",
      ogLocale: "tr_TR",
      keywords: ["METHER", "fiber altyapı", "yapay zekâ", "bulut", "kurumsal teknoloji", "METHER Legal"],
    },
    languageSwitcher: { label: "Dil seçimi" },
    navigation: { home: "Ana Sayfa", technologies: "Teknolojiler", corporate: "Kurumsal", contact: "İletişim", menuOpen: "Menüyü aç", menuClose: "Menüyü kapat" },
    hero: {
      eyebrow: "GELECEĞİ BİRLİKTE İNŞA EDİYORUZ",
      titleStart: "Geleceğin iletişim",
      titleAccent: "altyapılarını",
      titleEnd: "tasarlıyoruz.",
      description: "Fiber optik altyapıdan yapay zekâya, dijital dönüşümden akıllı şehir teknolojilerine kadar geleceğin iletişim altyapılarını tasarlıyor ve hayata geçiriyoruz.",
      projectsCta: "Projelerimizi İncele",
      contactCta: "Bize Ulaşın",
      socialLabel: "SOSYAL",
      socialAria: "METHER sosyal medya hesapları",
      videoFallback: "Tarayıcınız arka plan videosunu desteklemiyor.",
    },
    technologies: {
      eyebrow: "METHER TECHNOLOGIES",
      titleLines: ["Fiberden", "Yapay zekâya", "uzanan", "teknoloji", "omurgası."],
      description: "Fiber altyapı, yapay zekâ, bulut, veri güvenliği ve kurumsal yazılım katmanlarını tek omurgada birleştiriyoruz.",
      cta: "Keşfet",
      cards: [
        { title: "Fiber", text: "Yüksek hızlı altyapı." },
        { title: "AI", text: "Akıllı otomasyon." },
        { title: "Cloud", text: "Ölçeklenebilir bulut." },
        { title: "Data", text: "Veriden içgörü." },
        { title: "Security", text: "Uçtan uca güvenlik." },
        { title: "Enterprise", text: "Kurumsal yazılım." },
      ],
    },
    corporate: {
      eyebrow: "METHER KİMDİR?",
      titleStart: "Altyapı ile zekâ",
      titleAccent: "arasında bir çekirdek.",
      summary: "METHER; fiziksel altyapıyı, yapay zekâyı ve kurumsal yazılımı tek teknoloji omurgasında birleştiren mühendislik şirketidir.",
      visionLabel: "01 / VİZYON",
      visionTitleStart: "Bağlantı kuran sistemlerden,",
      visionTitleEnd: "karar veren sistemlere.",
      visionText: "Bugünün altyapısını yarının otonom teknoloji ekosistemine dönüştürüyoruz.",
      areasAria: "METHER teknoloji alanları",
      areas: ["Fiber", "AI", "Cloud", "Data", "Security", "Enterprise"],
      ecosystemLabel: "METHER ECOSYSTEM / LIVE",
      legalDescription: "Hukuk ekipleri için kritik süre, belge ve dava süreçleri tek platformda.",
      legalAria: "METHER Legal — Hukuk Teknolojisi",
      contactLabel: "İLETİŞİM",
      contactTitleStart: "Bir sonraki sistemi",
      contactTitleEnd: "birlikte tasarlayalım.",
      contactCta: "Bize Ulaşın",
    },
    footer: { navigationAria: "METHER footer bağlantıları", legal: "Legal" },
  },
  en: {
    localeName: "English",
    direction: "ltr",
    metadata: {
      title: "METHER | Engineering Tomorrow's Infrastructure",
      description: "METHER unifies fiber infrastructure, AI, cloud, data, security and enterprise software on one technology backbone.",
      ogLocale: "en_US",
      keywords: ["METHER", "fiber infrastructure", "artificial intelligence", "cloud", "enterprise technology", "METHER Legal"],
    },
    languageSwitcher: { label: "Choose language" },
    navigation: { home: "Home", technologies: "Technologies", corporate: "Corporate", contact: "Contact", menuOpen: "Open menu", menuClose: "Close menu" },
    hero: {
      eyebrow: "BUILDING THE FUTURE TOGETHER",
      titleStart: "We design tomorrow's",
      titleAccent: "communications",
      titleEnd: "infrastructure.",
      description: "From fiber-optic infrastructure and artificial intelligence to digital transformation and smart cities, we design and deliver the communication systems of tomorrow.",
      projectsCta: "Explore Our Projects",
      contactCta: "Contact Us",
      socialLabel: "SOCIAL",
      socialAria: "METHER social media accounts",
      videoFallback: "Your browser does not support the background video.",
    },
    technologies: {
      eyebrow: "METHER TECHNOLOGIES",
      titleLines: ["From fiber", "to artificial", "intelligence:", "one technology", "backbone."],
      description: "We unite fiber infrastructure, AI, cloud, data security and enterprise software layers on a single backbone.",
      cta: "Discover",
      cards: [
        { title: "Fiber", text: "High-speed infrastructure." },
        { title: "AI", text: "Intelligent automation." },
        { title: "Cloud", text: "Scalable cloud systems." },
        { title: "Data", text: "Insight from data." },
        { title: "Security", text: "End-to-end security." },
        { title: "Enterprise", text: "Enterprise software." },
      ],
    },
    corporate: {
      eyebrow: "WHO IS METHER?",
      titleStart: "The core between",
      titleAccent: "infrastructure and intelligence.",
      summary: "METHER is an engineering company that unites physical infrastructure, artificial intelligence and enterprise software on one technology backbone.",
      visionLabel: "01 / VISION",
      visionTitleStart: "From systems that connect",
      visionTitleEnd: "to systems that decide.",
      visionText: "We transform today's infrastructure into tomorrow's autonomous technology ecosystem.",
      areasAria: "METHER technology areas",
      areas: ["Fiber", "AI", "Cloud", "Data", "Security", "Enterprise"],
      ecosystemLabel: "METHER ECOSYSTEM / LIVE",
      legalDescription: "Critical deadlines, documents and case workflows for legal teams—on one platform.",
      legalAria: "METHER Legal — Legal Technology",
      contactLabel: "CONTACT",
      contactTitleStart: "Let's design the next system",
      contactTitleEnd: "together.",
      contactCta: "Contact Us",
    },
    footer: { navigationAria: "METHER footer links", legal: "Legal" },
  },
  ar: {
    localeName: "العربية",
    direction: "rtl",
    metadata: {
      title: "METHER | هندسة بنية اتصالات المستقبل",
      description: "تجمع METHER البنية التحتية للألياف والذكاء الاصطناعي والسحابة والبيانات والأمن وبرمجيات المؤسسات ضمن عمود تقني واحد.",
      ogLocale: "ar_AR",
      keywords: ["METHER", "البنية التحتية للألياف", "الذكاء الاصطناعي", "الحوسبة السحابية", "تقنية المؤسسات", "METHER Legal"],
    },
    languageSwitcher: { label: "اختيار اللغة" },
    navigation: { home: "الرئيسية", technologies: "التقنيات", corporate: "عن METHER", contact: "تواصل معنا", menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة" },
    hero: {
      eyebrow: "نبني المستقبل معاً",
      titleStart: "نصمم بنية",
      titleAccent: "اتصالات",
      titleEnd: "المستقبل.",
      description: "من شبكات الألياف الضوئية والذكاء الاصطناعي إلى التحول الرقمي وتقنيات المدن الذكية، نصمم أنظمة اتصالات المستقبل ونحوّلها إلى واقع.",
      projectsCta: "استكشف مشاريعنا",
      contactCta: "تواصل معنا",
      socialLabel: "تواصل",
      socialAria: "حسابات METHER على منصات التواصل",
      videoFallback: "متصفحك لا يدعم فيديو الخلفية.",
    },
    technologies: {
      eyebrow: "METHER TECHNOLOGIES",
      titleLines: ["من الألياف", "إلى الذكاء", "الاصطناعي:", "عمود تقني", "متكامل."],
      description: "نوحّد البنية التحتية للألياف والذكاء الاصطناعي والسحابة وأمن البيانات وبرمجيات المؤسسات ضمن منظومة واحدة.",
      cta: "اكتشف",
      cards: [
        { title: "الألياف", text: "بنية تحتية فائقة السرعة." },
        { title: "الذكاء الاصطناعي", text: "أتمتة ذكية." },
        { title: "السحابة", text: "أنظمة سحابية قابلة للتوسع." },
        { title: "البيانات", text: "رؤى مستمدة من البيانات." },
        { title: "الأمن", text: "حماية متكاملة." },
        { title: "المؤسسات", text: "برمجيات للمؤسسات." },
      ],
    },
    corporate: {
      eyebrow: "من هي METHER؟",
      titleStart: "النواة التي تجمع",
      titleAccent: "البنية التحتية والذكاء.",
      summary: "METHER شركة هندسية تجمع البنية التحتية المادية والذكاء الاصطناعي وبرمجيات المؤسسات ضمن عمود تقني واحد.",
      visionLabel: "01 / الرؤية",
      visionTitleStart: "من أنظمة تبني الاتصال",
      visionTitleEnd: "إلى أنظمة تصنع القرار.",
      visionText: "نحوّل بنية اليوم التحتية إلى منظومة تقنية ذاتية للمستقبل.",
      areasAria: "مجالات تقنية METHER",
      areas: ["الألياف", "الذكاء الاصطناعي", "السحابة", "البيانات", "الأمن", "المؤسسات"],
      ecosystemLabel: "METHER ECOSYSTEM / LIVE",
      legalDescription: "المواعيد الحرجة والمستندات ومسارات القضايا للفرق القانونية في منصة واحدة.",
      legalAria: "METHER Legal — التقنية القانونية",
      contactLabel: "تواصل معنا",
      contactTitleStart: "لنصمم النظام القادم",
      contactTitleEnd: "معاً.",
      contactCta: "تواصل معنا",
    },
    footer: { navigationAria: "روابط تذييل METHER", legal: "Legal" },
  },
};

export const localePaths: Record<Locale, string> = {
  tr: "/",
  en: "/en",
  ar: "/ar",
};

export function isRoutedLocale(value: string): value is RoutedLocale {
  return value === "en" || value === "ar";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function buildMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);
  const canonical = `${siteUrl}${localePaths[locale]}`;
  const alternateLocale = locales
    .filter((candidate) => candidate !== locale)
    .map((candidate) => dictionaries[candidate].metadata.ogLocale);

  return {
    metadataBase: new URL(siteUrl),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    applicationName: "METHER",
    creator: "METHER",
    publisher: "METHER",
    category: "technology",
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${siteUrl}/`,
        "en-US": `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        "x-default": `${siteUrl}/`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "METHER",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      locale: dictionary.metadata.ogLocale,
      alternateLocale,
      images: [{ url: "/hero-bg.png", alt: "METHER — Engineering Tomorrow." }],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: ["/hero-bg.png"],
    },
    robots: { index: true, follow: true },
  };
}
