import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const whatWeSupport = [
  "Identifying and placing fractional executives",
  "Interim C-suite leadership",
  "Chief HR Officer support",
  "Chief People Officer engagements",
  "Executive advisory and transition support",
];

const whenItHelps = [
  "Your organization needs senior HR or executive leadership but is not ready for a full-time hire",
  "You are going through a leadership transition or restructure",
  "You need experienced executive perspective on a project or initiative basis",
];

export default function FractionalCSuite() {
  return (
    <>
      <SEOHead
        title="Fractional C-Suite Recruitment | First Choice National Consulting Group"
        description="Executive talent solutions for organizations that need senior leadership without a full-time hire."
      />

      <PageHero
        eyebrow="Fractional C-Suite Recruitment"
        title="Fractional C-Suite Recruitment"
        subtitle="Executive talent solutions for organizations that need senior leadership without a full-time hire."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="What We Support" title="Senior leadership placed with precision." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whatWeSupport.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3 py-3 px-4 border border-warm-border rounded-lg"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                <span className="text-slate-secondary text-[15px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <SectionHeading eyebrow="When It Helps" title="The right leadership at the right time." />
          <ul className="space-y-4">
            {whenItHelps.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-3 text-slate-secondary"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blush mt-2 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        headline="Ready to find the right executive for your organization?"
        text="Schedule a consultation to discuss your leadership needs and how a fractional executive can help."
        buttonText="Schedule a Consultation"
        buttonLink="https://calendly.com/carrie-129"
      />

      <section className="py-12 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-slate-muted">
            Explore related services:{" "}
            <Link to="/services/business-consulting" className="text-sage hover:underline">Business Consulting</Link>
            {" · "}
            <Link to="/services/human-resources" className="text-sage hover:underline">Human Resources</Link>
            {" · "}
            <Link to="/services/leadership-development" className="text-sage hover:underline">Leadership Development</Link>
          </p>
        </div>
      </section>
    </>
  );
}