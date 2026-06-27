import { Container } from "@/components/layout/Container";
import { FeaturedProjectCard } from "@/components/gallery/FeaturedProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredCategorySlugs } from "@/data/featuredProjects";
import { getCategory, getGalleryCategorySlugs } from "@/lib/gallery";
import { cn } from "@/lib/utils";

/**
 * Bento masonry of featured work. The selection comes from configured category
 * slugs; covers are resolved dynamically from the folders, and missing folders
 * are skipped — so nothing about the images is hardcoded.
 */
export function FeaturedProjects() {
  const existing = new Set(getGalleryCategorySlugs());
  const featured = featuredCategorySlugs
    .filter((slug) => existing.has(slug))
    .map((slug) => getCategory(slug))
    .filter((category) => Boolean(category.cover));

  if (featured.length === 0) return null;

  return (
    <section className="bg-surface py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Featured"
          title="Our Recent Work"
          subtitle="A closer look at some of our completed interiors and installations."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {featured.map((category, index) => (
            <li
              key={category.slug}
              className={cn(index === 0 && "col-span-2 lg:row-span-2")}
            >
              <FeaturedProjectCard category={category} large={index === 0} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
