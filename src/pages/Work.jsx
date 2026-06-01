import React from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { Quote } from "lucide-react";

const clients = [
  "A+ Arts Academy", "AT&T", "Anthem Blue Cross Blue Shield", "CDC Foundation",
  "Chase Academy", "Columbus Urban League", "CoreComm Internet Services",
  "Delaware General Health District", "Directions for Youth & Families",
  "Exel Logistics", "Gooseberry Patch", "Hire Heroes USA",
  "Huntington National Bank", "JP Morgan Chase", "KoBolt Construction",
  "Mac Tools", "MaryHaven", "Microbalance Health Products",
  "Mr. Helps Towing", "OPERS", "ReMAX One", "United Way",
];

const testimonials = [
  {
    text: "I have utilized First Choice National Consulting Group for several projects over the years, including handbook development, unemployment issues, payroll, employee relations, and terminations. I have always been pleased with their professionalism, customer service, follow-up, and quality of work. I would not hesitate to refer them.",
    name: "Sonya D.",
  },
  {
    text: "Carrie has always kept me on track with my financials. She helped me develop tools, build budgets, and create a plan of action to reach my goals. She listens closely and has been a true support for my business.",
    name: "Client Testimonial",
  },
  {
    text: "First Choice National Consulting Group helped us prepare for an unemployment audit, rebuild accounting records, create monthly and year-end spreadsheets, develop an employee handbook, and support recruiting. Carrie is professional, responsive, and always available when we need support.",
    name: "Client Testimonial",
  },
];

const workTypes = [
  "HR setup and documentation", "Employee relations support",
  "Payroll, benefits, and HR coordination", "Leadership training and coaching",
  "Business process improvement", "Audit preparation support",
  "Recruiting and hiring support", "DEI strategy and workshops",
];

export default function Work() {
  return (
    <>
      <SEOHead title="Our Work | First Choice National Consulting Group" description="First Choice has supported organizations across sectors with HR, leadership, process improvement, business operations, and workplace culture consulting." />

      <PageHero
        eyebrow="Our Work"
        title="Work across sectors, industries, and organizational challenges."
        subtitle="First Choice National Consulting Group has supported organizations of different sizes and sectors with consulting work connected to HR, leadership, process improvement, business operations, and workplace culture."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Client Experience" title="Organizations we have supported." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
            {clients.map((name, i) => (
              <motion.p key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
                className="text-slate-secondary text-[15px] py-2.5 border-b border-warm-border">{name}</motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Client Perspectives" title="What clients have shared about working with First Choice." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-warm-border rounded-lg p-8">
                <Quote className="w-6 h-6 text-sage-light mb-4" />
                <p className="text-slate-secondary text-[15px] leading-relaxed mb-6">{t.text}</p>
                <p className="font-heading text-lg font-semibold text-slate">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Types of Work" title="Areas where we provide consulting support." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {workTypes.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3 py-3 px-4 border border-warm-border rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                <span className="text-slate-secondary text-[15px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}