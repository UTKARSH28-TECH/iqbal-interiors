import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  /** Omit on the current (last) item. */
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/** Accessible breadcrumb trail. Server-rendered; the only motion is link hover. */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground motion-reduce:transition-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="size-4 text-muted/60" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
