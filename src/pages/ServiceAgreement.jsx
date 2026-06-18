import React from "react";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";

export default function ServiceAgreement() {
  return (
    <>
      <SEOHead title="Service Agreement | First Choice National Consulting Group" description="Professional Services Agreement for First Choice National Consulting Group." />
      <PageHero eyebrow="Legal" title="Service Agreement / Client Contract" />
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-slate-secondary leading-relaxed mb-8 italic">This Professional Services Agreement is entered into between First Choice National Consulting Group ("Consultant") and the client ("Client") purchasing or booking services through our website.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Scope of Services</h2>
          <p className="text-slate-secondary leading-relaxed">Consultant agrees to provide professional services selected by Client, including but not limited to: Coaching, Strategic HR Services, Recruitment Services, Leadership Development, Fractional C-Suite Recruitment, and Business Consulting. Specific project details, timelines, and deliverables may be outlined separately in proposals, invoices, emails, or service descriptions.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Payment Terms</h2>
          <p className="text-slate-secondary leading-relaxed">Client agrees to pay all fees associated with the selected services. Payments may be required in advance and are due according to the payment schedule provided at booking or invoicing. Failure to submit timely payment may delay or suspend services.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Non-Refundable Services</h2>
          <p className="text-slate-secondary leading-relaxed">Client acknowledges and agrees that all payments made to First Choice National Consulting Group are non-refundable. Because services involve professional expertise, strategic planning, scheduling, and time allocation, no refunds will be provided once payment is submitted.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Scheduling & Cancellations</h2>
          <p className="text-slate-secondary leading-relaxed">Clients are responsible for attending scheduled appointments and meetings. Requests to reschedule should be submitted with reasonable notice. Missed appointments or cancellations may result in forfeiture of fees at Consultant's discretion.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Independent Contractor Relationship</h2>
          <p className="text-slate-secondary leading-relaxed">Consultant is an independent contractor and not an employee, partner, or agent of Client.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Confidentiality</h2>
          <p className="text-slate-secondary leading-relaxed">Both parties agree to maintain confidentiality regarding proprietary or sensitive information shared during the engagement.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">No Guarantee of Results</h2>
          <p className="text-slate-secondary leading-relaxed">Consultant does not guarantee specific outcomes, including hiring results, business growth, revenue increases, leadership outcomes, or operational improvements. Client acknowledges that success depends on multiple factors outside Consultant's control.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Limitation of Liability</h2>
          <p className="text-slate-secondary leading-relaxed">Consultant's liability shall not exceed the total amount paid by Client for services. Consultant shall not be liable for indirect, incidental, or consequential damages.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Governing Law</h2>
          <p className="text-slate-secondary leading-relaxed">This Agreement shall be governed under the laws of the State of Georgia.</p>

          <h2 className="font-heading text-2xl font-medium text-slate mt-10 mb-4">Acceptance</h2>
          <p className="text-slate-secondary leading-relaxed">By purchasing, booking, or using services from First Choice National Consulting Group, Client acknowledges acceptance of this Agreement.</p>
        </div>
      </section>
    </>
  );
}