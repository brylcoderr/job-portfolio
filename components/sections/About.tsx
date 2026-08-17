"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { Code2, Shield, Building2, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "6+ Years",
    subtitle: "Building production-grade web applications",
  },
  {
    icon: Shield,
    title: "Accessibility",
    subtitle: "WCAG 2.1 AA compliant interfaces",
  },
  {
    icon: Building2,
    title: "Gov-Scale",
    subtitle: "Platforms handling millions of users",
  },
  {
    icon: Sparkles,
    title: "AI-Augmented",
    subtitle: "Copilot, ChatGPT API, Vercel AI SDK",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading">About Me</p>
          <h2 className="section-title mb-8">
            Crafting digital experiences<br />
            that <span className="gradient-text">make an impact</span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <SectionReveal delay={0.1}>
            <div className="space-y-5">
              <p className="text-[var(--muted-fg)] leading-relaxed text-base lg:text-lg">
                I&apos;m a Full-Stack Developer with <strong className="text-[var(--fg)]">6+ years of experience</strong> building
                fast, scalable web applications using <strong className="text-[var(--fg)]">React.js, Next.js,
                  TypeScript, Node.js, and Express</strong>.
              </p>
              <p className="text-[var(--muted-fg)] leading-relaxed text-base lg:text-lg">
                I specialize in UI/UX engineering, accessibility, REST API design,
                and database development with MongoDB and MySQL. My work spans
                from government-scale platforms serving millions to SaaS products
                used by tens of thousands.
              </p>
              <p className="text-[var(--muted-fg)] leading-relaxed text-base lg:text-lg">
                I actively integrate AI tools — GitHub Copilot, ChatGPT API,
                Figma AI, and Vercel AI SDK — into my workflow, staying ahead of
                the curve in modern development practices.
              </p>

              {/* Location tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-muted)] rounded-full text-sm font-mono text-[var(--accent)]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Noida, India · Open to remote
              </div>
            </div>
          </SectionReveal>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, index) => (
              <SectionReveal key={item.title} delay={0.15 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors group"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <item.icon className="w-8 h-8 text-[var(--accent)] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-[var(--fg)] text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-fg)] leading-snug">
                    {item.subtitle}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
