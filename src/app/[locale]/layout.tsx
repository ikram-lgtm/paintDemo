import type { Metadata } from "next";
import { Suspense } from "react";

import { LocaleParamGuard } from "@/app/[locale]/LocaleParamGuard";
import { LocaleSiteHeader } from "@/app/[locale]/LocaleSiteHeader";
import { buildHomepageContent } from "@/features/home/model/buildHomepageContent";
import { locales, SITE_BRAND_NAME } from "@/shared/i18n/config";
import { getDictionary, hasLocale } from "@/shared/i18n/dictionaries";
import { getVerifiedSiteUrl } from "@/shared/i18n/siteUrl";

type LocaleParams = { locale: string };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParams>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) {
    return {};
  }
  const locale = raw;
  const content = buildHomepageContent(locale, getDictionary(locale));
  const site = getVerifiedSiteUrl();

  const metadata: Metadata = {
    title: {
      default: content.seo.homeTitle,
      template: `%s | ${SITE_BRAND_NAME}`,
    },
    description: content.seo.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        nl: "/nl",
        "x-default": "/fr",
      },
    },
    openGraph: {
      type: "website",
      locale:
        locale === "fr" ? "fr_FR" : locale === "en" ? "en_GB" : "nl_NL",
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
    },
  };

  if (site) {
    metadata.metadataBase = new URL(site);
  }

  return metadata;
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LocaleParams>;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <LocaleParamGuard params={params} />
      </Suspense>
      <LocaleSiteHeader params={params} />
      {children}
    </>
  );
}
