export type SocialPlatform = "linkedin" | "instagram" | "threads" | "x";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
  ariaLabel: string;
};

export const socialLinks: readonly SocialLink[] = [
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/al-mether", ariaLabel: "METHER LinkedIn" },
  { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/al_mether", ariaLabel: "METHER Instagram" },
  { platform: "threads", label: "Threads", href: "https://www.threads.com/@al_mether", ariaLabel: "METHER Threads" },
  { platform: "x", label: "X", href: "https://x.com/al_mether", ariaLabel: "METHER X" },
] as const;
