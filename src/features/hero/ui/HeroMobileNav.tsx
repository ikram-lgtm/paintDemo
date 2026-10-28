"use client";

import Link from "next/link";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

import { siteNav } from "@/shared/config/siteNav";

export function HeroMobileNav() {
  const [openHref, setOpenHref] = useState<string | null>(null);

  return (
    <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {siteNav.map((item) => {
          const hasChildren =
            "children" in item && item.children && item.children.length > 0;
          if (!hasChildren) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-border/80 bg-white/90 px-3 py-2 text-[12px] font-medium text-ink no-underline"
              >
                {item.label}
              </Link>
            );
          }
          return (
            <button
              key={item.href}
              type="button"
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border/80 bg-white/90 px-3 py-2 text-[12px] font-medium text-ink"
              aria-expanded={openHref === item.href}
              onClick={() =>
                setOpenHref((current) =>
                  current === item.href ? null : item.href,
                )
              }
            >
              {item.label}
              <HiChevronDown className="size-3.5" aria-hidden />
            </button>
          );
        })}
      </div>

      {siteNav.map((item) => {
        if (!("children" in item) || !item.children || openHref !== item.href) {
          return null;
        }
        return (
          <ul
            key={`${item.href}-panel`}
            className="m-0 list-none rounded-2xl border border-border/70 bg-white p-2 shadow-sm"
          >
            <li>
              <Link
                href={item.href}
                className="block rounded-xl px-3 py-2 text-[12px] font-semibold text-ink no-underline"
              >
                All {item.label}
              </Link>
            </li>
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block rounded-xl px-3 py-2 text-[12px] font-medium text-ink no-underline hover:bg-sky-top/40"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        );
      })}
    </nav>
  );
}
