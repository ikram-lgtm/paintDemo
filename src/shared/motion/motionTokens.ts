/** Shared motion vocabulary from ANIMATION_DESIGN.md §02. Times in seconds. */

export const motionTokens = {
  duration: {
    instant: { desktop: 0.12, mobile: 0.1 },
    micro: { desktop: 0.18, mobile: 0.16 },
    ui: { desktop: 0.26, mobile: 0.22 },
    revealFast: { desktop: 0.48, mobile: 0.36 },
    reveal: { desktop: 0.64, mobile: 0.44 },
    revealLarge: { desktop: 0.82, mobile: 0.55 },
    imageSwitch: { desktop: 0.32, mobile: 0.26 },
    reduced: 0.12,
  },
  ease: {
    out: [0.22, 1, 0.36, 1] as const,
    ui: [0.2, 0.8, 0.2, 1] as const,
    soft: [0.16, 1, 0.3, 1] as const,
  },
  distance: {
    textY: { desktop: 18, mobile: 10 },
    cardY: { desktop: 24, mobile: 10 },
  },
  stagger: {
    text: { desktop: 0.075, mobile: 0.05 },
    card: { desktop: 0.105, mobile: 0.07 },
  },
  /** In-view amount before reveal fires (~15–25%). */
  amount: 0.2,
} as const;

export type MotionViewport = "desktop" | "mobile";

export function durationFor(
  key: keyof typeof motionTokens.duration,
  viewport: MotionViewport,
): number {
  const value = motionTokens.duration[key];
  if (typeof value === "number") return value;
  return value[viewport];
}
