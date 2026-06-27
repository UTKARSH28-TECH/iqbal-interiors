import type { ReactNode } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/contact";

interface InfoItem {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

/**
 * Contact details, assembled from data/site.ts. The documented address always
 * shows; phone, WhatsApp and Facebook appear only when their values exist —
 * nothing is fabricated. Business hours are omitted (not documented).
 */
export function ContactInformation() {
  const { phone, whatsapp, mapsUrl } = site.contact;
  const { facebook } = site.social;
  const { area, city, state, country } = site.location;

  const items: InfoItem[] = [
    {
      icon: <MapPin className="size-5" aria-hidden />,
      label: "Address",
      value: `${area}, ${city}, ${state}, ${country}`,
      href: mapsUrl || undefined,
      external: Boolean(mapsUrl),
    },
  ];

  if (phone) {
    items.push({
      icon: <Phone className="size-5" aria-hidden />,
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\D/g, "")}`,
    });
  }
  if (whatsapp) {
    items.push({
      icon: <MessageCircle className="size-5" aria-hidden />,
      label: "WhatsApp",
      value: "Message us",
      href: whatsappHref(),
      external: true,
    });
  }
  if (facebook) {
    items.push({
      icon: <FacebookIcon className="size-5" />,
      label: "Facebook",
      value: "Follow us",
      href: facebook,
      external: true,
    });
  }

  return (
    <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          align="left"
          label="Reach Us"
          title="Contact Information"
        />

        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.label} className="flex gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-card bg-surface text-accent">
                {item.icon}
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 inline-block text-base text-foreground transition-colors hover:text-gold-dark motion-reduce:transition-none"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-base text-foreground">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
