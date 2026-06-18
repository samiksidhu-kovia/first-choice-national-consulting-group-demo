import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SEOHead from "@/components/shared/SEOHead";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import HomeServices from "@/components/home/HomeServices";
import HomeAboutPreview from "@/components/home/HomeAboutPreview";
import HomeProcess from "@/components/home/HomeProcess";
import HomeWhyChoose from "@/components/home/HomeWhyChoose";
import HomeWorkPreview from "@/components/home/HomeWorkPreview";
import HomeBlogPreview from "@/components/home/HomeBlogPreview";
import { Award, Globe, Clock } from "lucide-react";

const credCards = [
  {
    icon: Clock,
    title: "20+ Years of Experience",
    text: "Supporting commercial organizations and government clients with practical, people-centered consulting.",
  },
  {
    icon: Globe,
    title: "Nationwide Service",
    text: "Based in the Greater Atlanta Area and serving organizations across the United States.",
  },
  {
    icon: Award,
    title: "Certified Business",
    text: "Minority-Owned, WOSB, EDWOSB, DUNS 080924241, CAGE 7ZCP4.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="First Choice National Consulting Group | HR, Business & Leadership Consulting"
        description="First Choice National Consulting Group provides business consulting, human resources, leadership development, and DEI consulting for organizations nationwide. Based in the Atlanta Metropolitan Area."
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #EEF4F1 0%, #FAFAF8 40%, #FAF2EF 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="eyebrow text-sage mb-5">Atlanta Metro Based · Serving Organizations Nationwide</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-slate leading-tight mb-6">
                People-first consulting for <span style={{ color: "var(--sage)" }}>stronger</span> organizations.
              </h1>
              <p className="text-slate-secondary text-lg leading-relaxed mb-8 max-w-lg">
                First Choice National Consulting Group partners with businesses, nonprofits, and government clients to strengthen human resources, leadership, operations, and workplace culture with strategies built around their people and goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://calendly.com/carrie-129" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-sage hover:bg-sage/90 text-white rounded-lg px-7 py-3 font-body text-[15px]">
                    Schedule a Consultation
                  </Button>
                </a>
                <Link to="/services">
                  <Button variant="outline" className="border-warm-border text-slate hover:bg-warm-offwhite rounded-lg px-7 py-3 font-body text-[15px]">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {credCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm border border-warm-border rounded-lg p-5 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-sage-pale flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-slate mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-secondary leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <HomeServices />
      <HomeAboutPreview />
      <HomeProcess />
      <HomeWhyChoose />
      <HomeWorkPreview />
      <HomeBlogPreview />

      <CTASection />
    </>
  );
}