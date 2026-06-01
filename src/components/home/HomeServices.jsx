import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Briefcase, Users, Target, Heart } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    text: "Help with organizational structure, growth strategy, process improvement, cost reduction, operational planning, and data-informed decision making.",
    path: "/services/business-consulting",
  },
  {
    icon: Users,
    title: "Human Resources Consulting",
    text: "HR structure, compliance, employee relations, handbooks, job descriptions, performance management, compensation, benefits, recruiting, and retention.",
    path: "/services/human-resources",
  },
  {
    icon: Target,
    title: "Leadership Development",
    text: "Training, coaching, peer cohorts, communication development, strategic planning, and leadership support for new and experienced leaders.",
    path: "/services/leadership-development",
  },
  {
    icon: Heart,
    title: "Diversity, Equity & Inclusion",
    text: "Assessments, audits, reporting, strategy, resource development, workshops, training, education, and inclusive culture support.",
    path: "/services/dei",
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Consulting Services"
          title="Support for the people, systems, and decisions that shape your organization."
          subtitle="From HR infrastructure and leadership development to DEI strategy and business process improvement, we help organizations solve people-centered challenges with clarity and structure."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={svc.path}
                className="block bg-warm-offwhite border border-warm-border rounded-lg p-6 h-full hover:border-sage-light transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-pale flex items-center justify-center mb-4">
                  <svc.icon className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate mb-3 group-hover:text-sage transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-secondary leading-relaxed">{svc.text}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}