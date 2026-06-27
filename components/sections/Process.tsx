import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/data/process";

/** Four-step working process — minimal icons, no animation. White background. */
export function Process() {
  return (
    <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Our Process"
          title="How We Work"
          subtitle="A simple, guided path from first conversation to finished interior."
        />

        <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(({ icon: Icon, title, description }, index) => (
            <li key={title}>
              <span className="inline-flex size-12 items-center justify-center rounded-card bg-surface text-accent">
                <Icon className="size-6" aria-hidden />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-serif text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
