"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { siteConfig, navItems } from "@/config/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (isHome) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobileOpen(false);
    },
    [isHome]
  );

  const handleAvailabilityClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      const contact = document.querySelector("#contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[var(--color-border-val)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" priority />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={isHome ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link font-mono text-xs tracking-wide ${
                  activeSection === item.href ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              {/* Availability Badge */}
              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={handleAvailabilityClick}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 ${
                  siteConfig.isAvailable
                    ? "bg-[var(--color-available-val)]/10 text-[var(--color-available-val)]"
                    : "bg-[var(--color-booked-val)]/10 text-[var(--color-booked-val)]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full animate-pulse-dot ${
                    siteConfig.isAvailable
                      ? "bg-[var(--color-available-val)]"
                      : "bg-[var(--color-booked-val)]"
                  }`}
                />
                {siteConfig.isAvailable ? "Available" : "Booked"}
              </a>
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="btn-primary py-2 px-4 text-xs font-mono"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Availability Badge */}
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={handleAvailabilityClick}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium ${
                siteConfig.isAvailable
                  ? "bg-[var(--color-available-val)]/10 text-[var(--color-available-val)]"
                  : "bg-[var(--color-booked-val)]/10 text-[var(--color-booked-val)]"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse-dot ${
                  siteConfig.isAvailable
                    ? "bg-[var(--color-available-val)]"
                    : "bg-[var(--color-booked-val)]"
                }`}
              />
              {siteConfig.isAvailable ? "Available" : "Booked"}
            </a>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex flex-col gap-[6px] p-3 rounded-md hover:bg-[var(--color-surface-hover-val)] transition-colors min-w-[44px] min-h-[44px] justify-center items-center ${
                mobileOpen ? "hamburger-open" : ""
              }`}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-b border-[var(--color-border-val)] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block font-mono text-sm py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.href
                      ? "text-[var(--color-accent-val)] bg-[var(--accent-muted)]"
                      : "text-[var(--color-text-muted-val)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover-val)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary w-full justify-center py-3 text-sm font-mono"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
