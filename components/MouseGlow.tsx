"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const SPRING = { damping: 38, stiffness: 260, mass: 0.4 };

export default function MouseGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, SPRING);
  const smoothY = useSpring(mouseY, SPRING);

  const handleMove = useCallback(
    (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (min-width: 1024px)");

    const update = () => {
      setEnabled(media.matches && !reduceMotion);
    };

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled, handleMove, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[2]"
      aria-hidden="true"
    >
      {/* Bright laser core — tight, crisp highlight */}
      <motion.div
        className="absolute h-10 w-10 rounded-full blur-[8px] will-change-transform"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          backgroundColor: "rgba(46, 235, 140, 0.52)",
        }}
      />
      {/* Compact halo — fast edge fade, coffee-cup footprint (~130px) */}
      <motion.div
        className="absolute h-[72px] w-[72px] rounded-full blur-[31px] will-change-transform"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(46,235,140,0.24) 0%, rgba(40,210,130,0.13) 28%, rgba(24,130,88,0.06) 48%, transparent 62%)",
        }}
      />
    </div>
  );
}
