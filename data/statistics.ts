import { site } from "@/data/site";

export interface Statistic {
  /** Numeric target for the count-up. */
  value: number;
  /** Appended after the number, e.g. "+". */
  suffix?: string;
  label: string;
}

// TODO(confirm): real totals are not documented yet — placeholders, easy to update.
const COMPLETED_PROJECTS = 500;
const HAPPY_CLIENTS = 450;

/**
 * Trust statistics. Years of experience and product categories are derived
 * (from the founding year and the gallery folders); the other two are
 * configurable placeholders above.
 */
export function getStatistics(categoryCount: number): Statistic[] {
  const yearsOfExperience = new Date().getFullYear() - site.foundedYear;
  return [
    { value: yearsOfExperience, suffix: "+", label: "Years of Experience" },
    { value: COMPLETED_PROJECTS, suffix: "+", label: "Completed Projects" },
    { value: HAPPY_CLIENTS, suffix: "+", label: "Happy Clients" },
    { value: categoryCount, label: "Product Categories" },
  ];
}
