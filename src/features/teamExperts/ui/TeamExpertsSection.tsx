"use client";

import Image from "next/image";
import { useState } from "react";

import {
  teamExpertsCopy,
  teamMembers as defaultMembers,
} from "@/features/teamExperts/model/teamExpertsContent";
import type { ExpertTeamMember } from "@/features/teamExperts/model/teamExpertsTypes";

type TeamExpertsSectionProps = {
  members?: readonly ExpertTeamMember[];
  description?: string;
  copy?: typeof teamExpertsCopy;
  className?: string;
};

export function TeamExpertsSection({
  members,
  description,
  copy = teamExpertsCopy,
  className,
}: TeamExpertsSectionProps) {
  const roster =
    members && members.length > 0
      ? members
      : copy.members?.length
        ? copy.members
        : defaultMembers;
  const [activeId, setActiveId] = useState<string | null>(null);

  if (roster.length === 0) return null;

  const resolvedDescription = description ?? copy.description;
  const current =
    roster.find((member) => member.id === activeId) ?? roster[0];

  if (!current) return null;

  return (
    <section
      aria-labelledby="experts-title"
      className={[
        "relative isolate w-full min-h-0 overflow-hidden bg-[#FBFAF8] font-sans text-[#09251F] min-[901px]:min-h-[1024px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="pointer-events-none absolute top-5 left-[-20px] -z-[1] h-[745px] w-[min(58vw,755px)] bg-[url('/team-experts/svg/architecture-wireframe-left.svg')] bg-contain bg-no-repeat opacity-[0.39] max-[700px]:top-9 max-[700px]:left-[-20%] max-[700px]:h-[600px] max-[700px]:w-full"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[-5px] right-[-35px] -z-[1] h-[240px] w-[360px] bg-[url('/team-experts/svg/architecture-wireframe-corner.svg')] bg-contain bg-no-repeat opacity-[0.62] max-[700px]:top-0 max-[700px]:right-[-145px] max-[700px]:opacity-30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[246px] left-[-205px] -z-[1] h-[282px] w-[660px] rotate-[1deg] bg-[url('/team-experts/svg/brush-stroke-sage.svg')] bg-contain bg-no-repeat opacity-[0.83] max-[700px]:top-[360px] max-[700px]:left-[-155px] max-[700px]:w-[520px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[321px] left-[-70px] -z-[1] h-[260px] w-[770px] bg-[url('/team-experts/svg/brush-stroke-sand.svg')] bg-contain bg-no-repeat opacity-[0.73] max-[700px]:top-[410px] max-[700px]:left-[-125px] max-[700px]:w-[570px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-94px] left-[-84px] -z-[1] h-[530px] w-[560px] bg-[url('/team-experts/svg/drafting-lines.svg')] bg-contain bg-no-repeat opacity-[0.44] max-[700px]:bottom-[30px] max-[700px]:w-[410px] max-[700px]:opacity-20"
        aria-hidden
      />

      <div className="mx-auto grid w-[min(1326px,calc(100%-96px))] grid-cols-[minmax(0,540px)_minmax(0,1fr)] grid-rows-[auto_1fr] [grid-template-areas:'label_intro'_'photo_roster'] py-[97px] pb-20 max-[1250px]:w-[calc(100%-72px)] max-[1250px]:grid-cols-[44%_56%] max-[900px]:w-[calc(100%-48px)] max-[900px]:gap-y-7 max-[900px]:py-[72px] max-[700px]:flex max-[700px]:w-[calc(100%-40px)] max-[700px]:flex-col max-[700px]:gap-[21px] max-[700px]:py-[52px] max-[700px]:pb-[65px] max-[360px]:w-[calc(100%-28px)] max-[360px]:pt-[38px]">
        <p className="[grid-area:label] m-0 flex items-center justify-self-start gap-3 self-start font-sans text-xs font-semibold leading-[1.2] tracking-[0.28em] text-[#C79B50] uppercase max-[700px]:text-[10px] max-[700px]:tracking-[0.22em]">
          {copy.eyebrow}
          <span
            className="inline-block h-px w-10 bg-[#C79B50]/70"
            aria-hidden
          />
        </p>

        <header className="[grid-area:intro] min-w-0 pt-[27px] max-[1250px]:pt-3 max-[700px]:order-1 max-[700px]:pt-0">
          <h2
            id="experts-title"
            className="m-0 font-sans text-[clamp(46px,4.65vw,71px)] font-medium leading-[0.99] tracking-[-0.035em] max-[1250px]:text-[clamp(39px,4.55vw,60px)] max-[900px]:text-[clamp(34px,4.7vw,45px)] max-[700px]:text-[clamp(34px,9vw,48px)] max-[700px]:leading-[1.02] max-[360px]:text-[33px]"
          >
            <span className="block whitespace-nowrap max-[900px]:whitespace-normal">
              {copy.headingLead}{" "}
              <span className="text-[#C79B50] not-italic">
                {copy.headingGoldFirst}
              </span>
            </span>
            <span className="block whitespace-nowrap max-[900px]:whitespace-normal">
              <span className="text-[#C79B50] not-italic">
                {copy.headingGoldSecond}
              </span>{" "}
              {copy.headingTail}
            </span>
          </h2>
          <p className="relative mt-[26px] mb-0 max-w-[760px] pl-[65px] font-sans text-lg leading-[1.45] text-[#85868A] before:absolute before:top-2.5 before:left-0 before:h-px before:w-12 before:bg-[#D1A35D] max-[900px]:mt-[18px] max-[900px]:pl-0 max-[900px]:text-[15px] max-[900px]:before:hidden max-[700px]:mt-[17px] max-[700px]:max-w-[540px] max-[700px]:text-sm max-[700px]:leading-[1.6]">
            {resolvedDescription}
          </p>
        </header>

        <figure className="[grid-area:photo] relative mt-[-6px] ml-[38px] aspect-[530/608] w-[530px] max-w-[530px] self-start overflow-hidden rounded-[22px] bg-[#DED8CE] shadow-[0_16px_35px_rgba(24,35,31,0.05)] max-[1250px]:ml-0 max-[1250px]:w-[98%] max-[700px]:order-2 max-[700px]:mx-auto max-[700px]:mt-2 max-[700px]:w-full max-[700px]:max-w-[470px] max-[700px]:rounded-[18px]">
          <Image
            key={current.id}
            src={current.portraitSrc}
            alt={`${current.name}, ${current.role}`}
            width={1060}
            height={1216}
            sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1180px) 43vw, 530px"
            className="block size-full object-cover object-center"
          />
        </figure>

        <ol
          className="[grid-area:roster] m-0 mt-[55px] ml-[119px] flex min-w-0 list-none flex-col gap-2 p-0 min-[1251px]:w-[calc(100%-92px)] max-[1250px]:ml-[25px] max-[900px]:mt-[5px] max-[900px]:ml-3.5 max-[700px]:order-3 max-[700px]:mt-2 max-[700px]:ml-0 max-[700px]:w-full max-[700px]:gap-[9px]"
          aria-label={copy.rosterAriaLabel}
        >
          {roster.map((member, index) => {
            const active = member.id === current.id;
            return (
              <li key={member.id} className="m-0 p-0">
                <button
                  type="button"
                  className={[
                    "flex w-full min-h-[94px] cursor-pointer items-center gap-[26px] rounded-[17px] border border-[rgba(222,220,214,0.65)] bg-white/75 px-[22px] py-1.5 text-left text-[#09251F] shadow-[0_7px_22px_rgba(39,43,36,0.035)] transition-[border-color,background-color,transform] duration-200 ease-out motion-reduce:transition-none",
                    "hover:border-[rgba(192,139,55,0.7)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
                    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#B98936]",
                    "max-[1250px]:gap-4 max-[1250px]:pl-[15px] max-[900px]:min-h-[74px] max-[900px]:gap-2.5 max-[900px]:rounded-[14px] max-[900px]:px-3 max-[700px]:min-h-[76px] max-[700px]:gap-3 max-[700px]:px-3 max-[700px]:py-2 max-[360px]:gap-2 max-[360px]:p-[7px]",
                    active
                      ? "border-[#DCAB67] bg-[rgba(255,251,245,0.96)]"
                      : "",
                  ].join(" ")}
                  onClick={() => setActiveId(member.id)}
                  aria-pressed={active}
                  aria-label={`Show ${member.name}, ${member.role}`}
                >
                  <span
                    className={[
                      "w-8 shrink-0 font-sans text-xl leading-none tabular-nums max-[900px]:w-[25px] max-[900px]:text-sm max-[700px]:w-[26px] max-[700px]:text-[15px] max-[360px]:w-[22px]",
                      active ? "text-[#C58828]" : "text-[#92969A]",
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={member.avatarSrc}
                    alt=""
                    width={82}
                    height={82}
                    sizes="(max-width: 600px) 52px, 82px"
                    className="size-[82px] shrink-0 rounded-full object-cover max-[900px]:size-14 max-[700px]:size-[54px]"
                  />
                  <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <span
                      className={[
                        "font-sans text-[clamp(17px,1.5vw,24px)] leading-[1.12] font-bold tracking-[-0.025em] break-words max-[900px]:text-base max-[700px]:text-[clamp(15px,4.2vw,19px)]",
                        active ? "text-[#C68A23]" : "text-[#09251F]",
                      ].join(" ")}
                    >
                      {member.name}
                    </span>
                    <span className="font-sans text-sm leading-[1.25] tracking-[0.035em] text-[#898B8E] uppercase max-[900px]:text-[10px] max-[700px]:tracking-[0.025em] max-[360px]:text-[9px]">
                      {member.role}
                    </span>
                  </span>
                  <span
                    className={[
                      "size-6 shrink-0 bg-[url('/team-experts/svg/arrow-up-right.svg')] bg-contain bg-center bg-no-repeat max-[900px]:size-[18px] max-[360px]:size-[17px]",
                      active
                        ? "[filter:invert(61%)_sepia(65%)_saturate(559%)_hue-rotate(353deg)_brightness(91%)_contrast(88%)]"
                        : "",
                    ].join(" ")}
                    aria-hidden
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
