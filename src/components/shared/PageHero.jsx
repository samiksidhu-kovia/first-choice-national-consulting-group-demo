import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle, children, variant = "default" }) {
  const bgClass = variant === "sage" ? "bg-sage-pale" : variant === "blush" ? "bg-blush-pale" : "bg-warm-offwhite";

  return (
    <section className={`${bgClass} py-20 lg:py-28`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="eyebrow text-sage mb-4">{eyebrow}</p>
          )}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-slate leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-secondary leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}