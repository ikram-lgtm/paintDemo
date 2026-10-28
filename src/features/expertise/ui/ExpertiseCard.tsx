import Image from "next/image";
import Link from "next/link";

import type { ExpertiseCard as ExpertiseCardModel } from "@/features/expertise/model/expertiseData";

type ExpertiseCardProps = {
  card: ExpertiseCardModel;
  href?: string;
  wide?: boolean;
  /** Full-bleed on tablet 2-col grid (last card). */
  tabletFull?: boolean;
  /** Mobile scroll-snap slide — fixed height, no grid spans. */
  layout?: "grid" | "slider";
};

function CardContents({
  card,
  wide,
}: {
  card: ExpertiseCardModel;
  wide?: boolean;
}) {
  const dark = card.tone === "dark";

  return (
    <>
      <Image
        src={card.image}
        alt=""
        fill
        sizes="(max-width: 699px) 100vw, (max-width: 1099px) 50vw, 40vw"
        className="pointer-events-none z-0 object-fill"
      />
      {/* Decorative line art — pack SVG */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={[
          "pointer-events-none absolute right-0 bottom-0 z-[1] h-[96%] w-[88%] object-contain",
          dark ? "opacity-[0.31]" : "opacity-[0.29]",
        ].join(" ")}
        src={card.lineArt}
        alt=""
        aria-hidden
      />
      <span
        className={[
          "pointer-events-none absolute inset-0 z-[2]",
          dark
            ? "bg-[linear-gradient(90deg,rgba(12,34,29,0.30)_0%,transparent_72%)]"
            : "bg-[linear-gradient(90deg,rgba(255,250,245,0.30)_0%,transparent_64%)]",
        ].join(" ")}
        aria-hidden
      />
      <span className="absolute top-[26px] left-[26px] z-[3] font-sans text-[18px] leading-none text-[#AE824C] tabular-nums min-[700px]:top-[34px] min-[700px]:left-[40px] min-[700px]:text-[21px]">
        {card.number}
      </span>
      <span
        className="absolute top-[66px] left-[26px] z-[3] h-px w-6 bg-[#AE824C] min-[700px]:top-[82px] min-[700px]:left-[40px] min-[700px]:w-[26px]"
        aria-hidden
      />
      <h3
        className={[
          "absolute top-[98px] left-[26px] z-[3] m-0 max-w-[62%] font-sans text-[clamp(35px,10vw,43px)] leading-[1.13] font-normal tracking-[-0.03em] text-balance min-[350px]:max-w-[68%] min-[700px]:top-[106px] min-[700px]:left-[40px] min-[700px]:max-w-[min(58%,340px)] min-[700px]:text-[clamp(32px,4vw,43px)] min-[1100px]:text-[clamp(33px,2.65vw,45px)]",
          wide
            ? "min-[1100px]:top-[108px] min-[1100px]:text-[clamp(37px,3vw,48px)]"
            : "",
        ].join(" ")}
      >
        {card.title}
      </h3>
      <span
        className="absolute top-[18px] right-[18px] z-[3] flex size-[46px] items-center justify-center rounded-full bg-[#FFFDF9] shadow-[0_1px_6px_rgba(27,33,31,0.06)] transition-transform duration-200 motion-reduce:transition-none min-[700px]:top-5 min-[700px]:right-[23px] min-[700px]:size-[52px] group-hover/card:translate-x-[3px] motion-reduce:group-hover/card:translate-x-0"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/expertise/svg/decor/arrow-right.svg"
          alt=""
          className="size-[25px]"
        />
      </span>
    </>
  );
}

export function ExpertiseCard({
  card,
  href,
  wide,
  tabletFull,
  layout = "grid",
}: ExpertiseCardProps) {
  const dark = card.tone === "dark";
  const slider = layout === "slider";
  const className = [
    "group/card relative isolate block min-w-0 overflow-hidden rounded-lg border border-white/89 no-underline shadow-[0_5px_17px_rgba(25,36,30,0.055)] transition-shadow duration-250 motion-reduce:transition-none",
    slider
      ? "h-[min(322px,78vw)] w-full"
      : [
          "h-[clamp(264px,73vw,322px)] min-[700px]:h-[clamp(280px,34vw,340px)] min-[1100px]:h-[clamp(290px,19.7vw,328px)]",
          wide
            ? "min-[1100px]:col-span-3 min-[1100px]:h-[clamp(278px,17.75vw,300px)]"
            : "min-[1100px]:col-span-2",
          tabletFull ? "min-[700px]:max-[1099px]:col-span-2" : "",
        ].join(" "),
    dark ? "bg-[#14352E] text-[#FAF8F1]" : "bg-[#F1E9DF] text-[#102923]",
    href
      ? "hover:shadow-[0_11px_25px_rgba(25,36,30,0.13)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#AE824C]"
      : "",
  ].join(" ");

  const contents = <CardContents card={card} wide={Boolean(wide)} />;

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        aria-label={`Explore ${card.title}`}
      >
        {contents}
      </Link>
    );
  }

  return <article className={className}>{contents}</article>;
}
