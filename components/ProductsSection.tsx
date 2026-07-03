"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1515823064-d94960294a22?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536814708109-64e945c7101f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558160020-48d361aaef45?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const cardEase = [0.22, 1, 0.36, 1] as const;

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: cardEase },
  },
};

function ProductCard({
  title,
  description,
  image,
  viewDetails,
  index,
}: {
  title: string;
  description: string;
  image: string;
  viewDetails: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const titleId = `product-title-${index}`;

  return (
    <motion.article
      variants={cardVariant}
      aria-labelledby={titleId}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              transition: { duration: 0.4, ease: cardEase },
            }
      }
      className="group relative"
    >
      {/* Green glow */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-[40px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.04) 50%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-[border-color,box-shadow] duration-500 group-hover:border-emerald-400/22 group-hover:shadow-[0_28px_80px_rgba(0,0,0,0.45),0_0_56px_rgba(16,185,129,0.1)]">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden [&_img]:overflow-hidden [&_img]:text-[0px] [&_img]:leading-[0] [&_img]:text-transparent">
          <motion.div
            className="absolute inset-0"
            animate={
              reduceMotion ? { scale: 1 } : { scale: [1, 1.08, 1] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 18 + index * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }
            }
          >
            <Image
              src={image}
              alt=""
              aria-hidden="true"
              role="presentation"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ color: "transparent" }}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07110d]/80 via-[#07110d]/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.05]" />
        </div>

        {/* Content */}
        <div className="relative px-7 pb-8 pt-6 md:px-8 md:pb-9 md:pt-7">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />

          <h3
            id={titleId}
            className="text-[18px] font-light tracking-[0.04em] text-white transition-colors duration-500 group-hover:text-emerald-50"
          >
            {title}
          </h3>

          <p className="mt-3 text-[14px] font-light leading-[1.85] tracking-[0.01em] text-white/52 transition-colors duration-500 group-hover:text-white/65">
            {description}
          </p>

          <span className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-white/40 transition-all duration-500 group-hover:gap-3 group-hover:text-emerald-400/80">
            {viewDetails}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductsSection() {
  const headerEase = [0.22, 1, 0.36, 1] as const;
  const { t } = useLanguage();

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#07110d] py-24 md:py-32 lg:py-36"
    >
      <div className="noise-overlay opacity-[0.035]" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: headerEase }}
          className="mb-14 text-center md:mb-16 lg:mb-20"
        >
          <p className="text-[10px] tracking-[0.32em] text-emerald-400/85">
            {t.products.label}
          </p>
          <h2 className="mt-4 text-[clamp(32px,3.5vw,44px)] font-extralight tracking-[0.08em] text-white">
            {t.products.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] font-light leading-[1.85] tracking-[0.02em] text-white/50">
            {t.products.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8"
        >
          {t.products.items.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={PRODUCT_IMAGES[index]}
              viewDetails={t.products.viewDetails}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
