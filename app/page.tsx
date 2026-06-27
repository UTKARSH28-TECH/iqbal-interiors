import { Hero } from "@/components/hero/Hero";
import { TrustStatistics } from "@/components/sections/TrustStatistics";
import { GalleryCategories } from "@/components/sections/GalleryCategories";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ShowroomPreview } from "@/components/sections/ShowroomPreview";
import { MeetTheFounders } from "@/components/sections/MeetTheFounders";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { ProjectWalkthroughs } from "@/components/sections/ProjectWalkthroughs";
import { ContactCta } from "@/components/sections/ContactCta";

/**
 * Homepage. Sections are added in order per docs/10-development-roadmap.md.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStatistics />
      <GalleryCategories />
      <FeaturedProjects />
      <Services />
      <WhyChooseUs />
      <ShowroomPreview />
      <MeetTheFounders />
      <GalleryPreview />
      <ProjectWalkthroughs />
      <ContactCta />
    </>
  );
}
