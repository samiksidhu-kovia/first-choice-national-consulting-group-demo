import React from "react";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead title="Privacy Policy | First Choice National Consulting Group" description="Privacy Policy for First Choice National Consulting Group." />
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-slate">
          <p className="text-slate-muted text-sm mb-10">Effective Date: May 8, 2026</p>
          <p className="text-slate-secondary leading-relaxed mb-8">First Choice National Consulting Group ("Company," "we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Information We Collect</h2>
          <ul className="text-slate-secondary leading-relaxed space-y-2 list-disc pl-5">
            <li><strong>Personal Information:</strong> Name, email address, phone number, billing information, company information, appointment details.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, website usage data, cookies and analytics data.</li>
          </ul>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">How We Use Your Information</h2>
          <p className="text-slate-secondary leading-relaxed">We use collected information to: provide and manage services, process payments, schedule appointments, respond to inquiries, improve website functionality, send updates or marketing communications, and maintain security and fraud prevention.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Payment Processing</h2>
          <p className="text-slate-secondary leading-relaxed">Payments made through our website may be processed through secure third-party payment providers. We do not store full payment card information on our servers.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Sharing Information</h2>
          <p className="text-slate-secondary leading-relaxed">We do not sell customer information. We may share information with trusted service providers who assist with payment processing, scheduling systems, email communications, website hosting, and business operations. Information may also be disclosed when legally required.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Cookies & Analytics</h2>
          <p className="text-slate-secondary leading-relaxed">Our website may use cookies and analytics tools to improve user experience and understand website traffic patterns. Users may disable cookies through their browser settings.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Data Security</h2>
          <p className="text-slate-secondary leading-relaxed">We implement reasonable administrative, technical, and physical safeguards to protect personal information. However, no online transmission or storage system can be guaranteed completely secure.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Your Rights</h2>
          <p className="text-slate-secondary leading-relaxed">Depending on applicable U.S. privacy laws, users may request to: access personal information, correct inaccurate information, request deletion of information, and opt out of marketing communications. Requests may be submitted to <a href="mailto:info@1stchoicenationalconsulting.com" className="text-sage hover:underline">info@1stchoicenationalconsulting.com</a>.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Third-Party Links</h2>
          <p className="text-slate-secondary leading-relaxed">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Children's Privacy</h2>
          <p className="text-slate-secondary leading-relaxed">Our services are not intended for individuals under 18 years of age.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Changes to This Policy</h2>
          <p className="text-slate-secondary leading-relaxed">We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page with a revised effective date.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Contact Information</h2>
          <p className="text-slate-secondary leading-relaxed">First Choice National Consulting Group<br />Email: <a href="mailto:info@1stchoicenationalconsulting.com" className="text-sage hover:underline">info@1stchoicenationalconsulting.com</a></p>
        </div>
      </section>
    </>
  );
}