"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Photo } from "@/features/paintPro/ui/Photo";
import { SectionMotion } from "@/features/paintPro/ui/SectionMotion";
import { copy, image } from "@/features/paintPro/model/content";

export function HeroSection() {
  return (
    <SectionMotion id="home" className="s1 section-shell" reveal={false}>
      <header className="topbar">
        <a href="#home" className="wordmark" aria-label={`${copy.brand} accueil`}>
          <strong>{copy.brand}</strong>
          <span>Peinture</span>
        </a>
        <nav className="nav-links" aria-label="Navigation principale">
          <a href="#services">{copy.nav.services}</a>
          <a href="#why-us">{copy.nav.about}</a>
          <a href="#projects">{copy.nav.projects}</a>
          <Link href="/free-quote">{copy.nav.contact}</Link>
        </nav>
        <span className="nav-locale" aria-label="Langue actuelle français">
          {copy.localeLabel}
        </span>
      </header>
      <div className="hero-stage">
        <Photo
          src={image("hero-painters")}
          alt={copy.hero.imageAlt}
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <motion.div
          className="hero-center"
          initial={{ opacity: 0, y: 65 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1>
            {copy.hero.titleLine1}
            <br />
            {copy.hero.titleLine2}
          </h1>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="pill pill-dark"
          >
            {copy.hero.cta}
          </motion.a>
        </motion.div>
        <div className="hero-inset" aria-label={copy.hero.insetAlt}>
          <Photo
            src={image("finished-living")}
            alt={copy.hero.insetAlt}
            sizes="280px"
          />
        </div>
      </div>
    </SectionMotion>
  );
}
