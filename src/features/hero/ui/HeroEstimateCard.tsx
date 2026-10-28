import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import type { HeroUiCopy } from "@/features/hero/model/heroContent";
import { heroPaths } from "@/shared/config/tokens";

type HeroEstimateCardProps = Readonly<{
  content: HeroUiCopy;
}>;

export function HeroEstimateCard({ content }: HeroEstimateCardProps) {
  const { estimateCard } = content;

  return (
    <aside className="box-border flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[22px] bg-white p-5 shadow-[0_16px_36px_rgba(17,18,19,0.1)]">
      <div className="mb-4 flex items-center" aria-hidden>
        <span className="flex size-[28px] items-center justify-center rounded-full bg-[#e8eef3] ring-2 ring-white">
          <Image
            src={heroPaths.brandMark}
            alt=""
            width={16}
            height={14}
            className="h-[14px] w-auto opacity-80"
            style={{ width: "auto" }}
          />
        </span>
        <span className="-ml-2 size-[28px] rounded-full bg-[#dfe6ec] ring-2 ring-white" />
        <span className="-ml-2 size-[28px] rounded-full bg-[#cfd6dc] ring-2 ring-white" />
      </div>

      <h2 className="m-0 text-[20px] leading-[1.2] font-bold text-ink">
        {estimateCard.title}
      </h2>
      <p className="mt-3 mb-0 flex-1 text-[13px] leading-[1.45] text-muted">
        {estimateCard.body}
      </p>
      <Link
        href={estimateCard.href}
        className="mt-4 inline-flex h-[50px] w-full min-w-0 items-center justify-between gap-2 rounded-full bg-button-ink px-5 text-[14px] font-semibold text-white no-underline"
      >
        <span className="min-w-0 truncate">{estimateCard.ctaLabel}</span>
        <HiArrowRight className="size-4 shrink-0" aria-hidden />
      </Link>
    </aside>
  );
}
