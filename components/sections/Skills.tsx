"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGraphql, SiNestjs, SiPostman,
  SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiRedis, SiFirebase,
  SiGit, SiGithub, SiDocker, SiVercel, SiGithubactions,
  SiJest, SiTestinglibrary, SiCypress, SiVitest, SiSelenium,
  SiGithubcopilot, SiFigma, SiLangchain, SiHuggingface
} from "react-icons/si";
import { FaServer, FaTheaterMasks, FaAws } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";

const SKILL_CATEGORIES = [
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

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.3,
      ease: "easeOut" as const,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading text-center">Skills & Technologies</p>
          <h2 className="section-title text-center mb-16">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <SectionReveal key={category.name} delay={catIndex * 0.08} className="h-full">
              <div className="h-full p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]"
                   style={{ boxShadow: "var(--card-shadow)" }}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-5 font-semibold">
                  {`// ${category.name}`}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      custom={skillIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={pillVariants}
                      className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all cursor-pointer"
                    >
                      <skill.icon className="w-6 h-6 text-[var(--muted-fg)] group-hover:text-[var(--accent)] transition-colors" />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[var(--fg)] text-[var(--bg)] text-xs font-semibold rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-md">
                        {skill.name}
                        {/* Tooltip arrow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--fg)] rotate-45" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
