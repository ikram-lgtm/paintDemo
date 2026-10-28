import 'server-only';
import fr from './fr.json';
import en from './en.json';
import nl from './nl.json';

export const locales = ['fr', 'en', 'nl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';
export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

const messages = { fr, en, nl } as const;
export function getMessages(locale: Locale) {
  return messages[locale];
}
