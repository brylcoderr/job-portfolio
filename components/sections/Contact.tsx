"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import {
  Mail,
  Phone,
  Globe,
  Download,
  Send,
  CheckCircle2,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "brylcodes@gmail.com",
    href: "mailto:brylcodes@gmail.com",
  },
  {
    icon: Phone,
    label: "+91-9557660208",
    href: "tel:+919557660208",
  },
  {
    icon: LinkedinIcon,
    label: "linkedin.com/in/brylcodes",
    href: "https://linkedin.com/in/brylcodes",
  },
  // {
  //   icon: Globe,
  //   label: "brylcodes.in",
  //   href: "https://brylcodes.in",
  // },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Invalid email";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // In production, replace with EmailJS / Formspree / API call
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          <p className="section-heading text-center">Get In Touch</p>
          <h2 className="section-title text-center mb-4">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="text-center text-[var(--muted-fg)] mb-16 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? Drop me a message and
            I&apos;ll get back to you within 24 hours.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <SectionReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[var(--fg)] mb-1.5 font-mono"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Your name"
                  className={`form-input ${errors.name ? "!border-red-500 !bg-red-500/10 focus:!box-shadow-red" : ""
                    }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-[var(--fg)] mb-1.5 font-mono"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className={`form-input ${errors.email ? "!border-red-500 !bg-red-500/10 focus:!box-shadow-red" : ""
                    }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[var(--fg)] mb-1.5 font-mono"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className={`form-input resize-none ${errors.message ? "!border-red-500 !bg-red-500/10 focus:!box-shadow-red" : ""
                    }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full justify-center"
                whileTap={{ scale: 0.97 }}
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal delay={0.2} direction="right">
            <div className="space-y-6">
              {/* Terminal-style header */}
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="text-xs text-[var(--terminal-comment)] ml-3 font-mono">
                    contact.json
                  </span>
                </div>
                <div className="terminal-body text-xs">
                  <span className="operator">{"{"}</span>
                  <br />
                  <span className="operator">{"  "}</span>
                  <span className="function">&quot;email&quot;</span>
                  <span className="operator">: </span>
                  <span className="string">&quot;brylcodes@gmail.com&quot;</span>
                  <span className="operator">,</span>
                  <br />
                  <span className="operator">{"  "}</span>
                  <span className="function">&quot;location&quot;</span>
                  <span className="operator">: </span>
                  <span className="string">&quot;Noida, India&quot;</span>
                  <span className="operator">,</span>
                  <br />
                  <span className="operator">{"  "}</span>
                  <span className="function">&quot;availability&quot;</span>
                  <span className="operator">: </span>
                  <span className="string">&quot;Open to remote&quot;</span>
                  <br />
                  <span className="operator">{"}"}</span>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all group"
                  >
                    <link.icon className="w-5 h-5 text-[var(--accent)] group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-[var(--muted-fg)] group-hover:text-[var(--fg)] transition-colors font-mono">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="btn-secondary w-full justify-center"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
