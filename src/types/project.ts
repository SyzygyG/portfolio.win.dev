import type { MediaAsset, SectionIntro } from "@/types/content";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "external";
  ariaLabel: string;
};

export type Project = {
  slug: string;
  index: string;
  category: string;
  domain: string;
  title: string;
  oneLiner: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  links: ProjectLink[];
  media: MediaAsset;
  ariaLabel: string;
};

export type ProjectsContent = {
  section: SectionIntro;
  footnoteLabel: string;
  footnoteHref: string;
};
