"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  projectGalleryCopy,
  projectGalleryItems,
} from "@/features/projectGallery/model/projectGalleryContent";
import type { ProjectGalleryItem } from "@/features/projectGallery/model/projectGalleryTypes";
import { ProjectGalleryCard } from "@/features/projectGallery/ui/ProjectGalleryCard";
import { Reveal } from "@/shared/motion/Reveal";

type ProjectGallerySectionProps = {
  projects?: readonly ProjectGalleryItem[];
  headingBefore?: string;
  headingAccent?: string;
  headingAfter?: string;
  description?: string;
  eyebrow?: string;
  previousLabel?: string;
  nextLabel?: string;
  viewLabel?: string;
  regionAria?: string;
  disclosure?: string;
  className?: string;
};

const getScrollBehavior = (): ScrollBehavior =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

export function ProjectGallerySection({
  projects = projectGalleryItems,
  headingBefore = projectGalleryCopy.headingBefore,
  headingAccent = projectGalleryCopy.headingAccent,
  headingAfter = projectGalleryCopy.headingAfter,
  description = projectGalleryCopy.description,
  eyebrow = projectGalleryCopy.eyebrow,
  previousLabel = "Previous project",
  nextLabel = "Next project",
  viewLabel = "View project ↗",
  regionAria = "Featured renovation projects. Scroll horizontally to explore.",
  disclosure,
  className,
}: ProjectGallerySectionProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const initialized = useRef(false);

  const moveTo = useCallback(
    (index: number, behavior: ScrollBehavior = getScrollBehavior()) => {
      const gallery = galleryRef.current;
      const card = cardRefs.current[index];
      if (!gallery || !card) return;
      const left =
        card.offsetLeft + card.clientWidth / 2 - gallery.clientWidth / 2;
      gallery.scrollTo({ left: Math.max(left, 0), behavior });
      setActiveIndex(index);
    },
    [],
  );

  useEffect(() => {
    if (initialized.current || !galleryRef.current || !projects.length) return;
    initialized.current = true;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const index = desktop ? Math.min(2, projects.length - 1) : 0;
    requestAnimationFrame(() => moveTo(index, "auto"));
  }, [moveTo, projects.length]);

  const handleScroll = useCallback(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const center = gallery.scrollLeft + gallery.clientWidth / 2;
    let nearest = 0;
    let distance = Number.POSITIVE_INFINITY;
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const diff = Math.abs(card.offsetLeft + card.clientWidth / 2 - center);
      if (diff < distance) {
        distance = diff;
        nearest = index;
      }
    });
    setActiveIndex(nearest);
  }, []);

  if (projects.length === 0) return null;

  return (
    <section
      aria-labelledby="project-gallery-heading"
      className={[
        "relative isolate overflow-hidden bg-[#FBFAF8] py-[65px] pb-14 font-sans text-[#111B19] max-[1023px]:pt-[50px] max-[639px]:py-[42px] max-[639px]:pb-[52px]",
        className ?? "",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute top-0 right-[-18px] -z-[1] h-[305px] w-[min(49vw,815px)] bg-[url('/projects-gallery/svg/architectural-blueprint.svg')] bg-contain bg-center bg-no-repeat opacity-25 max-[1023px]:top-10 max-[1023px]:w-[65vw] max-[1023px]:opacity-[0.17] max-[639px]:top-0.5 max-[639px]:right-[-33%] max-[639px]:w-[110vw] max-[639px]:opacity-[0.13]"
        aria-hidden
      />

      <header className="relative z-[1] mx-auto mb-10 w-[min(1360px,calc(100%-104px))] text-center max-[1023px]:mb-8 max-[1023px]:w-[min(680px,calc(100%-48px))] max-[639px]:mb-7 max-[639px]:w-[calc(100%-36px)]">
        <Reveal>
          <p className="mb-5 flex items-center justify-center gap-[14px] text-[11px] leading-none font-bold tracking-[0.18em] text-[#B99561] uppercase max-[639px]:mb-4 max-[639px]:gap-2.5 max-[639px]:tracking-[0.14em]">
            <span
              className="inline-block h-px w-10 bg-[#B99561]/70 max-[639px]:w-7"
              aria-hidden
            />
            {eyebrow}
            <span
              className="inline-block h-px w-10 bg-[#B99561]/70 max-[639px]:w-7"
              aria-hidden
            />
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            id="project-gallery-heading"
            className="mx-auto m-0 max-w-[880px] text-[clamp(39px,3.4vw,56px)] leading-[1.06] font-medium tracking-[-0.055em] text-balance max-[1023px]:text-[clamp(38px,5.5vw,54px)] max-[639px]:max-w-[380px] max-[639px]:text-[clamp(32px,8.4vw,43px)] max-[639px]:leading-[1.1]"
          >
            <span className="block">{headingBefore}</span>
            <span className="block">
              <span className="text-[#B99561]">{headingAccent}</span>{" "}
              {headingAfter}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-[22px] mb-0 max-w-[625px] text-[clamp(13px,1.05vw,16px)] leading-[1.5] text-[#656667] max-[1023px]:mt-[15px] max-[1023px]:max-w-[530px] max-[639px]:max-w-[365px] max-[639px]:text-sm max-[639px]:leading-[1.55]">
            {description}
          </p>
        </Reveal>
        {disclosure ? (
          <p className="mx-auto mt-3 mb-0 max-w-[625px] text-[12px] leading-[1.4] text-[#8A8B8C]">
            {disclosure}
          </p>
        ) : null}
      </header>

      <Reveal variant="card">
      <div
        ref={galleryRef}
        className="mt-0 w-full overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-proximity [scroll-padding-inline:9vw] touch-pan-x focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#B99561] motion-reduce:scroll-auto"
        onScroll={handleScroll}
        role="region"
        aria-label={regionAria}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            moveTo(Math.min(activeIndex + 1, projects.length - 1));
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveTo(Math.max(activeIndex - 1, 0));
          }
        }}
      >
        <div className="flex w-max min-h-[605px] items-start gap-[25px] px-[max(0px,calc((100vw-1672px)/2))] pb-6 max-[1023px]:min-h-[560px] max-[1023px]:gap-[18px] max-[1023px]:px-6 max-[639px]:min-h-[455px] max-[639px]:gap-3.5 max-[639px]:px-[18px] max-[639px]:pb-[18px]">
          {projects.map((project, index) => (
            <ProjectGalleryCard
              key={project.id}
              project={project}
              index={index}
              viewLabel={viewLabel}
              cardRef={(element) => {
                cardRefs.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>
      </Reveal>

      {projects.length > 1 ? (
        <nav
          className="mt-1 hidden items-center justify-center gap-[22px] max-[1023px]:flex max-[639px]:mt-3"
          aria-label={regionAria}
        >
          <button
            type="button"
            onClick={() => moveTo(Math.max(activeIndex - 1, 0))}
            disabled={activeIndex === 0}
            aria-label={previousLabel}
            className="flex size-[42px] items-center justify-center rounded-full border border-[#D7C8B2] bg-white text-[22px] text-[#22332C] disabled:cursor-not-allowed disabled:opacity-[0.28]"
          >
            ←
          </button>
          <span
            className="text-xs tracking-[0.12em] text-[#777]"
            aria-live="polite"
          >
            {activeIndex + 1} / {projects.length}
          </span>
          <button
            type="button"
            onClick={() =>
              moveTo(Math.min(activeIndex + 1, projects.length - 1))
            }
            disabled={activeIndex === projects.length - 1}
            aria-label={nextLabel}
            className="flex size-[42px] items-center justify-center rounded-full border border-[#D7C8B2] bg-white text-[22px] text-[#22332C] disabled:cursor-not-allowed disabled:opacity-[0.28]"
          >
            →
          </button>
        </nav>
      ) : null}
    </section>
  );
}
