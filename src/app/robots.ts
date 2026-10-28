import type { MetadataRoute } from "next";

import { getVerifiedSiteUrl } from "@/shared/i18n/siteUrl";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getVerifiedSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: siteUrl ? `${siteUrl}/sitemap.xml` : undefined,
  };
}
