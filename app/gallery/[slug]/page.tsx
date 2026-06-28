import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryCategoryCard } from "@/components/gallery/GalleryCategoryCard";
import { GalleryCta } from "@/components/gallery/GalleryCta";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import {
  getCategory,
  getCategoryImages,
  getGalleryCategorySlugs,
} from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

// Prerender every folder; any other slug 404s automatically.
export const dynamicParams = false;

export function generateStaticParams() {
  return getGalleryCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getGalleryCategorySlugs().includes(slug)) return {};

  const category = getCategory(slug);
  return pageMetadata({
    title: `${category.title} Designs | Iqbal Interiors`,
    description: `Browse ${category.count} ${category.title.toLowerCase()} photos by Iqbal Interiors — completed interior work in Giridih, Jharkhand.`,
    path: `/gallery/${slug}`,
    image: category.cover,
  });
}

/** A single gallery category: its photos plus related categories and a CTA. */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const slugs = getGalleryCategorySlugs();
  if (!slugs.includes(slug)) notFound();

  const category = getCategory(slug);
  if (category.images.length === 0) notFound();

  const images = getCategoryImages(slug, true);
  const related = slugs
    .filter((other) => other !== slug)
    .slice(0, 4)
    .map((other) => getCategory(other));

  const photoLabel = `${category.count} ${
    category.count === 1 ? "photo" : "photos"
  }`;

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
          { label: category.title },
        ]}
        eyebrow="Gallery"
        title={category.title}
        meta={photoLabel}
        description={`Explore our ${category.title} collection.`}
      />

      {/* Masonry grid — aspect ratios preserved, no cropping. */}
      <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
        <Container>
          <GalleryLightbox images={images}>
            <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {images.map((image, imageIndex) => (
                <li
                  key={image.src}
                  className="mb-5 overflow-hidden rounded-image bg-surface shadow-[0_12px_28px_-16px_rgba(17,17,17,0.22)] break-inside-avoid"
                >
                  <button
                    type="button"
                    data-index={imageIndex}
                    aria-label={`View ${image.alt}`}
                    className="group block w-full cursor-zoom-in focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width ?? 1200}
                      height={image.height ?? 900}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </GalleryLightbox>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border py-[70px] sm:py-[90px] lg:py-[120px]">
          <Container>
            <SectionHeading
              label="Keep Exploring"
              title="Related Categories"
            />
            <ul className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {related.map((relatedCategory) => (
                <li key={relatedCategory.slug}>
                  <GalleryCategoryCard category={relatedCategory} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <GalleryCta />
    </>
  );
}