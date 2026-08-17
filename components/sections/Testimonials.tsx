"use client";

import SectionReveal from "../SectionReveal";

const PLACEHOLDER_LOGOS = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
  "Company E",
  "Company F",
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 border-y border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="text-center text-sm font-mono text-[var(--muted-fg)] uppercase tracking-widest mb-8">
            Trusted by teams at
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {PLACEHOLDER_LOGOS.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center w-28 h-12 rounded-lg bg-[var(--surface)] border border-[var(--border-color)] opacity-40 hover:opacity-70 transition-opacity"
              >
                <span className="font-mono text-xs text-[var(--muted-fg)]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-center text-xs text-[var(--muted-fg)] mt-6 font-mono">
            {/* Replace with real logos */}
            [ logos coming soon ]
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
