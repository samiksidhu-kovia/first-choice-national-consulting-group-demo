import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const clients = [
  "A+ Arts Academy", "AT&T", "Anthem Blue Cross Blue Shield", "CDC Foundation",
  "Chase Academy", "Columbus Urban League", "CoreComm Internet Services",
  "Delaware General Health District", "Directions for Youth & Families",
  "Exel Logistics", "Gooseberry Patch", "Hire Heroes USA",
  "Huntington National Bank", "JP Morgan Chase", "KoBolt Construction",
  "Mac Tools", "MaryHaven", "Microbalance Health Products",
  "Mr. Helps Towing", "OPERS", "ReMAX One", "United Way",
];

export default function HomeWorkPreview() {
  return (
    <section className="py-20 lg:py-24 bg-warm-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Experience"
          title="Trusted by organizations across sectors."
          subtitle="First Choice National Consulting Group has supported businesses, nonprofits, and public-sector organizations with HR, leadership, operational, and organizational consulting needs."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 mb-10"
        >
          {clients.map((name, i) => (
            <p key={i} className="text-slate-secondary text-[15px] py-2 border-b border-warm-border">{name}</p>
          ))}
        </motion.div>
        <Link to="/work">
          <Button variant="outline" className="border-warm-border text-slate hover:bg-sage-pale rounded-lg px-6 py-3 font-body text-[15px]">
            View Our Work
          </Button>
        </Link>
      </div>
    </section>
  );
}