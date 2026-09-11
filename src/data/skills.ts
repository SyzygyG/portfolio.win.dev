import type { SectionIntro } from "@/types/content";
import type { SkillTab } from "@/types/skill";

export const skillsSection: SectionIntro = {
  id: "skills-heading",
  eyebrow: "Under the hood",
  title: "The tools behind the possibilities.",
  lead: "A versatile toolkit. The right tool for the right problem.",
};

export const skillTabs: SkillTab[] = [
  {
    id: "development",
    label: "Development",
    items: [
      { name: "React", category: "Frontend", icon: "react/react-original.svg" },
      { name: "JavaScript", category: "Language", icon: "javascript/javascript-original.svg" },
      { name: "TypeScript", category: "Language", icon: "typescript/typescript-original.svg" },
      { name: "Node.js", category: "Backend", icon: "nodejs/nodejs-original.svg" },
      { name: "Python", category: "Language", icon: "python/python-original.svg" },
      { name: "PHP", category: "Language", icon: "php/php-original.svg" },
      { name: "Laravel", category: "Framework", icon: "laravel/laravel-original.svg" },
      { name: "Flutter", category: "Mobile", icon: "flutter/flutter-original.svg" },
      { name: "Angular", category: "Frontend", icon: "angular/angular-original.svg" },
      { name: ".NET", category: "Framework", icon: "dotnetcore/dotnetcore-original.svg" },
      { name: "HTML5", category: "Web", icon: "html5/html5-original.svg" },
      { name: "Tailwind CSS", category: "Styling", icon: "tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: "data-cloud",
    label: "Data & Cloud",
    items: [
      { name: "MongoDB", category: "Database", icon: "mongodb/mongodb-original.svg" },
      { name: "MySQL", category: "Database", icon: "mysql/mysql-original.svg" },
      { name: "Firebase", category: "Backend-as-a-service", icon: "firebase/firebase-original.svg" },
      { name: "Oracle", category: "Database", icon: "oracle/oracle-original.svg" },
      { name: "Cloudinary", category: "Media", icon: "cloudinary/cloudinary-original.svg" },
      { name: "PayMongo", category: "Payments", glyph: "₱" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    items: [
      { name: "Git", category: "Version control", icon: "git/git-original.svg" },
      { name: "GitHub", category: "Collaboration", icon: "github/github-original.svg" },
      { name: "Docker", category: "Containers", icon: "docker/docker-original.svg" },
      { name: "Vercel", category: "Deployment", icon: "vercel/vercel-original.svg" },
      { name: "VS Code", category: "Editor", icon: "visualstudiocode/visualstudiocode-original.svg" },
      { name: "Android Studio", category: "Mobile IDE", icon: "androidstudio/androidstudio-original.svg" },
    ],
  },
];

export const exploring = {
  label: "Currently exploring",
  items: ["DevOps", "LLM Integration", "Web Security", "Advanced SEO"],
};
