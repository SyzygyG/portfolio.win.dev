import type { ContentAudit, SectionIntro } from "@/types/content";
import type { SkillGroup } from "@/types/skill";

export const skillsSection: SectionIntro = {
  id: "skills-heading",
  eyebrow: "Technical skills",
  title: "Tools of the trade.",
  lead: "A current inventory of tools and platforms connected to my project, coursework, and internship experience.",
};

export const skillsAudit: ContentAudit = {
  status: "confirmed",
  note: "Repository-aligned inventory based on the current public GitHub projects and the tools directly reflected in them.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    ariaLabel: "Programming languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "Dart", "C#", "C++", "HTML", "CSS"],
  },
  {
    title: "Frontend & Web",
    ariaLabel: "Frontend and web technologies",
    items: ["React", "Next.js", "Angular", "Vite", "Tailwind CSS", "Bootstrap", "jQuery", "Razor"],
  },
  {
    title: "Backend & APIs",
    ariaLabel: "Backend and API technologies",
    items: ["Node.js", "Express", "Flask", "Laravel", "ASP.NET MVC", "REST APIs", "Socket.io"],
  },
  {
    title: "Mobile, IoT & Realtime",
    ariaLabel: "Mobile, Internet of Things, and realtime technologies",
    items: ["Flutter", "Firebase", "Cloud Firestore", "Arduino", "Bluetooth"],
  },
  {
    title: "Data & Services",
    ariaLabel: "Data and service platforms",
    items: ["MongoDB Atlas", "MySQL", "Hive", "Cloudinary", "PayMongo", "Firebase Data Connect"],
  },
  {
    title: "Tooling & Deployment",
    ariaLabel: "Development tooling and deployment platforms",
    items: ["Git", "Docker", "Playwright", "pnpm", "Vercel", "Railway", "Visual Studio"],
  },
];
