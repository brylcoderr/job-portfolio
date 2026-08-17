"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
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

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading text-center">Experience</p>
          <h2 className="section-title text-center mb-16">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop center, mobile left */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--border-color)] md:-translate-x-[1px]" />

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.company}
                  className="relative flex flex-col md:flex-row items-start"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-5 md:left-1/2 top-1 md:top-6 -translate-x-1/2 z-10"
                  >
                    <div className="timeline-dot" />
                  </div>

                  {/* Card */}
                  <SectionReveal
                    direction={isLeft ? "left" : "right"}
                    delay={index * 0.15}
                    className={`pl-14 md:pl-0 w-full md:w-[calc(50%-2rem)] ${isLeft
                      ? "md:pr-8 md:text-right md:mr-auto"
                      : "md:pl-8 md:text-left md:ml-auto"
                      }`}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors"
                      style={{ boxShadow: "var(--card-shadow)" }}
                    >
                      {/* Company & Role */}
                      <div className={`flex items-center gap-3 mb-1 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <Briefcase className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                        <h3 className="font-bold text-lg text-[var(--fg)]">
                          {exp.company}
                        </h3>
                      </div>

                      <p className="font-mono text-sm text-[var(--accent)] mb-1">
                        {exp.role}
                      </p>

                      <div className={`flex items-center gap-2 text-xs text-[var(--muted-fg)] mb-4 font-mono ${isLeft ? "md:justify-end" : ""}`}>
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>

                      {/* Bullets */}
                      <ul className={`space-y-2 text-sm text-[var(--muted-fg)] leading-relaxed ${isLeft ? "md:text-right" : ""}`}>
                        {exp.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className={`flex gap-2 ${isLeft ? "md:flex-row-reverse" : ""}`}
                          >
                            <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">▹</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </SectionReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
