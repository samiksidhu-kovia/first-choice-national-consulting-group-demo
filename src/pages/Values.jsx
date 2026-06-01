import React from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { Shield, Heart, Lightbulb, Star } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    text: "We build trust through honesty, transparency, and follow-through. Clients rely on First Choice for guidance that is direct, thoughtful, and grounded in what is best for the organization.",
  },
  {
    icon: Heart,
    title: "Respect",
    text: "We respect every client's context, people, culture, and goals. Consulting works best when people feel heard, understood, and included in the process.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    text: "We do not force organizations into generic solutions. We think critically, adapt quickly, and build strategies around the specific challenge in front of us.",
  },
  {
    icon: Star,
    title: "Quality",
    text: "We hold the work to a high standard. Every recommendation, process, document, training, or strategy should be useful, clear, and built to last.",
  },
];

export default function Values() {
  return (
    <>
      <SEOHead title="Our Values | First Choice National Consulting Group" description="Integrity, respect, creativity, and quality guide our consulting approach at First Choice National Consulting Group." />

      <PageHero eyebrow="Our Values" title="Values that guide the work." variant="sage" />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-warm-border rounded-lg p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-pale flex items-center justify-center mb-5">
                  <val.icon className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-slate mb-3">{val.title}</h3>
                <p className="text-slate-secondary leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-slate mb-4">The goal is not advice for the sake of advice.</h2>
            <p className="text-slate-secondary leading-relaxed">Our work is designed to help organizations make better decisions, support their people, and create systems that can sustain growth.</p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}