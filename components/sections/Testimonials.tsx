"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import { testimonials } from "@/config/portfolio";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading text-center">Testimonials</p>
          <h2 className="section-title text-center mb-16">
            What people <span className="gradient-text">say</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={testimonial.name} delay={index * 0.15}>
              <motion.div
                className="testimonial-card h-full flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[var(--color-accent-val)] opacity-30 mb-4" />

                {/* Quote text */}
                <p className="text-[var(--color-text-muted-val)] leading-relaxed italic flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar with initials */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent-val)] to-[var(--color-accent-secondary-val)] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted-val)] font-mono">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
