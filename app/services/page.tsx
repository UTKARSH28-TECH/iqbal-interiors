import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { InteriorSolutions } from "@/components/sections/InteriorSolutions";
import { Process } from "@/components/sections/Process";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactCta } from "@/components/sections/ContactCta";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services | Iqbal Interiors",
  description:
    "Explore the services offered by Iqbal Interiors — interior design, false ceilings, modular kitchens, lighting, jhumars, sanitary and hardware in Giridih.",
  path: "/services",
  image: "/images/hero/2.png",
});

/** Services page — the full offering, how we work, and a closing CTA. */
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="What We Offer"
        title="Our Services"
        description="From interior design and false ceilings to modular kitchens, lighting and complete execution — explore everything Iqbal Interiors offers."
      />

      <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
        <Container>
          <SectionHeading
            title="From Design to Installation"
            subtitle="The full range of services we offer, from initial planning to final installation."
          />
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.title}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <InteriorSolutions />
      <Process />
      <WhyChooseUs />
      <ContactCta />
    </>
  );
}
