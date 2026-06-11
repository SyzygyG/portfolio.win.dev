import type { DateRange } from "@/types/date";

export type ExperienceItem = {
  company: string;
  role: string;
  range: DateRange;
  type: string;
  description: string;
  achievements: string[];
  ariaLabel: string;
};
