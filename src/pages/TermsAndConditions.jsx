import React from "react";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";

export default function TermsAndConditions() {
  return (
    <>
      <SEOHead title="Terms & Conditions | First Choice National Consulting Group" description="Terms and Conditions for First Choice National Consulting Group." />
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-slate-muted text-sm mb-10">Effective Date: May 8, 2026</p>
          <p className="text-slate-secondary leading-relaxed mb-8">Welcome to First Choice National Consulting Group. By accessing or using our website and services, you agree to comply with and be bound by these Terms & Conditions.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Services</h2>
          <p className="text-slate-secondary leading-relaxed mb-3">First Choice National Consulting Group provides professional consulting and business services including: Coaching Services, Business Consulting, Strategic HR Services, Targeted Recruitment, Fractional C-Suite Recruitment, and Leadership Development. All services are subject to availability and may be modified or discontinued at any time.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Eligibility</h2>
          <p className="text-slate-secondary leading-relaxed">By using this website, you confirm that you are at least 18 years old and legally capable of entering into binding agreements.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Payments</h2>
          <p className="text-slate-secondary leading-relaxed">Clients may book and pay for services online through our website. By submitting payment information, you authorize us to charge the applicable fees for services purchased. All prices are listed in U.S. dollars.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">No Refund Policy</h2>
          <p className="text-slate-secondary leading-relaxed mb-3">Due to the nature of our professional services, all sales are final. No refunds will be issued for: completed services, partially completed services, scheduled consultations, retainers or deposits, unused services, or digital or downloadable materials. Clients are responsible for reviewing service descriptions prior to purchase.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Client Responsibilities</h2>
          <p className="text-slate-secondary leading-relaxed">Clients agree to: provide accurate and complete information, participate professionally and respectfully, meet agreed-upon deadlines and communication expectations, and use our services lawfully and ethically.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Intellectual Property</h2>
          <p className="text-slate-secondary leading-relaxed">All website content, materials, branding, documents, graphics, and service materials are the property of First Choice National Consulting Group and may not be copied, reproduced, or distributed without written permission.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Confidentiality</h2>
          <p className="text-slate-secondary leading-relaxed">We respect client confidentiality and will make reasonable efforts to protect sensitive business information shared during engagements, except where disclosure is required by law.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Limitation of Liability</h2>
          <p className="text-slate-secondary leading-relaxed">First Choice National Consulting Group is not liable for indirect, incidental, consequential, or special damages arising from the use of our services or website. We do not guarantee specific business, hiring, financial, or employment outcomes.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Third-Party Services</h2>
          <p className="text-slate-secondary leading-relaxed">Our website may contain links to third-party services or payment processors. We are not responsible for the practices or content of third-party providers.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Termination</h2>
          <p className="text-slate-secondary leading-relaxed">We reserve the right to refuse or terminate services at our discretion for violations of these Terms & Conditions or inappropriate conduct.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Governing Law</h2>
          <p className="text-slate-secondary leading-relaxed">These Terms & Conditions shall be governed by the laws of the State of Georgia, without regard to conflict of law principles.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Contact Information</h2>
          <p className="text-slate-secondary leading-relaxed">First Choice National Consulting Group<br />Email: <a href="mailto:info@1stchoicenationalconsulting.com" className="text-sage hover:underline">info@1stchoicenationalconsulting.com</a></p>
        </div>
      </section>
    </>
  );
}