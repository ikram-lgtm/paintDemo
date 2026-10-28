import "server-only";

import en from "@/shared/i18n/messages/en.json";
import fr from "@/shared/i18n/messages/fr.json";
import nl from "@/shared/i18n/messages/nl.json";
import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/shared/i18n/config";
import type { HomepageCopy } from "@/shared/i18n/types";

const dictionaries = {
  fr,
  en,
  nl,
} as const satisfies Record<Locale, HomepageCopy>;

export function hasLocale(value: string): value is Locale {
  return isLocale(value);
}

export function getDictionary(locale: Locale): HomepageCopy {
  return dictionaries[locale];
}

export function resolveLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) {
    return value;
  }
  return defaultLocale;
}
