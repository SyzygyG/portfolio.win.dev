import type { MediaAsset, SectionIntro } from "@/types/content";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "external";
  ariaLabel: string;
};

export type Project = {
  slug: string;
  type: string;
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  media: MediaAsset;
  featured?: boolean;
  ariaLabel: string;
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyPanel = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  metrics?: CaseStudyMetric[];
};

export type CaseStudy = {
  section: SectionIntro;
  panels: CaseStudyPanel[];
};
