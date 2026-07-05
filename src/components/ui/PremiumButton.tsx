type PremiumButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function PremiumButton({
  href,
  children,
  variant = "primary",
}: PremiumButtonProps) {
  const base =
    "gsap-cta rounded-full px-7 py-4 text-center text-sm font-bold transition hover:scale-[1.025]";

  if (variant === "secondary") {
    return (
      <a
        href={href}
        className={`${base} border border-white/15 bg-white/[.055] text-white backdrop-blur-xl hover:bg-white/[.095] sm:min-w-36`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} group relative overflow-hidden bg-white text-black shadow-[0_0_70px_rgba(255,255,255,.24)]`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-200/70 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
    </a>
  );
}
