import Image from "next/image";
import Link from "next/link";

import type { ShowcaseUiCopy } from "@/features/renovation/model/renovationContent";
import { Reveal } from "@/shared/motion/Reveal";

type RenovationShowcaseProps = {
  /** Existing, verified internal portfolio route. Do not invent a destination. */
  portfolioHref: string;
  copy: ShowcaseUiCopy;
  className?: string;
};

export function RenovationShowcase({
  portfolioHref,
  copy,
  className,
}: RenovationShowcaseProps) {
  return (
    <section
      aria-labelledby="renovation-heading"
      className={[
        "relative isolate flex min-h-0 items-center overflow-clip bg-[#121514] py-16 font-sans text-[#F7F6F3] md:min-h-[570px] md:py-[clamp(56px,4.2vw,84px)] lg:min-h-[700px]",
        className ?? "",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(12,16,15,0.96)_0%,rgba(13,17,16,0.91)_48%,rgba(13,17,16,0.81)_100%),url('/images/renovation/ambient-room.webp')] bg-cover bg-center"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/renovation/architectural-grid.svg')] bg-cover bg-center opacity-[0.085] max-md:opacity-[0.07]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-[-0.035em] left-[3%] z-[1] select-none text-[clamp(68px,18vw,135px)] leading-none font-extrabold tracking-[-0.06em] whitespace-nowrap text-[rgba(244,239,229,0.055)] md:text-[clamp(112px,14.4vw,270px)] max-md:bottom-1 max-md:left-[-4px] max-md:opacity-75"
        aria-hidden
      >
        {copy.watermark}
      </span>

      <div className="relative z-[2] mx-auto grid w-[calc(100%-40px)] max-w-[1580px] grid-cols-1 items-center gap-10 md:w-[calc(100%-72px)] md:grid-cols-[minmax(0,0.93fr)_minmax(0,1.12fr)] md:gap-[clamp(30px,4.5vw,96px)] lg:w-[min(calc(100%-12.6%),1580px)] max-md:flex max-md:flex-col max-md:gap-[41px]">
        <div className="min-w-0 md:py-9">
          <Reveal>
            <p className="mb-7 flex items-center gap-[13px] text-[10px] font-semibold tracking-[0.17em] text-[#D8AB6F] uppercase md:mb-[clamp(30px,3vw,50px)] md:gap-[22px] md:text-[12px] md:tracking-[0.26em]">
              <span
                className="inline-block h-0.5 w-9 shrink-0 bg-[#D8AB6F] md:w-[47px] lg:w-[76px]"
                aria-hidden
              />
              {copy.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2
              id="renovation-heading"
              className="m-0 max-w-[780px] text-[clamp(35px,9vw,56px)] leading-[1.095] font-bold tracking-[-0.052em] text-[#F7F6F3] md:text-[clamp(36px,4.5vw,52px)] md:leading-[1.065] md:tracking-[-0.053em] lg:text-[clamp(40px,4.2vw,73px)]"
            >
              <span className="block">{copy.headingStart}</span>
              <span className="block text-[#D8AB6F]">{copy.headingAccent}</span>
            </h2>
          </Reveal>

          <Link
            href={portfolioHref}
            className="group mt-7 inline-flex min-h-[57px] items-center justify-between gap-7 rounded-full border-[1.5px] border-[rgba(216,171,111,0.82)] bg-[rgba(13,16,15,0.24)] py-1.5 pr-1.5 pl-5 text-[11px] font-semibold tracking-[0.07em] whitespace-nowrap text-white uppercase no-underline transition-[background-color,border-color,transform] duration-[180ms] hover:border-[#D8AB6F] hover:bg-[rgba(216,171,111,0.12)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:mt-9 md:min-h-[63px] md:pl-7 md:text-[13px]"
          >
            <span>{copy.cta}</span>
            <span
              className="inline-flex size-[43px] shrink-0 items-center justify-center rounded-full bg-[#D8AB6F] text-[#1b1d1a] transition-transform duration-[180ms] group-hover:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 md:size-[47px]"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                focusable="false"
                className="size-[22px]"
              >
                <path
                  d="M4.5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        <Reveal
          variant="large"
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#cbc3b8] shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:aspect-square lg:aspect-[1.13/1] lg:rounded-[23px]"
        >
          <Image
            src="/images/renovation/living-room-desktop.webp"
            alt={copy.imageAlt}
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 49vw, 48vw"
            quality={85}
            className="object-cover object-center"
          />
        </Reveal>
      </div>
    </section>
  );
}
