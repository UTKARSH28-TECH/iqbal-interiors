import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { galleryPreviewSlugs } from "@/data/galleryPreview";
import { getCategoryImages, getGalleryCategorySlugs } from "@/lib/gallery";
import type { GalleryImage } from "@/types/gallery";

/**
 * A final glimpse of completed work before the contact sections. Pulls one
 * non-cover photo from each curated category (covers are already shown above),
 * so the selection is dynamic and nothing is hardcoded. Server-rendered; the
 * only motion is a CSS image hover, disabled under reduced motion.
 */
export function GalleryPreview() {
  const existing = new Set(getGalleryCategorySlugs());
  const images = galleryPreviewSlugs
    .filter((slug) => existing.has(slug))
    .map((slug) => {
      const categoryImages = getCategoryImages(slug);
      // Prefer the second image so we don't repeat the category covers above.
      return categoryImages[1] ?? categoryImages[0];
    })
    .filter((image): image is GalleryImage => Boolean(image))
    .slice(0, 8);

  if (images.length === 0) return null;

  return (
    <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Gallery"
          title="A Glimpse of Our Work"
          subtitle="A selection of completed interiors and installations."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {images.map((image) => (
            <li
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-image bg-surface shadow-[0_12px_28px_-16px_rgba(17,17,17,0.22)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button href="/gallery" variant="primary">
            View Complete Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
