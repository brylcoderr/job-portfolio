"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SectionReveal from "@/components/SectionReveal";
import { ALL_PROJECTS } from "@/lib/projects-data";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function ProjectsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <SectionReveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-fg)] hover:text-[var(--accent)] transition-colors mb-10 font-mono group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </SectionReveal>

          {/* Header */}
          <SectionReveal>
            <p className="section-heading">Portfolio</p>
            <h1 className="section-title mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-[var(--muted-fg)] mb-16 max-w-xl leading-relaxed">
              A comprehensive collection of my work — from full-stack
              applications and 3D experiences to SaaS dashboards and automation
              tools.
            </p>
          </SectionReveal>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
