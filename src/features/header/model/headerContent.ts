import type { Locale } from "@/shared/i18n/config";

export type HeaderUiCopy = Readonly<{
  brand: { name: string; tagline: string };
  callbackCta: { label: string; href: string };
  locale: Locale;
  menuOpen: string;
  menuClose: string;
  navLabel: string;
  allNavLabels: Readonly<Record<string, string>>;
  switchLanguage: string;
  homeHref: string;
}>;
