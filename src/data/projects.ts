import type { SectionIntro } from "@/types/content";
import type { CaseStudy, Project } from "@/types/project";

export const projectsSection: SectionIntro = {
  id: "projects-heading",
  eyebrow: "Featured projects",
  title: "Technical programming projects that I involved myself with.",
  lead: "My projects showcase my skills both as a developer and a project manager. Click any project to explore the code or live demo.",
};

export const projects: Project[] = [
  {
    slug: "videre",
    type: "Project Manager - Digital Art Platform",
    title: "VIDERE",
    description:
      "Directed the development of a digital art platform for creating, sharing, selling, and collaborating on artwork. Built across a React/Vite frontend, Node.js/Express backend, and Python/Flask ML services, it brought together marketplace flows, commissions, collaborative canvas tools, and recommendation features in one ecosystem.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Python",
      "Flask",
      "MongoDB Atlas",
      "PayMongo",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/SyzygyG/Videre",
        kind: "github",
        ariaLabel: "VIDERE GitHub repository",
      },
      {
        label: "Live demo",
        href: "https://viderevision.vercel.app/",
        kind: "external",
        ariaLabel: "VIDERE live demo",
      },
    ],
    media: {
      kind: "image",
      src: "images/projects/videre-preview.png",
      alt: "VIDERE interface preview showing the platform workspace and content areas",
    },
    featured: true,
    ariaLabel: "VIDERE digital artist collaboration platform",
  },
  {
    slug: "hytec-power-virtual-tour",
    type: "Full Stack Developer- 3D Virtual Tour",
    title: "Hytec Power Inc. Virtual Tour",
    description:
      "Created a 3D virtual tour for Hytec Power Inc. using Google Model Viewer and Photo Sphere Viewer, with Laravel supporting the content management system behind the experience.",
    stack: ["Google Model Viewer", "Photo Sphere Viewer", "Laravel", "Angular",  "Virtual Tour"],
    links: [
      {
        label: "Live demo",
        href: "https://virtual-tour.e-hytec.dev/tour",
        kind: "external",
        ariaLabel: "Hytec Power Inc. Virtual Tour live demo",
      },
    ],
    media: {
      kind: "image",
      src: "images/projects/hytec-virtual-tour.png",
      alt: "Hytec Power Inc. virtual tour scene showing the interactive classroom environment",
    },
    ariaLabel: "Hytec Power Inc. virtual tour project",
  },
  {
    slug: "qcu-journals",
    type: "Full Stack Developer - Academic Publishing Platform",
    title: "QCU Journals",
    description:
      "Developed qcujournals.com using PKP Open Journal Systems to manage scholarly peer-reviewed journals and streamline submission, peer review, editing, and indexing workflows.",
    stack: ["PKP Open Journal Systems", "Academic Publishing", "Workflow Management"],
    links: [
      {
        label: "Live demo",
        href: "https://qcujournals.com/",
        kind: "external",
        ariaLabel: "QCU Journals live site",
      },
    ],
    media: {
      kind: "image",
      src: "images/projects/qcu-journals-preview.png",
      alt: "QCU Journals preview showing the academic publishing platform interface",
    },
    ariaLabel: "QCU Journals academic publishing platform",
  },
];

export const caseStudy: CaseStudy = {
  section: {
    id: "case-study-heading",
    eyebrow: "Project spotlight",
    title: "VIDERE: project spotlight.",
    lead:
      "A digital art platform built to combine creation, collaboration, discovery, and commerce in one connected experience.",
  },
  panels: [
    {
      id: "overview",
      label: "Overview",
      title: "What VIDERE aimed to do",
      paragraphs: [
        "VIDERE was built as a digital art platform where artists can create, share, sell, and collaborate on artwork. It combines social features, creative tools, and commerce flows into one product.",
        "Instead of stopping at a standard marketplace, the platform supports artist collaboration, commission workflows, buyer discovery, and ML-assisted recommendation features in the same ecosystem.",
      ],
      bullets: [
        "Collaborative ArtSpace canvas with layers, tools, and real-time sync",
        "Social posting, follows, likes, comments, and direct messaging",
        "Marketplace, shopping cart, and commission flows",
        "Artist portfolios and buyer-side discovery features",
      ],
    },
    {
      id: "role",
      label: "Role",
      title: "Project leadership responsibilities",
      paragraphs: [
        "I led the project as a full stack platform effort spanning frontend, backend, infrastructure, and ML service boundaries. The work required balancing product direction with technical execution across a broad feature set.",
        "The platform demanded coordination across social experiences, commerce flows, real-time interactions, and recommendation systems rather than a single isolated application layer.",
      ],
      bullets: [
        "Directed development of the platform",
        "Worked across product, technical, and integration priorities",
        "Coordinated a platform with social, commerce, and ML-backed features",
      ],
    },
    {
      id: "stack",
      label: "Stack",
      title: "Technology used",
      paragraphs: [
        "VIDERE uses a three-service architecture: a React/Vite frontend, a Node.js/Express backend, and a Python/Flask ML microservice. Supporting services include MongoDB Atlas for persistence, Cloudinary for image storage, and PayMongo for payments.",
        "The platform also integrates Socket.io for real-time communication, JWT-based authentication, Google OAuth, Cloudinary uploads, and email-based flows for OTP and notifications.",
      ],
      bullets: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "Python / Flask",
        "MongoDB Atlas",
        "Cloudinary",
        "Socket.io",
        "PayMongo API",
      ],
    },
    {
      id: "features",
      label: "Features",
      title: "Platform capabilities",
      paragraphs: [
        "VIDERE was designed as a broader digital art ecosystem rather than only a marketplace or only a social platform. It connects creative, transactional, and recommendation-driven experiences in one product.",
        "That breadth pushed the project beyond basic CRUD flows into user-generated content, real-time interaction, payments, discovery, and platform-level thinking.",
      ],
      bullets: [
        "Collaborative drawing canvas",
        "Marketplace and checkout with PayMongo",
        "Commission management",
        "Portfolio showcase and artwork discovery",
        "Real-time social interaction features",
      ],
    },
    {
      id: "ml",
      label: "ML Layer",
      title: "Machine learning and recommendation layer",
      paragraphs: [
        "VIDERE includes recommendation work and hash-based plagiarism detection as part of its ML layer. The system combines MobileNetV2 embeddings, collaborative filtering, FAISS candidate retrieval, and K-Means clustering to support artwork and creator recommendations.",
        "That layer added another level of complexity by combining product-facing UX with service decomposition and ML-assisted capabilities.",
      ],
      metrics: [
        { value: "3", label: "Primary services" },
        { value: "FAISS", label: "ANN retrieval in ML service" },
        { value: "JWT", label: "Auth flow" },
      ],
    },
  ],
};
