"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import {
  durationFor,
  motionTokens,
} from "@/shared/motion/motionTokens";
import { useMotionPreferences } from "@/shared/motion/useMotionPreferences";

type RevealProps = Readonly<{
  children: ReactNode;
  className?: string;
  /** Delay in seconds after the element enters view. */
  delay?: number;
  variant?: "text" | "card" | "large";
}>;

/**
 * One-time in-view reveal. Starts at a subtle, still-readable state
 * (never opacity 0) so SSR / no-JS content remains usable.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "text",
}: RevealProps) {
  const { allowRevealMotion, viewport } = useMotionPreferences();

  if (!allowRevealMotion) {
    return <div className={className}>{children}</div>;
  }

  const y =
    variant === "text"
      ? motionTokens.distance.textY[viewport]
      : motionTokens.distance.cardY[viewport];

  const duration =
    variant === "large"
      ? durationFor("revealLarge", viewport)
      : variant === "card"
        ? durationFor("reveal", viewport)
        : durationFor("revealFast", viewport);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.92, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: motionTokens.amount }}
      transition={{
        duration,
        delay: Math.min(delay, 0.38),
        ease: motionTokens.ease.out,
      }}
    >
      {children}
    </motion.div>
  );
}
