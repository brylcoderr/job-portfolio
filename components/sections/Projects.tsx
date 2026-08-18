"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionReveal from "../SectionReveal";
import ProjectCard from "../ProjectCard";
import { featuredProjects } from "@/config/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading text-center">Projects</p>
          <h2 className="section-title text-center mb-4">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="text-center text-[var(--color-text-muted-val)] mb-16 max-w-lg mx-auto">
            A selection of featured projects that showcase my skills across
            full-stack development, creative experiences, and modern web design.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <SectionReveal delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="btn-secondary font-mono text-sm"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
