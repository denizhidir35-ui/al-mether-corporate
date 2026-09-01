import Navbar from "@/components/layout/Navbar";
import { socialLinks, type SocialPlatform } from "@/lib/config/social";

function IconLinkedIn() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.34 4a1.84 1.84 0 1 0 0 3.68A1.84 1.84 0 0 0 5.34 4ZM20.25 13.66c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58.98-3.02 1.67h-.04V8.98h-3.06V20h3.19v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.19l-.22-6.34Z" /></svg>;
}

function IconInstagram() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.35A4.65 4.65 0 1 1 7.35 12 4.65 4.65 0 0 1 12 7.35Zm0 2A2.65 2.65 0 1 0 14.65 12 2.65 2.65 0 0 0 12 9.35Zm5.18-2.75a1.08 1.08 0 1 1-1.08 1.08 1.08 1.08 0 0 1 1.08-1.08Z" /></svg>;
}

function IconThreads() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.55 10.78c-.08-3.07-1.82-4.84-4.76-4.86-2.23-.02-3.87 1.15-4.56 3.08l2.13.73c.4-1.08 1.17-1.63 2.41-1.63 1.5 0 2.35.81 2.48 2.34a8.85 8.85 0 0 0-2.29-.3c-3.03 0-5.1 1.51-5.1 3.82 0 2.2 1.76 3.69 4.36 3.69 2.31 0 4.04-1.12 4.88-3.09.64.69 1 1.61 1 2.75 0 2.96-2.06 4.73-5.5 4.73-5.12 0-8.24-3.73-8.24-9.83 0-6.08 3.15-9.83 8.24-9.83 3.75 0 6.33 1.78 7.67 5.28l2.12-.8C17.72 2.44 14.27.16 9.6.16 3.68.16 0 4.78 0 12.21c0 7.45 3.67 12.05 9.6 12.05 4.85 0 7.83-2.7 7.83-6.94 0-2.69-1.04-4.87-2.88-6.54Zm-5.27 4.72c-1.31 0-2.13-.61-2.13-1.59 0-1.04 1.04-1.7 2.68-1.7.85 0 1.67.16 2.4.46-.34 1.79-1.37 2.83-2.95 2.83Z" /></svg>;
}

function IconX() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2h3.1l-6.77 7.74L23.2 22h-6.24l-4.89-6.38L6.48 22H3.36l7.25-8.28L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.44 4.05H6.6l11.2 15.79Z" /></svg>;
}

const icons: Record<SocialPlatform, () => React.ReactNode> = { linkedin: IconLinkedIn, instagram: IconInstagram, threads: IconThreads, x: IconX };

function SocialLinks({ iconsOnly = false }: { iconsOnly?: boolean }) {
  return socialLinks.map((item) => {
    const Icon = icons[item.platform];
    return (
      <a key={item.platform} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}>
        <Icon />
        {!iconsOnly && <span>{item.label}</span>}
      </a>
    );
  });
}

export function MetherHero() {
  return (
    <section id="home" className="mether-hero relative overflow-hidden bg-black" aria-labelledby="hero-title">
      <video className="hero-video absolute inset-0 h-full w-full object-cover" src="/mether-hero.mp4?v=13" poster="/hero-bg.png" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        Tarayıcınız arka plan videosunu desteklemiyor.
      </video>
      <div className="hero-cinema-fade" />
      <Navbar />

      <div className="hero-copy">
        <p className="hero-eyebrow">GELECEĞİ BİRLİKTE İNŞA EDİYORUZ</p>
        <h1 id="hero-title">Geleceğin iletişim <span>altyapılarını</span> tasarlıyoruz.</h1>
        <p className="hero-description">Fiber optik altyapıdan yapay zekâya, dijital dönüşümden akıllı şehir teknolojilerine kadar geleceğin iletişim altyapılarını tasarlıyor ve hayata geçiriyoruz.</p>
        <a className="hero-primary-cta" href="#products">Projelerimizi İncele <span aria-hidden="true">→</span></a>
      </div>

      <aside className="right-socialbar" aria-label="METHER sosyal medya hesapları">
        <div className="social-inner"><span className="social-label">SOSYAL</span><span className="social-line" /><SocialLinks iconsOnly /></div>
      </aside>
      <nav className="mobile-socials" aria-label="METHER sosyal medya hesapları"><SocialLinks /></nav>
    </section>
  );
}
