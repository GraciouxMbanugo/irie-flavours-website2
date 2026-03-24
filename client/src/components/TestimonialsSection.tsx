/*
 * TestimonialsSection — Irie Flavours Caribbean Kitchen
 * Design: Warm cream background with quote cards
 * Social proof from happy customers
 */

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thompson",
    location: "Toronto, Canada",
    rating: 5,
    text: "The oxtail here is absolutely incredible — fall-off-the-bone tender with the richest gravy I've ever tasted. This is authentic Jamaican cooking at its finest. Reminds me of my grandmother's kitchen.",
    avatar: "MT",
  },
  {
    name: "Simone Clarke",
    location: "New York, USA",
    rating: 5,
    text: "I've been searching for real ackee and saltfish outside of Jamaica for years. Irie Flavours nailed it perfectly. The fried dumplings are golden perfection. This place is a treasure!",
    avatar: "SC",
  },
  {
    name: "Devon Williams",
    location: "London, UK",
    rating: 5,
    text: "The jerk chicken is smoky, spicy, and absolutely divine. You can taste the love and tradition in every bite. The rice and peas are cooked exactly right — coconut milk and all. Highly recommend!",
    avatar: "DW",
  },
  {
    name: "Keisha Brown",
    location: "Miami, USA",
    rating: 5,
    text: "Brought my whole family here for Sunday dinner and everyone was blown away. The curry goat melts in your mouth and the mannish water soup is the real deal. We'll be back every week!",
    avatar: "KB",
  },
];

export default function TestimonialsSection() {
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
    <section className="py-20 bg-[#1B4332] relative overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT/pattern_bg-Rpsm8Dx3aUZGhhGuk7Gwdq.webp)`,
          backgroundSize: "300px",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        <div className="text-center mb-12">
          <span
            className="text-[#D4A017] text-sm tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            What Our Guests Say
          </span>
          <h2
            className="text-white text-4xl sm:text-5xl font-bold mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Full Stomachs,
            <br />
            <span className="text-[#D4A017] italic">Happy Hearts</span>
          </h2>
          <div className="gold-rule w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote size={28} className="text-[#D4A017]/40 mb-3" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-[#D4A017] text-[#D4A017]" />
                ))}
              </div>

              <p
                className="text-white/70 text-sm leading-relaxed mb-4 italic"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-[#D4A017] rounded-full flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-black font-bold text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <div
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-white/40 text-xs"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
