"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { durationFor, motionTokens } from "@/shared/motion/motionTokens";
import { useMotionPreferences } from "@/shared/motion/useMotionPreferences";

type HeroMotionCardProps = {
  children: ReactNode;
};

export function HeroMotionCard({ children }: HeroMotionCardProps) {
  const { allowRevealMotion, viewport } = useMotionPreferences();

  if (!allowRevealMotion) {
    return <div className="h-full w-full">{children}</div>;
  }

  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0.94, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: durationFor("reveal", viewport),
        ease: motionTokens.ease.out,
        delay: 0.35,
      }}
    >
      {children}
    </motion.div>
  );
}
