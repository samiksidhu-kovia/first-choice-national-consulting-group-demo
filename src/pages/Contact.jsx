import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import SEOHead from "@/components/shared/SEOHead";
import PageHero from "@/components/shared/PageHero";
import { Mail, Phone, Clock, MapPin, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { base44 } from "@/api/base44Client";

const CALENDLY_URL = "https://calendly.com/carrie-129?embed_domain=www.fcncg.com&embed_type=Inline";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@1stchoicenationalconsulting.com", href: "mailto:info@1stchoicenationalconsulting.com" },
  { icon: Phone, label: "Phone", value: "800-679-9764", href: "tel:8006799764", value2: "678-674-4499", href2: "tel:6786744499" },
  { icon: Clock, label: "Hours", value: "Monday through Friday, 9 AM to 5 PM ET" },
  { icon: MapPin, label: "Location", value: "Greater Atlanta Area, GA" },
  { icon: Globe, label: "Service Area", value: "Nationwide" },
];

const serviceOptions = [
  "Business Consulting",
  "Human Resources",
  "Leadership Development",
  "Diversity, Equity & Inclusion",
  "Not Sure Yet",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", organization: "", service: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "info@1stchoicenationalconsulting.com",
      subject: `New Contact: ${form.name} - ${form.service || "General Inquiry"}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nOrganization: ${form.organization}\nService Interest: ${form.service}\n\nMessage:\n${form.message}`,
    });
    setSending(false);
    setSent(true);
    toast({ title: "Message sent", description: "We will be in touch soon." });
  };

  return (
    <>
      <SEOHead title="Contact First Choice National Consulting Group" description="Tell us where your organization is today and what you are trying to solve. Schedule a consultation with First Choice National Consulting Group." />

      <PageHero
        eyebrow="Contact"
        title="Let's start with a conversation."
        subtitle="Tell us where your organization is today and what you are trying to solve. We will help you think through the right next step."
      />

      <section className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-semibold text-slate mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sage-pale flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-sage" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-muted uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href2 ? (
                        <div className="flex flex-col">
                          <a href={item.href} className="text-slate font-medium hover:text-sage transition-colors text-[15px]">{item.value}</a>
                          <a href={item.href2} className="text-slate font-medium hover:text-sage transition-colors text-[15px]">{item.value2}</a>
                        </div>
                      ) : item.href ? (
                        <a href={item.href} className="text-slate font-medium hover:text-sage transition-colors text-[15px]">{item.value}</a>
                      ) : (
                        <p className="text-slate font-medium text-[15px]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-3">
              {sent ? (
                <div className="bg-sage-pale border border-sage-light rounded-lg p-10 text-center">
                  <h3 className="font-heading text-2xl font-semibold text-slate mb-3">Thank you for reaching out.</h3>
                  <p className="text-slate-secondary">We have received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-sm text-slate-secondary mb-2 block">Name</Label>
                      <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border-warm-border rounded-lg bg-white" />
                    </div>
                    <div>
                      <Label className="text-sm text-slate-secondary mb-2 block">Email</Label>
                      <Input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="border-warm-border rounded-lg bg-white" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-sm text-slate-secondary mb-2 block">Phone</Label>
                      <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="border-warm-border rounded-lg bg-white" />
                    </div>
                    <div>
                      <Label className="text-sm text-slate-secondary mb-2 block">Organization</Label>
                      <Input value={form.organization} onChange={e => setForm({ ...form, organization: e.target.value })} className="border-warm-border rounded-lg bg-white" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-slate-secondary mb-2 block">Service Interest</Label>
                    <Select value={form.service} onValueChange={v => setForm({ ...form, service: v })}>
                      <SelectTrigger className="border-warm-border rounded-lg bg-white">
                        <SelectValue placeholder="Select a service area" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map(opt => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-slate-secondary mb-2 block">Message</Label>
                    <Textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="border-warm-border rounded-lg bg-white" />
                  </div>
                  <Button type="submit" disabled={sending} className="bg-sage hover:bg-sage/90 text-white rounded-lg px-8 py-3 font-body text-[15px] w-full sm:w-auto">
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Inline Embed */}
      <section className="py-20 lg:py-24 bg-warm-offwhite">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-sage mb-3">Schedule Online</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-slate mb-4">Book a Consultation</h2>
            <p className="text-slate-secondary mb-10 max-w-2xl text-[17px] leading-relaxed">
              Choose a time that works best for you to discuss your organization's goals, challenges, and next steps.
            </p>
            <div className="bg-warm-white border border-warm-border rounded-xl overflow-hidden">
              <iframe
                src={CALENDLY_URL}
                title="Schedule a Consultation with First Choice National Consulting Group"
                width="100%"
                style={{ height: "700px", minWidth: "100%", border: "none" }}
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}