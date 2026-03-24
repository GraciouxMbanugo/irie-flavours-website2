/*
 * Home — Irie Flavours Caribbean Kitchen
 * Design: "Roots & Riddim" — Earthy Rastafarian Warmth
 * Full-page assembly of all sections
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReservationsSection from "@/components/ReservationsSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Lato', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ReservationsSection />
      <ContactFooter />
    </div>
  );
}
