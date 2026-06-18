import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Values",
    children: [
      { label: "Our Values", path: "/values" },
      { label: "Capabilities Statement", path: "/capabilities" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Business Consulting", path: "/services/business-consulting" },
      { label: "Human Resources", path: "/services/human-resources" },
      { label: "Leadership Development", path: "/services/leadership-development" },
      { label: "Diversity, Equity & Inclusion", path: "/services/dei" },
      { label: "Fractional C-Suite Recruitment", path: "/services/fractional-c-suite" },
    ],
  },
  { label: "Work", path: "/work" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function DropdownMenu({ item, isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const hasActiveChild = item.children?.some(c => {
    const loc = window.location.pathname;
    return loc === c.path;
  });

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-[15px] font-body font-medium transition-colors hover:text-sage ${hasActiveChild ? "text-sage" : "text-slate"}`}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-warm-white border border-warm-border rounded-lg shadow-lg py-2 z-50">
          {item.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-[15px] text-slate-secondary hover:text-sage hover:bg-sage-pale transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-warm-white/95 backdrop-blur-sm shadow-sm border-b border-warm-border" : "bg-warm-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
           <img src="https://media.base44.com/images/public/6a1c6cba4d6940275ff0adcb/c840d259a_fcncg-logo-primary1.png" alt="First Choice National Consulting Group" className="h-12 lg:h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label} item={item} />
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[15px] font-body font-medium transition-colors hover:text-sage ${location.pathname === item.path ? "text-sage" : "text-slate"}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/contact">
              <Button className="bg-sage hover:bg-sage/90 text-white rounded-lg text-sm px-5 py-2 font-body font-medium">
                Schedule a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-slate p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-warm-white border-t border-warm-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <p className="eyebrow text-slate-muted px-3 pt-4 pb-1">{item.label}</p>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-3 py-2.5 text-slate-secondary hover:text-sage transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2.5 text-slate hover:text-sage transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 pb-2">
              <Link to="/contact">
                <Button className="w-full bg-sage hover:bg-sage/90 text-white rounded-lg font-body">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}