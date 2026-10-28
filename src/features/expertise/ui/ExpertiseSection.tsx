import type {
  ExpertiseCard as ExpertiseCardModel,
  ExpertiseUiCopy,
} from "@/features/expertise/model/expertiseData";
import { ExpertiseCard } from "@/features/expertise/ui/ExpertiseCard";
import { ExpertiseSlider } from "@/features/expertise/ui/ExpertiseSlider";
import { Reveal } from "@/shared/motion/Reveal";

type ExpertiseSectionProps = Readonly<{
  copy: ExpertiseUiCopy;
  /** Existing, verified URLs by card id; missing values produce non-clickable articles. */
  links?: Partial<Record<ExpertiseCardModel["id"], string>>;
  className?: string;
}>;

export function ExpertiseSection({
  copy,
  links = {},
  className,
}: ExpertiseSectionProps) {
  return (
    <section
      aria-labelledby="expertise-heading"
      className={[
        "relative isolate overflow-clip bg-[radial-gradient(ellipse_at_47%_45%,#FFFDF9,#F8F6F2_80%)] px-0 pt-[clamp(64px,5.2vw,82px)] pb-16 font-sans text-[#102923] max-[699px]:py-16 max-[699px]:pb-[72px]",
        className ?? "",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-[-5%_-2%_auto_auto] -z-[1] aspect-[1000/640] w-[min(66vw,850px)] bg-[url('/expertise/svg/decor/architecture-outline.svg')] bg-contain bg-center bg-no-repeat opacity-35 max-[699px]:w-[92vw] max-[699px]:opacity-[0.22]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-6%] left-[-5%] -z-[1] aspect-[440/650] w-[clamp(180px,24vw,410px)] bg-[url('/expertise/svg/decor/foreground-leaves.svg')] bg-contain bg-center bg-no-repeat opacity-30 max-[699px]:opacity-[0.17]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-[min(calc(100%-(2*clamp(20px,2.9vw,48px))),1580px)] max-[699px]:w-[calc(100%-36px)] max-[350px]:w-[calc(100%-32px)]">
        <header className="mx-auto mb-12 text-center max-[1099px]:mb-[38px] max-[699px]:mb-8">
          <Reveal>
            <p className="mb-[19px] flex items-center justify-center gap-[22px] text-[15px] leading-[1.2] font-medium tracking-[0.32em] text-[#AE824C] uppercase max-[699px]:mb-4 max-[699px]:gap-3 max-[699px]:text-[11px] max-[699px]:tracking-[0.25em]">
              <span
                className="inline-block h-px w-[60px] bg-[color-mix(in_srgb,#AE824C_70%,transparent)] max-[699px]:w-8"
                aria-hidden
              />
              {copy.eyebrow}
              <span
                className="inline-block h-px w-[60px] bg-[color-mix(in_srgb,#AE824C_70%,transparent)] max-[699px]:w-8"
                aria-hidden
              />
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="expertise-heading"
              className="m-0 font-sans text-[clamp(40px,3.95vw,65px)] leading-[1.12] font-normal tracking-[-0.035em] text-balance max-[699px]:text-[clamp(35px,9.7vw,43px)]"
            >
              {copy.headingStart}{" "}
              <span className="text-[#AE824C]">{copy.headingAccent}</span>
            </h2>
          </Reveal>
        </header>

        <ExpertiseSlider
          cards={copy.cards}
          links={links}
          sliderLabel={copy.sliderLabel}
        />

        <Reveal variant="card" className="hidden min-[700px]:block">
          <div className="grid grid-cols-1 gap-3 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-6">
            {copy.cards.map((card, index) => {
              const href = links[card.id];
              return (
                <ExpertiseCard
                  key={card.id}
                  card={card}
                  {...(href ? { href } : {})}
                  wide={index > 2}
                  tabletFull={index === copy.cards.length - 1}
                />
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
