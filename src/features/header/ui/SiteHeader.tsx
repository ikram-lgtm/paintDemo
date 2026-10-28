"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

import { useHeaderScrollState } from "@/features/header/hooks/useHeaderScrollState";
import { SiteMenuButton } from "@/features/header/ui/SiteMenuButton";
import type { SiteNavItem } from "@/shared/config/siteNav";
import type { HeaderUiCopy } from "@/features/header/model/headerContent";
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher";

type SiteHeaderProps = Readonly<{
  content: HeaderUiCopy;
  nav: readonly SiteNavItem[];
  switcherLabel: string;
}>;

const HEADER_EASE = "cubic-bezier(0.135, 0.9, 0.15, 1)";
const HEADER_DURATION = "900ms";

export function SiteHeader({ content, nav, switcherLabel }: SiteHeaderProps) {
  const { isScrolled, enableTransition } = useHeaderScrollState();
  const { brand, callbackCta, locale } = content;

  const morphTransition = enableTransition
    ? `width ${HEADER_DURATION} ${HEADER_EASE}, border-radius ${HEADER_DURATION} ${HEADER_EASE}, background-color ${HEADER_DURATION} ${HEADER_EASE}, border-color ${HEADER_DURATION} ${HEADER_EASE}, color ${HEADER_DURATION} ${HEADER_EASE}, padding ${HEADER_DURATION} ${HEADER_EASE}`
    : "none";

  const blurTransition = enableTransition
    ? `opacity ${HEADER_DURATION} ${HEADER_EASE}`
    : "none";

  const scopeStyle = {
    "--header-unit": "clamp(0.75rem, 0.65rem + 0.35vw, 1rem)",
    "--header-ink": isScrolled ? "#ffffff" : "var(--ink)",
    "--header-glass": "rgba(16, 41, 35, 0.82)",
    "--header-border-scrolled": "rgba(255, 255, 255, 0.2)",
  } as CSSProperties;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 motion-reduce:[&_*]:!transition-none"
      style={scopeStyle}
      data-scrolled={isScrolled ? "true" : "false"}
    >
      <header className="pointer-events-none relative mx-auto w-full max-w-[1600px] px-[clamp(10px,3.2vw,28px)] pt-[clamp(8px,1.2vw,16px)]">
        <div
          className={[
            "pointer-events-auto relative z-10 mx-auto grid max-w-full items-center gap-x-3",
            "border border-solid sm:gap-x-4",
            isScrolled
              ? [
                  "w-[min(100%,92.5%)] rounded-full",
                  "border-[var(--header-border-scrolled)] bg-[var(--header-glass)]",
                  "px-[clamp(14px,3.5vw,28px)] py-[calc(var(--header-unit)*0.75)]",
                ].join(" ")
              : [
                  "w-full rounded-none border-transparent bg-transparent",
                  "px-[clamp(6px,1.5vw,12px)] py-[calc(var(--header-unit)*0.85)]",
                ].join(" "),
          ].join(" ")}
          style={{
            gridTemplateColumns: "auto minmax(0, 1fr) auto",
            color: "var(--header-ink)",
            transition: morphTransition,
          }}
        >
          {/* Blur layer — opacity only (all breakpoints) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
            style={{
              opacity: isScrolled ? 1 : 0,
              transition: blurTransition,
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          />

          <Link
            href={content.homeHref}
            className="relative z-10 flex min-w-0 shrink items-center no-underline"
            style={{ color: "var(--header-ink)" }}
          >
            <span className="truncate text-[15px] leading-none font-extrabold tracking-[0.04em] uppercase sm:text-[17px]">
              {brand.name}
            </span>
          </Link>

          <nav className="relative z-10 hidden min-w-0" aria-hidden />

          <div className="relative z-10 flex shrink-0 items-center gap-2 justify-self-end sm:gap-2.5">
            <LanguageSwitcher locale={locale} label={switcherLabel} />
            <SiteMenuButton
              nav={nav}
              menuOpenLabel={content.menuOpen}
              menuCloseLabel={content.menuClose}
              navLabel={content.navLabel}
              allLabels={content.allNavLabels}
            />
            <Link
              href={callbackCta.href}
              className={[
                "hidden h-[44px] max-w-[220px] items-center gap-2 rounded-full px-5 text-[13px] font-semibold no-underline min-[1200px]:inline-flex",
                isScrolled
                  ? "border border-white/30 bg-white/15 text-white"
                  : "bg-button-ink text-white",
              ].join(" ")}
            >
              <span className="min-w-0 truncate">{callbackCta.label}</span>
              <HiArrowUpRight
                className="size-3.5 shrink-0 opacity-90"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
