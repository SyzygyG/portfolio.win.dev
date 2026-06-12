import type { DateParts } from "@/types/date";
import type { ImageAsset } from "@/types/content";

export type Certification = {
  issuer: string;
  title: string;
  issuedOn: DateParts;
  context?: string;
  verifyHref: string;
  verifyLabel?: string;
  previewImage?: ImageAsset;
  ariaLabel: string;
};
