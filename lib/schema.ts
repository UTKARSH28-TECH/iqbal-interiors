import { site } from "@/data/site";
import { founders } from "@/data/founders";

type Json = Record<string, unknown>;

const { phones, mapsUrl } = site.contact;
const { facebook } = site.social;
const validPhones = phones.filter(Boolean);

/** Documented postal address (no street/geo — not available). */
const postalAddress: Json = {
  "@type": "PostalAddress",
  addressLocality: site.location.area,
  addressRegion: site.location.state,
  addressCountry: site.location.country,
};

/** Person schema for a founder. */
export function personSchema(founder: (typeof founders)[number]): Json {
  return {
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
  };
}

/** Organization schema for Iqbal Interiors, including its founders. */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    foundingDate: String(site.foundedYear),
    logo: `${site.url}/images/logo/logo.png`,
    address: postalAddress,
    founder: founders.map((founder) => personSchema(founder)),
    ...(facebook ? { sameAs: [facebook] } : {}),
  };
}

/** LocalBusiness schema. Only includes data that actually exists. */
export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    description: site.description,
    image: `${site.url}/images/shop/store.png`,
    address: postalAddress,
    areaServed: site.location.city,
    foundingDate: String(site.foundedYear),
    ...(mapsUrl ? { hasMap: mapsUrl } : {}),
    ...(validPhones.length
      ? { telephone: validPhones.length === 1 ? validPhones[0] : validPhones }
      : {}),
    ...(facebook ? { sameAs: [facebook] } : {}),
  };
}

/** Standalone Person documents (for injecting on the About page). */
export function foundersSchema(): Json[] {
  return founders.map((founder) => ({
    "@context": "https://schema.org",
    ...personSchema(founder),
  }));
}
