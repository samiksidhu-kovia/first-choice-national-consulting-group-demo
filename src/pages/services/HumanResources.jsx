import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const areas = [
  "HR department structure", "Compliance support", "Employee relations",
  "Compensation and benefits", "Organizational efficiency", "Talent acquisition",
  "Recruiting support for hard-to-fill positions", "Performance management",
  "Employee handbooks", "Job descriptions", "Standard operating procedures",
  "Disciplinary tools", "Retention strategies", "Payroll and benefit support where applicable",
];

const goodFit = [
  "Small businesses without formal HR",
  "Growing organizations that need structure",
  "Companies dealing with employee relations issues",
  "Leaders who need compliant documents and policies",
  "Organizations preparing to hire, scale, or restructure",
];

export default function HumanResources() {
  return (
    <>
      <SEOHead title="Human Resources Consulting | First Choice National Consulting Group" description="HR consulting that brings structure to your people operations: compliance, employee relations, handbooks, performance management, recruiting, and retention." />

      <PageHero
        eyebrow="Human Resources Consulting"
        title="Human resources consulting that brings structure to your people operations."
        subtitle="Many organizations know they need HR support, but do not have the time, staff, or expertise to build it properly. First Choice helps create HR systems that are clear, compliant, and built around the people they serve."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="HR Support Areas" title="Comprehensive human resources consulting services." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {areas.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}
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
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionHeading eyebrow="Why HR Structure Matters" title="People operations affect everything." />
              <p className="text-slate-secondary leading-relaxed">
                Strong HR is not just paperwork. It affects hiring, retention, compliance, employee trust, leadership decisions, and the daily experience of work. When HR systems are unclear or inconsistent, it creates risk for the organization and frustration for the people within it.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <SectionHeading eyebrow="Good Fit For" title="Organizations that benefit most." />
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-blush" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection headline="Discuss HR support for your organization." buttonText="Schedule a Consultation" />

      <section className="py-12 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-slate-muted">
            Explore related services: <Link to="/services/business-consulting" className="text-sage hover:underline">Business Consulting</Link> · <Link to="/services/leadership-development" className="text-sage hover:underline">Leadership Development</Link> · <Link to="/services/dei" className="text-sage hover:underline">DEI Consulting</Link>
          </p>
        </div>
      </section>
    </>
  );
}