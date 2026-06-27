import { PageHeader } from "@/components/layout/PageHeader";
import { AboutStory } from "@/components/sections/AboutStory";
import { MeetTheFounders } from "@/components/sections/MeetTheFounders";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ShowroomPreview } from "@/components/sections/ShowroomPreview";
import { ContactCta } from "@/components/sections/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { about } from "@/data/about";
import { pageMetadata } from "@/lib/seo";
import { foundersSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "About | Iqbal Interiors",
  description:
    "Learn about Iqbal Interiors — an interior design studio, material showroom and complete execution company in Jamua, Giridih, established in 2011.",
  path: "/about",
  image: "/images/hero/2.png",
});

/** About page — assembled from existing sections plus the Our Story block. */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Us"
        title="About Iqbal Interiors"
        description={about.intro}
      />
      <JsonLd data={foundersSchema()} />
      <AboutStory />
      <MeetTheFounders />
      <WhyChooseUs />
      <ShowroomPreview />
      <ContactCta />
    </>
  );
}
