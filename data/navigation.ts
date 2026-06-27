import type { NavLink } from "@/types/navigation";

/** Primary navigation — kept deliberately short (docs/05-site-architecture.md). */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
