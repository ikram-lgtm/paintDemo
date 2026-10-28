import Image from "next/image";
import type { CSSProperties } from "react";

import {
  PAINTING_TESTIMONIAL_ASSET_BASE,
  paintingTestimonialsCopy,
  verifiedPublicRating,
  verifiedTestimonial,
} from "@/features/paintingTestimonials/model/paintingTestimonialsContent";
import type {
  VerifiedCustomerTestimonial,
  VerifiedPublicRating,
} from "@/features/paintingTestimonials/model/paintingTestimonialTypes";

type PaintingTestimonialsSectionProps = {
  testimonial?: VerifiedCustomerTestimonial | null;
  rating?: VerifiedPublicRating;
  copy?: typeof paintingTestimonialsCopy;
  className?: string;
};

function customerInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function resolveValidRating(
  rating: VerifiedPublicRating | undefined,
): VerifiedPublicRating | undefined {
  if (!rating) return undefined;
  const { average, count, providerUrl } = rating;
  const ok =
    average >= 0 &&
    average <= 5 &&
    Number.isFinite(average) &&
    Number.isInteger(count) &&
    count >= 0 &&
    /^https:\/\//.test(providerUrl);
  return ok ? rating : undefined;
}

export function PaintingTestimonialsSection({
  testimonial = verifiedTestimonial,
  rating = verifiedPublicRating,
  copy = paintingTestimonialsCopy,
  className,
}: PaintingTestimonialsSectionProps) {
  if (!testimonial) return null;
  const assetBase = PAINTING_TESTIMONIAL_ASSET_BASE;
  const initials = customerInitials(testimonial.customerName);
  const validRating = resolveValidRating(rating);

  return (
    <section
      aria-labelledby="painting-testimonials-heading"
      className={[
        "relative isolate overflow-clip bg-[#FBFAF7] pb-[clamp(55px,6vw,100px)] font-sans text-[#0B2824]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="relative isolate mx-auto h-[clamp(250px,29.2vw,445px)] max-w-[1600px] max-[860px]:h-[290px] max-[540px]:h-[250px]"
        aria-hidden="true"
      >
        <span className="pointer-events-none absolute top-[clamp(-20px,-1.3vw,0px)] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap font-sans text-[clamp(125px,17.1vw,266px)] font-extrabold leading-none tracking-[-0.085em] text-[#E5E5E2] opacity-[0.87] max-[860px]:top-2 max-[860px]:text-[clamp(115px,20vw,165px)] max-[540px]:top-9 max-[540px]:text-[104px]">
          Painting
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG stage assets */}
        <img
          className="pointer-events-none absolute top-3 right-[-10%] z-0 h-auto w-[min(44%,560px)] opacity-20 max-[540px]:top-6 max-[540px]:right-[-50%] max-[540px]:w-[70%]"
          src={`${assetBase}/svg/architecture-blueprint.svg`}
          alt=""
          width={720}
          height={540}
          loading="lazy"
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG stage assets */}
        <img
          className="pointer-events-none absolute top-[66px] left-[-5%] z-0 h-auto w-[min(32vw,470px)] rotate-12 opacity-75 max-[540px]:top-[27px] max-[540px]:left-[-18%] max-[540px]:w-[56vw]"
          src={`${assetBase}/svg/brush-stroke-gold.svg`}
          alt=""
          width={520}
          height={170}
          loading="lazy"
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG stage assets */}
        <img
          className="pointer-events-none absolute top-[150px] left-[-9%] z-0 h-auto w-[min(32vw,470px)] rotate-[13deg] opacity-75 max-[540px]:top-20 max-[540px]:left-[-27%] max-[540px]:w-[65vw]"
          src={`${assetBase}/svg/brush-stroke-sage.svg`}
          alt=""
          width={520}
          height={170}
          loading="lazy"
        />
        <picture className="pointer-events-none absolute inset-x-0 bottom-[17px] z-[1] mx-auto block w-full max-w-[1480px] max-[1100px]:bottom-[34px] max-[860px]:bottom-[34px] max-[860px]:left-[-10%] max-[860px]:right-auto max-[860px]:w-[120%] max-[860px]:max-w-none max-[540px]:bottom-[23px] max-[540px]:left-[-55%] max-[540px]:w-[210%]">
          <source
            media="(max-width: 640px)"
            srcSet={`${assetBase}/images/house-panorama-compact.webp`}
          />
          <img
            className="block h-auto w-full mix-blend-multiply"
            src={`${assetBase}/images/house-panorama.webp`}
            width={1428}
            height={262}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <div className="relative z-[2] mx-auto w-[min(1190px,calc(100%-64px))] max-[860px]:w-[min(630px,calc(100%-40px))] max-[540px]:w-[calc(100%-36px)]">
        <div className="max-w-[980px]">
          <p className="m-0 flex items-center gap-3 font-sans text-[11px] leading-[1.2] font-semibold tracking-[0.28em] text-[#AD7C39] uppercase max-[540px]:text-[10px] max-[540px]:tracking-[0.2em]">
            {copy.eyebrow}
            <span
              className="inline-block h-px w-10 bg-[#AD7C39]/70 max-[540px]:w-7"
              aria-hidden
            />
          </p>
          <h2
            id="painting-testimonials-heading"
            className="mt-[15px] mb-6 font-sans text-[clamp(45px,4.35vw,70px)] font-semibold leading-[0.99] tracking-[-0.052em] text-balance max-[860px]:text-[clamp(44px,6vw,60px)] max-[540px]:mt-3 max-[540px]:mb-6 max-[540px]:text-[clamp(39px,10.3vw,53px)] max-[540px]:tracking-[-0.057em]"
          >
            {copy.headingBefore}
            <br />
            <span className="text-[#AD7C39] not-italic">{copy.headingAccent}</span>{" "}
            {copy.headingAfter}
          </h2>
        </div>

        <div className="grid grid-cols-2 items-start gap-[clamp(30px,3vw,52px)] max-[860px]:grid-cols-1 max-[860px]:gap-[26px] max-[540px]:gap-[25px]">
          <div className="relative aspect-[1.625] overflow-hidden rounded-xl bg-[#E5E2D8] max-[860px]:aspect-[1.56] max-[540px]:aspect-[0.99] max-[540px]:rounded-[10px] motion-safe:[&_img]:transition-transform motion-safe:[&_img]:duration-[450ms] motion-safe:[&_img]:ease-out motion-safe:hover:[&_img]:scale-[1.025]">
            <Image
              className="object-cover object-center max-[540px]:object-[54%_center]"
              src={`${assetBase}/images/painting-craftsmanship.webp`}
              alt="Painting specialists finishing interior walls and ceiling joints"
              fill
              sizes="(max-width: 860px) calc(100vw - 40px), (max-width: 1280px) 45vw, 560px"
            />
          </div>

          <div className="pt-0.5">
            {validRating ? (
              <div className="grid grid-cols-[auto_auto_1fr] items-center gap-[15px] border-b border-[#DEDBD4] pb-[22px] max-[1100px]:grid-cols-[auto_1fr] max-[1100px]:gap-3 max-[860px]:grid-cols-[auto_auto_1fr] max-[540px]:grid-cols-[auto_1fr] max-[540px]:gap-3.5 max-[540px]:pb-[15px]">
                <span className="font-sans text-[47px] font-bold leading-none tracking-[-0.055em] max-[540px]:text-[42px]">
                  {validRating.average.toFixed(2)}
                </span>
                <div className="flex flex-col justify-center gap-1.5">
                  <span
                    className="block w-max bg-clip-text text-[24px] leading-none tracking-px text-transparent max-[540px]:text-[21px]"
                    style={
                      {
                        backgroundImage: `linear-gradient(to right, #C59A48 var(--rating-percent), #DDD7CA var(--rating-percent))`,
                        WebkitBackgroundClip: "text",
                        "--rating-percent": `${validRating.average * 20}%`,
                      } as CSSProperties
                    }
                    aria-hidden="true"
                  >
                    ★★★★★
                  </span>
                  <a
                    href={validRating.providerUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-sans text-[11px] font-bold text-[#515955] underline decoration-[#A5A39D] hover:text-[#AD7C39]"
                  >
                    {validRating.count.toLocaleString("en-US")} reviews ·{" "}
                    {validRating.providerName}
                  </a>
                </div>
                <p className="m-0 ml-[5px] max-w-[185px] text-[13px] leading-[1.45] text-[#555D58] max-[1100px]:col-span-full max-[1100px]:ml-0 max-[1100px]:max-w-none max-[860px]:col-auto max-[540px]:col-span-full max-[540px]:mt-[-3px] max-[540px]:text-xs">
                  {copy.metricNote}
                </p>
              </div>
            ) : null}

            <blockquote className="my-5 max-[540px]:mt-5 max-[540px]:mb-5">
              <p className="m-0 font-sans text-[clamp(20px,2vw,28px)] leading-[1.34] tracking-[-0.018em] max-[860px]:text-[clamp(22px,3.5vw,28px)] max-[540px]:text-[clamp(21px,5.5vw,26px)] max-[540px]:leading-[1.37]">
                “{testimonial.quote}”
              </p>
            </blockquote>

            <div className="flex items-center gap-3.5">
              {testimonial.customerPortraitSrc ? (
                <Image
                  src={testimonial.customerPortraitSrc}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 shrink-0 rounded-full object-cover"
                />
              ) : (
                <span
                  className="grid size-14 shrink-0 place-items-center rounded-full bg-[#E2E7DF] font-sans text-base font-bold text-[#1B4033]"
                  aria-hidden="true"
                >
                  {initials}
                </span>
              )}
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-[15px] font-extrabold max-[540px]:text-sm">
                  {testimonial.customerName}
                </span>
                {testimonial.customerLabel ? (
                  <span className="font-sans text-[13px] text-[#737B79] max-[540px]:text-xs">
                    {testimonial.customerLabel}
                  </span>
                ) : null}
                {testimonial.reviewSourceUrl ? (
                  <a
                    className="text-xs text-[#8B672E] underline underline-offset-[3px]"
                    href={testimonial.reviewSourceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {copy.reviewLinkLabel}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG */}
      <img
        className="pointer-events-none absolute right-[-65px] bottom-[50px] z-0 size-[200px] -rotate-[29deg] opacity-20 max-[860px]:right-[-90px] max-[860px]:bottom-[25px]"
        src={`${assetBase}/svg/paint-roller-outline.svg`}
        alt=""
        aria-hidden="true"
        width={240}
        height={240}
        loading="lazy"
      />
    </section>
  );
}
