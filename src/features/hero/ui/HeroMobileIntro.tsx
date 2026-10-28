import type { HeroUiCopy } from "@/features/hero/model/heroContent";

type HeroMobileIntroProps = Readonly<{
  content: HeroUiCopy;
}>;

export function HeroMobileIntro({ content }: HeroMobileIntroProps) {
  const headline = content.headline.replace(/\.$/, "");

  return (
    <div className="mx-auto flex w-full max-w-[34rem] flex-col items-center gap-3.5 px-1 text-center">
      <div className="w-full min-w-0">
        <h1 className="m-0 max-w-full text-[clamp(28px,8.5vw,44px)] leading-[1.05] font-extrabold tracking-[-0.04em] break-words text-balance text-[#101213] uppercase">
          {headline}
        </h1>
        <p className="mt-2 mb-0 text-[clamp(16px,4.5vw,22px)] leading-[1.3] font-semibold text-balance text-[#101213]">
          {content.mobileTagline}
        </p>
      </div>

      <p className="m-0 w-full text-[15px] leading-[1.45] text-[#6A7173]">
        {content.mobileBody}
      </p>
    </div>
  );
}
