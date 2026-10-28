"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useId, useMemo, useState } from "react";

import { useEditorialServicesScroll } from "@/features/editorialServices/hooks/useEditorialServicesScroll";
import {
  editorialServices,
  type EditorialService,
} from "@/features/editorialServices/model/editorialServicesContent";
import { EditorialServiceRow } from "@/features/editorialServices/ui/EditorialServiceRow";
import { durationFor, motionTokens } from "@/shared/motion/motionTokens";
import { useMotionPreferences } from "@/shared/motion/useMotionPreferences";

type EditorialServicesStageProps = {
  services?: readonly EditorialService[];
  selectAria?: string;
  viewAllLabel?: string;
  showFewerLabel?: string;
};

export function EditorialServicesStage({
  services = editorialServices,
  selectAria = "Choose a renovation service",
  viewAllLabel,
  showFewerLabel,
}: EditorialServicesStageProps) {
  const { reduceMotion, viewport } = useMotionPreferences();
  const [selectedId, setSelectedId] = useState(services[0]?.id);
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  const activeIndex = Math.max(
    0,
    services.findIndex((item) => item.id === selectedId),
  );
  const active = services[activeIndex] ?? services[0];

  const expandPastFive = useCallback(() => {
    setExpanded(true);
  }, []);

  const { pinRef, trackRef, scrollToIndex, setRowRef } =
    useEditorialServicesScroll({
      count: services.length,
      activeIndex,
      onIndexChange: (index) => {
        const next = services[index];
        if (next) setSelectedId(next.id);
      },
      onPassFive: expandPastFive,
      enabled: !reduceMotion,
    });

  const visible = useMemo(
    () => (expanded ? services : services.slice(0, 5)),
    [expanded, services],
  );

  if (!active) return null;

  const selectAt = (index: number) => {
    if (index > 4) setExpanded(true);
    scrollToIndex(index);
  };

  const switchDuration = reduceMotion
    ? 0
    : durationFor("imageSwitch", viewport);

  return (
    <div ref={trackRef} className="relative">
      <div
        ref={pinRef}
        className="relative z-[1] mt-[clamp(40px,3.7vw,58px)] grid grid-cols-1 items-stretch gap-[clamp(18px,2vw,32px)] min-[761px]:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] min-[1200px]:grid-cols-[minmax(0,1.57fr)_minmax(0,1fr)]"
      >
        <div
          className="relative isolate h-full min-h-[clamp(280px,72vw,340px)] min-w-0 overflow-hidden rounded-2xl bg-[#D5C7B5] min-[761px]:min-h-[clamp(395px,31vw,518px)]"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              className="absolute inset-0"
              initial={
                reduceMotion ? false : { opacity: 0, scale: 1.012 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={{
                duration: switchDuration,
                ease: motionTokens.ease.ui,
              }}
            >
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1200px) 57vw, 58vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="min-w-0">
          <div id={listId} className="flex flex-col" aria-label={selectAria}>
            {visible.map((service) => {
              const index = services.findIndex(
                (item) => item.id === service.id,
              );
              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    setRowRef(index, el);
                  }}
                >
                  <EditorialServiceRow
                    service={service}
                    index={index}
                    selected={active.id === service.id}
                    onSelect={() => selectAt(index)}
                  />
                </div>
              );
            })}
          </div>
          {services.length > 5 ? (
            <button
              type="button"
              className="mt-3 inline-flex min-h-11 items-center gap-2 border-0 bg-transparent px-1 font-sans text-[12px] font-semibold tracking-[0.16em] text-[#132C27] uppercase transition-opacity duration-200"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls={listId}
            >
              {expanded
                ? (showFewerLabel ?? "Show fewer services")
                : (viewAllLabel ?? `View all ${services.length} services`)}
              <span aria-hidden>{expanded ? "−" : "+"}</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
