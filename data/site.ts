/**
 * Single source of truth for documented business facts.
 *
 * Contact and social fields are intentionally blank: they are not yet documented
 * (see docs/02-business-information.md) and must be confirmed before launch rather
 * than assumed (per docs/08-development-rules.md).
 */
export const site = {
  name: "Iqbal Interiors",
  owner: "Md Iqubal Khan",
  /** From the brand logo. */
  tagline: "Designing Spaces, Defining Lifestyles",
  description:
    "Premium interior design studio, material showroom and complete interior execution company in Jamua, Giridih — established 2011.",
  foundedYear: 2011,
  language: "en",
  /** Production origin; override via NEXT_PUBLIC_SITE_URL. Domain to be confirmed. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iqbalinteriors.com",
  location: {
    area: "Jamua",
    city: "Giridih",
    state: "Jharkhand",
    country: "India",
  },
  // TODO(confirm): email not present in docs.
  // Typed as `string` (not narrowed to "") so `if (site.contact.phone)` checks
  // work correctly once real values are filled in, without local workarounds.
  contact: {
    phone: "+91 9162772469" as string,
    whatsapp: "+91 9608933210" as string,
    email: "" as string,
    mapsUrl: "https://maps.app.goo.gl/8rpecN2ih11FS3LPA" as string,
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61587252695712" as string,
    instagram: "" as string,
    googleBusiness: "" as string,
  },
} as const;
