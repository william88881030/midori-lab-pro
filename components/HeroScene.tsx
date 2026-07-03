"use client";

import { useCallback, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Aurora from "./Aurora";

interface Star {
  x: number;
  y: number;
  opacity: number;
  size: number;
}

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);

  const initStars = useCallback((width: number, height: number) => {
    const count = Math.floor((width * height) / 36000);
    starsRef.current = Array.from(
      { length: Math.min(Math.max(count, 30), 90) },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.35 + 0.05,
        size: 0.75,
      }),
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
      for (const s of starsRef.current) {
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, [initStars]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[2]"
      aria-hidden="true"
    />
  );
}

function ScrollIndicator() {
  const { t } = useLanguage();

  return (
    <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">
      <div
        className="pointer-events-none absolute -inset-x-16 -inset-y-8"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(16,185,129,0.14) 0%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-[28px] w-[16px] items-start justify-center rounded-full border border-white/40 pt-1.5">
        <div className="scroll-mouse-dot h-[3px] w-[3px] rounded-full bg-white/80" />
      </div>

      <p className="relative mt-3 text-[10px] tracking-[0.32em] text-white/50">
        {t.hero.scroll}
      </p>
    </div>
  );
}

export default function HeroScene() {
  const { t } = useLanguage();

  return (
    <section
      className="relative h-screen min-h-[100dvh] overflow-x-hidden"
      aria-label={t.hero.ariaLabel}
    >
      <Aurora />
      <Starfield />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="whitespace-nowrap text-[clamp(48px,4.2vw,72px)] font-extralight leading-none tracking-[0.36em] text-white sm:tracking-[0.4em] lg:tracking-[0.42em]">
          {t.hero.title}
        </h1>

        <p className="mt-5 text-[20px] font-light tracking-[0.58em] text-emerald-400/90">
          {t.hero.subtitle}
        </p>

        <p className="mt-6 text-[16px] font-light tracking-[0.04em] text-white/75">
          {t.hero.tagline}
        </p>

        <button
          type="button"
          className="mt-10 rounded-full border border-white/30 px-14 py-3.5 text-[11px] tracking-[0.24em] text-white/88"
        >
          {t.hero.explore}
        </button>

        <ScrollIndicator />
      </div>
    </section>
  );
}
