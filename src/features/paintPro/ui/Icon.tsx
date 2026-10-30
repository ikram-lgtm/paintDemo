import Image from "next/image";
export function Icon({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) {
  return <Image src={`/media/icons/${name}.svg`} width={size} height={size} alt="" aria-hidden className={className} unoptimized />;
}
