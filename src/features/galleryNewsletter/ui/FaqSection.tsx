import type {
  FaqItem,
  GalleryNewsletterCopy,
} from "@/features/galleryNewsletter/model/galleryNewsletterTypes";
import { Reveal } from "@/shared/motion/Reveal";

type FaqSectionProps = {
  copy: GalleryNewsletterCopy;
  items: readonly FaqItem[];
  className?: string;
};

export function FaqSection({ copy, items, className }: FaqSectionProps) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={[
        "relative isolate overflow-hidden bg-[#F3F1EB] px-6 py-[clamp(64px,8vw,126px)] font-sans text-[#112C25] max-[560px]:px-4 max-[560px]:pt-[60px] max-[560px]:pb-[74px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="pointer-events-none absolute bottom-[-145px] left-[-130px] size-[470px] bg-[url('/gallery-newsletter/svgs/architectural-wireframe-left.svg')] bg-contain bg-center bg-no-repeat opacity-[0.36]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-[min(100%,1210px)] grid-cols-[minmax(285px,0.78fr)_minmax(400px,1.22fr)] items-start gap-[clamp(35px,7vw,108px)] max-[850px]:grid-cols-1 max-[850px]:gap-7">
        <div className="relative">
          <Reveal>
            <p className="m-0 flex items-center gap-3 font-sans text-[11px] leading-none font-semibold tracking-[0.15em] text-[#AD7838] uppercase">
              {copy.faqEyebrow}
              <span
                className="inline-block h-px w-10 bg-[#AD7838]/70"
                aria-hidden
              />
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="faq-heading"
              className="relative z-[1] mt-[22px] mb-[22px] font-sans text-[clamp(34px,3.6vw,56px)] leading-[1.08] font-medium tracking-[-0.045em] max-[850px]:text-[clamp(36px,6.5vw,52px)] max-[560px]:text-[clamp(32px,8.5vw,40px)]"
            >
              <span className="block whitespace-nowrap">
                {copy.faqHeadingLead}
              </span>
              <span className="block whitespace-nowrap font-normal text-[#B98947] not-italic">
                {copy.faqHeadingGold}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="relative z-[1] m-0 max-w-[350px] font-sans text-[15px] leading-[1.7] text-[#666D65] max-[850px]:max-w-[550px]">
              {copy.faqLead}
            </p>
          </Reveal>
          <span
            className="pointer-events-none absolute top-[145px] left-[-30px] z-0 select-none font-sans text-[180px] leading-none font-extrabold text-[#D9DAD2] opacity-[0.38] max-[850px]:top-10 max-[850px]:left-[60%] max-[850px]:text-[145px] max-[560px]:hidden"
            aria-hidden
          >
            FAQ
          </span>
        </div>

        <div className="grid gap-2.5">
          {items.map((item, index) => (
            <details
              key={item.id}
              className="group rounded-[14px] border border-[#E6E1D8] bg-white/75 transition-[border-color,background-color] duration-200 open:border-[#D5B787] open:bg-white motion-reduce:transition-none"
            >
              <summary className="grid min-h-[78px] cursor-pointer list-none grid-cols-[35px_1fr_42px] items-center gap-4 px-[22px] py-3.5 pr-[18px] marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#C49145] [&::-webkit-details-marker]:hidden max-[560px]:min-h-[76px] max-[560px]:grid-cols-[25px_1fr_36px] max-[560px]:gap-2.5 max-[560px]:px-[11px] max-[560px]:py-3.5">
                <span className="font-sans text-xs font-semibold leading-none text-[#AD7838]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-[clamp(17px,1.55vw,21px)] leading-[1.35] font-medium max-[560px]:text-[17px]">
                  {item.question}
                </span>
                <span
                  className="size-9 rounded-full border border-[#E4DACB] bg-[url('/gallery-newsletter/svgs/faq-plus.svg')] bg-[length:20px] bg-center bg-no-repeat group-open:bg-[url('/gallery-newsletter/svgs/faq-minus.svg')]"
                  aria-hidden
                />
              </summary>
              <p className="m-0 px-[68px] pt-0 pb-6 pl-[73px] font-sans text-sm leading-[1.75] text-[#60665F] max-[560px]:px-5 max-[560px]:pr-5 max-[560px]:pb-[21px] max-[560px]:pl-[46px] max-[560px]:text-[13px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
