"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import SectionReveal from "../SectionReveal";
import {
  Send,
  CheckCircle2,
  Loader2,
  Clock,
  MessageSquare,
} from "lucide-react";
import {
  siteConfig,
  projectTypes,
  budgetRanges,
  emailjsConfig,
} from "@/config/portfolio";

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Check if EmailJS is configured
      if (emailjsConfig.serviceId === "YOUR_SERVICE_ID") {
        // Demo mode — simulate sending
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast.success("Message sent successfully! (Demo mode — configure EmailJS for real delivery)");
      } else {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: data.name,
            from_email: data.email,
            project_type: data.projectType,
            budget: data.budget,
            message: data.message,
            to_email: siteConfig.contactEmail,
          },
          emailjsConfig.publicKey
        );
        toast.success("Message sent successfully! I'll get back to you within 24 hours.");
      }
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading text-center">Get In Touch</p>
          <h2 className="section-title text-center mb-4">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="text-center text-[var(--color-text-muted-val)] mb-16 max-w-lg mx-auto">
            Have a project in mind? Let&apos;s build something great.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <SectionReveal delay={0.1}>
            <div className="contact-form-container">
              <div className="contact-form-inner">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[var(--color-text)] mb-1.5 font-mono"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      className={`form-input ${errors.name ? "!border-red-500 !bg-red-500/10" : ""}`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[var(--color-text)] mb-1.5 font-mono"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      className={`form-input ${errors.email ? "!border-red-500 !bg-red-500/10" : ""}`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Project Type & Budget — 2 cols */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-project-type"
                        className="block text-sm font-medium text-[var(--color-text)] mb-1.5 font-mono"
                      >
                        Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        className={`form-select ${errors.projectType ? "!border-red-500 !bg-red-500/10" : ""}`}
                        {...register("projectType", { required: "Select a project type" })}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-sm font-medium text-[var(--color-text)] mb-1.5 font-mono"
                      >
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        className={`form-select ${errors.budget ? "!border-red-500 !bg-red-500/10" : ""}`}
                        {...register("budget", { required: "Select a budget range" })}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select budget
                        </option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="text-red-400 text-xs mt-1">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[var(--color-text)] mb-1.5 font-mono"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      className={`form-input resize-none ${errors.message ? "!border-red-500 !bg-red-500/10" : ""}`}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 20,
                          message: "Message must be at least 20 characters",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    whileTap={{ scale: 0.97 }}
                    disabled={isSubmitting || submitted}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </SectionReveal>

          {/* Right side — info */}
          <SectionReveal delay={0.2} direction="right">
            <div className="space-y-8 lg:pt-8">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-text)] font-heading mb-4">
                  Have a project in mind?
                  <br />
                  <span className="gradient-text">Let&apos;s build something great.</span>
                </h3>
                <p className="text-[var(--color-text-muted-val)] leading-relaxed">
                  I&apos;m always interested in hearing about new projects and opportunities.
                  Whether you need a full web application, a landing page, or an API — I&apos;m
                  here to help turn your ideas into reality.
                </p>
              </div>

              {/* Quick info cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass-card">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[var(--color-accent-val)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">Response Time</p>
                    <p className="text-xs text-[var(--color-text-muted-val)]">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-[var(--color-accent-val)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">Let&apos;s Talk</p>
                    <p className="text-xs text-[var(--color-text-muted-val)]">
                      {siteConfig.contactEmail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="btn-secondary w-full justify-center"
              >
                Download Resume
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
