import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import type { HeroUiCopy } from "@/features/hero/model/heroContent";

type HeroMobileActionsProps = Readonly<{
  content: HeroUiCopy;
}>;

export function HeroMobileActions({ content }: HeroMobileActionsProps) {
  const { projectsCta } = content;

  return (
    <div className="flex w-full justify-center">
      <Link
        href={projectsCta.href}
        className="inline-flex min-h-[52px] w-full max-w-[280px] items-center justify-between gap-3 rounded-full bg-[#141414] px-5 text-[14px] font-semibold text-white no-underline"
      >
        <span className="min-w-0 truncate">{projectsCta.label}</span>
        <HiArrowRight className="size-4 shrink-0" aria-hidden />
      </Link>
    </div>
  );
}
