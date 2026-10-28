"use client";

import { useCallback, useRef } from "react";

type UseEditorialServicesScrollArgs = Readonly<{
  count: number;
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onPassFive?: () => void;
  enabled: boolean;
}>;

/**
 * Selection helpers for editorial services.
 * Scroll-pinning removed per ANIMATION_DESIGN (no hijacking / pin).
 * Click/keyboard selection remains the source of truth.
 */
export function useEditorialServicesScroll({
  count,
  activeIndex,
  onIndexChange,
  onPassFive,
  enabled,
}: UseEditorialServicesScrollArgs) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);

  void activeIndex;
  void enabled;

  const scrollToIndex = useCallback(
    (index: number) => {
      const clamped = Math.min(count - 1, Math.max(0, index));
      onIndexChange(clamped);
      if (clamped > 4) onPassFive?.();
    },
    [count, onIndexChange, onPassFive],
  );

  const setRowRef = useCallback((index: number, el: HTMLElement | null) => {
    rowRefs.current[index] = el;
  }, []);

  return { pinRef, trackRef, scrollToIndex, setRowRef };
}
