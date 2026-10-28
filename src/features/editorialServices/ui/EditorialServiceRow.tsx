import Image from "next/image";
import Link from "next/link";

import type { EditorialService } from "@/features/editorialServices/model/editorialServicesContent";

type EditorialServiceRowProps = {
  service: EditorialService;
  index: number;
  selected: boolean;
  onSelect: () => void;
};

export function EditorialServiceRow({
  service,
  index,
  selected,
  onSelect,
}: EditorialServiceRowProps) {
  return (
    <div
      className={[
        "relative flex min-h-[69px] w-full items-center gap-3 border-b border-[#E7E1D8] px-3 py-4 font-sans transition-[background-color,border-color,color] duration-150 motion-reduce:transition-none min-[1024px]:min-h-[87px] min-[1024px]:gap-4 min-[1024px]:px-4",
        selected
          ? "rounded-xl border border-[#E4CBA8] bg-[#F7EFE3] text-[#B98748]"
          : "text-[#132C27] hover:bg-[#F7EFE3]/45",
      ].join(" ")}
    >
      <button
        type="button"
        aria-pressed={selected}
        onClick={onSelect}
        className="relative z-[1] flex min-w-0 flex-1 items-center gap-3 border-0 bg-transparent p-0 text-left text-inherit"
      >
        <span
          className={[
            "w-8 shrink-0 text-[13px] font-semibold tracking-[0.06em] tabular-nums min-[1024px]:w-[35px]",
            selected ? "text-[#B98748]" : "text-[#67706B]",
          ].join(" ")}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1 text-[16px] leading-[1.25] font-semibold tracking-[-0.02em] min-[375px]:text-[17px] min-[1024px]:text-[19px]">
          {service.title}
        </span>
      </button>
      <Image
        src={service.icon}
        alt=""
        width={68}
        height={65}
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-14 z-0 h-[52px] w-auto -translate-y-1/2 opacity-15 min-[1024px]:right-16 min-[1024px]:h-[65px]"
        style={{ width: "auto" }}
      />
      <Link
        href={service.href}
        aria-label={`Explore ${service.title}`}
        className={[
          "relative z-[1] inline-flex size-[39px] shrink-0 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#B98748] min-[1024px]:size-11",
          selected
            ? "bg-[#B98748]"
            : "bg-[#FFFDF9] shadow-[0_1px_6px_rgba(27,33,31,0.06)]",
        ].join(" ")}
      >
        <Image
          src="/assets/renovation-editorial/decor/arrow-right.svg"
          width={20}
          height={20}
          alt=""
          className={selected ? "brightness-0 invert" : ""}
        />
      </Link>
    </div>
  );
}
