"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ScrollFlow() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const ribbon1X = useTransform(scrollYProgress, [0, 1], ["0vw", "14vw"]);
  const ribbon1Y = useTransform(scrollYProgress, [0, 1], ["0vh", "-4vh"]);
  const ribbon1Skew = useTransform(scrollYProgress, [0, 1], [0, 2.5]);
  const ribbon1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const ribbon2X = useTransform(scrollYProgress, [0, 1], ["0vw", "-11vw"]);
  const ribbon2Y = useTransform(scrollYProgress, [0, 1], ["0vh", "5vh"]);
  const ribbon2Rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  const ribbon3X = useTransform(scrollYProgress, [0, 1], ["0vw", "9vw"]);
  const ribbon3SkewY = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const ribbon3ScaleX = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const ribbon4X = useTransform(scrollYProgress, [0, 1], ["0vw", "-8vw"]);
  const ribbon4Y = useTransform(scrollYProgress, [0, 1], ["0vh", "6vh"]);

  const glowX = useTransform(scrollYProgress, [0, 1], ["38%", "62%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["22%", "48%"]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const flowLineX = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const flowLineSkew = useTransform(scrollYProgress, [0, 1], [0, 5]);

  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden max-md:opacity-70 lg:opacity-100"
      aria-hidden="true"
    >
      {/* Ambient scroll-driven glow */}
      <motion.div
        className="absolute h-[55vh] w-[55vw] opacity-[0.14]"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          scale: glowScale,
          background:
            "radial-gradient(ellipse 58% 52% at 50% 50%, rgba(16,185,129,0.45) 0%, rgba(16,185,129,0.08) 48%, transparent 74%)",
          filter: "blur(80px)",
        }}
      />

      {/* Ribbon 1 — upper left drift */}
      <motion.div
        className="absolute -left-[15%] top-[8%] h-[55vh] w-[70vw] opacity-[0.15]"
        style={{
          x: ribbon1X,
          y: ribbon1Y,
          skewY: ribbon1Skew,
          scale: ribbon1Scale,
          background:
            "radial-gradient(ellipse 55% 48% at 42% 50%, rgba(16,185,129,0.5) 0%, rgba(16,185,129,0.14) 42%, transparent 72%)",
          filter: "blur(76px)",
        }}
      />

      {/* Ribbon 2 — right counter-drift */}
      <motion.div
        className="absolute -right-[12%] top-[32%] h-[48vh] w-[58vw] opacity-[0.13]"
        style={{
          x: ribbon2X,
          y: ribbon2Y,
          rotate: ribbon2Rotate,
          background:
            "radial-gradient(ellipse 52% 46% at 58% 48%, rgba(52,211,153,0.42) 0%, rgba(16,185,129,0.1) 45%, transparent 74%)",
          filter: "blur(72px)",
        }}
      />

      {/* Ribbon 3 — horizontal liquid band */}
      <motion.div
        className="absolute left-[18%] top-[52%] h-[32vh] w-[68vw] opacity-[0.12]"
        style={{
          x: ribbon3X,
          skewY: ribbon3SkewY,
          scaleX: ribbon3ScaleX,
          background:
            "linear-gradient(102deg, transparent 0%, rgba(16,185,129,0.24) 26%, rgba(110,231,183,0.16) 50%, rgba(16,185,129,0.1) 74%, transparent 100%)",
          filter: "blur(60px)",
        }}
      />

      {/* Ribbon 4 — lower drift */}
      <motion.div
        className="absolute -left-[8%] bottom-[6%] h-[42vh] w-[62vw] opacity-[0.14]"
        style={{
          x: ribbon4X,
          y: ribbon4Y,
          background:
            "radial-gradient(ellipse 60% 50% at 40% 60%, rgba(16,185,129,0.38) 0%, rgba(6,95,70,0.1) 50%, transparent 78%)",
          filter: "blur(68px)",
        }}
      />

      {/* Thin scroll-driven flow line — deforms on scroll, no autoplay */}
      <motion.div
        className="absolute inset-0 opacity-[0.1]"
        style={{ x: flowLineX, skewY: flowLineSkew }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 3200"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="scroll-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="45%" stopColor="#34D399" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M-120 420 C 280 280, 520 580, 820 440 S 1320 360, 1560 520"
            stroke="url(#scroll-flow-grad)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M-80 980 C 320 860, 560 1080, 880 920 S 1280 840, 1520 1000"
            stroke="url(#scroll-flow-grad)"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </div>
  );
}
