import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/data/faq";

/**
 * Simple editorial FAQ — a definition list, no accordion and no client JS.
 */
export function Faq() {
  return (
    <section className="bg-surface py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading label="FAQ" title="Frequently Asked Questions" />

        <dl className="mx-auto mt-12 max-w-3xl divide-y divide-border">
          {faq.map((item) => (
            <div key={item.question} className="py-6 first:pt-0 last:pb-0">
              <dt className="font-serif text-lg text-foreground">
                {item.question}
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-muted">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
