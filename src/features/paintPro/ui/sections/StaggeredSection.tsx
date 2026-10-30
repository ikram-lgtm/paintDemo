import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { Photo } from "@/features/paintPro/ui/Photo";
import { Icon } from "@/features/paintPro/ui/Icon";
import { SectionMotion } from "@/features/paintPro/ui/SectionMotion";
import { copy, image } from "@/features/paintPro/model/content";

const tickIcons = ["roller", "plaster", "house", "facade", "tools"] as const;

export function StaggeredSection() {
  const handLines = copy.stagger.handNote.split("\n");
  const miniInterior = copy.stagger.miniInterior.split("\n");
  const miniPlaster = copy.stagger.miniPlaster.split("\n");
  const labelRenovation = copy.stagger.labelRenovation.split("\n");
  const labelExterior = copy.stagger.labelExterior.split("\n");

  return (
    <SectionMotion id="showcase" className="s7 spacious">
      <div className="s7-arc arc-left" aria-hidden />
      <div className="s7-arc arc-right" aria-hidden />
      <div className="s7-icon float-one">
        <Icon name="house" />
      </div>
      <div className="s7-icon float-two">
        <Icon name="roller" />
      </div>
      <div className="s7-icon float-three">
        <Icon name="tools" />
      </div>
      <div className="s7-head" data-reveal>
        <span className="tag">
          <Icon name="roller" size={20} /> {copy.stagger.tag}
        </span>
        <h2>
          {copy.stagger.headingStart}
          <br />
          <em>{copy.stagger.headingAccent}</em>
        </h2>
        <Link href="/free-quote" className="pill pill-olive">
          {copy.stagger.cta} <LuArrowUpRight size={19} />
        </Link>
      </div>
      <div className="s7-gallery site-container">
        <div className="hand-note" data-reveal>
          {handLines[0]}
          <br />
          {handLines[1]}
          <br />
          {handLines[2]}
          <br />
          {handLines[3]} <span>↘</span>
        </div>
        <div className="stagger-photo stagger-painter" data-reveal>
          <Photo
            src={image("interior-painter")}
            alt="Peinture intérieure — inspiration"
            sizes="16vw"
          />
          <span className="corner-icon">
            <Icon name="roller" />
          </span>
        </div>
        <div className="stagger-mini-stack" data-reveal>
          <a className="stagger-mini" href="#services">
            <span className="stagger-mini-head">
              <Icon name="house" size={25} />
              {miniInterior[0]}
              <br />
              {miniInterior[1]}
              <LuArrowUpRight size={17} />
            </span>
            <div className="stagger-mini-photo">
              <Photo
                src={image("repaired-wall")}
                alt="Finitions — inspiration"
                sizes="150px"
              />
            </div>
          </a>
          <a className="stagger-mini" href="#services">
            <span className="stagger-mini-head">
              <Icon name="plaster" size={25} />
              {miniPlaster[0]}
              <br />
              {miniPlaster[1]}
              <LuArrowUpRight size={17} />
            </span>
            <div className="stagger-mini-photo">
              <Photo
                src={image("plasterboard-raw")}
                alt="Enduit — inspiration"
                sizes="150px"
              />
            </div>
          </a>
        </div>
        <a
          href="#services"
          className="stagger-photo stagger-main"
          data-reveal
        >
          <Photo
            src={image("finished-living")}
            alt="Rénovation — inspiration"
            sizes="28vw"
          />
          <span className="corner-icon">
            <Icon name="house" />
          </span>
          <span className="stagger-label">
            {labelRenovation[0]}
            <br />
            {labelRenovation[1]} <LuArrowUpRight size={21} />
          </span>
        </a>
        <a
          href="#services"
          className="stagger-photo stagger-exterior"
          data-reveal
        >
          <Photo
            src={image("exterior-painters")}
            alt="Peinture extérieure — inspiration"
            sizes="28vw"
          />
          <span className="corner-icon">
            <Icon name="facade" />
          </span>
          <span className="stagger-label">
            {labelExterior[0]}
            <br />
            {labelExterior[1]} <LuArrowUpRight size={21} />
          </span>
        </a>
        <div className="stagger-photo stagger-plaster" data-reveal>
          <Photo
            src={image("plaster-finishing")}
            alt="Ratissage — inspiration"
            sizes="15vw"
          />
          <span className="corner-icon">
            <Icon name="plaster" />
          </span>
        </div>
      </div>
      <div
        className="marquee"
        aria-label={copy.stagger.ticks.join(", ")}
      >
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div
              className="marquee-group"
              aria-hidden={dup === 1}
              key={dup}
            >
              {copy.stagger.ticks.map((label, index) => (
                <span key={`${dup}-${label}`}>
                  <Icon name={tickIcons[index] ?? "roller"} size={21} />
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SectionMotion>
  );
}
