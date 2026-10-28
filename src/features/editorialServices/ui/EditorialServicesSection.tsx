import { EditorialServicesStage } from "@/features/editorialServices/ui/EditorialServicesStage";
import type { EditorialUiCopy } from "@/features/editorialServices/model/editorialServicesContent";
import { Reveal } from "@/shared/motion/Reveal";

type EditorialServicesSectionProps = {
  copy: EditorialUiCopy;
  className?: string;
};

export function EditorialServicesSection({
  copy,
  className,
}: EditorialServicesSectionProps) {
  return (
    <section
      aria-labelledby="editorial-services-heading"
      className={[
        "relative isolate overflow-hidden bg-[#FAF9F6] font-sans text-[#132C27]",
        className ?? "",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute top-[-7%] left-[-8%] -z-[1] aspect-[760/600] w-[min(41vw,660px)] bg-[url('/assets/renovation-editorial/decor/architectural-left.svg')] bg-contain bg-no-repeat opacity-[0.16]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[-4%] right-[-8%] -z-[1] aspect-[740/580] w-[min(37vw,570px)] bg-[url('/assets/renovation-editorial/decor/architectural-right.svg')] bg-contain bg-no-repeat opacity-[0.16]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[1660px] px-[clamp(14px,3.2vw,60px)] pt-[clamp(60px,5vw,84px)] pb-[94px] max-[375px]:px-3.5">
        <header className="relative z-[1] text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-[19px] text-[12px] leading-[1.5] font-semibold tracking-[0.39em] text-[#B98748] uppercase max-[760px]:gap-3 max-[760px]:text-[10px] max-[760px]:tracking-[0.26em]">
              <span
                className="inline-block h-px w-[68px] bg-[#B98748] opacity-75 max-[760px]:w-[37px]"
                aria-hidden
              />
              {copy.eyebrow}
              <span
                className="inline-block h-px w-[68px] bg-[#B98748] opacity-75 max-[760px]:w-[37px]"
                aria-hidden
              />
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="editorial-services-heading"
              className="mt-[26px] mb-[18px] text-[clamp(33px,3.65vw,61px)] leading-[1.1] font-normal tracking-[-0.037em] text-balance"
            >
              {copy.headingStart}{" "}
              <span className="text-[#B98748]">{copy.headingAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto max-w-[735px] text-[clamp(14px,1.15vw,18px)] leading-[1.55] tracking-[0.005em] text-[#67706B]">
              {copy.lead}
            </p>
          </Reveal>
        </header>

        <EditorialServicesStage
          services={copy.services}
          selectAria={copy.selectAria}
        />
      </div>
    </section>
  );
}
