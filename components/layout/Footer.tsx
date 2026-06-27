import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { primaryNav } from "@/data/navigation";
import { services } from "@/data/services";
import { footer, getContactLinks } from "@/data/footer";
import { site } from "@/data/site";
import { FacebookIcon } from "@/components/ui/FacebookIcon";

const linkClass =
  "text-sm text-white/60 transition-colors hover:text-white motion-reduce:transition-none";

const headingClass =
  "text-sm font-semibold uppercase tracking-wider text-white";

/**
 * Premium four-column footer on the dark theme. Fully server-rendered, no
 * client JS; the only motion is subtle link hover, disabled under reduced
 * motion. All content comes from the data layer.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const contactLinks = getContactLinks();
  const facebookUrl = site.social.facebook;

  return (
    <footer className="border-t border-white/10 bg-foreground text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {footer.description}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h2 className={headingClass}>{footer.columns.quickLinks}</h2>
            <ul className="mt-4 space-y-3">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h2 className={headingClass}>{footer.columns.services}</h2>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href ?? "/services"}
                    className={linkClass}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className={headingClass}>{footer.columns.contact}</h2>
            <ul className="mt-4 space-y-3">
              {contactLinks.map(({ icon: Icon, label, href, external }) => (
                <li key={label} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {href ? (
                    <a
                      href={href}
                      className={linkClass}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-white/60">{label}</span>
                  )}
                </li>
              ))}

              {facebookUrl && (
                <li className="flex items-start gap-2.5">
                  <FacebookIcon className="size-4 shrink-0 text-accent" />
                  <a
                    href={facebookUrl}
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.name}. All Rights Reserved.
          </p>
          <p>{footer.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
