import { headers } from "next/headers";

import { SiteFooter } from "@/features/siteFooter/ui/SiteFooter";
import { buildHomepageContent } from "@/features/home/model/buildHomepageContent";
import { defaultLocale, isLocale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";

/** Reads locale from proxy header; must sit inside Suspense for Cache Components. */
export async function LocalizedSiteFooter() {
  const headerList = await headers();
  const raw = headerList.get("x-locale");
  const locale = raw && isLocale(raw) ? raw : defaultLocale;
  const footer = buildHomepageContent(locale, getDictionary(locale)).footer;
  return <SiteFooter content={footer} />;
}
