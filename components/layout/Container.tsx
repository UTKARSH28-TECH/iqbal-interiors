import type { ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  /** Render as a different element, e.g. `nav` or `section`. */
  as?: ElementType;
}

/**
 * Centered width constraint with the design system's responsive padding
 * (20 / 32 / 48px). Every section should sit inside a Container.
 */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-(--container-max) px-5 sm:px-8 lg:px-12",
        className,
      )}
      {...props}
    />
  );
}
