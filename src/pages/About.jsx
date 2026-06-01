import React from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { Award } from "lucide-react";

const whoWeServe = [
  "Growing businesses",
  "Established companies",
  "Nonprofit organizations",
  "Government clients",
  "Leaders and teams navigating change",
];

const differentiators = [
  "Customized consulting, not prepackaged templates",
  "Experienced guidance across multiple sectors",
  "Practical recommendations built for implementation",
  "Human-centered strategy that connects people and performance",
];

const certs = ["Minority-Owned", "Woman-Owned Small Business", "Economically Disadvantaged Woman-Owned Small Business", "DUNS: 080924241", "CAGE: 7ZCP4"];

export default function About() {
  return (
    <>
      <SEOHead title="About First Choice National Consulting Group" description="Over 20 years of experience helping organizations improve workplace productivity, leadership, HR, and organizational effectiveness." />

      <PageHero
        eyebrow="About the Firm"
        title="We believe people are the strategy."
        subtitle="First Choice National Consulting Group helps organizations build stronger systems, more effective leaders, and healthier workplace cultures."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-slate-secondary leading-relaxed mb-6">
                First Choice National Consulting Group is a comprehensive business consulting, human resources, leadership development, and diversity, equity and inclusion consulting firm. For over 20 years, the firm has helped commercial organizations and government clients improve workplace productivity, leadership return on investment, organizational structure, policy initiatives, business process improvements, DEI initiatives, strategic initiatives, technology purchases, implementations, and upgrades.
              </p>
              <p className="text-slate-secondary leading-relaxed">
                The firm was founded on the belief that every organization deserves access to experienced, thoughtful consulting support. Whether working with a growing startup or an established government agency, First Choice brings a consistent commitment to understanding the client's context and delivering work that is practical, clear, and ready to implement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionHeading eyebrow="Who We Serve" title="Organizations of every size and sector." />
              <ul className="space-y-3">
                {whoWeServe.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <SectionHeading eyebrow="What Makes Us Different" title="Consulting built around your reality." />
              <ul className="space-y-3">
                {differentiators.map((item, i) => (
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

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="bg-sage-pale border border-sage-light/50 rounded-lg p-8 lg:p-10 max-w-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-gold" />
              <p className="eyebrow text-sage">Certifications & Registrations</p>
            </div>
            <div className="space-y-3">
              {certs.map((cert, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                  <span className="text-slate font-medium text-[15px]">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}