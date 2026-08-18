import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiNestjs,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiGithubactions,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiVitest,
  SiSelenium,
  SiGithubcopilot,
  SiFigma,
  SiLangchain,
  SiHuggingface,
} from "react-icons/si";
import { FaServer, FaTheaterMasks, FaAws } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import type { IconType } from "react-icons";

// ─── Site-wide ──────────────────────────────────────────────

export const siteConfig = {
  name: "Shubham Kushwah",
  title: "Full-Stack Developer",
  tagline: "I build fast, scalable web apps that actually ship.",
  description:
    "Full-Stack Developer with 6+ years of experience building fast, scalable web applications using React.js, Next.js, TypeScript, Node.js, and Express. Based in India, working globally.",
  location: "India",
  siteUrl: "https://shubhamkportfolio.vercel.app",
  isAvailable: true,
  contactEmail: "brylcodes@gmail.com",
  phone: "+91-9557660208",
  socials: {
    github: "https://github.com/brylcoderr",
    linkedin: "https://linkedin.com/in/brylcodes",
    twitter: "",
  },
};

// ─── Navigation ─────────────────────────────────────────────

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ───────────────────────────────────────────────────

export const heroConfig = {
  eyebrow: "Available for Work",
  headline: "I build fast, scalable web apps that actually ship.",
  subheadline:
    "Full-Stack Developer with 6+ years. React, Next.js, Node.js specialist. Based in India, working globally.",
  ctaPrimary: "Let's Work Together",
  ctaSecondary: "View My Work ↓",
  stackLabel: "My stack",
  stack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
};

// ─── About ──────────────────────────────────────────────────

export const aboutConfig = {
  paragraphs: [
    "I'm Shubham, a full-stack developer based in India with 6+ years building production-grade web applications.",
    "I obsess over performance, clean architecture, and user experience. I've worked across SaaS products, agency builds, and everything in between — turning complex requirements into fast, maintainable software.",
    "When I'm not shipping code, I'm exploring new technologies and expanding my skill set to stay sharp on the latest in the web ecosystem.",
  ],
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Open to Remote", value: "✓" },
  ],
};

// ─── Skills ─────────────────────────────────────────────────

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "REST APIs", icon: FaServer },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
      { name: "CI/CD", icon: SiGithubactions },
    ],
  },
  {
    name: "Testing",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "Vitest", icon: SiVitest },
      { name: "React Testing Lib", icon: SiTestinglibrary },
      { name: "Cypress", icon: SiCypress },
      { name: "Playwright", icon: FaTheaterMasks },
      { name: "Selenium", icon: SiSelenium },
    ],
  },
  {
    name: "AI & Productivity",
    skills: [
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "ChatGPT API", icon: TbBrandOpenai },
      { name: "LangChain", icon: SiLangchain },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Figma AI", icon: SiFigma },
      { name: "Vercel AI SDK", icon: SiVercel },
    ],
  },
];

// ─── Experience ─────────────────────────────────────────────

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Nippon Data Systems",
    role: "Front End Developer",
    period: "Dec 2023 — May 2026",
    bullets: [
      "Built responsive government portals handling 1M+ daily active users with React.js and Next.js",
      "Implemented WCAG 2.1 AA accessibility standards across all platforms, achieving 98% Lighthouse scores",
      "Reduced page load times by 40% through code splitting, lazy loading, and image optimization",
    ],
  },
  {
    company: "Ensaar Global Private Limited",
    role: "Full Stack Developer",
    period: "Mar 2021 — Apr 2023",
    bullets: [
      "Architected a full-stack SaaS platform serving 50K+ users with React, Node.js, and MongoDB",
      "Designed and maintained 20+ RESTful API endpoints with Express.js and comprehensive test coverage",
      "Led migration from legacy jQuery codebase to React, reducing bundle size by 60%",
    ],
  },
  {
    company: "Round Pay",
    role: "Web Developer",
    period: "Aug 2019 — May 2020",
    bullets: [
      "Developed a payment dashboard with real-time transaction tracking and analytics",
      "Integrated third-party payment gateways and KYC verification workflows",
      "Built responsive mobile-first UI used by 10K+ merchants across India",
    ],
  },
];

// ─── Projects ───────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  media: string;
  mediaType: "video" | "gif";
  accentColor: string;
  category: "SaaS" | "Agency" | "Tool" | "Creative" | "API" | "Dashboard";
  featured: boolean;
}

export const allProjects: Project[] = [
  // ── Featured (home page) ────────────────────────────────
  {
    id: "xenodesk",
    title: "XenoDesk",
    description:
      "Help desk platform for real-time ticket management — serving 500+ support agents with live chat, agent assignment, and SLA tracking.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    media: "xenodesk.mp4",
    mediaType: "video",
    accentColor: "#38bdf8",
    category: "SaaS",
    featured: true,
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    description:
      "High-converting product landing page with 4.2% conversion rate — smooth scroll animations, responsive layouts, and A/B tested hero sections.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    media: "saas-landing.mp4",
    mediaType: "video",
    accentColor: "#a855f7",
    category: "Agency",
    featured: true,
  },
  {
    id: "katachi",
    title: "Katachi",
    description:
      "Creative web experience with dynamic shapes and fluid animations — interactive visual storytelling inspired by Japanese design principles.",
    tech: ["React", "Canvas API", "GSAP", "WebGL"],
    media: "katachi.mp4",
    mediaType: "video",
    accentColor: "#10b981",
    category: "Creative",
    featured: true,
  },
  {
    id: "xeno-demos",
    title: "Xeno Demos",
    description:
      "Interactive product demonstration platform — guided walkthroughs and live preview experiences used by 3 enterprise sales teams.",
    tech: ["React", "TypeScript", "Framer Motion", "REST API"],
    media: "xeno-demos.mp4",
    mediaType: "video",
    accentColor: "#f59e0b",
    category: "Tool",
    featured: true,
  },

  // ── Remaining projects ──────────────────────────────────
  {
    id: "3d-product-showcase",
    title: "3D Product Showcase",
    description:
      "Immersive 3D product visualization — interactive camera controls, dynamic lighting, and smooth rotation animations for e-commerce.",
    tech: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
    media: "3d Product showcase.mp4",
    mediaType: "video",
    accentColor: "#ec4899",
    category: "Creative",
    featured: false,
  },
  {
    id: "3d-interactive-site",
    title: "3D Interactive Site",
    description:
      "Fully immersive 3D web experience — particle systems, cinematic camera transitions, and interactive elements for brand storytelling.",
    tech: ["Three.js", "WebGL", "GSAP", "Blender"],
    media: "3d-interactive-site.gif",
    mediaType: "gif",
    accentColor: "#8b5cf6",
    category: "Creative",
    featured: false,
  },
  {
    id: "ai-landing-page",
    title: "AI Landing Page",
    description:
      "Modern landing page for an AI-powered product — gradient visuals, animated sections, and conversion-focused design driving 3x signup growth.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    media: "ai-landing-page.mp4",
    mediaType: "video",
    accentColor: "#06b6d4",
    category: "Agency",
    featured: false,
  },
  {
    id: "ai-saas-chat",
    title: "AI SaaS Chat",
    description:
      "AI-powered chat application — real-time messaging, conversation threads, and context-aware responses handling 10K+ daily queries.",
    tech: ["React", "Node.js", "OpenAI API", "WebSocket", "MongoDB"],
    media: "ai-saas-chat.mp4",
    mediaType: "video",
    accentColor: "#14b8a6",
    category: "SaaS",
    featured: false,
  },
  {
    id: "auto-captions",
    title: "Auto Captions",
    description:
      "Automated video captioning tool — AI-powered speech recognition generating accurate subtitles with 95%+ accuracy across 8 languages.",
    tech: ["Python", "FFmpeg", "Whisper AI", "React"],
    media: "auto-captions.mp4",
    mediaType: "video",
    accentColor: "#f97316",
    category: "Tool",
    featured: false,
  },
  {
    id: "ecom-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "Analytics dashboard for e-commerce — real-time sales metrics, inventory tracking, and revenue visualization for 200+ products.",
    tech: ["React", "Chart.js", "Node.js", "PostgreSQL", "REST API"],
    media: "ecom-dashboard.mp4",
    mediaType: "video",
    accentColor: "#22c55e",
    category: "Dashboard",
    featured: false,
  },
  {
    id: "notesapi",
    title: "Notes API",
    description:
      "RESTful API for note management — full CRUD, JWT authentication, search functionality, and real-time sync across devices.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    media: "notesapi.mp4",
    mediaType: "video",
    accentColor: "#eab308",
    category: "API",
    featured: false,
  },
  {
    id: "photography-lander",
    title: "Photography Lander",
    description:
      "Photography portfolio landing page — masonry grid gallery, lightbox viewer, and smooth page transitions for professional photographers.",
    tech: ["Next.js", "Framer Motion", "CSS Grid", "Lightbox"],
    media: "photgraphy-lander.mp4",
    mediaType: "video",
    accentColor: "#d946ef",
    category: "Agency",
    featured: false,
  },
  {
    id: "realtime-notifications",
    title: "Realtime Notifications",
    description:
      "Real-time notification system — push alerts, live activity feeds, and WebSocket-powered instant updates handling 100K+ events/hour.",
    tech: ["Node.js", "Socket.io", "Redis", "React", "TypeScript"],
    media: "realtime-notifications.mp4",
    mediaType: "video",
    accentColor: "#ef4444",
    category: "Tool",
    featured: false,
  },
  {
    id: "webgl-data",
    title: "WebGL Data Visualization",
    description:
      "Interactive data visualization — WebGL-powered high-performance rendering of complex datasets and 3D charts for financial analytics.",
    tech: ["WebGL", "D3.js", "Three.js", "React", "TypeScript"],
    media: "webgl-data.mp4",
    mediaType: "video",
    accentColor: "#6366f1",
    category: "Dashboard",
    featured: false,
  },
  {
    id: "workflow-engine",
    title: "Workflow Engine",
    description:
      "Visual workflow automation builder — drag-and-drop interface, conditional logic nodes, and real-time execution monitoring for 50+ workflows.",
    tech: ["React", "React Flow", "Node.js", "PostgreSQL", "TypeScript"],
    media: "workflow-engine.mp4",
    mediaType: "video",
    accentColor: "#0ea5e9",
    category: "Tool",
    featured: false,
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);

// ─── Testimonials ───────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  // TODO: Replace with real testimonial
  {
    quote:
      "Shubham delivered our platform ahead of schedule with exceptional code quality. His attention to performance and UX details made a significant difference in our product launch.",
    name: "Rahul Sharma",
    role: "CTO",
    company: "Nippon Data System",
    initials: "RS",
  },
  // TODO: Replace with real testimonial
  {
    quote:
      "Working with Shubham was a game-changer for our team. He transformed our legacy frontend into a modern, accessible application that our users love. Highly recommend.",
    name: "Priya Patel",
    role: "Product Manager",
    company: "Ensaar Global",
    initials: "PP",
  },
];

// ─── Contact Form Options ───────────────────────────────────

export const projectTypes = [
  "Web App",
  "Landing Page",
  "API / Backend",
  "Full Project",
  "Other",
];

export const budgetRanges = [
  "< ₹50k",
  "₹50k–₹2L",
  "₹2L–₹5L",
  "₹5L+",
  "Let's Discuss",
];

// ─── EmailJS Config ─────────────────────────────────────────
// Replace these with your actual EmailJS credentials
export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID", // e.g., "service_xxxxxxx"
  templateId: "YOUR_TEMPLATE_ID", // e.g., "template_xxxxxxx"
  publicKey: "YOUR_PUBLIC_KEY", // e.g., "xxxxxxxxxxxxxxx"
};
