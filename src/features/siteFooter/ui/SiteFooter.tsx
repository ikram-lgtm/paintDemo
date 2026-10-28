import Image from "next/image";
import Link from "next/link";

import {
  FOOTER_FIED_ASSET_BASE,
  siteFooterContent,
} from "@/features/siteFooter/model/siteFooterContent";
import type {
  FooterContact,
  FooterLink,
  FooterSocial,
  SiteFooterContent,
} from "@/features/siteFooter/model/siteFooterTypes";
import { Reveal } from "@/shared/motion/Reveal";

type SiteFooterProps = {
  content?: SiteFooterContent;
  className?: string;
};

const svgBase = `${FOOTER_FIED_ASSET_BASE}/svg`;

const socialIcon: Record<FooterSocial["label"], string> = {
  Facebook: "facebook.svg",
  Instagram: "instagram.svg",
  YouTube: "youtube.svg",
  LinkedIn: "linkedin.svg",
};

function FooterLinkList({
  heading,
  links,
}: {
  heading: string;
  links: readonly FooterLink[];
}) {
  return (
    <ul className="m-0 grid list-none gap-[17px] p-0 max-[699px]:gap-[13px]">
      {links.map((link) => (
        <li key={`${heading}-${link.href}-${link.label}`}>
          <Link
            href={link.href}
            className="font-sans text-[15.5px] leading-[1.4] text-[#F8F5F0] no-underline transition-colors duration-200 hover:text-[#D5A351] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-[#D5A351] max-[699px]:text-sm max-[359px]:text-[13px]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: readonly FooterLink[];
}) {
  if (!links.length) return null;
  return (
    <>
      <nav
        className="min-h-[250px] min-w-0 border-l border-[rgba(244,235,219,0.24)] pl-[clamp(18px,2vw,36px)] max-[1199px]:min-h-0 max-[699px]:hidden"
        aria-label={heading}
      >
        <h2 className="m-0 mb-6 font-sans text-[17px] leading-[1.3] font-semibold text-[#D5A351]">
          {heading}
        </h2>
        <FooterLinkList heading={heading} links={links} />
      </nav>
      <details className="group min-w-0 border-b border-[rgba(244,235,219,0.24)] py-1 min-[700px]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3.5 font-sans text-[15px] leading-[1.3] font-semibold text-[#D5A351] marker:content-none [&::-webkit-details-marker]:hidden focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#D5A351]">
          <span>{heading}</span>
          <span
            className="text-base text-[#D5A351] transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
            aria-hidden
          >
            ▾
          </span>
        </summary>
        <div className="pb-4 pt-1">
          <FooterLinkList heading={heading} links={links} />
        </div>
      </details>
    </>
  );
}

function ContactBlock({
  contact,
  socials,
  contactLabel,
  socialLabel,
}: {
  contact: FooterContact;
  socials: readonly FooterSocial[];
  contactLabel: string;
  socialLabel: string;
}) {
  const show =
    Boolean(contact.phoneE164) ||
    Boolean(contact.email) ||
    socials.length > 0;
  if (!show) return null;

  return (
    <div
      className="min-h-[250px] min-w-0 border-l border-[rgba(244,235,219,0.24)] pl-[clamp(18px,2vw,36px)] max-[1199px]:col-span-2 max-[1199px]:min-h-0 max-[1199px]:pl-6 max-[699px]:col-span-full max-[699px]:min-h-0 max-[699px]:border-l-0 max-[699px]:border-t max-[699px]:border-[rgba(244,235,219,0.24)] max-[699px]:pt-[27px] max-[699px]:pl-0"
      aria-label={contactLabel}
    >
      <div className="grid gap-4">
        {contact.phoneE164 && contact.phoneDisplay ? (
          <a
            className="flex min-w-0 items-start gap-[13px] font-sans text-lg leading-[1.4] font-semibold break-words text-[#D5A351] no-underline hover:underline hover:decoration-[#D5A351] hover:underline-offset-4 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-[#D5A351] max-[699px]:text-[15px]"
            href={`tel:${contact.phoneE164}`}
          >
            <Image
              src={`${svgBase}/phone.svg`}
              width={21}
              height={21}
              alt=""
              className="mt-0.5 size-[21px] shrink-0"
            />
            <span>{contact.phoneDisplay}</span>
          </a>
        ) : null}
        {contact.email ? (
          <a
            className="flex min-w-0 items-start gap-[13px] font-sans text-base leading-[1.4] break-words text-[#F8F5F0] no-underline hover:underline hover:decoration-[#D5A351] hover:underline-offset-4 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-[#D5A351] max-[699px]:text-[15px]"
            href={`mailto:${contact.email}`}
          >
            <Image
              src={`${svgBase}/mail.svg`}
              width={21}
              height={21}
              alt=""
              className="mt-0.5 size-[21px] shrink-0"
            />
            <span>{contact.email}</span>
          </a>
        ) : null}
      </div>
      {socials.length ? (
        <>
          <div
            className="mt-[26px] flex flex-wrap items-center gap-3 border-t border-[rgba(244,235,219,0.24)] pt-[22px] max-[699px]:mt-[25px]"
            aria-label={socialLabel}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                className="grid size-[42px] place-items-center rounded-full border border-white/47 text-white transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#D5A351] hover:bg-[rgba(213,163,81,0.2)] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-[#D5A351] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Image
                  src={`${svgBase}/${socialIcon[social.label]}`}
                  width={20}
                  height={20}
                  alt=""
                  className="size-5"
                />
              </a>
            ))}
          </div>
          <p className="mt-3.5 mb-0 font-sans text-xs leading-[1.5] text-[#D2CEC7]">
            {socials.map((social) => social.label).join(" · ")}
          </p>
        </>
      ) : null}
    </div>
  );
}

export function SiteFooter({
  content = siteFooterContent,
  className,
}: SiteFooterProps) {
  /** Stable for Cache Components prerender; bump when the calendar year changes. */
  const year = 2026;
  const {
    brandName,
    tagline,
    quickLinks,
    serviceLinks,
    supportLinks,
    contact,
    socials,
    quickLinksHeading = "Quick Links",
    servicesHeading = "Our Services",
    supportHeading = "Support",
    copyright = "All rights reserved.",
    watermark = "PAINTING",
    contactLabel = "Contact and social links",
    socialLabel = "Social media",
  } = content;

  return (
    <footer
      className={[
        "relative isolate min-h-[785px] overflow-clip bg-[#10110F] font-sans text-[#F8F5F0] max-[1199px]:min-h-[840px] max-[699px]:min-h-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="absolute inset-0 -z-[3]" aria-hidden>
        <picture className="absolute inset-0 block">
          <source
            media="(max-width: 699px)"
            srcSet={`${FOOTER_FIED_ASSET_BASE}/images/footer-room-mobile.webp`}
          />
          <Image
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_52%] max-[699px]:object-[50%_100%]"
            src={`${FOOTER_FIED_ASSET_BASE}/images/footer-room-desktop.webp`}
          />
        </picture>
      </div>
      <div
        className="absolute inset-0 -z-[2] bg-[linear-gradient(180deg,rgba(9,10,10,0.91)_0%,rgba(9,10,10,0.91)_33%,rgba(10,11,11,0.73)_57%,rgba(9,10,10,0.49)_79%,rgba(9,10,10,0.67)_100%),linear-gradient(90deg,rgba(4,6,6,0.41),transparent_38%,rgba(4,6,6,0.22))] max-[699px]:bg-[linear-gradient(180deg,rgba(9,10,10,0.94),rgba(9,10,10,0.88)_58%,rgba(8,9,9,0.73)),linear-gradient(90deg,rgba(8,9,9,0.32),transparent)]"
        aria-hidden
      />

      <Reveal className="relative z-[1] mx-auto w-[min(1480px,calc(100%-96px))] pt-[118px] max-[1199px]:w-[min(100%-64px,960px)] max-[1199px]:pt-[90px] max-[699px]:w-[calc(100%-36px)] max-[699px]:pt-[52px] max-[699px]:pb-24 max-[359px]:w-[calc(100%-30px)]">
      <div>
        <div className="grid grid-cols-[minmax(230px,1.28fr)_minmax(140px,0.83fr)_minmax(200px,1.06fr)_minmax(150px,0.83fr)_minmax(260px,1.27fr)] items-start gap-[clamp(20px,2.4vw,43px)] max-[1199px]:grid-cols-[1.15fr_1fr_1.1fr] max-[1199px]:gap-x-5 max-[1199px]:gap-y-[34px] max-[699px]:grid-cols-1 max-[699px]:gap-y-2">
          <div className="min-w-0 pr-3.5 max-[1199px]:col-auto max-[699px]:col-span-full max-[699px]:pr-0 max-[699px]:pb-4">
            <p className="m-0 max-w-[310px] font-sans text-[clamp(15px,1.12vw,18px)] leading-[1.62] font-normal text-pretty max-[699px]:max-w-[340px] max-[699px]:text-[17px]">
              {tagline}
            </p>
            <div
              className="my-5 mb-[23px] h-0.5 w-[45px] bg-[#D5A351]"
              aria-hidden
            />
            {contact.addressLines?.length ? (
              <address className="flex items-start gap-3 font-sans text-[15px] leading-[1.58] font-normal text-[#D2CEC7] not-italic">
                <Image
                  src={`${svgBase}/location-pin.svg`}
                  width={22}
                  height={22}
                  alt=""
                  className="mt-px size-[22px] shrink-0"
                />
                <span>
                  {contact.addressLines.map((line, index) => (
                    <span key={`${line}-${index}`}>
                      {index > 0 ? <>, </> : null}
                      {line}
                    </span>
                  ))}
                </span>
              </address>
            ) : null}
          </div>

          <FooterColumn heading={quickLinksHeading} links={quickLinks} />
          <FooterColumn heading={servicesHeading} links={serviceLinks} />
          <FooterColumn heading={supportHeading} links={supportLinks} />
          <ContactBlock
            contact={contact}
            socials={socials}
            contactLabel={contactLabel}
            socialLabel={socialLabel}
          />
        </div>

        <div className="mt-[34px] border-t border-[rgba(244,235,219,0.24)] pt-[21px] text-center max-[699px]:mt-8">
          <p className="m-0 font-sans text-[13px] text-[#F8F5F0] max-[699px]:text-xs">
            © {year}{" "}
            <strong className="font-semibold text-[#D5A351]">{brandName}</strong>
            . {copyright}
          </p>
        </div>
      </div>
      </Reveal>

      <span
        className="pointer-events-none absolute bottom-[-46px] left-1/2 z-[-1] w-max max-w-none -translate-x-1/2 select-none font-sans text-[clamp(125px,18vw,320px)] leading-[0.9] font-extrabold tracking-[-0.09em] whitespace-nowrap text-white/25 max-[1199px]:bottom-[-10px] max-[1199px]:text-[20vw] max-[699px]:bottom-0 max-[699px]:text-[clamp(72px,20vw,140px)] max-[699px]:tracking-[-0.075em] max-[699px]:text-white/20 max-[359px]:text-[20vw]"
        aria-hidden
      >
        {watermark}
      </span>
    </footer>
  );
}
