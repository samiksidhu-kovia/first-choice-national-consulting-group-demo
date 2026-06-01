import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "Minority-Owned",
  "WOSB",
  "EDWOSB",
  "DUNS: 080924241",
  "CAGE: 7ZCP4",
];

export default function HomeAboutPreview() {
  return (
    <section className="py-20 lg:py-24 bg-warm-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-sage-pale border border-sage-light/50 rounded-lg p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-gold" />
              <p className="eyebrow text-sage">Certifications</p>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-slate mb-6 leading-tight">
              Built to meet organizations where they are.
            </h2>
            <p className="text-slate-secondary leading-relaxed mb-4">
              First Choice National Consulting Group was created to give organizations access to experienced consulting support without forcing them into a one-size-fits-all model.
            </p>
            <p className="text-slate-secondary leading-relaxed mb-8">
              The firm works with startups, established companies, nonprofits, and government entities that need stronger systems, better leadership, clearer processes, and more effective people operations.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-warm-border text-slate hover:bg-sage-pale rounded-lg px-6 py-3 font-body text-[15px]">
                Learn About the Firm
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}