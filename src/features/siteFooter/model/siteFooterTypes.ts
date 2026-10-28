export type FooterLink = Readonly<{
  label: string;
  href: string;
}>;

export type FooterSocial = Readonly<{
  label: "Facebook" | "Instagram" | "YouTube" | "LinkedIn";
  href: string;
}>;

export type FooterContact = Readonly<{
  phoneDisplay?: string;
  phoneE164?: string;
  email?: string;
  addressLines?: readonly string[];
}>;

export type SiteFooterContent = Readonly<{
  brandName: string;
  tagline: string;
  quickLinks: readonly FooterLink[];
  serviceLinks: readonly FooterLink[];
  supportLinks: readonly FooterLink[];
  contact: FooterContact;
  socials: readonly FooterSocial[];
  quickLinksHeading?: string;
  servicesHeading?: string;
  supportHeading?: string;
  copyright?: string;
  watermark?: string;
  contactLabel?: string;
  socialLabel?: string;
}>;
