/*
 * ReservationsSection — Irie Flavours Caribbean Kitchen
 * Design: Dark green background with gold form elements
 * Interactive reservation form with Jamaican cultural flair
 */

import { useState } from "react";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

export default function ReservationsSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservations" className="py-20 bg-[#0D2B1F] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT/pattern_bg-Rpsm8Dx3aUZGhhGuk7Gwdq.webp)`,
          backgroundSize: "300px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <span
              className="text-[#D4A017] text-sm tracking-[0.3em] uppercase font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Book Your Experience
            </span>
            <h2
              className="text-white text-4xl sm:text-5xl font-bold mt-2 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Reserve Your
              <br />
              <span className="text-[#D4A017] italic">Table Today</span>
            </h2>
            <div className="gold-rule w-16 mb-8" />

            <p
              className="text-white/70 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Join us for an unforgettable Jamaican dining experience. Whether it's
              a casual family dinner or a special celebration, we'll make it irie.
            </p>

            {/* Hours */}
            <div className="space-y-4 mb-8">
              {[
                { day: "Monday – Thursday", hours: "11:00 AM – 9:00 PM" },
                { day: "Friday – Saturday", hours: "11:00 AM – 10:30 PM" },
                { day: "Sunday", hours: "12:00 PM – 8:00 PM" },
              ].map((h) => (
                <div key={h.day} className="flex items-center gap-4">
                  <Clock size={16} className="text-[#D4A017] flex-shrink-0" />
                  <div>
                    <span
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {h.day}
                    </span>
                    <span className="text-white/50 mx-2">·</span>
                    <span
                      className="text-[#D4A017] text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {h.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick contact */}
            <div className="bg-[#1B4332] rounded-2xl p-6 border border-[#D4A017]/20">
              <p
                className="text-white/60 text-sm mb-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Prefer to call us?
              </p>
              <a
                href="tel:+18765551234"
                className="text-[#D4A017] text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                (876) 555-1234
              </a>
              <p
                className="text-white/40 text-xs mt-1"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Available during opening hours
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-[#D4A017] mx-auto mb-4" />
                <h3
                  className="text-white text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Reservation Confirmed!
                </h3>
                <p
                  className="text-white/60"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  We'll see you soon, {form.name}! A confirmation has been sent to {form.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-gold px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-2 block"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D4A017] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-2 block"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D4A017] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-2 block"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D4A017] transition-colors text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-2 block"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                      <Calendar size={12} className="inline mr-1" />
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-[#D4A017] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif", colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-2 block"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                      <Clock size={12} className="inline mr-1" />
                      Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-[#D4A017] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      <option value="" className="bg-[#1B4332]">Select</option>
                      {["11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM"].map(t => (
                        <option key={t} value={t} className="bg-[#1B4332]">{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-2 block"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                      <Users size={12} className="inline mr-1" />
                      Guests *
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-[#D4A017] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {["1","2","3","4","5","6","7","8","9","10+"].map(n => (
                        <option key={n} value={n} className="bg-[#1B4332]">{n} {n === "1" ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-2 block"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    Occasion
                  </label>
                  <select
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4A017] transition-colors text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    <option value="" className="bg-[#1B4332]">Select occasion (optional)</option>
                    {["Birthday","Anniversary","Business Dinner","Family Gathering","Date Night","Other"].map(o => (
                      <option key={o} value={o} className="bg-[#1B4332]">{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-2 block"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    Special Requests
                  </label>
                  <textarea
                    name="requests"
                    value={form.requests}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Dietary requirements, allergies, special arrangements..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D4A017] transition-colors text-sm resize-none"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl text-base font-bold tracking-wider uppercase"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
