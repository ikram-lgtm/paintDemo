"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { useHeroParallax } from "@/features/hero/hooks/useHeroParallax";
import { heroLayout } from "@/features/hero/model/heroLayout";
import { durationFor, motionTokens } from "@/shared/motion/motionTokens";
import { useMotionPreferences } from "@/shared/motion/useMotionPreferences";
import { heroPaths } from "@/shared/config/tokens";

const HEADLINE_MAX_PX = 180;
const HEADLINE_MIN_PX = 22;

type HeroArtworkProps = Readonly<{
  headline: string;
  houseAlt: string;
}>;

export function HeroArtwork({ headline, houseAlt }: HeroArtworkProps) {
  const { houseY, leavesY, treelineY, enabled } = useHeroParallax();
  const { allowRevealMotion, viewport } = useMotionPreferences();
  const headlineBoxRef = useRef<HTMLDivElement>(null);
  const headlineTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const box = headlineBoxRef.current;
    const text = headlineTextRef.current;
    if (!box || !text) {
      return;
    }

    let frame = 0;

    const fit = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      frame = window.requestAnimationFrame(() => {
        const maxWidth = box.clientWidth * 0.96;
        const maxHeight = box.clientHeight * 0.96;
        if (maxWidth <= 0 || maxHeight <= 0) {
          return;
        }

        let low = HEADLINE_MIN_PX;
        let high = HEADLINE_MAX_PX;
        let best = HEADLINE_MIN_PX;

        while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          text.style.fontSize = `${mid}px`;
          const fits =
            text.scrollWidth <= maxWidth && text.scrollHeight <= maxHeight;
          if (fits) {
            best = mid;
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }

        text.style.fontSize = `${best}px`;
      });
    };

    const start = async () => {
      try {
        await document.fonts.ready;
      } catch {
        /* ignore */
      }
      fit();
    };

    void start();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    window.addEventListener("resize", fit);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", fit);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [headline]);

  const houseEntrance = allowRevealMotion
    ? {
        initial: { opacity: 0.92, y: 18, scale: 0.99 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: {
          duration: durationFor("revealLarge", viewport),
          ease: motionTokens.ease.soft,
          delay: 0.1,
        },
      }
    : {};

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={heroPaths.sky}
          alt=""
          fill
          sizes="(min-width: 1536px) 1536px, 100vw"
          className="object-cover object-top"
          aria-hidden
        />

        <motion.div
          className="absolute z-[1] hidden md:block"
          style={{
            left: 0,
            right: 0,
            top: "18%",
            height: "28%",
            y: enabled ? treelineY : 0,
          }}
          aria-hidden
        >
          <Image
            src={heroPaths.treeline}
            alt=""
            fill
            sizes="(max-width: 1536px) 100vw, 1536px"
            className="object-cover object-bottom opacity-35"
          />
        </motion.div>

        <motion.div
          className="absolute z-[3]"
          style={{
            left: heroLayout.house.left,
            top: heroLayout.house.top,
            width: heroLayout.house.width,
            height: heroLayout.house.height,
            y: enabled ? houseY : 0,
          }}
          {...houseEntrance}
        >
          <Image
            src={heroPaths.house}
            alt={houseAlt}
            width={1536}
            height={1024}
            priority
            fetchPriority="high"
            sizes="min(1536px, 100vw)"
            className="h-full w-full object-contain object-center"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 z-[4] hidden h-[28%] w-[14%] opacity-45 2xl:block"
          style={{ y: enabled ? leavesY : 0 }}
          aria-hidden
        >
          <Image
            src={heroPaths.leavesLeft}
            alt=""
            fill
            sizes="14vw"
            className="object-contain object-left-bottom"
          />
        </motion.div>

        <motion.div
          className="absolute right-0 bottom-0 z-[4] hidden h-[26%] w-[12%] opacity-35 2xl:block"
          style={{ y: enabled ? leavesY : 0 }}
          aria-hidden
        >
          <Image
            src={heroPaths.leavesRight}
            alt=""
            fill
            sizes="12vw"
            className="object-contain object-right-bottom"
          />
        </motion.div>
      </div>

      <div
        ref={headlineBoxRef}
        aria-hidden
        className="absolute inset-x-[5%] top-[10.5%] z-[2] flex h-[22%] items-center justify-center overflow-hidden select-none"
      >
        <span
          ref={headlineTextRef}
          className="block max-w-full whitespace-nowrap text-center font-extrabold tracking-[-0.04em] text-ink uppercase leading-none"
          style={{ fontSize: `${HEADLINE_MAX_PX}px` }}
        >
          {headline}
        </span>
      </div>
    </div>
  );
}
