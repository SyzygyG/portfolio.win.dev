import type { ActionLink, PlaceholderAsset, SectionIntro } from "@/types/content";

export type HeroHeadingSegment = {
  text: string;
  emphasis?: boolean;
};

export type AboutMetaItem = {
  label: string;
  value: string[];
};

export type AvatarAsset =
  | (PlaceholderAsset & {
      initials: string;
    })
  | {
      kind: "image";
      src: string;
      alt: string;
    };

export type HeroContent = {
  availabilityLabel: string;
  heading: HeroHeadingSegment[];
  subcopy: string;
  stackLabel: string;
  actions: ActionLink[];
};

export type ResumeInfo = {
  section: SectionIntro;
  preview:
    | (PlaceholderAsset & {
        text: string;
      })
    | {
        kind: "image";
        src: string;
        alt: string;
        text?: string;
      };
  download: ActionLink;
  open: ActionLink;
};

export type AboutContent = {
  section: SectionIntro;
  paragraphs: string[];
  meta: AboutMetaItem[];
  interests: string[];
  avatar: AvatarAsset;
};

export type LearningContent = {
  label: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  title: string;
  description: string;
  keywords: string;
  ogDescription: string;
  location: string;
  hero: HeroContent;
  about: AboutContent;
  coreStack: string[];
  learning: LearningContent;
  resume: ResumeInfo;
};
