import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects — Shubham Kushwah | Full-Stack Developer",
  description:
    "Browse the complete project portfolio of Shubham Kushwah — from full-stack applications and 3D experiences to SaaS dashboards, automation tools, and creative web experiments.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
