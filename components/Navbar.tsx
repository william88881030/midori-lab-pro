"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { localeLabels, locales, navKeys } from "@/i18n/translations";
import type { Locale } from "@/i18n/types";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06]">
      <div className="relative mx-auto flex h-14 max-w-[1920px] items-center px-12">
        <Link
          href="/"
          className="text-[13px] font-light tracking-[0.2em] text-white"
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

        <div className="ml-auto flex items-center rounded-full border border-white/25 px-3 py-1.5 text-[10px] tracking-[0.12em]">
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
      </div>
    </header>
  );
}
