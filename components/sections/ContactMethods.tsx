import type { ReactNode } from "react";
import { MessageCircle, Navigation } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { site } from "@/data/site";

interface MethodCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action: ReactNode;
}

function MethodCard({ icon, title, description, action }: MethodCardProps) {
  return (
    <div className="flex w-full flex-col items-start rounded-card border border-border bg-background p-6 sm:w-80">
      <span className="inline-flex size-12 items-center justify-center rounded-card bg-surface text-accent">
        {icon}
      </span>
      <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-5 w-full">{action}</div>
    </div>
  );
}

/**
 * Premium contact-method cards. Each card renders only when its required data
 * exists in data/site.ts, so missing channels disappear automatically. Reuses
 * the shared Button and WhatsAppButton.
 */
export function ContactMethods() {
  const { whatsapp, mapsUrl } = site.contact;
  const { facebook } = site.social;

  const cards: ReactNode[] = [];

  if (whatsapp) {
    cards.push(
      <MethodCard
        key="whatsapp"
        icon={<MessageCircle className="size-6" aria-hidden />}
        title="WhatsApp"
        description="Message us directly to discuss your project or request a quote."
        action={
          <WhatsAppButton label="Message Us" className="w-full justify-center" />
        }
      />,
    );
  }
  if (mapsUrl) {
    cards.push(
      <MethodCard
        key="showroom"
        icon={<Navigation className="size-6" aria-hidden />}
        title="Visit Showroom"
        description="See our materials, finishes and product range in person."
        action={
          <Button href={mapsUrl} variant="primary" className="w-full">
            Get Directions
          </Button>
        }
      />,
    );
  }
  if (facebook) {
    cards.push(
      <MethodCard
        key="facebook"
        icon={<FacebookIcon className="size-5" />}
        title="Facebook"
        description="Follow our latest completed projects and updates."
        action={
          <Button
            href={facebook}
            variant="secondary"
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Facebook
          </Button>
        }
      />,
    );
  }

  if (cards.length === 0) return null;

  return (
    <section className="py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading label="Get in Touch" title="Ways to Reach Us" />
        <div className="mt-12 flex flex-wrap justify-center gap-6">{cards}</div>
      </Container>
    </section>
  );
}
