import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  { num: "01", title: "Listen", text: "We begin by understanding your organization, goals, pain points, people, and current systems." },
  { num: "02", title: "Assess", text: "We identify gaps, risks, opportunities, and the areas where better structure can create the most value." },
  { num: "03", title: "Build", text: "We create practical strategies, tools, documents, processes, trainings, or leadership plans tailored to your needs." },
  { num: "04", title: "Support", text: "We help your team implement the work, adjust where needed, and carry the improvements forward." },
];

export default function HomeProcess() {
  return (
    <section className="py-20 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear process from conversation to implementation."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="border border-warm-border rounded-lg p-6">
                <span className="font-heading text-4xl font-light text-sage-light">{step.num}</span>
                <h3 className="font-heading text-xl font-semibold text-slate mt-3 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-secondary leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}