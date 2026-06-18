import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", path: "/about" },
    { label: "Our Values", path: "/values" },
    { label: "Capabilities Statement", path: "/capabilities" },
    { label: "Our Work", path: "/work" },
    { label: "Contact", path: "/contact" },
  ],
  Services: [
    { label: "Business Consulting", path: "/services/business-consulting" },
    { label: "Human Resources", path: "/services/human-resources" },
    { label: "Leadership Development", path: "/services/leadership-development" },
    { label: "Diversity, Equity & Inclusion", path: "/services/dei" },
    { label: "Fractional C-Suite Recruitment", path: "/services/fractional-c-suite" },
  ],
  Resources: [
    { label: "Blog", path: "/blog" },
    { label: "Services Overview", path: "/services" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
    { label: "Service Agreement", path: "/service-agreement" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="https://media.base44.com/images/public/6a1c6cba4d6940275ff0adcb/87944a385_FooterLogoFirstChoice.png" alt="First Choice National Consulting Group" className="h-16 w-auto mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Business Consulting, Human Resources, Leadership Development, and DEI Consulting.
              Based in Douglasville, Georgia and serving organizations across the United States.
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-sage-light" />
                <a href="mailto:info@1stchoicenationalconsulting.com" className="hover:text-sage-light transition-colors">
                  info@1stchoicenationalconsulting.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-sage-light" />
                <div className="flex flex-col">
                  <a href="tel:8006799764" className="hover:text-sage-light transition-colors">800-679-9764</a>
                  <a href="tel:6786744499" className="hover:text-sage-light transition-colors">678-674-4499</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-sage-light" />
                <span>Mon - Fri, 9 AM - 5 PM ET</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-sage-light" />
                <span>Greater Atlanta Area, GA</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="eyebrow text-white/50 mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-white/70 hover:text-sage-light transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40 mb-6">
            <span>Minority-Owned Business</span>
            <span>·</span>
            <span>Woman-Owned Small Business (WOSB)</span>
            <span>·</span>
            <span>EDWOSB</span>
            <span>·</span>
            <span>DUNS: 080924241</span>
            <span>·</span>
            <span>CAGE: 7ZCP4</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} First Choice National Consulting Group. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-white/40 hover:text-sage-light transition-colors">Facebook</a>
              <a href="#" className="text-xs text-white/40 hover:text-sage-light transition-colors">LinkedIn</a>
              <a href="#" className="text-xs text-white/40 hover:text-sage-light transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}