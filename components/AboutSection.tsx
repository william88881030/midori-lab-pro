"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const fadeEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: fadeEase },
  }),
};

export default function AboutSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07110d] py-24 max-md:py-28 md:py-32 lg:py-36"
    >
      <div className="noise-overlay opacity-[0.035]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-14 max-md:gap-16 lg:grid-cols-[45%_55%] lg:gap-16 xl:gap-20">
          {/* Left column */}
          <div className="lg:pr-6">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[10px] tracking-[0.32em] text-emerald-400/85"
            >
              {t.about.label}
            </motion.p>

            <motion.h2
              custom={0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mt-5 text-[clamp(36px,4vw,52px)] font-extralight leading-[1.15] tracking-[0.06em] text-white"
            >
              {t.about.headingLine1}
              <br />
              {t.about.headingLine2}
            </motion.h2>

            <motion.div
              custom={0.16}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mt-10 max-w-lg space-y-6 text-[15px] font-light leading-[2] tracking-[0.02em] text-white/62"
            >
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
            </motion.div>

            <motion.button
              type="button"
              custom={0.24}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-12 inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-3.5 text-[11px] tracking-[0.22em] text-white/88 transition-colors duration-300 hover:border-emerald-400/45 hover:text-white max-md:mt-14"
            >
              {t.about.cta}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </motion.button>
          </div>

          {/* Right column — image card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-4"
          >
            {/* Emerald glow behind card */}
            <div
              className="pointer-events-none absolute -inset-6 rounded-[44px] opacity-70 md:-inset-8"
              style={{
                background:
                  "radial-gradient(ellipse 70% 65% at 55% 50%, rgba(16,185,129,0.22) 0%, rgba(16,185,129,0.06) 45%, transparent 72%)",
              }}
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[36px] border border-white/[0.08] bg-white/[0.02] shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_60px_rgba(16,185,129,0.06)] backdrop-blur-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6] lg:min-h-[520px] lg:aspect-auto lg:h-[580px]">
                <motion.div
                  className="absolute inset-0"
                  animate={
                    reduceMotion
                      ? { scale: 1 }
                      : { scale: [1, 1.06, 1] }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 22,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                >
                  <Image
                    src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1400&auto=format&fit=crop"
                    alt={t.about.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover object-center"
                    priority={false}
                  />
                </motion.div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07110d]/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
