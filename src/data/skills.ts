import type { ContentAudit, SectionIntro } from "@/types/content";
import type { SkillGroup } from "@/types/skill";

export const skillsSection: SectionIntro = {
  id: "skills-heading",
  eyebrow: "Technical skills",
  title: "Programming Expertise and Toolkits",
  lead: "Listed here are the tools and platforms connected to my project, coursework, and internship experiences.",
};

export const skillsAudit: ContentAudit = {
  status: "confirmed",
  note: "Repository-aligned inventory based on the current public GitHub projects and the tools directly reflected in them.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    ariaLabel: "Programming languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "PHP", "Dart", "C#", "C++", "HTML", "CSS"],
  },
  {
    title: "Frontend & Web",
    ariaLabel: "Frontend and web technologies",
    items: ["React", "Next.js", "Angular", "Vite", "Tailwind", "Bootstrap", "jQuery", "Razor"],
  },
  {
    title: "Backend & APIs",
    ariaLabel: "Backend and API technologies",
    items: ["Node.js", "Express", "Flask", "Laravel", "ASP.NET", "REST APIs"],
  },
  {
    title: "Mobile, IoT & Realtime",
    ariaLabel: "Mobile, Internet of Things, and realtime technologies",
    items: ["Flutter", "Firebase", "Cloud Firestore", "Arduino", "Bluetooth"],
  },
  {
    title: "Data & Services",
    ariaLabel: "Data and service platforms",
    items: ["MongoDB Atlas", "MySQL", "Cloudinary", "PayMongo", "Firebase Data Connect"],
  },
  {
    title: "Tooling & Deployment",
    ariaLabel: "Development tooling and deployment platforms",
    items: ["Git and GitHub", "Docker", "Android Studio", "Vercel", "Railway", "Visual Studio and Visual Studio Code", "PuTTTy"],
  },
];
