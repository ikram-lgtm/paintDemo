"use client";

import { HiArrowDown } from "react-icons/hi2";

type HeroScrollCueProps = Readonly<{
  targetId: string;
  ariaLabel: string;
}>;

export function HeroScrollCue({ targetId, ariaLabel }: HeroScrollCueProps) {
  return (
    <a
      href={`#${targetId}`}
      aria-label={ariaLabel}
      className="inline-flex size-full items-center justify-center rounded-full bg-white text-ink shadow-[0_10px_24px_rgba(17,18,19,0.1)] no-underline transition-transform hover:translate-y-0.5"
      onClick={(event) => {
        const target = document.getElementById(targetId);
        if (!target) {
          return;
        }
        event.preventDefault();
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }}
    >
      <HiArrowDown className="size-5" aria-hidden />
    </a>
  );
}
