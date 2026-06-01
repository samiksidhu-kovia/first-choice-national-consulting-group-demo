import React from "react";
import { motion } from "framer-motion";
import { Eye, Settings, Building2, BarChart3 } from "lucide-react";

const items = [
  { icon: Eye, title: "Senior-level perspective", text: "Guidance grounded in years of experience across industries and organizational challenges." },
  { icon: Settings, title: "Flexible consulting support", text: "Engagement structures that fit your timeline, budget, and scope of need." },
  { icon: Building2, title: "Commercial and government experience", text: "Understanding the expectations and requirements of both private and public-sector environments." },
  { icon: BarChart3, title: "People-centered strategy with measurable business value", text: "Connecting better people systems to stronger organizational outcomes." },
];

export default function HomeWhyChoose() {
  return (
    <section className="py-20 lg:py-24 bg-slate text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="eyebrow text-sage-light mb-3">Why First Choice</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium leading-tight">
            Why organizations choose First Choice.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-white/10 rounded-lg p-6 flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-sage/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-sage-light" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}