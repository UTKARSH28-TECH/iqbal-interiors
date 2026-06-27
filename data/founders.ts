import type { Founder } from "@/types/founder";

/**
 * Founder profiles. Bios describe only the documented roles — no invented
 * awards, certifications, personal years, or unsupported claims. Replacing a
 * portrait later only requires changing `image.src` here.
 */
export const founders: Founder[] = [
  {
    name: "Md Iqubal Khan",
    role: "Co-Founder · Interior Design Specialist",
    bio: "Md Iqubal leads the interior design side of Iqbal Interiors, guiding each project from planning through to finished execution. He works closely with clients to shape spaces around how they live and work — across false ceilings, modular kitchens, TV units, lighting and complete interiors.",
    image: {
      src: "/images/owners/interior owner.png",
      alt: "Md Iqubal Khan, Co-Founder and Interior Design Specialist at Iqbal Interiors",
    },
  },
  {
    name: "Nazar Iqbal",
    role: "Co-Founder · Hardware Specialist",
    bio: "Nazar leads the hardware and materials side of the business, helping customers choose quality fittings, sanitary ware and architectural hardware. He makes sure every project is backed by dependable products and the right finishing details.",
    image: {
      src: "/images/owners/Hardware owner.png",
      alt: "Nazar Iqbal, Co-Founder and Hardware Specialist at Iqbal Interiors",
    },
  },
];

/** Concluding line shown beneath both profiles. */
export const foundersConclusion =
  "Brothers and business partners, Md Iqubal and Nazar bring design and materials together under one roof — offering customers complete interior solutions from first idea to final installation.";
