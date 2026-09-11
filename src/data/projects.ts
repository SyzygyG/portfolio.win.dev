import type { Project, ProjectsContent } from "@/types/project";

export const projectsContent: ProjectsContent = {
  section: {
    id: "projects-heading",
    eyebrow: "Selected work",
    title: "Less talking. More building.",
    lead: "A few projects where curiosity turned into something real.",
  },
  footnoteLabel: "There's more where that came from.",
  footnoteHref: "https://github.com/SyzygyG",
};

export const projects: Project[] = [
  {
    slug: "videre",
    index: "01",
    category: "Digital art platform",
    domain: "videre.app",
    title: "VIDERE",
    oneLiner: "A space for artists to create, connect, and make a living doing what they love.",
    description:
      "Directed the development of a digital art platform for creating, sharing, selling, and collaborating on artwork - marketplace flows, commissions, collaborative canvas tools, and ML-assisted recommendations in one ecosystem.",
    role: "Project Manager & Full Stack Developer",
    year: "2025 — 2026",
    stack: ["React", "Node.js", "Python", "MongoDB"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/SyzygyG/Videre",
        kind: "github",
        ariaLabel: "VIDERE GitHub repository",
      },
      {
        label: "Live",
        href: "https://viderevision.vercel.app/",
        kind: "external",
        ariaLabel: "VIDERE live demo",
      },
    ],
    media: {
      kind: "image",
      src: "images/projects/videre-preview.webp",
      alt: "VIDERE website preview",
    },
    ariaLabel: "VIDERE digital art platform",
  },
  {
    slug: "hytec-virtual-tour",
    index: "02",
    category: "Immersive 3D experience",
    domain: "hytecvirtualtour.app",
    title: "Hytec Virtual Tour",
    oneLiner: "Bringing spaces to life through an interactive, immersive virtual experience.",
    description:
      "Created a 3D virtual tour for Hytec Power Inc. using Google Model Viewer and Photo Sphere Viewer, with Laravel supporting the content management system behind the experience.",
    role: "Full Stack Developer",
    year: "2026",
    stack: ["Laravel", "Angular", "3D", "CMS"],
    links: [
      {
        label: "Live",
        href: "https://virtual-tour.e-hytec.dev/tour",
        kind: "external",
        ariaLabel: "Hytec Virtual Tour live demo",
      },
    ],
    media: {
      kind: "image",
      src: "images/projects/hytec-virtual-tour.webp",
      alt: "Hytec Virtual Tour website preview",
    },
    ariaLabel: "Hytec Power Inc. virtual tour project",
  },
  {
    slug: "qcu-journals",
    index: "03",
    category: "Academic publishing platform",
    domain: "qcujournals.app",
    title: "QCU Journals",
    oneLiner: "Making research more accessible, from the first submission to publication.",
    description:
      "Developed qcujournals.com using PKP Open Journal Systems to manage scholarly peer-reviewed journals and streamline submission, peer review, editing, and indexing workflows.",
    role: "Full Stack Developer",
    year: "2025",
    stack: ["Open Journal Systems", "PHP", "MySQL"],
    links: [
      {
        label: "Live",
        href: "https://qcujournals.com/",
        kind: "external",
        ariaLabel: "QCU Journals live site",
      },
    ],
    media: {
      kind: "image",
      src: "images/projects/qcu-journals-preview.webp",
      alt: "QCU Journals website preview",
    },
    ariaLabel: "QCU Journals academic publishing platform",
  },
];
