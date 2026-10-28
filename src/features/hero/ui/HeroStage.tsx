"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { HERO_REF } from "@/features/hero/model/heroLayout";

type HeroStageProps = {
  children: ReactNode;
};

/**
 * Locks the hero to the 1536×1024 reference and scales it to the viewport width
 * so card / house / metrics positions stay identical on every screen.
 */
export function HeroStage({ children }: HeroStageProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const measure = useCallback(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }
    const next = Math.min(1, host.clientWidth / HERO_REF.width);
    setScale(next > 0 ? next : 1);
  }, []);

  useEffect(() => {
    measure();
    const host = hostRef.current;
    if (!host) {
      return;
    }
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <div
      ref={hostRef}
      className="relative mx-auto w-full max-w-[1536px] overflow-hidden"
      style={{ height: HERO_REF.height * scale }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left will-change-transform"
        style={{
          width: HERO_REF.width,
          height: HERO_REF.height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
