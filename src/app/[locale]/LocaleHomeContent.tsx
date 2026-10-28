import { notFound } from "next/navigation";

import { EditorialServicesSection } from "@/features/editorialServices/ui/EditorialServicesSection";
import { ExpertiseSection } from "@/features/expertise/ui/ExpertiseSection";
import { FaqSection } from "@/features/galleryNewsletter/ui/FaqSection";
import { GalleryNewsletterSection } from "@/features/galleryNewsletter/ui/GalleryNewsletterSection";
import { HeroSection } from "@/features/hero/ui/HeroSection";
import { PaintingProcessSection } from "@/features/paintingProcess/ui/PaintingProcessSection";
import { PaintingTestimonialsSection } from "@/features/paintingTestimonials/ui/PaintingTestimonialsSection";
import { ProjectGallerySection } from "@/features/projectGallery/ui/ProjectGallerySection";
import { RenovationShowcase } from "@/features/renovation/ui/RenovationShowcase";
import { ServicesPanoramaSection } from "@/features/servicesPanorama/ui/ServicesPanoramaSection";
import { TeamExpertsSection } from "@/features/teamExperts/ui/TeamExpertsSection";
import { buildHomepageContent } from "@/features/home/model/buildHomepageContent";
import type { Locale } from "@/shared/i18n/config";
import { getDictionary, hasLocale } from "@/shared/i18n/dictionaries";

type LocaleHomeContentProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

/** Awaits locale params inside the page Suspense boundary. */
export async function LocaleHomeContent({ params }: LocaleHomeContentProps) {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const content = buildHomepageContent(locale, getDictionary(locale));

  return (
    <main>
      <HeroSection content={content.hero} />
      <div id="after-hero" className="sr-only" aria-hidden />
      <ExpertiseSection copy={content.expertise} />
      <RenovationShowcase
        portfolioHref="/services"
        copy={content.showcase}
      />
      <EditorialServicesSection copy={content.editorial} />
      <PaintingProcessSection copy={content.process} />
      <ProjectGallerySection
        projects={content.projects.items}
        eyebrow={content.projects.eyebrow}
        headingBefore={content.projects.headingStart}
        headingAccent={content.projects.headingAccent}
        headingAfter=""
        description={content.projects.lead}
        previousLabel={content.projects.previous}
        nextLabel={content.projects.next}
        viewLabel={content.projects.view}
        regionAria={content.projects.regionAria}
        disclosure={content.projects.disclosure}
      />
      <PaintingTestimonialsSection copy={content.testimonials} />
      <ServicesPanoramaSection
        pillars={content.panorama.pillars}
        copy={content.panorama}
      />
      <TeamExpertsSection
        members={content.team.members}
        copy={content.team}
      />
      <GalleryNewsletterSection
        copy={content.gallery}
        formCopy={content.gallery.newsletterForm}
        previousLabel={content.projects.previous}
        nextLabel={content.projects.next}
      />
      <FaqSection copy={content.faq.copy} items={content.faq.items} />
    </main>
  );
}
