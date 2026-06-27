import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/about";
import { getCategory } from "@/lib/gallery";

/**
 * "Our Story": story text beside a large interior image pulled from the gallery
 * (the category cover, resolved dynamically). Server-rendered; white background.
 */
export function AboutStory() {
  const { eyebrow, heading, paragraphs, imageCategory } = about.story;
  const category = getCategory(imageCategory);

  return (
    <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" label={eyebrow} title={heading} />
            <div className="mt-5 space-y-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {category.cover && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-image bg-surface shadow-[0_24px_48px_-24px_rgba(17,17,17,0.25)]">
              <Image
                src={category.cover}
                alt={`${category.title} interior by Iqbal Interiors`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
