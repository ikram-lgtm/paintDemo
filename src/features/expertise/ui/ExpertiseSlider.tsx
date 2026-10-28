"use client";

import {
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";

import type { ExpertiseCard as ExpertiseCardModel } from "@/features/expertise/model/expertiseData";
import { ExpertiseCard } from "@/features/expertise/ui/ExpertiseCard";

type ExpertiseSliderProps = {
  cards: readonly ExpertiseCardModel[];
  links?: Partial<Record<ExpertiseCardModel["id"], string>>;
  sliderLabel: string;
};

export function ExpertiseSlider({
  cards,
  links = {},
  sliderLabel,
}: ExpertiseSliderProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const last = cards.length - 1;

  const syncActive = useEffectEvent(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    children.forEach((child, i) => {
      const center = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncActive();
    el.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      el.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, []);

  const goTo = useCallback((index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({
      left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="-mx-[calc((100vw-100%)/2)] min-[700px]:hidden">
      <ul
        ref={scrollerRef}
        className="m-0 flex list-none snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-[max(18px,calc((100vw-100%)/2+18px))] py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={sliderLabel}
      >
        {cards.map((card, i) => {
          const href = links[card.id];
          return (
            <li
              key={card.id}
              className="w-[min(340px,calc(100vw-48px))] shrink-0 snap-center"
            >
              <ExpertiseCard
                card={card}
                {...(href ? { href } : {})}
                layout="slider"
              />
              <span className="sr-only">
                {i + 1} / {cards.length}
              </span>
            </li>
          );
        })}
      </ul>

      <div
        className="mt-5 flex items-center justify-center gap-2"
        role="tablist"
        aria-label={sliderLabel}
      >
        {cards.map((card, i) => (
          <button
            key={card.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={card.title}
            className={[
              "size-2.5 rounded-full border-0 transition-[background-color,transform] duration-200 motion-reduce:transition-none",
              i === active
                ? "scale-110 bg-[#102923]"
                : "bg-[#102923]/25 hover:bg-[#102923]/45",
            ].join(" ")}
            onClick={() => goTo(Math.min(Math.max(i, 0), last))}
          />
        ))}
      </div>
    </div>
  );
}
