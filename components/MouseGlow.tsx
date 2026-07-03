"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect } from "react";

const SPRING = { damping: 32, stiffness: 200, mass: 0.5 };

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, SPRING);
  const smoothY = useSpring(mouseY, SPRING);

  const glow = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(16, 185, 129, 0.07), transparent 70%)`;

  const handleMove = useCallback(
    (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove, mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[3]"
      style={{ background: glow }}
      aria-hidden="true"
    />
  );
}
