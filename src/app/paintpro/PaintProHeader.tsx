import { headers } from "next/headers";
import { Suspense } from "react";

import { SiteHeader } from "@/features/header/ui/SiteHeader";
import { buildHomepageContent } from "@/features/home/model/buildHomepageContent";
import { defaultLocale, isLocale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";

async function PaintProHeaderInner() {
  const headerList = await headers();
  const raw = headerList.get("x-locale");
  const locale = raw && isLocale(raw) ? raw : defaultLocale;
  const content = buildHomepageContent(locale, getDictionary(locale));

  return (
    <SiteHeader
      content={content.hero}
      nav={content.nav}
      switcherLabel={content.hero.switchLanguage}
    />
  );
}

/** Homepage pill header on PaintPro (locale from proxy). */
export function PaintProHeader() {
  return (
    <Suspense fallback={null}>
      <PaintProHeaderInner />
    </Suspense>
  );
}
