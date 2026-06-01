import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const options = [
  "One-on-one leadership coaching", "Group leadership cohorts", "Peer-based leadership development",
  "Training workshops", "Strategic planning support", "Communication skills",
  "Emotional intelligence", "Conflict management", "Team leadership",
  "Executive coaching", "Leadership assessments",
];

const whatLeadersBuild = [
  "Strategic thinking", "Confidence in decision making", "Stronger communication",
  "Better team accountability", "Higher emotional intelligence", "Clearer leadership presence",
];

const whoFor = [
  "New managers", "Mid-level leaders", "Executives", "Team leads", "Organizations building leadership pipelines",
];

export default function LeadershipDevelopment() {
  return (
    <>
      <SEOHead title="Leadership Development Consulting | First Choice National Consulting Group" description="Training, coaching, and development support for leaders who want to communicate better, think strategically, and lead with confidence." />

      <PageHero
        eyebrow="Leadership Development"
        title="Leadership development for people who carry real responsibility."
        subtitle="Leaders do not always have all the answers. First Choice provides training, coaching, and development support for leaders who want to communicate better, think more strategically, and lead with confidence."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Development Options" title="Programs and support for leaders at every level." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {options.map((item, i) => (
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
              <SectionHeading eyebrow="What Leaders Build" title="Skills and capacities that grow with the role." />
              <ul className="space-y-3">
                {whatLeadersBuild.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <SectionHeading eyebrow="Who This Is For" title="Leaders and organizations we support." />
              <ul className="space-y-3">
                {whoFor.map((item, i) => (
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

      <CTASection headline="Build stronger leaders in your organization." buttonText="Schedule a Consultation" />

      <section className="py-12 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-slate-muted">
            Explore related services: <Link to="/services/business-consulting" className="text-sage hover:underline">Business Consulting</Link> · <Link to="/services/human-resources" className="text-sage hover:underline">Human Resources</Link> · <Link to="/services/dei" className="text-sage hover:underline">DEI Consulting</Link>
          </p>
        </div>
      </section>
    </>
  );
}