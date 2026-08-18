"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-border-val)] bg-[var(--color-surface-val)] hover:bg-[var(--color-surface-hover-val)]"
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Sun className="w-[18px] h-[18px] text-[var(--color-accent-val)]" />
        ) : (
          <Moon className="w-[18px] h-[18px] text-[var(--color-accent-val)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
