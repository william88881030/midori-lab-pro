"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { localeLabels, locales, navKeys } from "@/i18n/translations";
import type { Locale } from "@/i18n/types";

const menuEase = [0.22, 1, 0.36, 1] as const;

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-full border border-white/25 px-3 py-1.5 text-[10px] tracking-[0.12em] ${className}`}
    >
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && (
            <span className="mx-2 text-white/25" aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(loc)}
            aria-current={locale === loc ? "true" : undefined}
            className={
              locale === loc
                ? "text-white/90 transition-colors duration-300"
                : "text-white/45 transition-colors duration-300 hover:text-white/75"
            }
          >
            {localeLabels[loc as Locale]}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06]">
        <div className="relative mx-auto flex h-14 max-w-[1920px] items-center px-5 md:px-12">
          <Link
            href="/"
            className="text-[13px] font-light tracking-[0.2em] text-white"
            onClick={closeMenu}
          >
            {t.nav.logo}
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 whitespace-nowrap md:flex"
            aria-label={t.nav.ariaLabel}
          >
            {navKeys.map((key) => (
              <Link
                key={key}
                href={`#${key}`}
                className="text-[10px] tracking-[0.18em] text-white/60"
              >
                {t.nav.items[key]}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <LanguageSwitcher className="hidden md:flex" />

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <span className="flex w-[18px] flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-px w-full bg-white/85 transition-transform duration-300 ${
                    menuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-full bg-white/85 transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-px w-full bg-white/85 transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.ariaLabel}
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
              aria-label="Close menu"
              onClick={closeMenu}
            />

            <motion.nav
              className="absolute inset-x-0 top-0 flex min-h-[100dvh] flex-col border-b border-white/[0.08] bg-black/72 px-6 pb-12 pt-[72px] backdrop-blur-2xl"
              initial={reduceMotion ? false : { y: "-100%" }}
              animate={{ y: 0 }}
              exit={reduceMotion ? undefined : { y: "-100%" }}
              transition={{ duration: 0.48, ease: menuEase }}
              aria-label={t.nav.ariaLabel}
            >
              <ul className="flex flex-col gap-1">
                {navKeys.map((key, index) => (
                  <motion.li
                    key={key}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.06 + index * 0.04,
                      duration: 0.4,
                      ease: menuEase,
                    }}
                  >
                    <Link
                      href={`#${key}`}
                      className="block border-b border-white/[0.06] py-5 text-[13px] tracking-[0.22em] text-white/75 transition-colors duration-300 active:text-emerald-300/90"
                      onClick={closeMenu}
                    >
                      {t.nav.items[key]}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <LanguageSwitcher />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
