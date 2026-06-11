export type SocialIcon = "email" | "phone" | "linkedin" | "github";

export type SocialLink = {
  label: string;
  value: string;
  href: string;
  icon: SocialIcon;
};
