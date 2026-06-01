import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection({ 
  headline = "Ready for a clearer path forward?", 
  text = "Schedule a consultation to discuss your organization's goals, challenges, and next steps.", 
  buttonText = "Schedule a Consultation",
  buttonLink = "/contact",
  variant = "blush"
}) {
  const bgClass = variant === "blush" ? "bg-blush-pale" : variant === "sage" ? "bg-sage-pale" : "bg-warm-offwhite";

  return (
    <section className={`${bgClass} py-20 lg:py-24`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-slate mb-4">{headline}</h2>
          <p className="text-slate-secondary mb-8 text-[17px] leading-relaxed">{text}</p>
          <Link to={buttonLink}>
            <Button className="bg-sage hover:bg-sage/90 text-white rounded-lg px-8 py-3 font-body text-[15px]">
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}