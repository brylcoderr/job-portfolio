"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionReveal from "./SectionReveal";
import type { Project } from "@/lib/projects-data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseEnter() {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  const mediaSrc = encodeURI(`/${project.media}`);

  return (
    <SectionReveal delay={index * 0.1}>
      <motion.div
        ref={cardRef}
        className="project-card h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Media preview ─────────────────────────────── */}
        <div className="project-media-wrapper">
          {project.mediaType === "video" ? (
            <video
              ref={videoRef}
              src={mediaSrc}
              muted
              loop
              playsInline
              preload="metadata"
              className="project-media"
            />
          ) : (
            <img
              src={mediaSrc}
              alt={project.title}
              className="project-media"
              loading="lazy"
            />
          )}

          {/* Play indicator (videos only) */}
          {project.mediaType === "video" && (
            <div className="project-play-indicator">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>

        {/* ── Card body ─────────────────────────────────── */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-[var(--fg)] mb-2 font-mono flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full inline-block shrink-0"
              style={{ background: project.accentColor }}
            />
            {project.title}
          </h3>
          <p className="text-sm text-[var(--muted-fg)] mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-[var(--muted)] text-[var(--muted-fg)] border border-[var(--border-color)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionReveal>
  );
}
