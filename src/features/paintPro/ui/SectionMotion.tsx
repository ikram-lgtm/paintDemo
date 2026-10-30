"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export function SectionMotion({ children, className = "", id, reveal = true }:
  { children: React.ReactNode; className?: string; id?: string; reveal?: boolean }) {
  const scope = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (!scope.current || !reveal || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(scope.current.querySelectorAll<HTMLElement>("[data-reveal]"));
    items.forEach((element, i) => {
      gsap.fromTo(element,{ autoAlpha: 0, y: 46, rotateX: 3 },{
        autoAlpha: 1, y: 0, rotateX: 0, ease: "power3.out", duration: 0.95,
        delay: Math.min(i * 0.07, 0.28),
        scrollTrigger: { trigger: element, start: "top 89%", once: true }
      });
    });
  }, { scope });
  return <section ref={scope} id={id} className={className}>{children}</section>;
}
