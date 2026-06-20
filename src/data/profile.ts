import type { Profile } from "@/types/profile";

import { contactEntries, resumeDocumentHref } from "@/data/contact";

const location = "Quezon City, Philippines";
const emailContact = contactEntries.find((link) => link.icon === "email");

export const profile: Profile = {
  name: "Erwin Gamaliel Gamalong",
  role: "Full Stack Developer Project Manager",
  title: "Erwin Gamaliel Gamalong - Full Stack Developer | Project Manager",
  description:
    "Erwin Gamaliel Gamalong - Goal-oriented full stack developer and project manager with experience across web and mobile development.",
  keywords: "Erwin Gamalong, Full Stack Developer, Project Manager, React, Node.js, PHP, Flutter, portfolio",
  ogDescription:
    "Goal-oriented full stack developer and project manager with experience leading web and mobile software projects.",
  location,
  hero: {
    availabilityLabel: "Available for opportunities",
    heading: [
      { text: "Full Stack Developer & Project Manager",},
      { text: "in Quezon City", emphasis: true },

    ],
    subcopy:
      "Goal-oriented and adaptable full stack developer with hands-on experience in web and mobile development, content-management systems, and background as a project manager for various technical projects. Based in Quezon City, Philippines.",
    stackLabel: "Core stack",
    actions: [
      { label: "View projects", href: "#projects", variant: "primary", icon: "folder" },
      { label: "Download resume", href: resumeDocumentHref, variant: "outline", icon: "download", download: true },
      { label: "Contact me", href: "#contact", variant: "outline" },
    ],
  },
  about: {
    section: {
      id: "about-heading",
      eyebrow: "About",
      title: "Know more about Erwin.",
    },
    paragraphs: [
      "I'm Erwin Gamaliel Gamalong, a full stack developer and project manager, who has built a diverse skill set through my academic career, intern experience, and project leadership roles. My work has ranged from web platforms and mobile applications to immersive virtual environments and project lifecycles.",
      "I enjoy working as a full stack and adapting to different requirements. My experience includes, but not limited to React, PHP, Python, .NET, Flutter, Firebase, and Oracle, along with the development tools that help teams collaborate towards one common objective.",
      "Beyond writing code, I've also led teams in building standalone, web, and mobile applications using Agile methodologies. I value coordination, clear communication, and high-quality results. I am a HUGE believer of the Laissez-faire leadership and trusting each individual on the team.",
    ],
    meta: [
      { label: "Location", value: [location] },
      { label: "Degree", value: ["B.S. Information Technology", "Quezon City University", "Graduation Date: June 2026"] },
      { label: "Status", value: ["Open to flexible, hybrid and full-time roles"] },
      { label: "Email", value: emailContact ? [emailContact.value] : [] },
    ],
    interests: [
      "Web Development",
      "Mobile Applications",
      "Content Management Systems",
      "Workflow Efficiency",
      "Team Leadership",
      "Software Quality",
    ],
    avatar: {
      kind: "image",
      src: "images/erwin-headshot.png",
      alt: "Professional headshot of Erwin Gamaliel Gamalong",
    },
  },
  coreStack: [
    "React",
    "PHP",
    "Python",
    ".NET",
    "Flutter",
    "Node.js",
    "Firebase",
    "Oracle Database",
    "MongoDB",
    "MySQL",
  ],
  learning: {
    label: "Currently learning",
    items: ["DevOps", "LLM Integration", "Web Security", "SEO Advanced Concepts"],
  },
  resume: {
    section: {
      id: "resume-heading",
      eyebrow: "Resume",
      title: "Available for download.",
      lead:
        "My resume covers education, leadership roles, internship experience, and selected technical projects.",
    },
    preview: {
      kind: "image",
      src: "images/resume-preview.png",
      alt: "Preview of Erwin Gamaliel Gamalong's resume",
      text: "Resume preview",
    },
    download: {
      label: "Download PDF",
      href: resumeDocumentHref,
      variant: "primary",
      icon: "download",
      download: true,
    },
    open: {
      label: "Open in browser",
      href: resumeDocumentHref,
      variant: "outline",
      target: "_blank",
      rel: "noreferrer",
    },
  },
};
