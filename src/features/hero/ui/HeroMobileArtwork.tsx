import Image from "next/image";

import { heroPaths } from "@/shared/config/tokens";

type HeroMobileArtworkProps = Readonly<{
  houseAlt: string;
}>;

export function HeroMobileArtwork({ houseAlt }: HeroMobileArtworkProps) {
  return (
    <div className="relative z-0 mx-auto w-full max-w-[720px] px-[clamp(8px,3vw,16px)]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={heroPaths.house}
          alt={houseAlt}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 720px) 100vw, 720px"
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
}
