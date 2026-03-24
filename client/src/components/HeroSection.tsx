/*
 * HeroSection — Irie Flavours Caribbean Kitchen
 * Design: Full-viewport hero with jerk chicken grill background
 * Dark overlay with diagonal bottom cut, animated text reveal
 * Jamaican flag color accents
 */

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT/hero_bg-d8HwHsVV36epEt6g5fx2Hg.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReservations = () => {
    document.querySelector("#reservations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
        paddingBottom: "6rem",
        marginBottom: "-3rem",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Jamaican flag color strip at top */}
      <div className="absolute top-0 left-0 right-0 h-1 flag-stripe" />

      {/* Content */}
      <div className="container relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Accent label */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span
              className="inline-block text-[#D4A017] text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              🌴 Authentic Jamaican Cuisine
            </span>
          </div>

          {/* Main headline */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h1
              className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Taste the
            </h1>
            <h1
              className="text-[#D4A017] text-5xl sm:text-6xl md:text-7xl font-bold italic leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Island Vibes
            </h1>
          </div>

          {/* Subheadline */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <p
              className="text-white/80 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              From smoky jerk chicken to slow-cooked oxtail — every dish is crafted
              with love, fresh spices, and the soul of Jamaica.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <button
              onClick={scrollToMenu}
              className="btn-gold px-8 py-4 rounded-full text-base font-bold tracking-wider uppercase"
            >
              Explore Our Menu
            </button>
            <button
              onClick={scrollToReservations}
              className="px-8 py-4 rounded-full text-base font-bold tracking-wider uppercase border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Reserve a Table
            </button>
          </div>

          {/* Stats row */}
          <div
            className={`mt-12 flex flex-wrap gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.65s" }}
          >
            {[
              { num: "30+", label: "Authentic Dishes" },
              { num: "15+", label: "Years of Flavour" },
              { num: "5★", label: "Guest Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-[#D4A017] text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.num}
                </div>
                <div
                  className="text-white/60 text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/60 hover:text-[#D4A017] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
