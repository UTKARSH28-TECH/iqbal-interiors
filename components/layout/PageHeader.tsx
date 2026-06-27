import { Container } from "./Container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";

interface PageHeaderProps {
  breadcrumb: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  /** Small line under the title, e.g. a photo count. */
  meta?: string;
  description?: string;
}

/**
 * Reusable sub-page hero: breadcrumb, gold eyebrow, serif H1, optional meta and
 * description, on the warm surface. Server-rendered.
 */
export function PageHeader({
  breadcrumb,
  eyebrow,
  title,
  meta,
  description,
}: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-surface py-12 sm:py-16 lg:py-20">
      <Container>
        <Breadcrumb items={breadcrumb} />
        <div className="mt-6 max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark sm:text-sm">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
            {title}
          </h1>
          {meta && <p className="mt-2 text-sm text-muted">{meta}</p>}
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
