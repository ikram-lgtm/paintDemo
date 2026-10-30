"use client";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { motion } from "motion/react";
import { Icon } from "@/features/paintPro/ui/Icon";
import { Photo } from "@/features/paintPro/ui/Photo";
import { SectionMotion } from "@/features/paintPro/ui/SectionMotion";
import {
  copy,
  featureLabels,
  image,
  services,
} from "@/features/paintPro/model/content";

export function TransformSection() {
  const [active, setActive] = useState(0);
  const selected = [0, 1, 2].flatMap((n) => {
    const service = services[(active + n) % services.length];
    return service ? [service] : [];
  });
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((x) => (x + 1) % services.length);
    }, 5600);
    return () => window.clearInterval(id);
  }, [active]);
  return (
    <SectionMotion id="services" className="s6 spacious site-container">
      <div className="transform-top">
        <div className="transform-splash" data-reveal>
          <Photo
            src={image("roller-texture")}
            alt="Rouleau et texture de peinture — inspiration"
            sizes="(max-width: 800px) 90vw, 50vw"
          />
          <div className="splash-shade" />
          <div className="splash-content">
            <span className="tag">
              <Icon name="roller" size={19} /> {copy.transform.tag}
            </span>
            <h2>
              {copy.transform.headingStart}
              <br />
              <em>{copy.transform.headingAccent}</em>
            </h2>
            <p>{copy.transform.lead}</p>
            <a
              href="#showcase"
              className="round-arrow solid"
              aria-label={copy.nav.services}
            >
              <LuArrowUpRight />
            </a>
          </div>
        </div>
        <div className="service-carousel" data-reveal>
          <div className="service-controls">
            <span className="service-track">
              <i />
              <i />
              <i />
            </span>
            <button
              aria-label="Prestations précédentes"
              onClick={() =>
                setActive((x) => (x - 1 + services.length) % services.length)
              }
            >
              <LuArrowLeft />
            </button>
            <button
              aria-label="Prestations suivantes"
              onClick={() => setActive((x) => (x + 1) % services.length)}
            >
              <LuArrowRight />
            </button>
          </div>
          <div className="service-cards">
            {selected.map((service) => (
              <motion.article
                key={service.name}
                className="service-tile"
                initial={{ opacity: 0.55, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="service-tile-photo">
                  <Photo
                    src={service.image}
                    alt={service.name}
                    sizes="(max-width: 800px) 45vw, 22vw"
                  />
                  <span className="service-icon">
                    <Icon name={service.icon} size={28} />
                  </span>
                </div>
                <div className="service-tile-footer">
                  <h3>{service.name}</h3>
                  <a
                    href="#showcase"
                    aria-label={service.name}
                    className="circle-link"
                  >
                    <LuArrowRight size={20} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <div className="benefits-bar" data-reveal>
        {featureLabels.map((item) => (
          <div className="benefit" key={item.title}>
            <Icon name={item.icon} size={31} />
            <strong>{item.title}</strong>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}
