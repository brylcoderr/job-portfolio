"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { aboutConfig, siteConfig } from "@/config/portfolio";
import { MapPin, Briefcase, FolderOpen, Globe } from "lucide-react";

const STAT_ICONS = [Briefcase, FolderOpen, Globe];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading">About Me</p>
          <h2 className="section-title mb-12">
            Crafting digital experiences<br />
            that <span className="gradient-text">make an impact</span>
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Avatar / Visual */}
          <SectionReveal delay={0.1}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[var(--color-accent-val)] to-[var(--color-accent-secondary-val)] opacity-20 blur-xl" />
                {/* Avatar container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[var(--color-accent-val)]/30 bg-[var(--color-surface-val)]">
                  {/* Geometric abstract visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Decorative rings */}
                      <motion.div
                        className="absolute -inset-16 rounded-full border border-[var(--color-accent-val)]/20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute -inset-10 rounded-full border border-[var(--color-accent-secondary-val)]/15"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      />
                      {/* Center monogram */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-accent-val)] to-[var(--color-accent-secondary-val)] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white font-heading">
                          {siteConfig.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right: Text */}
          <SectionReveal delay={0.2}>
            <div className="space-y-5">
              {aboutConfig.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--color-text-muted-val)] leading-relaxed text-base lg:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              {/* Location tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-muted)] rounded-full text-sm font-mono text-[var(--color-accent-val)]">
                <MapPin className="w-3.5 h-3.5" />
                {siteConfig.location} · Open to remote
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Stat cards */}
        <SectionReveal delay={0.3}>
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto lg:max-w-none">
            {aboutConfig.stats.map((stat, index) => {
              const Icon = STAT_ICONS[index];
              return (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <Icon className="w-5 h-5 text-[var(--color-accent-val)] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[var(--color-text)] font-heading">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted-val)] font-mono mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
