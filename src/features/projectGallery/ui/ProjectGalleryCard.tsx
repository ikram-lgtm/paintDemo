import Image from "next/image";
import Link from "next/link";

import type { ProjectGalleryItem } from "@/features/projectGallery/model/projectGalleryTypes";

type ProjectGalleryCardProps = {
  project: ProjectGalleryItem;
  index: number;
  cardRef: (element: HTMLElement | null) => void;
  viewLabel?: string;
};

export function ProjectGalleryCard({
  project,
  index,
  cardRef,
  viewLabel = "View project ↗",
}: ProjectGalleryCardProps) {
  const lowered = index % 2 === 1;

  const visual = (
    <>
      <div
        className={[
          "relative overflow-hidden rounded-[17px] bg-[#E9E2D8]",
          "h-[clamp(365px,26.8vw,447px)] max-[1023px]:h-[395px] max-[639px]:h-[clamp(280px,87vw,380px)] max-[639px]:rounded-[14px]",
        ].join(" ")}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 639px) 78vw, (max-width: 1023px) 45vw, 392px"
          className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.2,0.75,0.3,1)] motion-reduce:transition-none group-hover/card:scale-[1.055] motion-reduce:group-hover/card:scale-100"
          quality={85}
          priority={index === 0 || index === 2}
        />
        {project.categories && project.categories.length > 0 ? (
          <div className="absolute top-5 left-5 flex max-w-[calc(100%-40px)] gap-[11px] max-[639px]:top-3.5 max-[639px]:left-3 max-[639px]:gap-[7px] max-[639px]:max-w-[calc(100%-24px)]">
            {project.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/85 bg-[rgba(20,25,24,0.11)] px-3.5 py-2 text-[11px] leading-[1.1] font-semibold tracking-[0.02em] whitespace-nowrap text-white uppercase backdrop-blur-[5px] max-[639px]:px-2.5 max-[639px]:py-[7px] max-[639px]:text-[10px]"
              >
                {category}
              </span>
            ))}
          </div>
        ) : null}
        {project.href ? (
          <span className="absolute right-4 bottom-4 translate-y-[7px] rounded-full bg-[rgba(13,39,34,0.86)] px-4 py-2.5 text-[12px] font-semibold text-white opacity-0 transition-[opacity,transform] duration-200 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-visible/card:translate-y-0 group-focus-visible/card:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none max-[639px]:right-[9px] max-[639px]:bottom-[9px] max-[639px]:translate-y-0 max-[639px]:px-[11px] max-[639px]:py-[9px] max-[639px]:text-[10px] max-[639px]:opacity-100">
            {viewLabel}
          </span>
        ) : null}
      </div>
      <div className="mt-3.5 mr-1 ml-1 max-[639px]:mt-3 max-[639px]:mr-px max-[639px]:ml-px">
        <h3 className="m-0 text-[clamp(21px,1.55vw,29px)] leading-[1.2] font-medium tracking-[-0.04em] max-[639px]:text-[23px]">
          {project.title}
        </h3>
        {project.location || project.year ? (
          <p className="mt-2.5 mb-0 flex flex-col gap-0.5 text-[15px] leading-[1.35] text-[#727477] max-[639px]:mt-[7px] max-[639px]:text-[13px]">
            {project.location ? <span>{project.location}</span> : null}
            {project.year ? <span>{project.year}</span> : null}
          </p>
        ) : null}
      </div>
    </>
  );

  return (
    <article
      ref={cardRef}
      className={[
        "w-[clamp(310px,23.45vw,392px)] shrink-0 snap-center max-[1023px]:w-[min(45vw,350px)] max-[639px]:w-[78vw] max-[639px]:max-w-[345px]",
        lowered
          ? "mt-11 max-[1023px]:mt-[35px] max-[639px]:mt-[23px]"
          : "mt-0",
      ].join(" ")}
    >
      {project.href ? (
        <Link
          href={project.href}
          className="group/card block text-inherit no-underline focus-visible:rounded-[18px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BB9660]"
          aria-label={`${viewLabel}: ${project.title}`}
        >
          {visual}
        </Link>
      ) : (
        <div className="block">{visual}</div>
      )}
    </article>
  );
}
