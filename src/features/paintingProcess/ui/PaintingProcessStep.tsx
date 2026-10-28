import Image from "next/image";

import type { PaintingStep } from "@/features/paintingProcess/model/paintingProcessContent";

type PaintingProcessStepProps = {
  step: PaintingStep;
  index: number;
};

export function PaintingProcessStep({ step, index }: PaintingProcessStepProps) {
  const dark = step.tone === "dark";

  return (
    <li
      className={[
        "group/card relative isolate min-w-0 self-start overflow-hidden rounded-lg border border-white/89 shadow-[0_5px_17px_rgba(25,36,30,0.055)]",
        "h-[clamp(264px,73vw,322px)] min-[561px]:h-[clamp(280px,34vw,340px)] min-[821px]:h-[clamp(290px,19.7vw,328px)]",
        "max-[560px]:w-[calc(100%-16px)] max-[560px]:even:ml-4",
        dark ? "bg-[#14352E] text-[#FAF8F1]" : "bg-[#F1E9DF] text-[#102923]",
        index === 1
          ? "max-[560px]:translate-y-0 max-[820px]:translate-y-5 min-[821px]:translate-y-[30px]"
          : "",
        index === 2
          ? "max-[560px]:translate-y-0 max-[820px]:translate-y-0 min-[821px]:translate-y-[59px]"
          : "",
        index === 3
          ? "max-[560px]:translate-y-0 max-[820px]:translate-y-5 min-[821px]:translate-y-[88px]"
          : "",
      ].join(" ")}
    >
      {/* Photo sits on the right half; solid tone fills the left */}
      <div className="pointer-events-none absolute inset-y-0 left-[32%] right-0 z-0 overflow-hidden max-[560px]:left-[22%]">
        <Image
          src={step.image}
          alt={step.alt}
          fill
          sizes="(max-width: 560px) 80vw, (max-width: 820px) 40vw, 20vw"
          className="object-cover object-center"
        />
      </div>

      {/* Soft blend from solid color into the photo */}
      <span
        className={[
          "pointer-events-none absolute inset-0 z-[1]",
          dark
            ? "bg-[linear-gradient(90deg,#14352E_0%,#14352E_34%,rgba(20,53,46,0.78)_48%,rgba(20,53,46,0.28)_68%,transparent_86%)]"
            : "bg-[linear-gradient(90deg,#F1E9DF_0%,#F1E9DF_34%,rgba(241,233,223,0.82)_48%,rgba(241,233,223,0.32)_68%,transparent_86%)]",
        ].join(" ")}
        aria-hidden
      />

      {/* eslint-disable-next-line @next/next/no-img-element -- decorative line art */}
      <img
        className={[
          "pointer-events-none absolute right-0 bottom-0 z-[2] h-[96%] w-[70%] object-contain object-right-bottom",
          dark ? "opacity-[0.34]" : "opacity-[0.28]",
        ].join(" ")}
        src={step.lineArt}
        alt=""
        aria-hidden
      />

      <span className="absolute top-[26px] left-[26px] z-[3] font-sans text-[18px] leading-none text-[#AE824C] tabular-nums min-[700px]:top-[34px] min-[700px]:left-[40px] min-[700px]:text-[21px]">
        {step.number}
      </span>
      <span
        className="absolute top-[66px] left-[26px] z-[3] h-px w-6 bg-[#AE824C] min-[700px]:top-[82px] min-[700px]:left-[40px] min-[700px]:w-[26px]"
        aria-hidden
      />
      <h3 className="absolute top-[98px] left-[26px] z-[3] m-0 max-w-[58%] font-sans text-[clamp(28px,2.4vw,40px)] leading-[1.13] font-normal tracking-[-0.03em] text-balance min-[350px]:max-w-[65%] min-[561px]:top-[106px] min-[561px]:left-[40px] min-[561px]:max-w-[min(62%,260px)] min-[561px]:text-[clamp(26px,3.2vw,36px)] min-[821px]:text-[clamp(24px,2.1vw,34px)]">
        {step.title}
      </h3>
      <span
        className="absolute top-[18px] right-[18px] z-[3] flex size-[46px] items-center justify-center rounded-full bg-[#FFFDF9] shadow-[0_1px_6px_rgba(27,33,31,0.06)] transition-transform duration-200 motion-reduce:transition-none min-[700px]:top-5 min-[700px]:right-[23px] min-[700px]:size-[52px] group-hover/card:translate-x-[3px] motion-reduce:group-hover/card:translate-x-0"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative arrow */}
        <img
          src="/painting-process/svg/arrow-right.svg"
          alt=""
          className="size-[25px]"
        />
      </span>
    </li>
  );
}
