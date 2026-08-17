"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const requestRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on non-touch devices
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;
    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onMouseEnterInteractive = () => setHovering(true);
    const onMouseLeaveInteractive = () => setHovering(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (mousePos.current.x - prev.x) * 0.15,
        y: prev.y + (mousePos.current.y - prev.y) * 0.15,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Observe interactive elements
    const interactiveEls = document.querySelectorAll("a, button, [role='button'], input, textarea, .project-card");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    requestRef.current = requestAnimationFrame(animate);
    document.body.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      cancelAnimationFrame(requestRef.current);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [visible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--accent)] pointer-events-none z-[9999] no-theme-transition"
        style={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border-2 border-[var(--accent)] pointer-events-none z-[9999] no-theme-transition"
        style={{
          x: position.x - 18,
          y: position.y - 18,
        }}
        animate={{
          opacity: visible ? 0.6 : 0,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
