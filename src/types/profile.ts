import type { ActionLink, SectionIntro } from "@/types/content";

export type AvatarAsset = {
  kind: "image";
  src: string;
  alt: string;
};

export type Sticker = {
  text: string;
  tone: "sun" | "teal" | "pink" | "paper";
  rotate?: string;
};

export type HeroContent = {
  tagline: string;
  availabilityLabel: string;
  greeting: string;
  heading: { text: string; italic?: boolean }[];
  subcopy: string[];
  actions: ActionLink[];
  coordinates: string;
  stickers: Sticker[];
  sideLabels: string[];
  portfolioTag: string;
  aboutLinkLabel: string;
};

export type AboutPillar = {
  num: string;
  title: string;
  desc: string;
};

export type AboutContent = {
  section: SectionIntro;
  statements: string[];
  lede: string;
  paragraphs: string[];
  chips: string[];
  linkLabel: string;
  pillars: AboutPillar[];
  avatar: AvatarAsset;
};

export type ResumeInfo = {
  href: string;
  label: string;
};

export type GitHubIdentity = {
  username: string;
  href: string;
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  title: string;
  description: string;
  keywords: string;
  ogDescription: string;
  location: string;
  github: GitHubIdentity;
  hero: HeroContent;
  about: AboutContent;
  marquee: string[];
  resume: ResumeInfo;
};
