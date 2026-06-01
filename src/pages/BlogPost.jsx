import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/shared/SEOHead";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = window.location.pathname.split("/blog/")[1];

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => base44.entities.BlogPost.list("-publish_date"),
  });

  const post = posts.find(p => p.slug === slug && p.status === "Published");
  const relatedPosts = posts.filter(p => p.status === "Published" && p.id !== post?.id && p.category === post?.category).slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-warm-white pt-20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-sage-light border-t-sage rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-warm-white pt-32 text-center px-6">
        <h1 className="font-heading text-3xl text-slate mb-4">Post not found</h1>
        <p className="text-slate-secondary mb-8">This post may have been removed or is not yet published.</p>
        <Link to="/blog"><Button variant="outline" className="border-warm-border rounded-lg">Back to Blog</Button></Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={post.seo_title || `${post.title} | First Choice National Consulting Group`}
        description={post.meta_description || post.excerpt || ""}
      />

      <section className="py-20 lg:py-28 bg-warm-offwhite">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-sage hover:text-sage/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          <p className="eyebrow text-blush mb-3">{post.category}</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-slate leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-muted">
            <span>{post.author || "First Choice National Consulting Group"}</span>
            {post.publish_date && (
              <>
                <span className="w-1 h-1 rounded-full bg-slate-muted" />
                <span>{format(new Date(post.publish_date), "MMMM d, yyyy")}</span>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-slate max-w-none" style={{ fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: post.body || "<p>This article is coming soon.</p>" }}
          />
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-warm-offwhite">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="eyebrow text-sage mb-6">Related Insights</p>
            <div className="space-y-4">
              {relatedPosts.map(rp => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} className="block border border-warm-border rounded-lg p-5 hover:border-sage-light transition-colors bg-white">
                  <p className="eyebrow text-blush mb-2 text-[11px]">{rp.category}</p>
                  <h3 className="font-heading text-lg font-semibold text-slate">{rp.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-blush-pale">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-medium text-slate mb-3">Need support applying this to your organization?</h2>
          <p className="text-slate-secondary mb-6">Schedule a consultation to discuss your specific situation and goals.</p>
          <Link to="/contact">
            <Button className="bg-sage hover:bg-sage/90 text-white rounded-lg px-8 py-3 font-body text-[15px]">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}