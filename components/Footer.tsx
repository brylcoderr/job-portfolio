"use client";

import { useMemo } from "react";
import SectionReveal from "./SectionReveal";
import { Heart, Mail } from "lucide-react";
import { siteConfig } from "@/config/portfolio";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ContributionStrip() {
  const cells = useMemo(() => {
    const result: number[] = [];
    for (let i = 0; i < 52 * 7; i++) {
      const hash = ((i * 2654435761) >>> 0) % 100;
      if (hash < 30) result.push(0);
      else if (hash < 55) result.push(1);
      else if (hash < 75) result.push(2);
      else if (hash < 90) result.push(3);
      else result.push(4);
    }
    return result;
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex gap-[2px]" style={{ minWidth: "max-content" }}>
        {Array.from({ length: 52 }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-[2px]">
            {Array.from({ length: 7 }).map((_, dayIdx) => {
              const level = cells[weekIdx * 7 + dayIdx];
              return (
                <div
                  key={dayIdx}
                  className={`contribution-cell ${
                    level > 0 ? `level-${level}` : ""
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

const SOCIAL_LINKS = [
  ...(siteConfig.socials.github
    ? [{ icon: GithubIcon, href: siteConfig.socials.github, label: "GitHub" }]
    : []),
  ...(siteConfig.socials.linkedin
    ? [{ icon: LinkedinIcon, href: siteConfig.socials.linkedin, label: "LinkedIn" }]
    : []),
  { icon: Mail, href: `mailto:${siteConfig.contactEmail}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-val)] bg-[var(--color-surface-val)]">
      {/* Currently building strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-available-val)] animate-pulse" />
              <span className="font-mono text-xs text-[var(--color-text-muted-val)]">
                Currently building...
              </span>
            </div>
          </div>
          <ContributionStrip />
        </SectionReveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border-val)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-[var(--color-text-muted-val)] font-mono">
              © {new Date().getFullYear()} {siteConfig.name}. Built with{" "}
              <span className="font-mono text-[var(--color-accent-val)]">Next.js</span> &{" "}
              <Heart className="w-3.5 h-3.5 inline text-red-400" />
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--color-border-val)] text-[var(--color-text-muted-val)] hover:text-[var(--color-accent-val)] hover:border-[var(--color-accent-val)] transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
