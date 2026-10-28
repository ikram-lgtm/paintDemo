import type { SiteNavItem } from "@/shared/config/siteNav";
import type { Locale } from "@/shared/i18n/config";
import type { HomepageCopy } from "@/shared/i18n/types";

export function buildLocalizedNav(
  locale: Locale,
  dict: HomepageCopy,
): readonly SiteNavItem[] {
  const homeHref = `/${locale}`;
  return [
    { label: dict.nav.home, href: homeHref },
    {
      label: dict.nav.services,
      href: "/services",
      children: [
        { label: dict.services.interior, href: "/services/interior-painting" },
        { label: dict.services.exterior, href: "/services/exterior-painting" },
        {
          label: dict.services.plasterboard,
          href: "/services/plasterboard-installation",
        },
        {
          label: dict.services.skimming,
          href: "/services/plastering-skimming",
        },
        { label: dict.services.jointTaping, href: "/services/joint-taping" },
        {
          label: dict.services.apartment,
          href: "/services/apartment-renovation",
        },
        { label: dict.services.house, href: "/services/house-renovation" },
        { label: dict.services.repairs, href: "/services/small-repairs" },
      ],
    },
    {
      label: dict.nav.serviceAreas,
      href: "/service-areas",
      children: [
        { label: dict.nav.paris, href: "/service-areas/paris" },
        { label: dict.nav.ileDeFrance, href: "/service-areas/ile-de-france" },
      ],
    },
    {
      label: dict.nav.projects,
      href: "/projects",
      children: [
        { label: dict.nav.beforeAfter, href: "/projects/before-after" },
        { label: dict.nav.inspiration, href: "/projects/completed" },
      ],
    },
    { label: dict.nav.about, href: "/about" },
    { label: dict.nav.blog, href: "/blog" },
    { label: dict.nav.contact, href: "/contact" },
  ];
}
