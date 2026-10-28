"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { GalleryImage } from "@/features/galleryNewsletter/model/galleryNewsletterTypes";

type GalleryMobileSliderProps = Readonly<{
  items: readonly GalleryImage[];
  regionAria: string;
  previousLabel: string;
  nextLabel: string;
}>;

/** Wider than common phone viewports so the mosaic peeks on the right. */
const STAGE_WIDTH_PX = 1000;
/**
 * Desktop collage uses ~668/1536, but tiles only occupy ~23.7%–98.5% vertically.
 * Crop to that band so mobile shows two dense rows without empty sky.
 */
const CONTENT_TOP = 0.22;
const CONTENT_BOTTOM = 0.995;
const CONTENT_SPAN = CONTENT_BOTTOM - CONTENT_TOP;
/** Height as fraction of stage width after crop (~0.435 * span). */
const STAGE_HEIGHT_RATIO = (668 / 1536) * CONTENT_SPAN;
const SNAP_STOPS = 3;

const getScrollBehavior = (): ScrollBehavior =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

function parsePct(value: string): number {
  return Number.parseFloat(value) / 100;
}

function snapIndexFromScroll(scrollLeft: number, maxScroll: number): number {
  if (maxScroll <= 0) return 0;
  const step = maxScroll / (SNAP_STOPS - 1);
  return Math.min(
    SNAP_STOPS - 1,
    Math.max(0, Math.round(scrollLeft / step)),
  );
}

type MosaicPlacement = Readonly<{
  id: string;
  src: string;
  alt: string;
  left: string;
  top: string;
  width: string;
  height: string;
  zIndex?: number;
}>;

function toMobilePlacement(item: GalleryImage): MosaicPlacement {
  const top = (parsePct(item.top) - CONTENT_TOP) / CONTENT_SPAN;
  const height = parsePct(item.heightPct) / CONTENT_SPAN;
  const placement: MosaicPlacement = {
    id: item.id,
    src: item.src,
    alt: item.alt,
    left: item.left,
    top: `${(top * 100).toFixed(2)}%`,
    width: item.widthPct,
    height: `${(height * 100).toFixed(2)}%`,
  };
  if (typeof item.zIndex === "number") {
    return { ...placement, zIndex: item.zIndex };
  }
  return placement;
}

export function GalleryMobileSlider({
  items,
  regionAria,
  previousLabel,
  nextLabel,
}: GalleryMobileSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStop, setActiveStop] = useState(0);
  const placements = items.map(toMobilePlacement);

  const scrollToStop = useCallback(
    (stop: number, behavior: ScrollBehavior = getScrollBehavior()) => {
      const track = trackRef.current;
      if (!track) return;
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const next = Math.min(SNAP_STOPS - 1, Math.max(0, stop));
      const left = (maxScroll / (SNAP_STOPS - 1)) * next;
      track.scrollTo({ left, behavior });
      setActiveStop(next);
    },
    [],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      setActiveStop(snapIndexFromScroll(track.scrollLeft, maxScroll));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  if (placements.length === 0) return null;

  const stageHeight = Math.round(STAGE_WIDTH_PX * STAGE_HEIGHT_RATIO);

  return (
    <div className="relative z-[2]">
      <div
        ref={trackRef}
        className="w-full overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x motion-reduce:scroll-auto"
        role="region"
        aria-label={regionAria}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollToStop(activeStop + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollToStop(activeStop - 1);
          }
        }}
      >
        <div
          className="relative ml-3 mr-10 shrink-0 sm:ml-4"
          style={{
            width: STAGE_WIDTH_PX,
            height: stageHeight,
          }}
        >
          {placements.map((item) => (
            <figure
              key={item.id}
              className="absolute m-0 overflow-hidden rounded-[14px] bg-[#F0EEE8] shadow-[0_9px_18px_rgba(32,32,26,0.09)]"
              style={
                {
                  left: item.left,
                  top: item.top,
                  width: item.width,
                  height: item.height,
                  zIndex: item.zIndex,
                } as CSSProperties
              }
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={`${Math.round(STAGE_WIDTH_PX * 0.4)}px`}
                quality={80}
                className="object-cover"
                priority={item.id === "featured-living-room"}
              />
            </figure>
          ))}
        </div>
      </div>

      <nav
        className="mt-4 flex items-center justify-center gap-5 px-4"
        aria-label={regionAria}
      >
        <button
          type="button"
          onClick={() => scrollToStop(activeStop - 1)}
          disabled={activeStop === 0}
          aria-label={previousLabel}
          className="flex size-11 items-center justify-center rounded-full border border-[#D7C8B2] bg-white text-[22px] text-[#22332C] disabled:cursor-not-allowed disabled:opacity-[0.28]"
        >
          ←
        </button>
        <span
          className="min-w-[3.5rem] text-center text-xs tracking-[0.12em] text-[#777]"
          aria-live="polite"
        >
          {activeStop + 1} / {SNAP_STOPS}
        </span>
        <button
          type="button"
          onClick={() => scrollToStop(activeStop + 1)}
          disabled={activeStop === SNAP_STOPS - 1}
          aria-label={nextLabel}
          className="flex size-11 items-center justify-center rounded-full border border-[#D7C8B2] bg-white text-[22px] text-[#22332C] disabled:cursor-not-allowed disabled:opacity-[0.28]"
        >
          →
        </button>
      </nav>
    </div>
  );
}
