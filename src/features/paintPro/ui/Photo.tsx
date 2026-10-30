import Image from "next/image";
export function Photo({ src, alt, priority = false, sizes = "(max-width: 768px) 100vw, 45vw", className = "" }:
  { src: string; alt: string; priority?: boolean; sizes?: string; className?: string }) {
  return <Image src={src} alt={alt} fill priority={priority} sizes={sizes} quality={80} className={`photo-cover ${className}`} />;
}
