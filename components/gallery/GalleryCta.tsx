import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/data/site";

/** Shared closing CTA for the gallery index and category pages. */
export function GalleryCta() {
  const showroomHref = site.contact.mapsUrl || "/contact";

  return (
    <section className="bg-surface py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Get in Touch"
          title="Let's Bring Your Space to Life"
          subtitle={`Message us on WhatsApp to discuss your project, or visit our showroom in ${site.location.area}, ${site.location.city}.`}
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WhatsAppButton label="WhatsApp Us" />
          <Button href={showroomHref} variant="secondary">
            Visit Our Showroom
          </Button>
        </div>
      </Container>
    </section>
  );
}
