"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { HiChevronDown, HiXMark } from "react-icons/hi2";

import type { SiteNavItem } from "@/shared/config/siteNav";

type SiteMenuButtonProps = Readonly<{
  nav: readonly SiteNavItem[];
  menuOpenLabel: string;
  menuCloseLabel: string;
  navLabel: string;
  allLabels?: Readonly<Record<string, string>>;
  /** @deprecated unused — kept for call-site compatibility during wiring */
  allPrefix?: string;
}>;

export function SiteMenuButton({
  nav,
  menuOpenLabel,
  menuCloseLabel,
  navLabel,
  allLabels = {},
}: SiteMenuButtonProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative flex h-full items-center">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? menuCloseLabel : menuOpenLabel}
        className="inline-flex size-[44px] shrink-0 items-center justify-center rounded-full border border-[#D5D8D8] bg-white text-ink shadow-[0_1px_2px_rgba(17,18,19,0.04)] transition-[border-color,transform] duration-[180ms] hover:border-ink/25 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <HiXMark
            className="size-[18px] transition-transform duration-[180ms] motion-reduce:transition-none"
            aria-hidden
          />
        ) : (
          <span className="flex w-[14px] flex-col gap-[5px]" aria-hidden>
            <span className="block h-[1.5px] w-full rounded-full bg-ink" />
            <span className="block h-[1.5px] w-full rounded-full bg-ink" />
          </span>
        )}
      </button>

      {open ? (
        <nav
          id={menuId}
          aria-label={navLabel}
          className="absolute top-[calc(100%+10px)] right-0 z-50 w-[min(300px,calc(100vw-1.5rem))] max-h-[min(75vh,560px)] animate-[fadeSlide_220ms_cubic-bezier(0.2,0.8,0.2,1)] overflow-y-auto overscroll-contain rounded-2xl border border-border/70 bg-white p-2 shadow-[0_18px_40px_rgba(17,18,19,0.14)] motion-reduce:animate-none"
        >
          <ul className="m-0 list-none p-0">
            {nav.map((item) => {
              const children =
                "children" in item && item.children ? item.children : null;
              if (!children?.length) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 text-[14px] font-medium text-ink no-underline hover:bg-sky-top/50"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const isExpanded = expanded === item.href;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[14px] font-medium text-ink hover:bg-sky-top/50"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpanded((current) =>
                        current === item.href ? null : item.href,
                      )
                    }
                  >
                    {item.label}
                    <HiChevronDown
                      className={`size-4 opacity-70 transition-transform duration-[180ms] motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {isExpanded ? (
                    <ul className="m-0 list-none pb-1 pl-2">
                      <li>
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-[13px] font-semibold text-ink no-underline hover:bg-sky-top/40"
                          onClick={() => setOpen(false)}
                        >
                          {allLabels[item.href] ?? item.label}
                        </Link>
                      </li>
                      {children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-[13px] text-ink no-underline hover:bg-sky-top/40"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
