import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", className = "" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`mb-12 ${alignClass} ${className}`}
    >
      {eyebrow && <p className="eyebrow text-sage mb-3">{eyebrow}</p>}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-slate leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-secondary leading-relaxed max-w-2xl text-[17px]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}