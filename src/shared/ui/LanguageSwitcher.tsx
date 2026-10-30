"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import {
  localeCookieName,
  locales,
  type Locale,
} from "@/shared/i18n/config";
import { durationFor, motionTokens } from "@/shared/motion/motionTokens";
import { useMotionPreferences } from "@/shared/motion/useMotionPreferences";
import { LocaleFlag } from "@/shared/ui/LocaleFlag";

type LanguageSwitcherProps = Readonly<{
  locale: Locale;
  label: string;
  className?: string;
}>;

const localeLabel: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  nl: "NL",
};

function localeHref(pathname: string, nextLocale: Locale): string {
  if (pathname === "/paintpro" || pathname.endsWith("/paintpro")) {
    return `/${nextLocale}/paintpro`;
  }
  return `/${nextLocale}`;
}

export function LanguageSwitcher({
  locale,
  label,
  className,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const pathname = usePathname() ?? "/";
  const { allowRevealMotion, viewport, reduceMotion } = useMotionPreferences();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  const panelDuration = reduceMotion
    ? 0
    : durationFor("micro", viewport);

  return (
    <div
      ref={rootRef}
      className={["relative", className ?? ""].filter(Boolean).join(" ")}
    >
      <button
        type="button"
        className="inline-flex h-9 min-h-9 items-center gap-1.5 rounded-full border border-[#D5D8D8] bg-white px-2.5 text-[12px] font-semibold tracking-[0.06em] text-ink uppercase transition-colors duration-[180ms] hover:border-ink/30"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={label}
        title={label}
        onClick={() => setOpen((value) => !value)}
      >
        <LocaleFlag locale={locale} />
        {localeLabel[locale]}
        <span
          aria-hidden
          className={[
            "text-ink/50 transition-transform duration-[180ms] motion-reduce:transition-none",
            open ? "rotate-180" : "",
          ].join(" ")}
        >
          ▾
        </span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.ul
            id={listId}
            className="absolute top-[calc(100%+8px)] right-0 z-50 m-0 min-w-[108px] list-none rounded-xl border border-border/70 bg-white p-1 shadow-[0_12px_28px_rgba(17,18,19,0.12)]"
            role="listbox"
            aria-label={label}
            initial={
              allowRevealMotion ? { opacity: 0, y: 5 } : false
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              allowRevealMotion
                ? { opacity: 0, y: 4 }
                : { opacity: 0 }
            }
            transition={{
              duration: panelDuration,
              ease: motionTokens.ease.ui,
            }}
          >
            {locales.map((item) => (
              <li key={item} role="option" aria-selected={item === locale}>
                <Link
                  href={localeHref(pathname, item)}
                  hrefLang={item}
                  lang={item}
                  aria-current={item === locale ? "true" : undefined}
                  className={[
                    "flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-semibold tracking-[0.08em] no-underline uppercase transition-colors duration-[160ms]",
                    item === locale
                      ? "bg-sky-top/60 text-ink"
                      : "text-ink/80 hover:bg-sky-top/40",
                  ].join(" ")}
                  onClick={() => {
                    document.cookie = `${localeCookieName}=${item};path=/;max-age=31536000;samesite=lax`;
                    setOpen(false);
                  }}
                >
                  <LocaleFlag locale={item} />
                  {localeLabel[item]}
                </Link>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
