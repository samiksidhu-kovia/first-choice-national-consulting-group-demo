import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";

export default function Capabilities() {
  return (
    <>
      <SEOHead
        title="Capabilities Statement | First Choice National Consulting Group"
        description="Human Resource Consulting Capability Statement for First Choice National Consulting Group."
      />
      <PageHero
        eyebrow="Government Contracting"
        title="Capabilities Statement"
        subtitle="Human Resource Consulting Capability Statement"
      />

      {/* Capability Statement Images */}
      <section className="bg-warm-white py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-start justify-center">
          <img
            src="https://media.base44.com/images/public/6a1db9605bc09d43648fd22c/cc2e11cca_image.png"
            alt="Capabilities Statement Page 1"
            className="w-full md:w-1/2 h-auto"
          />
          <img
            src="https://media.base44.com/images/public/6a1db9605bc09d43648fd22c/1b88e197b_image.png"
            alt="Capabilities Statement Page 2"
            className="w-full md:w-1/2 h-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blush-pale py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-secondary text-lg mb-6">Interested in working with us on a government contract?</p>
          <Link to="/contact">
            <Button className="bg-sage hover:bg-sage/90 text-white rounded-lg px-8 py-3 font-body text-[15px]">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}