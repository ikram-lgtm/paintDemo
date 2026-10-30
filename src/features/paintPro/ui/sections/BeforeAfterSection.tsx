"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionMotion } from "@/features/paintPro/ui/SectionMotion";
import { Photo } from "@/features/paintPro/ui/Photo";
import { Icon } from "@/features/paintPro/ui/Icon";
import { copy, image } from "@/features/paintPro/model/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const stage = useRef<HTMLDivElement>(null);
  const side = copy.beforeAfter.side;

  useGSAP(() => {
    const element = stage.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1000px)", () => {
      const photo = element.querySelector(".compare-images");
      if (!photo) return;
      gsap.fromTo(
        photo,
        { scale: 0.92 },
        {
          scale: 1.02,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "+=480",
            scrub: 1.1,
          },
        },
      );
      const cards = element.querySelectorAll(".compare-mini");
      cards?.forEach((card, idx) =>
        gsap.fromTo(
          card,
          { y: idx % 2 ? 45 : -35 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 55%",
              scrub: 0.8,
            },
          },
        ),
      );
    });
    mm.add("(min-width: 1200px)", () => {
      ScrollTrigger.create({
        trigger: element,
        start: "center center",
        end: "+=300",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    });
    return () => mm.revert();
  }, []);

  const mini = (entry: (typeof side)[number]) => (
    <a href="#services" className="compare-mini" key={entry.title}>
      <div className="compare-mini-title">
        <Icon name={entry.icon} />
        <strong>{entry.title}</strong>
      </div>
      <div className="compare-mini-photo">
        <Photo src={image(entry.source)} alt={entry.title} sizes="300px" />
      </div>
    </a>
  );

  return (
    <SectionMotion id="transformations" className="s3 site-container spacious">
      <div className="centered-header" data-reveal>
        <span className="tag">{copy.beforeAfter.tag}</span>
        <h2>
          {copy.beforeAfter.headingStart}
          <br />
          <em>{copy.beforeAfter.headingAccent}</em>
        </h2>
      </div>
      <div className="s3-benefits" data-reveal>
        {copy.beforeAfter.benefits.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div className="comparison-layout" ref={stage}>
        <div className="mini-column" data-reveal>
          {side.slice(0, 2).map(mini)}
        </div>
        <div className="compare-main" data-reveal>
          <div className="compare-images">
            <Photo
              src={image("house-after")}
              alt="Façade modernisée — inspiration"
              sizes="(max-width: 1000px) 90vw, 55vw"
            />
            <div
              className="compare-before"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Photo
                src={image("house-before")}
                alt="Façade avant travaux — inspiration"
                sizes="(max-width: 1000px) 90vw, 55vw"
              />
            </div>
            <div className="compare-divider" style={{ left: `${position}%` }}>
              <span aria-hidden>‹ ›</span>
            </div>
            <span className="compare-caption before-caption">
              {copy.beforeAfter.before}
            </span>
            <span className="compare-caption after-caption">
              {copy.beforeAfter.after}
            </span>
          </div>
          <label className="sr-only" htmlFor="before-after-slider">
            {copy.beforeAfter.sliderLabel}
          </label>
          <input
            id="before-after-slider"
            aria-valuetext={`${position}% ${copy.beforeAfter.before}`}
            className="compare-range"
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
          />
        </div>
        <div className="mini-column" data-reveal>
          {side.slice(2).map(mini)}
        </div>
      </div>
    </SectionMotion>
  );
}
