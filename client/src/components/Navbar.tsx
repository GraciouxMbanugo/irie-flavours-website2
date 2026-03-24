/*
 * Navbar — Irie Flavours Caribbean Kitchen
 * Design: Sticky dark green nav with gold accents, palm tree logo
 * Interaction: Transparent on hero, solid on scroll; mobile hamburger menu
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT/irie_logo-H2kF3vPDmeM2EEKwXpzfkg.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1B4332] shadow-2xl py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <img
              src={LOGO_URL}
              alt="Irie Flavours Caribbean Kitchen"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#D4A017] shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <div
                className="text-white font-bold text-lg leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Irie Flavours
              </div>
              <div
                className="text-[#D4A017] text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Caribbean Kitchen
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 hover:text-[#D4A017] text-sm font-semibold tracking-wider uppercase transition-colors duration-200 relative group"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4A017] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18765551234"
              className="flex items-center gap-2 text-[#D4A017] text-sm font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <Phone size={16} />
              (647) 345-9355
            </a>
            <button
              onClick={() => handleNavClick("#reservations")}
              className="btn-gold px-5 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#1B4332] shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/90 hover:text-[#D4A017] text-lg font-semibold tracking-wider uppercase py-3 border-b border-white/10 text-left transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <a
                href="tel:+18765551234"
                className="flex items-center gap-2 text-[#D4A017] font-semibold"
              >
                <Phone size={18} />
                (876) 555-1234
              </a>
              <button
                onClick={() => handleNavClick("#reservations")}
                className="btn-gold w-full py-3 rounded-full text-sm font-bold tracking-wider uppercase"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
