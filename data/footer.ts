import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { site } from "@/data/site";
import { callHref, whatsappHref } from "@/lib/contact";
import type { ContactLink, FooterContent } from "@/types/footer";

/** Static footer copy. Business values come from data/site.ts, not from here. */
export const footer: FooterContent = {
  description:
    "Premium interior design, materials and complete execution in Jamua, Giridih — established 2011.",
  columns: {
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact",
  },
  tagline: "Designed with care.",
};

/**
 * Contact rows assembled from data/site.ts. The documented address always
 * shows; phone, WhatsApp and Maps appear only once their values exist —
 * unavailable details are omitted rather than faked. (Facebook is rendered
 * separately in the component since this lucide version has no brand icon.)
 */
export function getContactLinks(): ContactLink[] {
  const links: ContactLink[] = [
    {
      icon: MapPin,
      label: `${site.location.area}, ${site.location.city}, ${site.location.state}`,
    },
  ];

  for (const phone of site.contact.phones) {
    if (!phone) continue;
    links.push({ icon: Phone, label: phone, href: callHref(phone) });
  }
  if (site.contact.whatsapp) {
    links.push({
      icon: MessageCircle,
      label: "WhatsApp",
      href: whatsappHref(),
      external: true,
    });
  }
  if (site.contact.mapsUrl) {
    links.push({
      icon: Navigation,
      label: "Get Directions",
      href: site.contact.mapsUrl,
      external: true,
    });
  }

  return links;
}
