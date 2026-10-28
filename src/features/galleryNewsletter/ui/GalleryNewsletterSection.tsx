import Image from "next/image";
import type { CSSProperties } from "react";

import {
  NEWSLETTER_ENDPOINT,
  NEWSLETTER_PRIVACY_HREF,
  galleryItems,
  galleryNewsletterCopy,
} from "@/features/galleryNewsletter/model/galleryNewsletterContent";
import type {
  GalleryNewsletterCopy,
  NewsletterFormCopy,
} from "@/features/galleryNewsletter/model/galleryNewsletterTypes";
import { GalleryMobileSlider } from "@/features/galleryNewsletter/ui/GalleryMobileSlider";
import { NewsletterSignup } from "@/features/galleryNewsletter/ui/NewsletterSignup";
import { Reveal } from "@/shared/motion/Reveal";

type GalleryNewsletterSectionProps = {
  newsletterEndpoint?: string;
  privacyPolicyHref?: string;
  copy?: GalleryNewsletterCopy & { watermark?: string };
  formCopy: NewsletterFormCopy;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
};

export function GalleryNewsletterSection({
  newsletterEndpoint = NEWSLETTER_ENDPOINT,
  privacyPolicyHref = NEWSLETTER_PRIVACY_HREF,
  copy = galleryNewsletterCopy,
  formCopy,
  previousLabel = "Previous",
  nextLabel = "Next",
  className,
}: GalleryNewsletterSectionProps) {
  const watermark =
    "watermark" in copy && typeof copy.watermark === "string"
      ? copy.watermark
      : "gallery";

  return (
    <section
      aria-label={copy.gallerySrTitle}
      className={[
        "relative isolate overflow-hidden bg-[#F8F7F2] font-sans text-[#112C25]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Desktop / tablet collage */}
      <Reveal
        variant="large"
        className="relative mx-auto hidden h-[clamp(500px,43.5vw,668px)] w-[min(100%,1536px)] min-[768px]:block max-[1100px]:min-[768px]:h-[560px]"
      >
      <div className="relative h-full w-full">
        <span
          className="pointer-events-none absolute top-[-46px] left-[20%] z-0 select-none font-sans text-[clamp(120px,17vw,280px)] leading-none font-extrabold tracking-[-0.075em] text-[#CAC8C3] opacity-[0.32] max-[1100px]:min-[768px]:top-[3px] max-[1100px]:min-[768px]:left-[11%]"
          aria-hidden
        >
          {watermark}
        </span>
        <span
          className="pointer-events-none absolute top-[9%] left-[1%] z-[1] h-[33%] w-[35%] -rotate-10 bg-[url('/gallery-newsletter/svgs/sage-brush-stroke.svg')] bg-contain bg-no-repeat"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute top-[7%] right-[1%] z-[1] h-[28%] w-[26%] -scale-x-100 bg-[url('/gallery-newsletter/svgs/gold-brush-stroke.svg')] bg-contain bg-no-repeat"
          aria-hidden
        />
        <h2 className="sr-only">{copy.gallerySrTitle}</h2>
        <div className="absolute inset-0 z-[2]">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="absolute m-0 overflow-hidden rounded-[clamp(9px,1.2vw,18px)] bg-[#F0EEE8] shadow-[0_9px_18px_rgba(32,32,26,0.09)] motion-safe:[&_img]:transition-transform motion-safe:[&_img]:duration-700 motion-safe:[&_img]:ease-[cubic-bezier(0.2,0.75,0.2,1)] motion-safe:hover:[&_img]:scale-[1.045]"
              style={
                {
                  left: item.left,
                  top: item.top,
                  width: item.widthPct,
                  height: item.heightPct,
                  zIndex: item.zIndex,
                } as CSSProperties
              }
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1100px) 50vw, 36vw"
                quality={80}
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
      </Reveal>

      {/* Mobile mosaic slider */}
      <div className="relative mx-auto w-full overflow-x-clip pt-14 pb-3 min-[768px]:hidden">
        <span
          className="pointer-events-none absolute top-1 left-[6%] z-0 select-none font-sans text-[clamp(88px,20vw,140px)] leading-none font-extrabold tracking-[-0.075em] text-[#CAC8C3] opacity-[0.27]"
          aria-hidden
        >
          {watermark}
        </span>
        <span
          className="pointer-events-none absolute top-3 left-[1%] z-[1] h-[110px] w-[62%] -rotate-10 bg-[url('/gallery-newsletter/svgs/sage-brush-stroke.svg')] bg-contain bg-no-repeat"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute top-5 right-[1%] z-[1] h-[100px] w-[48%] -scale-x-100 bg-[url('/gallery-newsletter/svgs/gold-brush-stroke.svg')] bg-contain bg-no-repeat"
          aria-hidden
        />
        <h2 className="sr-only">{copy.gallerySrTitle}</h2>
        <GalleryMobileSlider
          items={galleryItems}
          regionAria={copy.gallerySrTitle}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
        />
      </div>

      <div className="relative min-h-[360px] overflow-hidden px-6 pt-[34px] pb-[58px] text-center max-[1100px]:min-[768px]:min-h-[330px] max-[767px]:min-h-0 max-[767px]:px-5 max-[767px]:pt-12 max-[767px]:pb-[66px]">
        <span
          className="pointer-events-none absolute bottom-[-12px] left-[-3%] z-0 h-[350px] w-[400px] bg-[url('/gallery-newsletter/svgs/architectural-wireframe-left.svg')] bg-contain bg-no-repeat opacity-[0.57] max-[767px]:bottom-[-40px] max-[767px]:left-[-120px] max-[767px]:h-[230px] max-[767px]:w-[220px] max-[767px]:opacity-[0.27]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-[-3%] bottom-[-12px] z-0 h-[350px] w-[400px] bg-[url('/gallery-newsletter/svgs/architectural-wireframe-right.svg')] bg-contain bg-no-repeat opacity-[0.57] max-[767px]:right-[-120px] max-[767px]:bottom-[-40px] max-[767px]:h-[230px] max-[767px]:w-[220px] max-[767px]:opacity-[0.27]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-[-90px] left-[-65px] z-[1] size-[230px] -rotate-20 bg-[url('/gallery-newsletter/svgs/leaf-left.svg')] bg-contain bg-no-repeat opacity-[0.52] blur-[3px] max-[767px]:bottom-[-75px] max-[767px]:h-[140px] max-[767px]:w-[135px] max-[767px]:opacity-[0.35]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-[-65px] bottom-[-90px] z-[1] size-[230px] rotate-20 bg-[url('/gallery-newsletter/svgs/leaf-right.svg')] bg-contain bg-no-repeat opacity-[0.52] blur-[3px] max-[767px]:bottom-[-75px] max-[767px]:h-[140px] max-[767px]:w-[135px] max-[767px]:opacity-[0.35]"
          aria-hidden
        />

        <div className="relative z-[2] mx-auto max-w-[650px]">
          <Reveal>
            <p className="m-0 flex items-center justify-center gap-3 font-sans text-[11px] leading-[1.2] font-semibold tracking-[0.19em] text-[#C49145] uppercase">
              {copy.newsletterEyebrow}
              <span
                className="inline-block h-px w-10 bg-[#C49145]/70"
                aria-hidden
              />
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 mb-0 font-sans text-[clamp(37px,3.5vw,57px)] leading-[0.96] font-medium tracking-[-0.045em] max-[767px]:text-[clamp(33px,9.6vw,46px)] max-[767px]:leading-[1.02]">
              {copy.newsletterLead}{" "}
              <span className="text-[#C49145] not-italic">
                {copy.newsletterGold}
              </span>
              <span className="block">{copy.newsletterTail}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3.5 mb-5 max-w-[485px] font-sans text-sm leading-[1.5] text-[#66665D] max-[767px]:text-[13px] max-[767px]:leading-[1.55]">
              {copy.newsletterDescription}
            </p>
          </Reveal>
          <NewsletterSignup
            endpoint={newsletterEndpoint}
            privacyPolicyHref={privacyPolicyHref}
            copy={formCopy}
          />
        </div>
      </div>
    </section>
  );
}
