import { Container } from "@/components/layout/Container";
import { CounterCard } from "@/components/ui/CounterCard";
import { getStatistics } from "@/data/statistics";
import { getGalleryCategorySlugs } from "@/lib/gallery";

/**
 * Trust band beneath the hero: animated counters on a warm off-white surface.
 * The product-category count is read from the gallery folders at build time.
 */
export function TrustStatistics() {
  const stats = getStatistics(getGalleryCategorySlugs().length);

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <Container>
        <ul className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <CounterCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
