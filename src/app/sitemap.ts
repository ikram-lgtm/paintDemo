import type { MetadataRoute } from "next";

import { sitePageCopy } from "@/shared/config/siteNav";
import { locales } from "@/shared/i18n/config";
import { getVerifiedSiteUrl } from "@/shared/i18n/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getVerifiedSiteUrl() ?? "";
  const now = new Date();

  const localePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: siteUrl ? `${siteUrl}/${locale}` : `/${locale}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: locale === "fr" ? 1.0 : 0.9,
  }));

  const standardPages: MetadataRoute.Sitemap = Object.keys(sitePageCopy).map(
    (path) => ({
      url: siteUrl ? `${siteUrl}${path}` : path,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/services" ? 0.8 : 0.7,
    }),
  );

  return [...localePages, ...standardPages];
}
