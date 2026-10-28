"use client";

import { motion } from "motion/react";
import {
  Children,
  type ReactNode,
} from "react";

import {
  durationFor,
  motionTokens,
} from "@/shared/motion/motionTokens";
import { useMotionPreferences } from "@/shared/motion/useMotionPreferences";

type RevealGroupProps = Readonly<{
  children: ReactNode;
  className?: string;
  /** Stagger between children (seconds). Defaults to card stagger. */
  stagger?: number;
  variant?: "text" | "card";
}>;

/**
 * Staggered one-time reveal for sibling cards/rows.
 * Animates each child wrapper; outer layout/offsets stay on the parent.
 */
export function RevealGroup({
  children,
  className,
  stagger,
  variant = "card",
}: RevealGroupProps) {
  const { allowRevealMotion, viewport } = useMotionPreferences();
  const items = Children.toArray(children);
  const step =
    stagger ??
    (variant === "text"
      ? motionTokens.stagger.text[viewport]
      : motionTokens.stagger.card[viewport]);
  const y = motionTokens.distance.cardY[viewport];
  const duration = durationFor(
    variant === "text" ? "revealFast" : "reveal",
    viewport,
  );

  if (!allowRevealMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: motionTokens.amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: step,
            delayChildren: 0.04,
          },
        },
      }}
    >
      {items.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0.92, y },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration,
                ease: motionTokens.ease.out,
                // Cap last-child lag per spec maxDelayedEntry
                delay: Math.min(index * step, 0.38),
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
