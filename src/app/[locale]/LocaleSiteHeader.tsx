import { Suspense } from "react";

import { SiteHeader } from "@/features/header/ui/SiteHeader";
import { buildHomepageContent } from "@/features/home/model/buildHomepageContent";
import { getDictionary, hasLocale } from "@/shared/i18n/dictionaries";

type LocaleSiteHeaderProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

async function LocaleSiteHeaderInner({ params }: LocaleSiteHeaderProps) {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) {
    return null;
  }
  const content = buildHomepageContent(raw, getDictionary(raw));

  return (
    <SiteHeader
      content={content.hero}
      nav={content.nav}
      switcherLabel={content.hero.switchLanguage}
    />
  );
}

/** Fixed global chrome for every locale route. */
export function LocaleSiteHeader({ params }: LocaleSiteHeaderProps) {
  return (
    <Suspense fallback={null}>
      <LocaleSiteHeaderInner params={params} />
    </Suspense>
  );
}
