"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="metherPage">
      <div className="spaceLayer"></div>
      <div className="gridLayer"></div>
      <div className="aurora auroraOne"></div>
      <div className="aurora auroraTwo"></div>

      <motion.div
        className="introLayer"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
      >
        <video src="/mether-intro.mp4" autoPlay muted playsInline />
      </motion.div>

      <nav className="navbar">
        <div className="navLogo">
          <img src="/mether-logo.png" alt="METHER" />
        </div>
        <div className="navLinks">
          <a>Ana Sayfa</a>
          <a>Hakkımızda</a>
          <a>Hizmetlerimiz</a>
          <a>Teknoloji</a>
          <a>İletişim</a>
        </div>
        <a className="navCta">Teklif Al</a>
      </nav>

      <section className="hero">
        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.05, duration: 0.8, ease: "easeOut" }}
        >
          <div className="eyebrow">GELECEĞİ BİRLİKTE İNŞA EDİYORUZ</div>
          <h1>Geleceğin iletişim altyapılarını tasarlıyoruz.</h1>
          <p>
            Fiber optik altyapıdan yapay zekâya, dijital dönüşümden akıllı şehir teknolojilerine kadar geleceğin iletişim altyapılarını tasarlıyor ve hayata geçiriyoruz.
          </p>
          <div className="heroActions">
            <a className="primaryBtn">Projelerimizi İncele</a>
            <a className="ghostBtn">Tanıtım Filmi</a>
          </div>
        </motion.div>

        <motion.div
          className="heroArtwork"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 3.15, duration: 1, ease: "easeOut" }}
        >
          <div className="orbit orbitA"></div>
          <div className="orbit orbitB"></div>
          <div className="orbit orbitC"></div>
          <div className="pulseCore"></div>
          <img className="mainLogo" src="/mether-logo.png" alt="METHER" />
          <span className="spark sparkOne"></span>
          <span className="spark sparkTwo"></span>
          <span className="spark sparkThree"></span>
        </motion.div>
      </section>

      <div className="bottomHint">
        <span></span>
        Fiber • AI • Digital Infrastructure
      </div>
    </main>
  );
}
