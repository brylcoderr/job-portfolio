"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import SectionReveal from "../SectionReveal";
import { heroConfig, siteConfig } from "@/config/portfolio";

const STACK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
};

const CODE_LINES = [
  { type: "comment", text: "// building something awesome" },
  {
    type: "code",
    parts: [
      { class: "keyword", text: "const " },
      { class: "variable", text: "developer" },
      { class: "operator", text: " = {" },
    ],
  },
  {
    type: "code",
    parts: [
      { class: "operator", text: "  name: " },
      { class: "string", text: '"Shubham Kushwah"' },
      { class: "operator", text: "," },
    ],
  },
  {
    type: "code",
    parts: [
      { class: "operator", text: "  stack: " },
      { class: "operator", text: "[" },
      { class: "string", text: '"React"' },
      { class: "operator", text: ", " },
      { class: "string", text: '"Next.js"' },
      { class: "operator", text: ", " },
      { class: "string", text: '"Node"' },
      { class: "operator", text: "]," },
    ],
  },
  {
    type: "code",
    parts: [
      { class: "operator", text: "  passion: " },
      { class: "string", text: '"clean, fast UIs"' },
      { class: "operator", text: "," },
    ],
  },
  {
    type: "code",
    parts: [
      { class: "operator", text: "  years: " },
      { class: "variable", text: "6" },
      { class: "operator", text: "," },
    ],
  },
  {
    type: "code",
    parts: [{ class: "operator", text: "};" }],
  },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= CODE_LINES.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-window w-full max-w-md">
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="text-xs text-[var(--terminal-comment)] ml-3 font-mono">
          ~/portfolio
        </span>
      </div>
      <div className="terminal-body">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {line.type === "comment" ? (
              <span className="comment">{line.text}</span>
            ) : (
              line.parts?.map((part, j) => (
                <span key={j} className={part.class}>
                  {part.text}
                </span>
              ))
            )}
          </motion.div>
        ))}
        {visibleLines < CODE_LINES.length && (
          <span className="inline-block w-2 h-4 bg-[var(--terminal-green)] animate-blink" />
        )}
      </div>
    </div>
  );
}

// Word-by-word headline reveal
function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="gradient-text inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* CSS gradient background */}
      <div className="hero-gradient" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow badge */}
            <SectionReveal>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all hover:scale-105 ${
                  siteConfig.isAvailable
                    ? "bg-[var(--color-available-val)]/10 text-[var(--color-available-val)] border border-[var(--color-available-val)]/20"
                    : "bg-[var(--color-booked-val)]/10 text-[var(--color-booked-val)] border border-[var(--color-booked-val)]/20"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full animate-pulse-dot ${
                    siteConfig.isAvailable
                      ? "bg-[var(--color-available-val)]"
                      : "bg-[var(--color-booked-val)]"
                  }`}
                />
                {siteConfig.isAvailable ? heroConfig.eyebrow : "Currently Booked"}
              </a>
            </SectionReveal>

            {/* Animated headline */}
            <AnimatedHeadline text={heroConfig.headline} />

            <SectionReveal delay={0.3}>
              <p className="text-base sm:text-lg text-[var(--color-text-muted-val)] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {heroConfig.subheadline}
              </p>
            </SectionReveal>

            {/* CTAs */}
            <SectionReveal delay={0.4}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {heroConfig.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className="btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {heroConfig.ctaSecondary}
                </a>
              </div>
            </SectionReveal>

            {/* Stack row */}
            <SectionReveal delay={0.5}>
              <div className="mt-10">
                <p className="text-xs font-mono text-[var(--color-text-subtle-val)] uppercase tracking-widest mb-3">
                  {heroConfig.stackLabel}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {heroConfig.stack.map((tech) => {
                    const Icon = STACK_ICONS[tech];
                    return (
                      <motion.div
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-surface-val)] border border-[var(--color-border-val)] text-xs font-mono text-[var(--color-text-muted-val)]"
                        whileHover={{ y: -2, borderColor: "var(--color-accent-val)" }}
                      >
                        {Icon && <Icon className="w-3.5 h-3.5" />}
                        {tech}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right: Terminal */}
          <SectionReveal delay={0.5} direction="right" className="flex-shrink-0">
            <TerminalWindow />
          </SectionReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-[var(--color-text-muted-val)]" />
      </motion.div>
    </section>
  );
}
