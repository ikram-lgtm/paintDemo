import { Photo } from "@/features/paintPro/ui/Photo";
import { SectionMotion } from "@/features/paintPro/ui/SectionMotion";
import { Icon } from "@/features/paintPro/ui/Icon";
import { ArrowLink } from "@/features/paintPro/ui/ArrowButton";
import { copy, image } from "@/features/paintPro/model/content";

export function ExpertsSection() {
  return (
    <SectionMotion id="why-us" className="s5 site-container spacious">
      <div className="expert-grid">
        <div className="expert-main" data-reveal>
          <div className="expert-photo">
            <Photo
              src={image("paris-interior-wide")}
              alt="Peinture intérieure — inspiration"
              sizes="(max-width: 800px) 100vw, 65vw"
            />
          </div>
          <div className="expert-label tag">
            <Icon name="roller" size={19} /> {copy.experts.interiorTag}
          </div>
          <h2>
            {copy.experts.headingStart}
            <br />
            <em>
              {copy.experts.headingAccentLine1}
              <br />
              {copy.experts.headingAccentLine2}
            </em>
          </h2>
        </div>
        <div className="expert-side">
          <div className="gallery-card" data-reveal>
            <span className="tag">{copy.experts.galleryTag}</span>
            <h3>
              {copy.experts.galleryHeadingStart}
              <br />
              <em>{copy.experts.galleryHeadingAccent}</em>
            </h3>
            <a
              className="gallery-link"
              href="#projects"
              aria-label={copy.experts.galleryCta}
            >
              {copy.experts.galleryCta}
            </a>
            <div className="tilted-photo tilt-1">
              <Photo
                src={image("interior-finish")}
                alt="Intérieur rénové — inspiration"
                sizes="150px"
              />
            </div>
            <div className="tilted-photo tilt-2">
              <Photo
                src={image("paris-facade")}
                alt="Façade — inspiration"
                sizes="150px"
              />
            </div>
          </div>
          <div className="exterior-card" data-reveal>
            <Photo
              src={image("exterior-craft")}
              alt="Peinture extérieure — inspiration"
              sizes="(max-width: 800px) 90vw, 35vw"
            />
            <span className="tag">
              <Icon name="facade" size={18} /> {copy.experts.exteriorTag}
            </span>
            <h3>
              {copy.experts.exteriorHeadingStart}
              <br />
              {copy.experts.exteriorHeadingAccent}
            </h3>
            <ArrowLink href="#services" label={copy.experts.exteriorLink} />
          </div>
        </div>
      </div>
      <div className="expert-facts" data-reveal>
        {copy.experts.facts.map((e) => (
          <div className="expert-fact" key={e.number}>
            <span className="fact-number">{e.number}</span>
            <div>
              <Icon name={e.icon} size={26} />
              <span>{e.label}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}
