import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { Briefcase, Users, Target, Heart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    text: "Organizational structure, growth strategy, process improvement, cost reduction, operational planning, and data-informed decision making.",
    path: "/services/business-consulting",
  },
  {
    icon: Users,
    title: "Human Resources Consulting",
    text: "HR structure, compliance, employee relations, performance management, compensation, benefits, recruiting, retention, and people operations.",
    path: "/services/human-resources",
  },
  {
    icon: Target,
    title: "Leadership Development",
    text: "Coaching, training, peer cohorts, strategic planning support, communication skills, and leadership development for all levels.",
    path: "/services/leadership-development",
  },
  {
    icon: Heart,
    title: "Diversity, Equity & Inclusion",
    text: "Assessments, audits, strategy, resource development, workshops, trainings, education, and inclusive culture planning.",
    path: "/services/dei",
  },
];

export default function Services() {
  return (
    <>
      <SEOHead title="Consulting Services | First Choice National Consulting Group" description="Flexible consulting support for organizations that need stronger people systems, leadership, culture, operations, and strategy." />

      <PageHero
        eyebrow="Consulting Services"
        title="Consulting services built around your organization."
        subtitle="First Choice National Consulting Group provides flexible consulting support for organizations that need stronger people systems, leadership, culture, operations, and strategy."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
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
                  className="block border border-warm-border rounded-lg p-8 h-full hover:border-sage-light transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-sage-pale flex items-center justify-center mb-5">
                    <svc.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-slate mb-3 group-hover:text-sage transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-secondary leading-relaxed mb-4">{svc.text}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-sage group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warm-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-slate mb-4">Not sure where to start?</h2>
            <p className="text-slate-secondary leading-relaxed mb-8">
              Many clients come to First Choice with overlapping challenges. A consultation can help identify whether the best starting point is HR, leadership, DEI, business process improvement, or a combination of services.
            </p>
            <Link to="/contact">
              <Button className="bg-sage hover:bg-sage/90 text-white rounded-lg px-8 py-3 font-body text-[15px]">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}