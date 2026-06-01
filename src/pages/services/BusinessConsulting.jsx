import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const supportAreas = [
  "Expanding products or services",
  "Finding operational efficiencies",
  "Cutting unnecessary costs",
  "Diversifying the business",
  "Understanding business data",
  "Improving organizational structure",
  "Supporting strategic initiatives",
  "Technology purchases, implementations, and upgrades",
  "Business process improvements",
];

const whenItHelps = [
  "Your team is growing but your systems have not caught up.",
  "You need to make decisions with better data.",
  "Workflows feel inconsistent or inefficient.",
  "You are preparing for growth, restructuring, or change.",
  "You need outside perspective before investing time or money.",
];

const steps = [
  { num: "01", title: "Assess current operations" },
  { num: "02", title: "Identify gaps and priorities" },
  { num: "03", title: "Build a practical roadmap" },
  { num: "04", title: "Support implementation" },
];

export default function BusinessConsulting() {
  return (
    <>
      <SEOHead title="Business Consulting Services | First Choice National Consulting Group" description="Business consulting for organizational structure, growth strategy, process improvement, cost reduction, operational planning, and data-informed decision making." />

      <PageHero
        eyebrow="Business Consulting"
        title="Business consulting for clearer decisions and stronger operations."
        subtitle="We help organizations identify what is working, what is slowing them down, and where better structure can support sustainable growth."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="What We Support" title="Areas where business consulting creates value." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {supportAreas.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3 py-3 px-4 border border-warm-border rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                <span className="text-slate-secondary text-[15px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="When Business Consulting Helps" title="Common situations where outside support makes a difference." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whenItHelps.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white border border-warm-border rounded-lg p-6">
                <p className="text-slate-secondary leading-relaxed text-[15px]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Our Approach" title="How we work with your organization." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-warm-border rounded-lg p-6 text-center">
                <span className="font-heading text-3xl font-light text-sage-light">{step.num}</span>
                <h3 className="font-heading text-lg font-semibold text-slate mt-2">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Talk through your business goals." buttonText="Schedule a Consultation" />

      <section className="py-12 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-slate-muted">
            Explore related services: <Link to="/services/human-resources" className="text-sage hover:underline">Human Resources Consulting</Link> · <Link to="/services/leadership-development" className="text-sage hover:underline">Leadership Development</Link> · <Link to="/services/dei" className="text-sage hover:underline">DEI Consulting</Link>
          </p>
        </div>
      </section>
    </>
  );
}