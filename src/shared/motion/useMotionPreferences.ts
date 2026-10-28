"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import type { MotionViewport } from "@/shared/motion/motionTokens";

type MotionPreferences = Readonly<{
  reduceMotion: boolean;
  coarsePointer: boolean;
  viewport: MotionViewport;
  /** Desktop fine-pointer + motion allowed — parallax / depth effects. */
  allowDepth: boolean;
  /** Entrances with translate/scale allowed. */
  allowRevealMotion: boolean;
}>;

/**
 * Reduced-motion + pointer/viewport guards for feature-scoped animation.
 * Starts conservative on the server (desktop, no coarse) then syncs on mount.
 */
export function useMotionPreferences(): MotionPreferences {
  const reduceMotion = Boolean(useReducedMotion());
  const [coarsePointer, setCoarsePointer] = useState(false);
  const [viewport, setViewport] = useState<MotionViewport>("desktop");

  useEffect(() => {
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const narrowQuery = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setCoarsePointer(coarseQuery.matches);
      setViewport(narrowQuery.matches ? "mobile" : "desktop");
    };
    sync();
    coarseQuery.addEventListener("change", sync);
    narrowQuery.addEventListener("change", sync);
    return () => {
      coarseQuery.removeEventListener("change", sync);
      narrowQuery.removeEventListener("change", sync);
    };
  }, []);

  return {
    reduceMotion,
    coarsePointer,
    viewport,
    allowDepth: !reduceMotion && !coarsePointer && viewport === "desktop",
    allowRevealMotion: !reduceMotion,
  };
}
