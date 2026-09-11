import type { Profile } from "@/types/profile";

import { resumeDocumentHref } from "@/data/contact";

export const profile: Profile = {
  name: "Erwin Gamaliel Gamalong",
  shortName: "Erwin Gamalong",
  role: "Developer & Project Manager",
  title: "Erwin Gamalong — Developer & Project Manager",
  description:
    "Erwin Gamaliel Gamalong - Goal-oriented full stack developer and project manager with experience across web and mobile development.",
  keywords: "Erwin Gamalong, Full Stack Developer, Project Manager, React, Node.js, PHP, Flutter, portfolio",
  ogDescription:
    "Goal-oriented full stack developer and project manager with experience leading web and mobile software projects.",
  location: "Quezon City, Philippines",
  github: {
    username: "SyzygyG",
    href: "https://github.com/SyzygyG",
  },
  hero: {
    tagline: "Developer by craft. Leader by nature.",
    availabilityLabel: "Available for opportunities",
    greeting: "Hey there, I'm Erwin",
    heading: [
      { text: "I build digital things." },
      { text: "And bring ideas" },
      { text: "to life.", italic: true },
    ],
    subcopy: ["A full stack developer & project manager connecting", "thoughtful design, clean code, and the people behind it."],
    actions: [
      { label: "Explore my work", href: "#projects", variant: "primary" },
      { label: "Let's build something", href: "#contact", variant: "outline" },
    ],
    coordinates: "14.6760° N · 121.0437° E",
    stickers: [
      { text: "The human behind the code ☺", tone: "sun", rotate: "-4deg" },
      { text: "Built with purpose.", tone: "teal", rotate: "3deg" },
      { text: "a little code, a lot of curiosity.", tone: "paper", rotate: "-2deg" },
      { text: "Based in Quezon City, PH", tone: "pink", rotate: "2deg" },
    ],
    sideLabels: ["Full stack developer", "Project manager"],
    portfolioTag: "Portfolio — 2026",
    aboutLinkLabel: "A little more about me",
  },
  about: {
    section: {
      id: "about-heading",
      eyebrow: "A little about me",
      title: "Good ideas deserve more than a “what if.”",
    },
    statements: ["Curious mind. Collaborative spirit.", "Always building what's next."],
    lede: "I turn complex challenges into digital experiences that feel simple.",
    paragraphs: [
      "I'm Erwin Gamaliel Gamalong, a full stack developer and project manager from Quezon City, Philippines. From web platforms and mobile apps to immersive virtual environments, I enjoy connecting the big picture with the little details.",
      "Beyond the code, I lead with trust. I believe the best work happens when people have the freedom to do what they do best — with a clear direction and a shared goal.",
    ],
    chips: ["Problem solver", "Team player", "Lifelong learner"],
    linkLabel: "Here's where I've been",
    pillars: [
      { num: "01", title: "Full Stack Development", desc: "From the interface to the infrastructure." },
      { num: "02", title: "Project Management", desc: "Bringing people, plans, and products together." },
      { num: "03", title: "Digital Experiences", desc: "Web, mobile, and everything in between." },
    ],
    avatar: {
      kind: "image",
      src: "images/erwin-headshot.webp",
      alt: "Erwin Gamaliel Gamalong",
    },
  },
  marquee: ["Creative thinking", "Clean code", "People-first leadership", "Real-world impact"],
  resume: {
    href: resumeDocumentHref,
    label: "View my resume",
  },
};
