import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

/**
 * Location map. The stored mapsUrl is a Google "place" short link, which cannot
 * be embedded directly, so the iframe uses a no-key embed built from the
 * documented address while the button opens the exact place link. If no mapsUrl
 * exists, the section is omitted.
 */
export function GoogleMap() {
  const { mapsUrl } = site.contact;
  if (!mapsUrl) return null;

  const isEmbeddable =
    mapsUrl.includes("output=embed") || mapsUrl.includes("/maps/embed");
  const query = `Iqbal Interiors, ${site.location.area}, ${site.location.city}, ${site.location.state}`;
  const embedUrl = isEmbeddable
    ? mapsUrl
    : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <section className="bg-surface py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Location"
          title="Where to Find Us"
          subtitle={`We're located in ${site.location.area}, ${site.location.city}, ${site.location.state}.`}
        />

        <div className="mt-12 overflow-hidden rounded-image border border-border shadow-[0_24px_48px_-24px_rgba(17,17,17,0.25)]">
          <iframe
            src={embedUrl}
            title={`Map showing Iqbal Interiors in ${site.location.city}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="aspect-[16/10] w-full sm:aspect-[16/7]"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <Button href={mapsUrl} variant="secondary">
            Open in Google Maps
          </Button>
        </div>
      </Container>
    </section>
  );
}
