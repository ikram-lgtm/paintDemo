import { SITE_BRAND_NAME } from "@/shared/i18n/config";
import type { SiteFooterContent } from "@/features/siteFooter/model/siteFooterTypes";
import { siteNav } from "@/shared/config/siteNav";

const servicesNav = siteNav.find((item) => item.href === "/services");

export const FOOTER_FIED_ASSET_BASE = "/footer-fied" as const;

export const siteFooterContent: SiteFooterContent = {
  brandName: SITE_BRAND_NAME,
  tagline:
    "Premium painting and renovation for homes across Paris and Île-de-France.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog / Guides", href: "/blog" },
  ],
  serviceLinks: (servicesNav?.children ?? []).map((item) => ({
    label: item.label,
    href: item.href,
  })),
  supportLinks: [
    { label: "Contact Us", href: "/contact" },
    { label: "Free Quote", href: "/free-quote" },
    { label: "FAQ", href: "/#faq" },
  ],
  /** Omit demo phone/email/address until verified business data is configured. */
  contact: {},
  socials: [],
};
