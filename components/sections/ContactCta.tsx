import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { contactCta } from "@/data/contactCta";

/**
 * Final conversion section on a near-black background with white text and gold
 * accents — the strongest visual after the hero. Server-rendered; motion is
 * limited to button hover, which respects reduced motion.
 */
export function ContactCta() {
  const { eyebrow, heading, paragraph, reassurance, primaryLabel, secondary } =
    contactCta;

  return (
    <section className="bg-foreground py-[70px] text-white sm:py-[90px] lg:py-[120px]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent sm:text-sm">
            {eyebrow}
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
            {heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {paragraph}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label={primaryLabel} />
            <Button href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/55">{reassurance}</p>
        </div>
      </Container>
    </section>
  );
}
