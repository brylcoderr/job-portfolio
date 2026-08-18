"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { skillCategories } from "@/config/portfolio";

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
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading text-center">Skills & Technologies</p>
          <h2 className="section-title text-center mb-16">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <SectionReveal key={category.name} delay={catIndex * 0.08} className="h-full">
              <div
                className="h-full p-6 glass-card"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-val)] mb-5 font-semibold">
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
                      className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-val)] hover:border-[var(--color-accent-val)] hover:bg-[var(--accent-muted)] transition-all cursor-pointer"
                    >
                      <skill.icon className="w-6 h-6 text-[var(--color-text-muted-val)] group-hover:text-[var(--color-accent-val)] transition-colors" />

                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[var(--color-text)] text-[var(--color-bg)] text-xs font-semibold rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-md">
                        {skill.name}
                        {/* Tooltip arrow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--color-text)] rotate-45" />
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
