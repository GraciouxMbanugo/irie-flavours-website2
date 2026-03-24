/*
 * AboutSection — Irie Flavours Caribbean Kitchen
 * Design: Split layout — chef image left, story text right
 * Jamaican cultural narrative, warm tones, editorial feel
 */

import { useEffect, useRef, useState } from "react";
import { Leaf, Award, Heart } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT/about_bg-4xWvwx2qkxUvQMKzQpdLVS.webp";

const values = [
  {
    icon: Leaf,
    title: "Fresh & Authentic",
    text: "We import our spices and seasonings directly from Jamaica, ensuring every dish tastes exactly like home.",
  },
  {
    icon: Award,
    title: "Traditional Recipes",
    text: "Our recipes have been passed down through generations — unchanged, uncompromised, and full of love.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    text: "Every pot is stirred with the warmth and hospitality that defines Jamaican culture and community.",
  },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-[#1B4332] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT/pattern_bg-Rpsm8Dx3aUZGhhGuk7Gwdq.webp)`,
          backgroundSize: "300px",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_BG}
                alt="Jamaican chef cooking authentic cuisine"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#D4A017] text-black rounded-2xl p-5 shadow-2xl">
              <div
                className="text-4xl font-bold leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                15+
              </div>
              <div
                className="text-sm font-bold tracking-wider uppercase mt-1"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Years of
                <br />
                Authentic Flavour
              </div>
            </div>

            {/* Jamaican flag stripe decoration */}
            <div className="absolute top-4 left-4 flex gap-1">
              <div className="w-2 h-12 bg-black rounded-full" />
              <div className="w-2 h-12 bg-[#D4A017] rounded-full" />
              <div className="w-2 h-12 bg-[#1B4332] rounded-full" />
            </div>
          </div>

          {/* Text Side */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <span
              className="text-[#D4A017] text-sm tracking-[0.3em] uppercase font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Our Story
            </span>
            <h2
              className="text-white text-4xl sm:text-5xl font-bold mt-2 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From Jamaica's
              <br />
              <span className="text-[#D4A017] italic">Heart to Your Table</span>
            </h2>

            <div className="gold-rule w-16 mb-6" />

            <p
              className="text-white/80 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Irie Flavours was born from a deep love of Jamaican culture, music, and food.
              We believe that food is the most powerful bridge between cultures — and nothing
              brings people together like an authentic Jamaican meal.
            </p>
            <p
              className="text-white/70 leading-relaxed mb-8"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Our chefs bring decades of experience cooking the dishes they grew up with —
              from slow-cooked oxtail and smoky jerk chicken to the national treasure that
              is ackee and saltfish. Every ingredient is sourced with care, every recipe
              prepared with pride.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((val) => (
                <div key={val.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4A017]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <val.icon size={18} className="text-[#D4A017]" />
                  </div>
                  <div>
                    <h4
                      className="text-white font-bold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {val.title}
                    </h4>
                    <p
                      className="text-white/60 text-sm leading-relaxed"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {val.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
