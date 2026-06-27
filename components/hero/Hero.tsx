import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { heroContent } from "@/data/hero";
import type { HeroContent } from "@/types/hero";
import { HeroSlider } from "./HeroSlider";

interface HeroProps {
  /** Override the default content to reuse the hero elsewhere. */
  content?: HeroContent;
}

/**
 * Full-viewport hero: photography slideshow background with a left-weighted text
 * column (~40%) over a dark gradient. Only the slideshow is client-side, keeping
 * the section lightweight for Core Web Vitals.
 */
export function Hero({ content = heroContent }: HeroProps) {
  const { eyebrow, title, subtitle, primaryCta, images, interval } = content;

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-foreground">
      <HeroSlider images={images} interval={interval} />

      {/* Dark gradient: darker on the left/bottom for text legibility, lighter on
          the right to preserve the photography. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/5"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:from-black/25"
      />

      <Container className="relative z-10 w-full pt-20">
        <div className="max-w-xl lg:max-w-[42%]">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent sm:text-sm">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 text-balance font-serif text-[1.9rem] leading-[1.12] text-white sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={primaryCta.href} variant="secondary">
              {primaryCta.label}
            </Button>
            <WhatsAppButton label="WhatsApp Now" />
          </div>
        </div>
      </Container>
    </section>
  );
}
