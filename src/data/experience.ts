import type { ExperienceItem } from "@/types/experience";
import type { SectionIntro } from "@/types/content";

export const experienceSection: SectionIntro = {
  id: "experience-heading",
  eyebrow: "The journey so far",
  title: "Built with experience. Grown with people.",
};

export const experienceItems: ExperienceItem[] = [
  {
    initials: "H",
    company: "Hytec Power Inc.",
    role: "Full Stack Developer",
    type: "Internship",
    year: "2026",
    quote: "Building digital experiences that bring industry and innovation closer together.",
    location: "Philippines",
    ariaLabel: "Full Stack Developer internship at Hytec Power Inc., 2026",
  },
  {
    initials: "QCU",
    company: "Quezon City University",
    role: "Full Stack Developer",
    type: "Academic project",
    year: "2025",
    quote: "Helping research find its audience through a better academic publishing experience.",
    location: "Quezon City, Philippines",
    ariaLabel: "Full Stack Developer academic project at Quezon City University, 2025",
  },
  {
    initials: "SC",
    company: "QCU Supreme Student Council",
    role: "Council of Leader",
    type: "Leadership",
    year: "2023 — Present",
    quote: "People-first leadership, clear communication, and a shared sense of purpose.",
    location: "Quezon City, Philippines",
    ariaLabel: "Council of Leader at QCU Supreme Student Council, 2023 to present",
  },
];

export const educationCard = {
  title: "Always learning. Always evolving.",
  detail: "B.S. Information Technology · Quezon City University · Class of 2026",
};
