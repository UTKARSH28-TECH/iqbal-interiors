import { site } from "@/data/site";

/**
 * WhatsApp deep link to the business number. Falls back to the contact page until
 * a number is documented (see data/site.ts), so the CTA is never a broken link.
 */
export function whatsappHref(message?: string): string {
  const number = site.contact.whatsapp.replace(/\D/g, "");
  if (!number) return "/contact";
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}

/** `tel:` link for a given phone number, or the contact page if it is empty. */
export function callHref(phone: string): string {
  const number = phone.replace(/\D/g, "");
  return number ? `tel:${number}` : "/contact";
}
