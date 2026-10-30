"use client";
import { useState } from "react";
import { LuChevronDown, LuArrowUpRight } from "react-icons/lu";
import { AnimatePresence, motion } from "motion/react";
import { Photo } from "@/features/paintPro/ui/Photo";
import { SectionMotion } from "@/features/paintPro/ui/SectionMotion";
import { copy, faqs, image } from "@/features/paintPro/model/content";

export function FaqFooterSection() {
  const [open, setOpen] = useState(0);
  return (
    <SectionMotion id="faqs" className="s8">
      <div className="faq-grid site-container spacious">
        <div className="faq-intro" data-reveal>
          <span className="small-line" />
          <h2>
            {copy.faq.headingStart}
            <br />
            {copy.faq.headingAccent}
          </h2>
          <p>{copy.faq.lead}</p>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map((faq, i) => (
            <div
              className={`faq-item ${open === i ? "faq-open" : ""}`}
              key={faq.q}
            >
              <button
                aria-expanded={open === i}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                <LuChevronDown className="faq-chevron" size={21} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-a-${i}`}
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-statement site-container" data-reveal>
        <h2>
          {copy.faq.statementStart} <em>{copy.faq.statementAccent}</em>
        </h2>
      </div>
      <footer id="contact" className="footer-nav site-container">
        <small>
          © 2026 {copy.brand}. {copy.faq.copyright}
        </small>
        <nav aria-label="Navigation pied de page">
          <a href="#home">{copy.nav.home}</a>
          <a href="#services">{copy.nav.services}</a>
          <a href="#projects">{copy.nav.work}</a>
          <a href="#faqs">{copy.nav.faq}</a>
          <a href="#why-us">{copy.nav.about}</a>
        </nav>
        <a href="#home" className="back-top" aria-label={copy.faq.backToTop}>
          {copy.faq.backToTop} <LuArrowUpRight size={17} />
        </a>
      </footer>
      <div className="footer-image">
        <Photo
          src={image("project-exterior")}
          alt="Façade modernisée — inspiration"
          sizes="100vw"
        />
        <div className="footer-image-shade" />
        <strong>{copy.brand}</strong>
      </div>
    </SectionMotion>
  );
}
