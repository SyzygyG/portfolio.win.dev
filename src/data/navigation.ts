import type { NavigationLink } from "@/types/navigation";

export const navigationLinks: NavigationLink[] = [
  { href: "#about", label: "About", id: "about", mobileLabel: "About" },
  { href: "#projects", label: "Work", id: "projects", mobileLabel: "Work" },
  { href: "#experience", label: "Journey", id: "experience", mobileLabel: "Journey" },
  { href: "#skills", label: "Skills", id: "skills", mobileLabel: "Skills" },
  { href: "#certificates", label: "Certs", id: "certificates", mobileLabel: "Certs" },
  { href: "#contact", label: "Contact", id: "contact", cta: true, mobileLabel: "Contact" },
];
