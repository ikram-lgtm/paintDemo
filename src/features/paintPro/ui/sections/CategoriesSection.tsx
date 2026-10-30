import { SectionMotion } from "@/features/paintPro/ui/SectionMotion";
import { Photo } from "@/features/paintPro/ui/Photo";
import { Icon } from "@/features/paintPro/ui/Icon";
import { copy, image } from "@/features/paintPro/model/content";

export function CategoriesSection() {
  return (
    <SectionMotion id="categories" className="s2 site-container spacious">
      <div className="category-cards">
        {copy.categories.items.map((item) => (
          <a
            href="#services"
            className="category-card"
            data-reveal
            key={item.title}
          >
            <Photo
              src={image(item.img)}
              alt={item.title}
              sizes="(max-width: 720px) 48vw, 25vw"
            />
            <div className="category-shade" />
            <div className="category-bottom">
              <Icon name={item.icon} size={25} />
              <strong>{item.title}</strong>
            </div>
          </a>
        ))}
      </div>
      <div className="category-editorial">
        <div data-reveal>
          <div className="eyebrow-line">
            <span>{copy.categories.eyebrow}</span>
            <i />
          </div>
          <h2>
            {copy.categories.headingStart}{" "}
            <em>{copy.categories.headingAccent}</em>
          </h2>
        </div>
        <p data-reveal>{copy.categories.lead}</p>
      </div>
    </SectionMotion>
  );
}
