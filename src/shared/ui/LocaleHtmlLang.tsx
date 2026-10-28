"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { defaultLocale, isLocale } from "@/shared/i18n/config";

/** Keeps <html lang> aligned with the URL locale without blocking prerender. */
export function LocaleHtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean)[0];
    const lang =
      segment && isLocale(segment) ? segment : defaultLocale;
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
