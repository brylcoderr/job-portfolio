export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  media: string;
  mediaType: "video" | "gif";
  accentColor: string;
  featured: boolean;
}

export const ALL_PROJECTS: Project[] = [
  // ── Featured (home page) ────────────────────────────────
  {
    id: "xenodesk",
    title: "XenoDesk",
    description:
      "Full-featured help desk and customer support platform with real-time ticket management, agent assignment, and live chat integration.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    media: "xenodesk.mp4",
    mediaType: "video",
    accentColor: "#38bdf8",
    featured: true,
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    description:
      "High-converting SaaS product landing page with modern design patterns, smooth scroll animations, and responsive layouts.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    media: "saas-landing.mp4",
    mediaType: "video",
    accentColor: "#a855f7",
    featured: true,
  },
  {
    id: "katachi",
    title: "Katachi",
    description:
      "Creative web experience with dynamic shapes, fluid animations, and interactive visual storytelling inspired by Japanese design principles.",
    tech: ["React", "Canvas API", "GSAP", "WebGL"],
    media: "katachi.mp4",
    mediaType: "video",
    accentColor: "#10b981",
    featured: true,
  },
  {
    id: "xeno-demos",
    title: "Xeno Demos",
    description:
      "Interactive product demonstration platform showcasing key features through guided walkthroughs and live preview experiences.",
    tech: ["React", "TypeScript", "Framer Motion", "REST API"],
    media: "xeno-demos.mp4",
    mediaType: "video",
    accentColor: "#f59e0b",
    featured: true,
  },

  // ── Remaining projects ──────────────────────────────────
  {
    id: "3d-product-showcase",
    title: "3D Product Showcase",
    description:
      "Immersive 3D product visualization with interactive camera controls, dynamic lighting, and smooth rotation animations.",
    tech: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
    media: "3d Product showcase.mp4",
    mediaType: "video",
    accentColor: "#ec4899",
    featured: false,
  },
  {
    id: "3d-interactive-site",
    title: "3D Interactive Site",
    description:
      "Fully immersive 3D web experience with interactive elements, particle systems, and cinematic camera transitions.",
    tech: ["Three.js", "WebGL", "GSAP", "Blender"],
    media: "3d-interactive-site.gif",
    mediaType: "gif",
    accentColor: "#8b5cf6",
    featured: false,
  },
  {
    id: "ai-landing-page",
    title: "AI Landing Page",
    description:
      "Sleek and modern landing page for an AI-powered product with gradient visuals, animated sections, and conversion-focused design.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    media: "ai-landing-page.mp4",
    mediaType: "video",
    accentColor: "#06b6d4",
    featured: false,
  },
  {
    id: "ai-saas-chat",
    title: "AI SaaS Chat",
    description:
      "Intelligent AI-powered chat application with real-time messaging, conversation threads, and context-aware responses.",
    tech: ["React", "Node.js", "OpenAI API", "WebSocket", "MongoDB"],
    media: "ai-saas-chat.mp4",
    mediaType: "video",
    accentColor: "#14b8a6",
    featured: false,
  },
  {
    id: "auto-captions",
    title: "Auto Captions",
    description:
      "Automated video captioning tool that generates accurate subtitles using AI-powered speech recognition and text synchronization.",
    tech: ["Python", "FFmpeg", "Whisper AI", "React"],
    media: "auto-captions.mp4",
    mediaType: "video",
    accentColor: "#f97316",
    featured: false,
  },
  {
    id: "ecom-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "Comprehensive analytics dashboard for e-commerce with real-time sales metrics, inventory tracking, and revenue visualization.",
    tech: ["React", "Chart.js", "Node.js", "PostgreSQL", "REST API"],
    media: "ecom-dashboard.mp4",
    mediaType: "video",
    accentColor: "#22c55e",
    featured: false,
  },
  {
    id: "notesapi",
    title: "Notes API",
    description:
      "RESTful API for note management with full CRUD operations, JWT authentication, search functionality, and real-time sync.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    media: "notesapi.mp4",
    mediaType: "video",
    accentColor: "#eab308",
    featured: false,
  },
  {
    id: "photography-lander",
    title: "Photography Lander",
    description:
      "Stunning photography portfolio landing page with masonry grid gallery, lightbox viewer, and smooth page transitions.",
    tech: ["Next.js", "Framer Motion", "CSS Grid", "Lightbox"],
    media: "photgraphy-lander.mp4",
    mediaType: "video",
    accentColor: "#d946ef",
    featured: false,
  },
  {
    id: "realtime-notifications",
    title: "Realtime Notifications",
    description:
      "Real-time notification system with push alerts, live activity feeds, and WebSocket-powered instant updates.",
    tech: ["Node.js", "Socket.io", "Redis", "React", "TypeScript"],
    media: "realtime-notifications.mp4",
    mediaType: "video",
    accentColor: "#ef4444",
    featured: false,
  },
  {
    id: "webgl-data",
    title: "WebGL Data Visualization",
    description:
      "Interactive data visualization dashboard powered by WebGL for high-performance rendering of complex datasets and 3D charts.",
    tech: ["WebGL", "D3.js", "Three.js", "React", "TypeScript"],
    media: "webgl-data.mp4",
    mediaType: "video",
    accentColor: "#6366f1",
    featured: false,
  },
  {
    id: "workflow-engine",
    title: "Workflow Engine",
    description:
      "Visual workflow automation builder with drag-and-drop interface, conditional logic nodes, and real-time execution monitoring.",
    tech: ["React", "React Flow", "Node.js", "PostgreSQL", "TypeScript"],
    media: "workflow-engine.mp4",
    mediaType: "video",
    accentColor: "#0ea5e9",
    featured: false,
  },
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);
