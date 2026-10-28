"use client";

import { useScroll, useTransform, type MotionValue } from "motion/react";
import { useSyncExternalStore } from "react";

import { useMotionPreferences } from "@/shared/motion/useMotionPreferences";

type HeroParallaxResult = Readonly<{
  houseY: MotionValue<number>;
  leavesY: MotionValue<number>;
  treelineY: MotionValue<number>;
  enabled: boolean;
}>;

/**
 * Scroll-linked 2D depth for desktop fine-pointer only (spec §04.2).
 * Hero sits at page top — map early scrollY into small layer offsets.
 */
const emptySubscribe = () => () => {};

export function useHeroParallax(): HeroParallaxResult {
  const { allowDepth } = useMotionPreferences();
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const enabled = isClient && allowDepth;
  const { scrollY } = useScroll();

  const houseY = useTransform(scrollY, [0, 700], [0, enabled ? -14 : 0]);
  const leavesY = useTransform(scrollY, [0, 700], [0, enabled ? -18 : 0]);
  const treelineY = useTransform(scrollY, [0, 700], [0, enabled ? -8 : 0]);

  return { houseY, leavesY, treelineY, enabled };
}
