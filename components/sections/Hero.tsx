"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import SectionReveal from "../SectionReveal";

const HeroScene = lazy(() => import("../HeroScene"));

const CODE_LINES = [
  { type: "comment", text: "// building something awesome" },
  { type: "code", parts: [
    { class: "keyword", text: "const " },
    { class: "variable", text: "developer" },
    { class: "operator", text: " = {" },
  ]},
  { type: "code", parts: [
    { class: "operator", text: "  name: " },
    { class: "string", text: '"Shubham Kushwah"' },
    { class: "operator", text: "," },
  ]},
  { type: "code", parts: [
    { class: "operator", text: "  stack: " },
    { class: "operator", text: "[" },
    { class: "string", text: '"React"' },
    { class: "operator", text: ", " },
    { class: "string", text: '"Next.js"' },
    { class: "operator", text: ", " },
    { class: "string", text: '"Node"' },
    { class: "operator", text: "]," },
  ]},
  { type: "code", parts: [
    { class: "operator", text: "  passion: " },
    { class: "string", text: '"clean, fast UIs"' },
    { class: "operator", text: "," },
  ]},
  { type: "code", parts: [
    { class: "operator", text: "  years: " },
    { class: "variable", text: "6" },
    { class: "operator", text: "," },
  ]},
  { type: "code", parts: [
    { class: "operator", text: "};" },
  ]},
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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <SectionReveal>
              <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-wider">
                Hi, my name is
              </p>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Shubham{" "}
                <span className="gradient-text">Kushwah</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <h2 className="text-xl sm:text-2xl font-mono text-[var(--muted-fg)] mb-6 font-medium">
                Full-Stack Developer
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-base sm:text-lg text-[var(--muted-fg)] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Building fast, scalable, accessible web apps for 6+ years
                <span className="inline-block w-[2px] h-5 bg-[var(--accent)] ml-1 align-middle animate-blink" />
              </p>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#projects" className="btn-primary">
                  View Work
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a href="#contact" className="btn-secondary">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
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
        <ArrowDown className="w-5 h-5 text-[var(--muted-fg)]" />
      </motion.div>
    </section>
  );
}
