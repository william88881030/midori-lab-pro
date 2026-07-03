"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020806] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0b2015_0%,#03100b_45%,#010302_100%)]" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle,rgba(255,255,255,.55)_1px,transparent_1px)] bg-[size:55px_55px]" />

      {/* Aurora Bands */}
      <div className="absolute left-[-20%] top-[33%] h-[95px] w-[1050px] -rotate-[28deg] rounded-full bg-emerald-300/45 blur-[22px]" />
      <div className="absolute left-[-20%] top-[33%] h-[260px] w-[1120px] -rotate-[28deg] rounded-full bg-emerald-500/18 blur-[80px]" />

      <div className="absolute left-[18%] top-[13%] h-[85px] w-[760px] -rotate-[62deg] rounded-full bg-emerald-300/35 blur-[24px]" />
      <div className="absolute left-[18%] top-[13%] h-[220px] w-[820px] -rotate-[62deg] rounded-full bg-green-500/14 blur-[75px]" />

      <div className="absolute right-[-18%] top-[55%] h-[95px] w-[1050px] -rotate-[26deg] rounded-full bg-emerald-300/48 blur-[22px]" />
      <div className="absolute right-[-18%] top-[55%] h-[260px] w-[1120px] -rotate-[26deg] rounded-full bg-emerald-500/20 blur-[80px]" />

      {/* Right glowing curve */}
      <div className="absolute right-[14%] top-[32%] h-[260px] w-[430px] rotate-[18deg] rounded-full border-r border-t border-emerald-200/50" />
      <div className="absolute right-[20%] top-[44%] h-3 w-3 rounded-full bg-white shadow-[0_0_42px_18px_rgba(120,255,180,.75)]" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.15)_48%,rgba(0,0,0,.78)_100%)]" />

      {/* Hero Text */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="whitespace-nowrap text-[52px] font-light tracking-[0.34em] md:text-[76px]"
        >
          MIDORI LAB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-5 text-[16px] tracking-[0.58em] text-emerald-300/80"
        >
          翠　研
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-7 text-xl font-light tracking-[0.08em] text-emerald-100/80"
        >
          Creating the Future of Green
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          className="mt-11 rounded-full border border-emerald-300/40 px-14 py-4 text-sm tracking-[0.22em] text-white/90 transition hover:bg-emerald-300/10"
        >
          EXPLORE
        </motion.button>

        <div className="absolute bottom-12 flex flex-col items-center gap-4 text-white/45">
          <div className="relative h-12 w-6 rounded-full border border-white/50">
            <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/70" />
          </div>

          <p className="text-xs tracking-[0.32em]">
            SCROLL TO DISCOVER
          </p>
        </div>
      </div>
    </section>
  );
}