import { PageHeader } from "@/components/layout/PageHeader";
import { ContactInformation } from "@/components/sections/ContactInformation";
import { GoogleMap } from "@/components/sections/GoogleMap";
import { ContactMethods } from "@/components/sections/ContactMethods";
import { Faq } from "@/components/sections/Faq";
import { ContactCta } from "@/components/sections/ContactCta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact | Iqbal Interiors",
  description:
    "Contact Iqbal Interiors in Jamua, Giridih — visit our showroom, find us on the map, or get in touch about your interior project.",
  path: "/contact",
  image: "/images/shop/store.png",
});

/** Contact page — the central source of truth for reaching the business. */
export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in Touch"
        title="Contact Us"
        description="We'd love to help with your next interior project. Visit our showroom in Jamua, Giridih, or find us on the map below."
      />
      <ContactInformation />
      <GoogleMap />
      <ContactMethods />
      <Faq />
      <ContactCta />
    </>
  );
}
