import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const areas = [
  "Assessments and data collection", "Audits and reporting",
  "Strategy and resource development", "Trainings and workshops",
  "DEI education", "Curriculum design",
  "Inclusive culture planning", "Leadership alignment",
];

const startingPoints = [
  "Understanding employee experience",
  "Reviewing policies and practices",
  "Training leaders and teams",
  "Building a DEI roadmap",
  "Creating resources that support long-term culture change",
];

export default function DEI() {
  return (
    <>
      <SEOHead title="Diversity, Equity & Inclusion Consulting | First Choice National Consulting Group" description="DEI consulting that helps organizations create more inclusive, equitable, and effective workplaces through assessment, strategy, education, and implementation." />

      <PageHero
        eyebrow="Diversity, Equity & Inclusion"
        title="DEI consulting that moves beyond checklists."
        subtitle="First Choice helps organizations create more inclusive, equitable, and effective workplaces through assessment, strategy, education, and practical implementation."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="DEI Support Areas" title="Services that support inclusive workplace culture." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {areas.map((item, i) => (
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
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionHeading eyebrow="Why It Matters" title="Inclusive workplaces are built through action." />
              <p className="text-slate-secondary leading-relaxed">
                Inclusive workplaces are not built by slogans. They are built through better listening, better systems, better leadership, and consistent action. When organizations take the time to understand their culture, identify gaps, and build real strategies, the result is a stronger workplace for everyone.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <SectionHeading eyebrow="Common Starting Points" title="Where many organizations begin." />
              <ul className="space-y-3">
                {startingPoints.map((item, i) => (
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

      <CTASection headline="Start a DEI conversation with First Choice." buttonText="Schedule a Consultation" />

      <section className="py-12 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-slate-muted">
            Explore related services: <Link to="/services/business-consulting" className="text-sage hover:underline">Business Consulting</Link> · <Link to="/services/human-resources" className="text-sage hover:underline">Human Resources</Link> · <Link to="/services/leadership-development" className="text-sage hover:underline">Leadership Development</Link>
          </p>
        </div>
      </section>
    </>
  );
}