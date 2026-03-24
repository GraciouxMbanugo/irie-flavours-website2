/*
 * FeaturedSection — Irie Flavours Caribbean Kitchen
 * Design: Horizontal scrolling featured dishes strip
 * Potluck-inspired interactive dish showcase
 */

import { useEffect, useRef, useState } from "react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT";

const featured = [
  {
    name: "Jerk Chicken",
    tagline: "Smoked over pimento wood",
    price: "$18.99",
    image: `${CDN}/jerk_chicken_1bcbb136.jpg`,
    color: "#8B2500",
  },
  {
    name: "Oxtail",
    tagline: "Slow-cooked to perfection",
    price: "$24.99",
    image: `${CDN}/oxtail_stew_d8b6a527.jpg`,
    color: "#4A1A00",
  },
  {
    name: "Curry Goat",
    tagline: "Island spice blend",
    price: "$22.99",
    image: `${CDN}/curry_goat_06e10b1e.jpg`,
    color: "#5C4200",
  },
  {
    name: "Ackee & Saltfish",
    tagline: "Jamaica's national dish",
    price: "$14.99",
    image: `${CDN}/ackee_saltfish_f9b4ff48.jpg`,
    color: "#1B4332",
  },
  {
    name: "Escovitch Fish",
    tagline: "Crispy with pickled peppers",
    price: "$26.99",
    image: `${CDN}/escovitch_fish_ecac10a9.jpg`,
    color: "#003366",
  },
];

export default function FeaturedSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-[#0D2B1F] overflow-hidden" ref={ref}>
      <div className="container mb-8">
        <div className="flex items-end justify-between">
          <div>
            <span
              className="text-[#D4A017] text-sm tracking-[0.3em] uppercase font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Most Loved
            </span>
            <h2
              className="text-white text-3xl sm:text-4xl font-bold mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Signature Dishes
            </h2>
          </div>
          <button
            onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[#D4A017] text-sm font-bold tracking-wider uppercase hover:text-white transition-colors hidden sm:block"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            View Full Menu →
          </button>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 px-4 sm:px-8 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: "x mandatory" }}>
        {featured.map((dish, i) => (
          <div
            key={dish.name}
            className={`flex-shrink-0 relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              width: "280px",
              height: "380px",
              scrollSnapAlign: "start",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: `linear-gradient(to top, ${dish.color}EE 0%, ${dish.color}88 40%, transparent 70%)`,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div
                className="text-[#D4A017] text-xs font-bold tracking-widest uppercase mb-1"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {dish.tagline}
              </div>
              <h3
                className="text-white text-xl font-bold mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {dish.name}
              </h3>
              <div
                className="text-white/80 font-bold"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {dish.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
