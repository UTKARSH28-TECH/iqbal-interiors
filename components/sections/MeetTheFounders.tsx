import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FounderCard } from "@/components/about/FounderCard";
import { founders, foundersConclusion } from "@/data/founders";

/**
 * Meet the Founders: two equal editorial profiles with a concluding line on how
 * they work together. Server-rendered; reusable on the homepage and About page.
 */
export function MeetTheFounders() {
  return (
    <section className="bg-surface py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Our People"
          title="Meet the Founders"
          subtitle="The brothers behind Iqbal Interiors."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-muted">
          {foundersConclusion}
        </p>
      </Container>
    </section>
  );
}
