import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import type { HeroUiCopy } from "@/features/hero/model/heroContent";

type HeroIntroProps = Readonly<{
  content: HeroUiCopy;
}>;

export function HeroIntro({ content }: HeroIntroProps) {
  return (
    <div
      className="box-border w-full overflow-hidden rounded-[22px] border border-white/40 p-5 shadow-[0_12px_28px_rgba(17,18,19,0.08)] backdrop-blur-[6px]"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.72)" }}
    >
      <p className="m-0 text-[16px] leading-[1.35] font-medium text-ink">
        {content.intro}
      </p>
      <Link
        href={content.projectsCta.href}
        className="mt-5 inline-flex h-[48px] w-full items-center justify-between gap-2 rounded-full border border-[#B4B7B7] bg-white px-5 text-[14px] font-semibold text-ink no-underline"
      >
        <span className="min-w-0 truncate">{content.projectsCta.label}</span>
        <HiArrowRight className="size-4 shrink-0" aria-hidden />
      </Link>
    </div>
  );
}
