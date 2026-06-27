"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FacebookButton } from "@/components/ui/FacebookButton";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * Routes that render a full-bleed hero behind the navbar, where it should be
 * transparent until scrolled.
 */
const HERO_ROUTES = new Set<string>(["/"]);

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Sticky primary navigation. Transparent over a hero, solid with a blurred
 * backdrop once scrolled (or on routes without a hero). Collapses to a drawer
 * on mobile.
 */
export function Navbar() {
  const pathname = usePathname();
  const overlay = HERO_ROUTES.has(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overlay;
  const onDark = overlay && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
          solid
            ? "border-border bg-background/80 shadow-sm backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Container
          as="nav"
          aria-label="Primary"
          className="flex h-16 items-center justify-between md:h-20"
        >
          <Logo onDark={onDark} />

          <ul className="hidden items-center gap-8 md:flex">
            {primaryNav.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative text-sm font-medium transition-colors",
                      onDark
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-foreground",
                      active &&
                        "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <FacebookButton iconOnly />
            <WhatsAppButton iconOnly className="sm:hidden" />
            <WhatsAppButton className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-button transition-colors md:hidden",
                onDark
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-foreground/5",
              )}
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </div>
        </Container>
      </header>

      {/* Spacer keeps content clear of the fixed header on non-hero routes. */}
      {!overlay && <div aria-hidden className="h-16 md:h-20" />}

      <MobileDrawer open={menuOpen} onClose={closeMenu} pathname={pathname} />
    </>
  );
}
