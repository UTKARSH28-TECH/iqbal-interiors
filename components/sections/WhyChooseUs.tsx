import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/whyChooseUs";

/**
 * Why-choose-us highlights as clean icon + text blocks on a warm surface.
 * Server-rendered; reusable on the homepage and the About page.
 */
export function WhyChooseUs() {
  return (
    <section className="bg-surface py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Why Choose Us"
          title="Built on Trust and Craftsmanship"
          subtitle="What makes Iqbal Interiors a name our customers rely on."
        />

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-card bg-background text-accent">
                <Icon className="size-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-serif text-lg text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
