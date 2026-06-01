import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const posts = [
  { title: "When Your Business Outgrows Informal HR", category: "Human Resources" },
  { title: "Why Leadership Development Should Start Before There Is a Problem", category: "Leadership" },
  { title: "Building Inclusive Culture Beyond a Checklist", category: "DEI" },
];

export default function HomeBlogPreview() {
  return (
    <section className="py-20 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="Perspectives on people, leadership, and organizational growth."
        />
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to="/blog" className="block border border-warm-border rounded-lg p-6 hover:border-sage-light transition-colors group">
                <p className="eyebrow text-blush mb-3">{post.category}</p>
                <h3 className="font-heading text-xl font-semibold text-slate group-hover:text-sage transition-colors leading-snug">
                  {post.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
        <Link to="/blog">
          <Button variant="outline" className="border-warm-border text-slate hover:bg-sage-pale rounded-lg px-6 py-3 font-body text-[15px]">
            Read Insights
          </Button>
        </Link>
      </div>
    </section>
  );
}