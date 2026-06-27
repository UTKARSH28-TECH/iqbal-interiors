import { Container } from "@/components/layout/Container";
import { GalleryCategoryCard } from "@/components/gallery/GalleryCategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllCategories } from "@/lib/gallery";

/**
 * Portfolio grid: one card per gallery category, read from the folder structure
 * at build time. New folders appear automatically — nothing is hardcoded.
 */
export function GalleryCategories() {
  const categories = getAllCategories(false);

  if (categories.length === 0) return null;

  return (
    <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Explore Our Work"
          subtitle="Browse our completed interiors and product collections by category."
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
  );
}
