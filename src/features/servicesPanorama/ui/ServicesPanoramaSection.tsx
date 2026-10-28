import Image from "next/image";

import {
  SERVICES_PANORAMA_ASSET_BASE,
  servicePillars,
  servicesPanoramaCopy,
} from "@/features/servicesPanorama/model/servicesPanoramaContent";
import type {
  ServicePillar,
  ServicesPanoramaCopy,
} from "@/features/servicesPanorama/model/servicesPanoramaTypes";
import { Reveal } from "@/shared/motion/Reveal";

type ServicesPanoramaSectionProps = {
  pillars?: readonly ServicePillar[];
  copy?: ServicesPanoramaCopy;
  className?: string;
};

export function ServicesPanoramaSection({
  pillars = servicePillars,
  copy = servicesPanoramaCopy,
  className,
}: ServicesPanoramaSectionProps) {
  const assetBase = SERVICES_PANORAMA_ASSET_BASE;

  return (
    <section
      aria-labelledby="services-panorama-title"
      className={[
        "relative isolate overflow-clip bg-[radial-gradient(ellipse_at_50%_36%,#FFFFFF_0%,#FAF9F7_76%)] py-12 pb-[90px] font-sans text-[#11221E] max-[600px]:py-[26px] max-[600px]:pb-[54px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <Image
          src={`${assetBase}/svg/architectural-blueprint.svg`}
          width={560}
          height={620}
          alt=""
          className="absolute top-36 left-[-115px] h-auto w-[min(34vw,500px)] -rotate-[4deg] opacity-55 max-[600px]:top-[198px] max-[600px]:left-[-175px] max-[600px]:w-[310px] max-[600px]:opacity-30"
        />
        <Image
          src={`${assetBase}/svg/floorplan-lines.svg`}
          width={520}
          height={430}
          alt=""
          className="absolute right-[-65px] bottom-[-90px] h-auto w-[min(35vw,510px)] -rotate-[14deg] opacity-[0.32] max-[600px]:right-[-160px] max-[600px]:bottom-[-45px] max-[600px]:w-[280px] max-[600px]:opacity-[0.27]"
        />
        <Image
          src={`${assetBase}/svg/brush-strokes.svg`}
          width={820}
          height={370}
          alt=""
          className="absolute top-[250px] left-[-175px] h-auto w-[min(32vw,490px)] -rotate-[18deg] opacity-[0.52] max-[600px]:top-[284px] max-[600px]:left-[-230px] max-[600px]:w-[330px] max-[600px]:opacity-30"
        />
        <Image
          src={`${assetBase}/svg/leaf-outline.svg`}
          width={230}
          height={450}
          alt=""
          className="absolute bottom-[-190px] left-[-60px] h-auto w-[min(19vw,260px)] -rotate-[21deg] opacity-[0.32] blur-[3px] max-[600px]:hidden"
        />
      </div>

      <div className="relative z-[2] mx-auto w-[min(100%-96px,1490px)] max-[1180px]:w-[min(100%-56px,1060px)] max-[600px]:w-[calc(100%-30px)]">
        <Reveal variant="card">
        <ul
          className="m-0 grid list-none grid-cols-6 items-center p-0 max-[1180px]:grid-cols-3 max-[1180px]:gap-y-3 max-[600px]:gap-y-[5px] max-[355px]:grid-cols-2"
          aria-label={copy.stripAriaLabel}
        >
          {pillars.map((item, index) => (
            <li
              key={item.id}
              className={[
                "flex min-h-[76px] min-w-0 items-center gap-[clamp(9px,1vw,19px)] px-[clamp(7px,1.2vw,22px)] py-2",
                index < pillars.length - 1
                  ? "border-r border-[rgba(55,55,55,0.21)]"
                  : "",
                "max-[1180px]:[&:nth-child(3)]:border-r-0 max-[1180px]:[&:nth-child(n+4)]:border-t max-[1180px]:[&:nth-child(n+4)]:border-[rgba(55,55,55,0.10)] max-[1180px]:[&:nth-child(n+4)]:pt-[15px]",
                "max-[600px]:min-h-[102px] max-[600px]:flex-col max-[600px]:justify-start max-[600px]:gap-[7px] max-[600px]:px-[5px] max-[600px]:py-1.5 max-[600px]:text-center",
                "max-[355px]:min-h-[88px] max-[355px]:[&:nth-child(3)]:border-r max-[355px]:[&:nth-child(3)]:border-[rgba(55,55,55,0.21)] max-[355px]:[&:nth-child(even)]:border-r-0 max-[355px]:[&:nth-child(3)]:border-t max-[355px]:[&:nth-child(3)]:border-[rgba(55,55,55,0.10)]",
              ].join(" ")}
            >
              <span
                className="grid size-[57px] shrink-0 place-items-center rounded-full bg-[#F3E6D4] max-[600px]:size-12"
                aria-hidden="true"
              >
                <Image
                  src={`${assetBase}/svg/${item.icon}`}
                  width={42}
                  height={42}
                  alt=""
                  className="size-[39px] max-[600px]:size-[30px]"
                />
              </span>
              <span className="font-sans text-[clamp(10px,0.92vw,14px)] leading-[1.35] font-bold tracking-[0.025em] break-words uppercase max-[600px]:text-[9.3px] max-[600px]:leading-[1.27] max-[600px]:tracking-[0.015em] max-[355px]:text-[9.5px]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
        </Reveal>

        <header className="mx-auto mt-[69px] max-w-[1130px] text-center max-[1180px]:mt-[54px] max-[600px]:mt-[35px] max-[355px]:mt-7">
          <Reveal>
            <p className="mb-[29px] flex items-center justify-center gap-5 font-sans text-sm leading-[1.2] font-semibold tracking-[0.39em] text-[#B18447] uppercase max-[600px]:mb-[18px] max-[600px]:gap-3 max-[600px]:text-[10px] max-[600px]:tracking-[0.28em]">
              <span
                className="inline-block h-px w-[70px] bg-[#B58A4F] max-[600px]:w-[31px]"
                aria-hidden
              />
              {copy.eyebrow}
              <span
                className="inline-block h-px w-[70px] bg-[#B58A4F] max-[600px]:w-[31px]"
                aria-hidden
              />
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="services-panorama-title"
              className="m-0 font-sans text-[clamp(46px,5.2vw,80px)] leading-[1.02] font-medium tracking-[-0.037em] text-balance max-[1180px]:text-[clamp(48px,6.8vw,72px)] max-[600px]:text-[clamp(36px,9.8vw,55px)] max-[600px]:leading-[1.05] max-[600px]:tracking-[-0.044em] max-[355px]:text-[clamp(34px,10.1vw,40px)]"
            >
              {copy.headingLead}{" "}
              <span className="font-medium text-[#B18447] not-italic">
                {copy.headingGoldFirst}
              </span>
              <span className="mt-0.5 block font-medium text-[#B18447] not-italic max-[600px]:mt-0.5">
                {copy.headingGoldSecond}
              </span>
            </h2>
          </Reveal>
        </header>

        <Reveal
          variant="large"
          className="relative mx-auto mt-[42px] max-w-[1379px] overflow-hidden rounded-3xl shadow-[0_20px_44px_rgba(29,42,34,0.08)] leading-[0] max-[1180px]:mt-9 max-[600px]:mt-[27px] max-[600px]:rounded-2xl"
        >
        <figure className="m-0">
          <picture className="block">
            <source
              media="(max-width: 600px)"
              srcSet={`${assetBase}/images/approved-panoramic-interior-mobile.webp`}
              type="image/webp"
            />
            <Image
              src={`${assetBase}/images/approved-panoramic-interior.webp`}
              alt={copy.panoramaAlt}
              width={1379}
              height={521}
              sizes="(max-width: 600px) 92vw, (max-width: 1100px) 94vw, 1380px"
              className="block h-auto w-full max-[600px]:aspect-[1.7] max-[600px]:object-cover"
            />
          </picture>
          <figcaption className="sr-only">{copy.panoramaCaption}</figcaption>
        </figure>
        </Reveal>
      </div>
    </section>
  );
}
