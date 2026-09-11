import type { SectionIntro } from "@/types/content";
import type { SocialLink } from "@/types/social";

import { contactEntries } from "@/data/contact";

export const contactSection: SectionIntro = {
  id: "contact-heading",
  eyebrow: "Good things start with a hello",
  title: "Let's make something great.",
};

export const contactListAriaLabel = "Contact channels";

export const footerContent = {
  copyrightSuffix: "All rights reserved.",
  linksAriaLabel: "Footer links",
  tagline: "Developer by craft. Leader by nature.",
};

const footerLinkOrder = ["GitHub", "LinkedIn", "Email", "Phone"] as const;

export const contactLinks = contactEntries;

export const footerLinks = footerLinkOrder
  .map((label) => contactEntries.find((entry) => entry.label === label))
  .filter((entry): entry is SocialLink => Boolean(entry));
