import type { DateParts } from "@/types/date";

export type Certification = {
  issuer: string;
  title: string;
  issuedOn: DateParts;
  context?: string;
  verifyHref: string;
  ariaLabel: string;
};
