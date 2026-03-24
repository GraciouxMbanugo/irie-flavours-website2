/*
 * ContactFooter — Irie Flavours Caribbean Kitchen
 * Design: Dark footer with Jamaican cultural elements
 * Contact info, social links, and brand identity
 */

import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT/irie_logo-H2kF3vPDmeM2EEKwXpzfkg.webp";

export default function ContactFooter() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#FAF6EE]">
        <div className="container">
          <div className="text-center mb-12">
            <span
              className="text-[#D4A017] text-sm tracking-[0.3em] uppercase font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Get in Touch
            </span>
            <h2
              className="text-[#1B4332] text-4xl sm:text-5xl font-bold mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Us
            </h2>
            <div className="gold-rule w-24 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Location",
                lines: ["45 Four winds Drive", "North York, Canada"],
                link: "https://maps.google.com",
                linkText: "Get Directions",
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["(647) 345-9355", "(647) 575 3139"],
                link: "tel:6473459355",
                linkText: "Call Us Now",
              },
              {
                icon: Mail,
                title: "Email",
                lines: [
                  "hello@irieflavours.com",
                  "reservations@irieflavours.com",
                ],
                link: "mailto:hello@irieflavours.com",
                linkText: "Send Email",
              },
            ].map(item => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center shadow-md border border-[#E8E0D0] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-[#1B4332] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-[#D4A017]" />
                </div>
                <h3
                  className="text-[#1B4332] font-bold text-lg mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                {item.lines.map(line => (
                  <p
                    key={line}
                    className="text-gray-600 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {line}
                  </p>
                ))}
                <a
                  href={item.link}
                  className="inline-block mt-4 text-[#D4A017] text-sm font-bold tracking-wider uppercase hover:text-[#1B4332] transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {item.linkText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1F14] text-white">
        {/* Flag stripe top */}
        <div className="h-1 flag-stripe" />

        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={LOGO_URL}
                  alt="Irie Flavours"
                  className="w-14 h-14 rounded-full border-2 border-[#D4A017]"
                />
                <div>
                  <div
                    className="text-white font-bold text-xl"
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
              </div>
              <p
                className="text-white/50 text-sm leading-relaxed max-w-xs"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Bringing the authentic taste of Jamaica to your table. Every
                dish tells a story of culture, love, and island tradition.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href + Icon.name}
                    href={href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A017] hover:text-black transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-[#D4A017] text-xs font-bold tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", id: "#home" },
                  { label: "Our Menu", id: "#menu" },
                  { label: "About Us", id: "#about" },
                  { label: "Gallery", id: "#gallery" },
                  { label: "Reservations", id: "#reservations" },
                  { label: "Contact", id: "#contact" },
                ].map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-white/50 hover:text-[#D4A017] text-sm transition-colors"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4
                className="text-[#D4A017] text-xs font-bold tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Opening Hours
              </h4>
              <ul className="space-y-2">
                {[
                  { day: "Mon – Thu", time: "11am – 9pm" },
                  { day: "Fri – Sat", time: "11am – 10:30pm" },
                  { day: "Sunday", time: "12pm – 8pm" },
                ].map(h => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span
                      className="text-white/50 text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {h.day}
                    </span>
                    <span
                      className="text-[#D4A017] text-sm font-semibold"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              © 2026 Irie Flavours Caribbean Kitchen. All rights reserved.
            </p>
            <p
              className="text-[#D4A017]/60 text-xs italic"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              "website designed by Grace" 🌴
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
