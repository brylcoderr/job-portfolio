"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/config/portfolio";

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
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-border-val)] md:-translate-x-[1px]" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
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
                    className={`pl-14 md:pl-0 w-full md:w-[calc(50%-2rem)] ${
                      isLeft
                        ? "md:pr-8 md:text-right md:mr-auto"
                        : "md:pl-8 md:text-left md:ml-auto"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="p-6 glass-card hover:border-[var(--color-accent-val)] transition-colors"
                      style={{ boxShadow: "var(--card-shadow)" }}
                    >
                      {/* Company & Role */}
                      <div className={`flex items-center gap-3 mb-1 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <Briefcase className="w-4 h-4 text-[var(--color-accent-val)] flex-shrink-0" />
                        <h3 className="font-bold text-lg text-[var(--color-text)]">
                          {exp.company}
                        </h3>
                      </div>

                      <p className="font-mono text-sm text-[var(--color-accent-val)] mb-1">
                        {exp.role}
                      </p>

                      <div className={`flex items-center gap-2 text-xs text-[var(--color-text-muted-val)] mb-4 font-mono ${isLeft ? "md:justify-end" : ""}`}>
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>

                      {/* Bullets */}
                      <ul className={`space-y-2 text-sm text-[var(--color-text-muted-val)] leading-relaxed ${isLeft ? "md:text-right" : ""}`}>
                        {exp.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className={`flex gap-2 ${isLeft ? "md:flex-row-reverse" : ""}`}
                          >
                            <span className="text-[var(--color-accent-val)] flex-shrink-0 mt-0.5">▹</span>
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
