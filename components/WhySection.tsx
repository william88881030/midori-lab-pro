"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const CARD_ICONS = [
  HeritageIcon,
  PartnershipIcon,
  GlobalIcon,
  QualityIcon,
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardEase = [0.22, 1, 0.36, 1] as const;

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: cardEase },
  },
};

function HeritageIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M11 19C11 19 4 14 4 8.5C4 5.5 6.5 3 11 3C15.5 3 18 5.5 18 8.5C18 14 11 19 11 19Z"
        stroke="currentColor"
        strokeWidth="0.85"
      />
      <path d="M11 3V19" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
    </svg>
  );
}

function PartnershipIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="7" cy="11" r="4" stroke="currentColor" strokeWidth="0.85" />
      <circle cx="15" cy="11" r="4" stroke="currentColor" strokeWidth="0.85" />
      <path d="M11 7V15" stroke="currentColor" strokeWidth="0.75" opacity="0.45" />
    </svg>
  );
}

function GlobalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="0.85" />
      <path
        d="M3 11H19M11 3C8.5 6 8.5 16 11 19M11 3C13.5 6 13.5 16 11 19"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.55"
      />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M11 3L13.2 8.2L19 8.8L14.5 12.5L15.8 18.2L11 15.2L6.2 18.2L7.5 12.5L3 8.8L8.8 8.2L11 3Z"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhyCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: () => React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const disableFloat = reduceMotion || isMobile;

  return (
    <motion.article
      variants={cardVariant}
      animate={
        disableFloat
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
      transition={
        disableFloat
          ? undefined
          : {
              y: {
                duration: 5 + index * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              },
            }
      }
      whileHover={{
        y: disableFloat ? 0 : -4,
        transition: { duration: 0.35 },
      }}
      className="group relative rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-emerald-400/25 hover:shadow-[0_24px_70px_rgba(0,0,0,0.4),0_0_48px_rgba(16,185,129,0.1)] md:p-9"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-emerald-400/[0.06] text-emerald-300/80 transition-colors duration-500 group-hover:border-emerald-400/25 group-hover:text-emerald-300">
          <Icon />
        </div>

        <h3 className="text-[17px] font-light tracking-[0.04em] text-white">
          {title}
        </h3>

        <p className="mt-4 text-[14px] font-light leading-[1.85] tracking-[0.01em] text-white/55 transition-colors duration-500 group-hover:text-white/65">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default function WhySection() {
  const { t } = useLanguage();

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-black py-24 max-md:py-28 md:py-32 lg:py-36"
    >
      <div className="noise-overlay opacity-[0.03]" aria-hidden="true" />

      {/* Ambient emerald wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(16,185,129,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center md:mb-16 lg:mb-20"
        >
          <p className="text-[10px] tracking-[0.32em] text-emerald-400/85">
            {t.why.label}
          </p>
          <h2 className="mt-4 text-[clamp(32px,3.5vw,44px)] font-extralight tracking-[0.08em] text-white">
            {t.why.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 max-md:gap-6 md:grid-cols-2 md:gap-6 lg:gap-7"
        >
          {t.why.cards.map((card, index) => (
            <WhyCard
              key={index}
              icon={CARD_ICONS[index]}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
