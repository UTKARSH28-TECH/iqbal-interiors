import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { showroom } from "@/data/showroom";

/**
 * Editorial two-column showroom preview: real storefront photo (~55%) beside a
 * short narrative and CTAs (~45%), vertically centered. Server-rendered; the
 * only motion is a CSS image hover, disabled under reduced motion.
 */
export function ShowroomPreview() {
  const { eyebrow, title, paragraphs, image, primaryCta, secondaryCta } =
    showroom;

  return (
    <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[11fr_9fr] lg:gap-16">
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-image shadow-[0_24px_48px_-24px_rgba(17,17,17,0.25)] lg:aspect-auto lg:h-[540px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={false}
              loading="lazy"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>

          <div>
            <SectionHeading align="left" label={eyebrow} title={title} />

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

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
