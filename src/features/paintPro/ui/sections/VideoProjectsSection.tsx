"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(Observer);
import { LuArrowLeft, LuArrowRight, LuPlay, LuX } from "react-icons/lu";
import { SectionMotion } from "@/features/paintPro/ui/SectionMotion";
import { Photo } from "@/features/paintPro/ui/Photo";
import { copy, image, projects } from "@/features/paintPro/model/content";

export function VideoProjectsSection() {
  const [active, setActive] = useState(1);
  const [videoOpen, setVideoOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const get = (offset: number) => {
    const project =
      projects[(active + offset + projects.length) % projects.length];
    if (!project) {
      throw new Error("PaintPro project index out of range");
    }
    return project;
  };
  const move = (offset: number) =>
    setActive((a) => (a + offset + projects.length) % projects.length);
  useEffect(() => {
    if (!videoOpen && !detailOpen) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVideoOpen(false);
        setDetailOpen(false);
      }
    };
    document.addEventListener("keydown", escape);
    const currentOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", escape);
      document.body.style.overflow = currentOverflow;
    };
  }, [videoOpen, detailOpen]);
  useEffect(() => {
    if (videoOpen) videoRef.current?.play().catch(() => {});
  }, [videoOpen]);
  useEffect(() => {
    if (!carouselRef.current) return;
    const observer = Observer.create({
      target: carouselRef.current,
      type: "touch,pointer",
      lockAxis: true,
      tolerance: 35,
      preventDefault: false,
      onLeft: () => move(1),
      onRight: () => move(-1),
    });
    return () => observer.kill();
  }, [active]);

  const detailLines = copy.video.viewDetails.split("\n");

  return (
    <SectionMotion id="projects" className="s4 spacious">
      <div className="s4-cinema" data-reveal>
        <video
          className="s4-video"
          src="/media/video/cinematic-home-pan.mp4"
          poster={image("hero-painters")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <div className="s4-video-shade" />
        <button
          type="button"
          aria-label="Lire le visuel"
          className="cinema-play"
          onClick={() => setVideoOpen(true)}
        >
          <LuPlay fill="white" />
        </button>
        <div className="cinema-copy">
          <div>
            <span className="outline-tag">{copy.video.outlineTag}</span>
            <h2>
              {copy.video.cinemaHeadingStart}
              <br />
              <em>{copy.video.cinemaHeadingAccent}</em>
            </h2>
          </div>
          <p>{copy.video.cinemaLead}</p>
        </div>
      </div>
      <div className="s4-header centered-header site-container" data-reveal>
        <h2>
          {copy.video.projectsHeadingStart}{" "}
          <em>{copy.video.projectsHeadingAccent}</em>
        </h2>
        <p>{copy.video.projectsLead}</p>
        <span className="tag location-tag">{copy.video.locationTag}</span>
      </div>
      <div
        ref={carouselRef}
        className="project-carousel site-container"
        aria-label="Galerie d’inspiration"
      >
        {[get(-1), get(0), get(1)].map((project, index) => (
          <motion.article
            layout
            key={`${project.title}-${index}`}
            className={`project-card ${index === 1 ? "project-featured" : "project-small"}`}
            initial={{ opacity: 0.65, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="project-photo">
              <Photo
                src={project.image}
                alt={project.title}
                sizes={
                  index === 1
                    ? "(max-width: 800px) 80vw, 50vw"
                    : "25vw"
                }
              />
              {index === 1 && (
                <button
                  className="project-detail-button"
                  type="button"
                  onClick={() => setDetailOpen(true)}
                >
                  {detailLines[0]}
                  <br />
                  {detailLines[1]}
                </button>
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.descriptor}</p>
          </motion.article>
        ))}
      </div>
      <div className="carousel-footer site-container">
        <button aria-label="Projet précédent" onClick={() => move(-1)}>
          <LuArrowLeft />
        </button>
        <button aria-label="Projet suivant" onClick={() => move(1)}>
          <LuArrowRight />
        </button>
      </div>
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="presentation"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setVideoOpen(false);
            }}
          >
            <div
              className="media-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Lecture du visuel"
            >
              <button
                className="dialog-close"
                aria-label="Fermer"
                onClick={() => setVideoOpen(false)}
              >
                <LuX />
              </button>
              <video
                ref={videoRef}
                src="/media/video/cinematic-home-pan.mp4"
                controls
                loop
                playsInline
                poster={image("hero-painters")}
              />
              <p>{copy.video.videoNote}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {detailOpen && (
          <motion.div
            className="dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="presentation"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setDetailOpen(false);
            }}
          >
            <div
              className="project-dialog"
              role="dialog"
              aria-modal="true"
              aria-label={get(0).title}
            >
              <button
                className="dialog-close"
                aria-label="Fermer"
                onClick={() => setDetailOpen(false)}
              >
                <LuX />
              </button>
              <div className="detail-image">
                <Photo
                  src={get(0).image}
                  alt={get(0).title}
                  sizes="650px"
                />
              </div>
              <div className="detail-body">
                <span className="tag">{copy.video.serviceFocus}</span>
                <h3>{get(0).title}</h3>
                <p>
                  {get(0).descriptor}. {copy.video.detailSuffix}
                </p>
                <Link
                  className="pill pill-dark"
                  href="/free-quote"
                  onClick={() => setDetailOpen(false)}
                >
                  {copy.video.detailCta}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionMotion>
  );
}
