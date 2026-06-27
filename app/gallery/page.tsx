import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryCategoryCard } from "@/components/gallery/GalleryCategoryCard";
import { GalleryCta } from "@/components/gallery/GalleryCta";
import { getAllCategories } from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery | Iqbal Interiors",
  description:
    "Browse completed interior projects by Iqbal Interiors — bedrooms, false ceilings, modular kitchens, lighting, jhumars and more in Giridih.",
  path: "/gallery",
  image: "/images/hero/2.png",
});

/** Gallery index: the entry point to every category of completed work. */
export default function GalleryPage() {
  const categories = getAllCategories(false);

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        eyebrow="Our Work"
        title="Gallery"
        description="Explore our completed interiors and product collections. Browse a category to see the work in detail."
      />

      <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
        <Container>
          <SectionHeading
            title="Browse by Category"
            subtitle="Every collection of our completed work, organized by space."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <GalleryCategoryCard category={category} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <GalleryCta />
    </>
  );
}
