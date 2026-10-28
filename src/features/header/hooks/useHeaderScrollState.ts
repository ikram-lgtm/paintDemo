"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeScroll(onStoreChange: () => void) {
  const sync = () => onStoreChange();
  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("pageshow", sync);
  window.addEventListener("popstate", sync);
  return () => {
    window.removeEventListener("scroll", sync);
    window.removeEventListener("pageshow", sync);
    window.removeEventListener("popstate", sync);
  };
}

function getScrollSnapshot() {
  return Math.max(0, window.scrollY) > 0;
}

function getServerScrollSnapshot() {
  return false;
}

/**
 * Scroll flags for the pill shell.
 * isScrolled reads live scrollY on the client (no rest-state flash after hydrate).
 * enableTransition stays false until the first rAF so mid-page loads
 * paint already-scrolled with no morph animation.
 */
export function useHeaderScrollState() {
  const isScrolled = useSyncExternalStore(
    subscribeScroll,
    getScrollSnapshot,
    getServerScrollSnapshot,
  );
  const [enableTransition, setEnableTransition] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEnableTransition(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return { isScrolled, enableTransition };
}
