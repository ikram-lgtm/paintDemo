import type { Metadata } from "next";
import { Suspense } from "react";

import { SiteFooter } from "@/features/siteFooter/ui/SiteFooter";
import { nourd } from "@/shared/config/fonts";
import { buildHomepageContent } from "@/features/home/model/buildHomepageContent";
import {
  SITE_BRAND_NAME,
  defaultLocale,
} from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { LocaleHtmlLang } from "@/shared/ui/LocaleHtmlLang";
import { LocalizedSiteFooter } from "@/app/LocalizedSiteFooter";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_BRAND_NAME,
    template: `%s | ${SITE_BRAND_NAME}`,
  },
};

const defaultFooter = buildHomepageContent(
  defaultLocale,
  getDictionary(defaultLocale),
).footer;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      translate="no"
      data-scroll-behavior="smooth"
      className={`${nourd.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased">
        <LocaleHtmlLang />
        {children}
        <Suspense fallback={<SiteFooter content={defaultFooter} />}>
          <LocalizedSiteFooter />
        </Suspense>
      </body>
    </html>
  );
}
