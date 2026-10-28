export const locales = ["fr", "en", "nl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeCookieName = "NEXT_LOCALE";

export const SITE_BRAND_NAME = "XYZ";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
