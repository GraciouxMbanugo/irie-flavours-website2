/*
 * GallerySection — Irie Flavours Caribbean Kitchen
 * Design: Masonry-style food gallery with hover overlays
 * Showcases the best Jamaican dishes
 */

import { useEffect, useRef, useState } from "react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT";

const galleryItems = [
  { src: `${CDN}/jerk_chicken_1bcbb136.jpg`, label: "Jerk Chicken", tall: true },
  { src: `${CDN}/oxtail_stew_d8b6a527.jpg`, label: "Oxtail Stew", tall: false },
  { src: `${CDN}/ackee_saltfish_f9b4ff48.jpg`, label: "Ackee & Saltfish", tall: false },
  { src: `${CDN}/curry_goat_06e10b1e.jpg`, label: "Curry Goat", tall: true },
  { src: `${CDN}/escovitch_fish_ecac10a9.jpg`, label: "Escovitch Fish", tall: false },
  { src: `${CDN}/stew_chicken_2f337f1f.jpg`, label: "Stew Chicken", tall: false },
  { src: `${CDN}/rice_and_peas_1b0ef8dc.jpg`, label: "Rice & Peas", tall: false },
  { src: `${CDN}/curry_chicken_5b4cb0d3.jpg`, label: "Curry Chicken", tall: true },
  { src: `${CDN}/beef_patty_ffccf680.jpg`, label: "Beef Patty", tall: false },
];

export default function GallerySection() {
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
    <section id="gallery" className="py-20 bg-[#FAF6EE]">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-[#D4A017] text-sm tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Visual Feast
          </span>
          <h2
            className="text-[#1B4332] text-4xl sm:text-5xl font-bold mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Taste in Every Frame
          </h2>
          <div className="gold-rule w-24 mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`relative group overflow-hidden rounded-xl break-inside-avoid transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={item.src}
                alt={item.label}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  item.tall ? "h-72" : "h-48"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span
                  className="text-white font-bold text-sm tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
