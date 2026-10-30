import { BeforeAfterSection } from "@/features/paintPro/ui/sections/BeforeAfterSection";
import { CategoriesSection } from "@/features/paintPro/ui/sections/CategoriesSection";
import { ExpertsSection } from "@/features/paintPro/ui/sections/ExpertsSection";
import { FaqFooterSection } from "@/features/paintPro/ui/sections/FaqFooterSection";
import { HeroSection } from "@/features/paintPro/ui/sections/HeroSection";
import { StaggeredSection } from "@/features/paintPro/ui/sections/StaggeredSection";
import { TransformSection } from "@/features/paintPro/ui/sections/TransformSection";
import { VideoProjectsSection } from "@/features/paintPro/ui/sections/VideoProjectsSection";

import "./styles/paintPro.css";

export function PaintProShell() {
  return (
    <div className="paintPro">
      <main id="top">
        <HeroSection />
        <CategoriesSection />
        <BeforeAfterSection />
        <VideoProjectsSection />
        <ExpertsSection />
        <TransformSection />
        <StaggeredSection />
        <FaqFooterSection />
      </main>
    </div>
  );
}
