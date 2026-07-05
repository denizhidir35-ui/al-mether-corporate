"use client";

export function HeroOverlay() {
  return (
    <section className="pointer-events-none absolute inset-0 z-20 min-h-screen overflow-hidden">
      <header className="pointer-events-auto absolute left-8 right-8 top-6 z-30 flex h-16 items-center justify-between rounded-full border border-white/12 bg-black/48 px-7 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-full border border-cyan-300" />
          <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-xl font-black tracking-[0.18em] text-transparent">METHER</span>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-semibold text-white/72 lg:flex">
          <a className="text-white" href="#">ANA SAYFA</a>
          <a href="#">KURUMSAL</a>
          <a href="#">TEKNOLOJİLER</a>
          <a href="#">ÇÖZÜMLER</a>
          <a href="#">PROJELER</a>
          <a href="#">İLETİŞİM</a>
        </nav>

        <a href="#contact" className="rounded-full border border-white/18 px-6 py-3 text-sm font-bold text-white">BİZE ULAŞIN →</a>
      </header>

      <div className="energy-orbit-layer">
        <span className="energy-orbit one" />
        <span className="energy-orbit two" />
        <span className="energy-orbit three" />
        <span className="energy-dot d1" />
        <span className="energy-dot d2" />
        <span className="energy-dot d3" />
      </div>

      <div className="absolute left-8 top-[22%] hidden flex-col items-center gap-8 text-white/80 lg:flex">
        <span className="text-sm">01</span>
        <span className="h-80 w-px bg-white/35" />
      </div>

      <div className="absolute left-[7.5%] top-[22%] z-30 max-w-[560px]">
        <p className="mb-8 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
          GELECEĞİ BİRLİKTE İNŞA EDİYORUZ
        </p>

        <h1 className="text-[clamp(3rem,4.55vw,5.5rem)] font-black leading-[0.98] tracking-[-0.065em] text-white">
          Geleceğin iletişim
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
            altyapılarını
          </span>
          tasarlıyoruz.
        </h1>

        <p className="mt-8 max-w-[520px] text-lg leading-9 text-white/72">
          Fiber optik altyapıdan yapay zekâya, dijital dönüşümden akıllı şehir teknolojilerine kadar geleceğin iletişim altyapılarını tasarlıyor ve hayata geçiriyoruz.
        </p>

        <div className="pointer-events-auto mt-12 flex gap-7">
          <a href="#projects" className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-8 py-4 text-base font-black text-white shadow-[0_0_55px_rgba(168,85,247,0.35)]">Projelerimizi İncele →</a>
          <a href="#film" className="rounded-full border border-white/20 bg-black/20 px-8 py-4 text-base font-black text-white backdrop-blur-xl">Tanıtım Filmi ▷</a>
        </div>
      </div>

      <div className="absolute bottom-7 left-[7.5%] z-20 hidden items-center gap-4 text-sm font-bold tracking-[0.18em] text-white/80 lg:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">↓</span>
        SCROLL
      </div>
    </section>
  );
}
