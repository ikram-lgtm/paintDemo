import Image from "next/image";

import type {
  ProcessMetric,
  ProcessUiCopy,
} from "@/features/paintingProcess/model/paintingProcessContent";
import { PaintingProcessStep } from "@/features/paintingProcess/ui/PaintingProcessStep";
import { Reveal } from "@/shared/motion/Reveal";

export type PaintingProcessSectionProps = Readonly<{
  copy: ProcessUiCopy;
  /** Pass EXACTLY four verified business metrics. No example values. */
  metrics?: readonly ProcessMetric[];
  id?: string;
  className?: string;
}>;

export function PaintingProcessSection({
  copy,
  metrics,
  id = "painting-process",
  className,
}: PaintingProcessSectionProps) {
  const verifiedMetrics = metrics?.length === 4 ? metrics : null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={[
        "relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_78%_31%,#FFFDFA_0%,transparent_43%),#F9F7F2] py-[34px] pb-[58px] font-sans text-[#101B18] max-[560px]:py-[26px] max-[560px]:pb-[37px] max-[820px]:py-[35px] max-[820px]:pb-12",
        className ?? "",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute top-[158px] left-[-30px] z-0 h-[335px] w-[330px] bg-[url('/painting-process/svg/blueprint-house.svg')] bg-contain bg-no-repeat opacity-[0.43] max-[560px]:top-[170px] max-[560px]:w-[170px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[208px] right-[-85px] z-0 h-[355px] w-[345px] bg-[url('/painting-process/svg/blueprint-elevation.svg')] bg-contain bg-no-repeat opacity-[0.32] max-[560px]:top-[490px] max-[560px]:w-[180px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[300px] left-[25%] z-0 h-[150px] w-[660px] -rotate-[14deg] bg-[url('/painting-process/svg/paint-swath.svg')] bg-contain bg-no-repeat opacity-[0.64] max-[560px]:top-[490px] max-[560px]:w-[300px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[310px] left-[-2%] z-0 text-[clamp(140px,17vw,295px)] leading-none font-extrabold tracking-[-0.08em] text-[#DBD8D0] opacity-[0.29] select-none max-[560px]:top-[450px] max-[560px]:text-[26vw] max-[820px]:top-[350px] max-[820px]:text-[24vw]"
        aria-hidden
      >
        {copy.watermark}
      </div>

      <div className="relative z-[2] mx-auto w-[min(1360px,calc(100%-88px))] max-[560px]:w-[calc(100%-32px)] max-[820px]:w-[calc(100%-36px)] max-[1100px]:w-[min(100%-48px,1000px)]">
        {verifiedMetrics ? (
          <dl
            className="mx-auto mb-2 grid w-[min(890px,100%)] grid-cols-4 gap-0 p-0 max-[560px]:mb-8 max-[560px]:grid-cols-2 max-[560px]:gap-y-6 max-[820px]:mb-6"
            aria-label={copy.stepsAria}
          >
            {verifiedMetrics.map((metric, i) => (
              <div
                key={metric.id}
                className="m-0 min-w-0 border-r border-[#E5DFD5] px-[22px] last:border-r-0 max-[560px]:px-[7px] max-[560px]:pl-2.5 max-[560px]:even:border-r-0 max-[820px]:px-3"
              >
                <dd
                  className={[
                    "m-0 pb-1.5 text-[clamp(34px,4vw,54px)] leading-[1.08] font-bold tracking-[-0.045em] max-[560px]:text-[clamp(34px,9vw,44px)] max-[820px]:text-[35px]",
                    i % 2 === 1 ? "text-[#C28A3D]" : "",
                  ].join(" ")}
                >
                  {metric.value}
                </dd>
                <dt className="border-t border-[#D7D2C8] pt-[11px] text-[15px] leading-[1.25] font-bold max-[560px]:pt-2 max-[560px]:text-xs max-[820px]:text-xs">
                  {metric.label}
                </dt>
                <dd className="mt-2 mb-0 max-w-[196px] text-xs leading-[1.45] text-[#666B68] max-[560px]:mt-1 max-[560px]:text-[11px] max-[820px]:text-[11px]">
                  {metric.description}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div
          className={[
            "relative flex flex-col items-center max-[820px]:mb-5",
            verifiedMetrics ? "" : "mt-[18px]",
          ].join(" ")}
        >
          <div className="relative z-[3] mx-auto w-[min(920px,100%)] max-w-[920px] py-[26px] text-center max-[560px]:px-0.5 max-[560px]:py-0 max-[820px]:max-w-[650px] max-[820px]:px-2.5 max-[820px]:pt-1">
            <Reveal>
              <p className="mb-[19px] flex items-center justify-center gap-[22px] text-[12px] leading-[1.2] font-semibold tracking-[0.28em] text-[#C28A3D] uppercase max-[560px]:mb-4 max-[560px]:gap-3 max-[560px]:text-[10px] max-[560px]:tracking-[0.2em]">
                <span
                  className="inline-block h-px w-10 bg-[#C28A3D]/70 max-[560px]:w-7"
                  aria-hidden
                />
                {copy.eyebrow}
                <span
                  className="inline-block h-px w-10 bg-[#C28A3D]/70 max-[560px]:w-7"
                  aria-hidden
                />
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                id={`${id}-title`}
                className="m-0 text-[clamp(36px,3.8vw,56px)] leading-[1.08] font-semibold tracking-[-0.047em] text-balance max-[560px]:text-[clamp(34px,8.5vw,46px)] max-[560px]:leading-[1.08] max-[820px]:text-[clamp(36px,5.5vw,48px)] max-[1100px]:text-[clamp(34px,3.8vw,48px)]"
              >
                <span className="block">{copy.headingStart}</span>
                <span className="block font-semibold text-[#C28A3D]">
                  {copy.headingAccent}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-[22px] mb-0 max-w-[465px] text-[clamp(14px,1.15vw,17px)] leading-[1.52] text-[#646967] max-[560px]:mt-4 max-[560px]:max-w-[390px] max-[560px]:text-sm max-[820px]:mt-[15px] max-[820px]:text-[15px]">
                {copy.lead}
              </p>
            </Reveal>
          </div>

          <Reveal variant="large" className="relative z-[2] mx-auto mt-2 aspect-[802/434] w-[min(100%,920px)] max-[560px]:mt-3 max-[560px]:w-[calc(100%+32px)] max-[560px]:max-w-none">
            <div className="relative h-full w-full" aria-label={copy.houseAlt}>
              <Image
                src="/painting-process/images/isometric-painting-house-cutout.webp"
                alt={copy.houseAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1050px) 85vw, 63vw"
                className="object-contain"
              />
            </div>
          </Reveal>
        </div>

        <Reveal variant="card">
          <ol
            className="relative m-0 grid list-none grid-cols-4 gap-4 px-[26px] pb-24 max-[560px]:flex max-[560px]:flex-col max-[560px]:gap-4 max-[560px]:px-0 max-[560px]:pb-[35px] max-[820px]:grid-cols-2 max-[820px]:gap-3.5 max-[820px]:px-0 max-[820px]:pb-[58px] max-[1100px]:gap-3 max-[1100px]:px-0"
            aria-label={copy.stepsAria}
          >
            {copy.steps.map((step, index) => (
              <PaintingProcessStep
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="m-0 flex flex-wrap items-center justify-center gap-[18px] text-center text-[11px] leading-[1.4] font-medium tracking-[0.28em] text-[#28302C] uppercase max-[560px]:gap-[7px] max-[560px]:text-[8px] max-[560px]:tracking-[0.12em] max-[820px]:mt-2">
            <span
              className="block h-px w-[46px] shrink-0 bg-[#C28A3D] max-[560px]:w-[18px]"
              aria-hidden
            />
            <span>
              {copy.tagStart}{" "}
              <b className="font-semibold text-[#C28A3D]">{copy.tagAccent}</b>
            </span>
            <span
              className="block h-px w-[46px] shrink-0 bg-[#C28A3D] max-[560px]:w-[18px]"
              aria-hidden
            />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
