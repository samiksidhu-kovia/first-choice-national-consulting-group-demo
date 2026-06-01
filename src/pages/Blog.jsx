import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import { format } from "date-fns";

const categories = ["All", "Human Resources", "Leadership", "Business Consulting", "DEI", "Organizational Culture", "Process Improvement"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => base44.entities.BlogPost.list("-publish_date"),
  });

  const publishedPosts = posts.filter(p => p.status === "Published");
  const filtered = activeCategory === "All" ? publishedPosts : publishedPosts.filter(p => p.category === activeCategory);

  return (
    <>
      <SEOHead title="Consulting Insights | First Choice National Consulting Group" description="Practical perspectives on human resources, leadership, business operations, and inclusive workplace culture." />

      <PageHero
        eyebrow="Insights"
        title="Insights for better people operations and organizational growth."
        subtitle="Practical perspectives on human resources, leadership, business operations, and inclusive workplace culture."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-body rounded-lg border transition-colors ${activeCategory === cat ? "bg-sage text-white border-sage" : "border-warm-border text-slate-secondary hover:border-sage-light"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="border border-warm-border rounded-lg p-6 animate-pulse">
                  <div className="h-4 bg-warm-offwhite rounded w-24 mb-4" />
                  <div className="h-6 bg-warm-offwhite rounded w-full mb-3" />
                  <div className="h-4 bg-warm-offwhite rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-muted text-lg">No published insights yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}>
                  <Link to={`/blog/${post.slug}`} className="block border border-warm-border rounded-lg p-6 h-full hover:border-sage-light transition-colors group">
                    <p className="eyebrow text-blush mb-3">{post.category}</p>
                    <h3 className="font-heading text-xl font-semibold text-slate mb-3 group-hover:text-sage transition-colors leading-snug">
                      {post.title}
                    </h3>
                    {post.excerpt && <p className="text-sm text-slate-secondary leading-relaxed mb-4">{post.excerpt}</p>}
                    {post.publish_date && (
                      <p className="text-xs text-slate-muted">{format(new Date(post.publish_date), "MMMM d, yyyy")}</p>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}