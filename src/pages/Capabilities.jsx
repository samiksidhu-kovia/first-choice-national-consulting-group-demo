import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";

const competencies = [
  "Business consulting",
  "Human resources consulting",
  "Leadership development",
  "Diversity, equity, and inclusion consulting",
  "Process improvement",
  "Executive recruitment and talent support",
  "Organizational structure and policy initiatives",
  "Strategic planning and implementation support",
];

const differentiators = [
  "Over 20 years of experience",
  "Commercial and government client experience",
  "National service coverage",
  "Minority-Owned, WOSB, and EDWOSB certified",
  "Flexible consulting support",
  "People-centered, implementation-focused approach",
];

const companyData = [
  { label: "Business Name", value: "First Choice National Consulting Group" },
  { label: "Location", value: "Douglasville, GA" },
  { label: "Service Area", value: "United States" },
  { label: "DUNS", value: "080924241" },
  { label: "CAGE", value: "7ZCP4" },
  { label: "Certifications", value: "Minority-Owned, WOSB, EDWOSB" },
  { label: "Email", value: "info@1stchoicenationalconsulting.com" },
  { label: "Phone", value: "678-674-4499" },
];

export default function Capabilities() {
  return (
    <>
      <SEOHead title="Capabilities Statement | First Choice National Consulting Group" description="A certified consulting partner supporting business operations, human resources, leadership development, DEI strategy, and organizational effectiveness." />

      <PageHero
        eyebrow="Capabilities Statement"
        title="Capabilities Statement"
        subtitle="A certified consulting partner supporting business operations, human resources, leadership development, DEI strategy, and organizational effectiveness."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <SectionHeading eyebrow="Core Competencies" title="What we do." />
                <div className="grid sm:grid-cols-2 gap-3">
                  {competencies.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                      <span className="text-slate-secondary text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <SectionHeading eyebrow="Differentiators" title="Why organizations choose First Choice." />
                <div className="grid sm:grid-cols-2 gap-3">
                  {differentiators.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blush" />
                      <span className="text-slate-secondary text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-slate text-white rounded-lg p-8 sticky top-28">
                <p className="eyebrow text-sage-light mb-6">Company Data</p>
                <div className="space-y-4">
                  {companyData.map((item, i) => (
                    <div key={i}>
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-sm text-white/90 font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link to="/contact">
            <Button className="bg-sage hover:bg-sage/90 text-white rounded-lg px-8 py-3 font-body text-[15px]">
              Contact Us About Contracting Opportunities
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}