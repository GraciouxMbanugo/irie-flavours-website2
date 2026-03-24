/*
 * MenuSection — Irie Flavours Caribbean Kitchen
 * Full Jamaican menu: Breakfast, Lunch, Dinner, Kids Special
 * Interactive tabs with animated card grid
 * Design: Cream background with green/gold accents, food photography cards
 */

import { useState, useEffect, useRef } from "react";
import { Star, Clock, Flame } from "lucide-react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT";

const menuData = {
  breakfast: {
    label: "Breakfast",
    emoji: "🌅",
    tagline: "Start your morning the Jamaican way",
    items: [
      {
        name: "Ackee & Saltfish",
        description: "Jamaica's national dish — sautéed ackee with salted codfish, onions, scotch bonnet, and tomatoes. Served with fried dumplings and boiled green banana.",
        price: "$14.99",
        image: `${CDN}/ackee_saltfish_f9b4ff48.jpg`,
        badge: "National Dish",
        spice: 2,
        popular: true,
      },
      {
        name: "Ackee & Saltfish with Dumplings",
        description: "Our signature ackee and saltfish served alongside golden fried dumplings — the ultimate Jamaican breakfast combo.",
        price: "$16.99",
        image: `${CDN}/ackee_saltfish_dumplings_070b4f58.jpg`,
        badge: "Chef's Pick",
        spice: 2,
        popular: true,
      },
      {
        name: "Porridge",
        description: "Creamy Jamaican-style cornmeal porridge slow-cooked with coconut milk, condensed milk, cinnamon, and nutmeg. Warming and nourishing.",
        price: "$8.99",
        image: `${CDN}/cornmeal_porridge_e456f3fc.jpg`,
        badge: "Comfort Food",
        spice: 0,
        popular: false,
      },
      {
        name: "Callaloo & Saltfish",
        description: "Tender callaloo greens sautéed with salted codfish, onions, garlic, and scotch bonnet. A classic Jamaican morning staple.",
        price: "$13.99",
        image: `${CDN}/callaloo_671df8f9.jpg`,
        badge: null,
        spice: 2,
        popular: false,
      },
      {
        name: "Fried Dumplings",
        description: "Crispy golden fried dumplings made from scratch — fluffy inside, perfectly crunchy outside. Served with butter and choice of side.",
        price: "$6.99",
        image: `${CDN}/festival_dumplings_fe9d600c.jpg`,
        badge: "Side Dish",
        spice: 0,
        popular: false,
      },
      // {
      //   name: "Liver & Onions",
      //   description: "Tender beef liver sautéed with caramelized onions, scotch bonnet, and Jamaican herbs. A bold and hearty breakfast protein.",
      //   price: "$13.99",
      //   image: `https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80`,
      //   badge: null,
      //   spice: 2,
      //   popular: false,
      // },
    ],
  },
  lunch: {
    label: "Lunch",
    emoji: "☀️",
    tagline: "Bold flavours for the middle of your day",
    items: [
      {
        name: "Jerk Chicken",
        description: "Slow-smoked over pimento wood with our secret blend of scotch bonnet, allspice, thyme, and island spices. Served with rice & peas and coleslaw.",
        price: "$18.99",
        image: `${CDN}/jerk_chicken_1bcbb136.jpg`,
        badge: "Most Popular",
        spice: 4,
        popular: true,
      },
      {
        name: "BBQ Chicken",
        description: "Tender chicken marinated in a smoky Caribbean BBQ sauce, grilled to perfection. Served with rice & peas and festival dumplings.",
        price: "$17.99",
        image: `${CDN}/bbq_chicken_d9ebb53d.jpg`,
        badge: null,
        spice: 2,
        popular: false,
      },
      {
        name: "Fried Chicken",
        description: "Jamaican-seasoned crispy fried chicken with a golden crust and juicy interior. Served with rice & peas and coleslaw.",
        price: "$16.99",
        image: `${CDN}/fried_chicken_4bac93b2.jpg`,
        badge: null,
        spice: 2,
        popular: false,
      },
      {
        name: "Stew Chicken",
        description: "Chicken pieces slow-braised in a rich brown gravy with onions, garlic, thyme, and Jamaican browning. Deeply flavourful and tender.",
        price: "$17.99",
        image: `${CDN}/stew_chicken_2f337f1f.jpg`,
        badge: "Comfort Classic",
        spice: 2,
        popular: true,
      },
      {
        name: "Oxtail",
        description: "Fall-off-the-bone oxtail slow-cooked for hours in a rich, velvety gravy with butter beans, scotch bonnet, and herbs. Served with rice & peas.",
        price: "$24.99",
        image: `${CDN}/oxtail_stew_d8b6a527.jpg`,
        badge: "House Specialty",
        spice: 2,
        popular: true,
      },
      {
        name: "Curry Goat",
        description: "Tender goat meat slow-simmered in a fragrant blend of Jamaican curry powder, scotch bonnet, and aromatic spices. Served with rice & peas.",
        price: "$22.99",
        image: `${CDN}/curry_goat_06e10b1e.jpg`,
        badge: "Island Favourite",
        spice: 3,
        popular: true,
      },
      {
        name: "Curry Chicken",
        description: "Bone-in chicken pieces cooked in a golden Jamaican curry sauce with potatoes, scotch bonnet, and fresh herbs. Served with white rice.",
        price: "$18.99",
        image: `${CDN}/curry_chicken_5b4cb0d3.jpg`,
        badge: null,
        spice: 3,
        popular: false,
      },
      {
        name: "Rice & Peas",
        description: "Fluffy white rice cooked in coconut milk with red kidney beans, thyme, scallion, and garlic. The quintessential Jamaican side.",
        price: "$5.99",
        image: `${CDN}/rice_and_peas_1b0ef8dc.jpg`,
        badge: "Side Dish",
        spice: 0,
        popular: false,
      },
    ],
  },
  dinner: {
    label: "Dinner",
    emoji: "🌙",
    tagline: "Evening feasts crafted with island soul",
    items: [
      {
        name: "Escovitch Snapper",
        description: "Whole red snapper fried golden then topped with a vibrant escovitch sauce of pickled peppers, carrots, onions, and scotch bonnet vinegar.",
        price: "$26.99",
        image: `${CDN}/escovitch_fish_ecac10a9.jpg`,
        badge: "Chef's Special",
        spice: 3,
        popular: true,
      },
      {
        name: "Jerk",
        description: "Slow-roasted pork shoulder marinated overnight in our jerk seasoning blend. Smoky, spicy, and irresistibly tender.",
        price: "$23.99",
        image: `${CDN}/jerk_pork_514564f4.jpg`,
        badge: "Weekend Special",
        spice: 4,
        popular: false,
      },
      {
        name: "Oxtail Dinner Platter",
        description: "Our signature oxtail with extra gravy, served with rice & peas, steamed cabbage, and festival dumplings. The full Jamaican experience.",
        price: "$29.99",
        image: `${CDN}/oxtail_stew_plate_ea8f86af.png`,
        badge: "Signature Platter",
        spice: 2,
        popular: true,
      },
      {
        name: "Mannish Water",
        description: "A traditional Jamaican goat soup made with goat head, green bananas, yam, and a blend of island spices. A true cultural delicacy.",
        price: "$16.99",
        image: `${CDN}/mannish_water_a6578d99.jpg`,
        badge: "Traditional",
        spice: 3,
        popular: false,
      },
      // {
      //   name: "Curry Goat Dinner",
      //   description: "Our slow-cooked curry goat served with rice & peas, fried plantain, and a side salad. A complete island dinner experience.",
      //   price: "$27.99",
      //   image: `${CDN}/curry_goat_rice_e285e327.png`,
      //   badge: null,
      //   spice: 3,
      //   popular: false,
      // },
      {
        name: "Jamaican Beef Patty",
        description: "Flaky golden pastry filled with seasoned ground beef, scotch bonnet, and island spices. Served with coco bread and a side salad.",
        price: "$9.99",
        image: `${CDN}/beef_patty_ffccf680.jpg`,
        badge: "Street Food Classic",
        spice: 2,
        popular: false,
      },
      {
        name: "Stew Peas",
        description: "Red kidney peas slow-cooked with salted pig tail, coconut milk, and dumplings in a rich, hearty stew. Pure Jamaican soul food.",
        price: "$19.99",
        image: `https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80`,
        badge: "Soul Food",
        spice: 2,
        popular: false,
      },
      {
        name: "Ackee & Saltfish Dinner",
        description: "Jamaica's national dish elevated for dinner — served with boiled green banana, fried plantain, and rice & peas.",
        price: "$21.99",
        image: `${CDN}/ackee_saltfish_f9b4ff48.jpg`,
        badge: "National Dish",
        spice: 2,
        popular: false,
      },
    ],
  },
  kids: {
    label: "Kids' Special",
    emoji: "⭐",
    tagline: "Little ones deserve big island flavours — all just $5.65!",
    items: [
      {
        name: "Jerk Chicken Bites",
        description: "Tender jerk chicken pieces with mild seasoning, served with rice & peas and a side of coleslaw. Kid-friendly heat level.",
        price: "$5.65",
        image: `${CDN}/kids_meal_17edbbeb.jpg`,
        badge: "Kids Fave",
        spice: 1,
        popular: true,
      },
      {
        name: "Fried Chicken & Rice",
        description: "Crispy fried chicken drumstick with fluffy white rice and steamed vegetables. Simple, delicious, and satisfying.",
        price: "$5.65",
        image: `${CDN}/fried_chicken_4bac93b2.jpg`,
        badge: "Most Ordered",
        spice: 1,
        popular: true,
      },
      {
        name: "Mac & Cheese",
        description: "Creamy Jamaican-style macaroni and cheese with a golden baked top. Comfort food the whole family loves.",
        price: "$5.65",
        image: `https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&q=80`,
        badge: null,
        spice: 0,
        popular: false,
      },
      {
        name: "Chicken Nuggets & Festival",
        description: "Golden chicken nuggets served with sweet Jamaican festival dumplings and a dipping sauce. A Caribbean twist on a classic.",
        price: "$5.65",
        image: `${CDN}/festival_dumplings_fe9d600c.jpg`,
        badge: null,
        spice: 0,
        popular: false,
      },
      {
        name: "BBQ Chicken & Rice",
        description: "Mild BBQ glazed chicken with steamed white rice and sweet corn. A crowd-pleasing combo for young diners.",
        price: "$5.65",
        image: `${CDN}/bbq_chicken_d9ebb53d.jpg`,
        badge: null,
        spice: 1,
        popular: false,
      },
    ],
  },
};

type MenuCategory = keyof typeof menuData;

function SpiceIndicator({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4].map((i) => (
        <Flame
          key={i}
          size={12}
          className={i <= level ? "text-red-500 fill-red-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function MenuCard({ item, index }: { item: (typeof menuData.breakfast.items)[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`menu-card bg-white rounded-2xl overflow-hidden shadow-md border border-[#E8E0D0] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        {item.badge && (
          <div className="absolute top-3 left-3 bg-[#1B4332] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            {item.badge}
          </div>
        )}
        {item.popular && (
          <div className="absolute top-3 right-3 bg-[#D4A017] text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            <Star size={10} className="fill-black" />
            Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="text-[#1B4332] font-bold text-lg leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.name}
          </h3>
          <span
            className="text-[#D4A017] font-bold text-xl whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.price}
          </span>
        </div>

        <p
          className="text-gray-600 text-sm leading-relaxed mb-3"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <SpiceIndicator level={item.spice} />
          <button className="text-[#1B4332] text-xs font-bold tracking-wider uppercase hover:text-[#D4A017] transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            Order Now →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("breakfast");
  const current = menuData[activeTab];

  return (
    <section
      id="menu"
      className="py-20 relative"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663453921284/272bAngDyCPzjFB7h82DiT/pattern_bg-Rpsm8Dx3aUZGhhGuk7Gwdq.webp)`,
        backgroundSize: "400px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FAF6EE]/92" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="text-[#D4A017] text-sm tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Crafted with Island Love
          </span>
          <h2
            className="text-[#1B4332] text-4xl sm:text-5xl font-bold mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h2>
          <div className="gold-rule w-24 mx-auto mb-4" />
          <p
            className="text-gray-600 max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Every dish is prepared fresh daily using traditional Jamaican recipes
            and the finest imported spices.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(Object.keys(menuData) as MenuCategory[]).map((cat) => {
            const data = menuData[cat];
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-[#1B4332] text-white shadow-lg scale-105"
                    : "bg-white text-[#1B4332] border-2 border-[#1B4332]/20 hover:border-[#1B4332] hover:bg-[#1B4332]/5"
                }`}
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <span>{data.emoji}</span>
                <span>{data.label}</span>
                {cat === "kids" && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-[#D4A017] text-black" : "bg-[#D4A017]/20 text-[#D4A017]"}`}>
                    $5.65
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Tagline */}
        <div className="text-center mb-8">
          <p
            className="text-[#D4A017] italic text-lg"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {current.tagline}
          </p>
          {activeTab === "kids" && (
            <div className="mt-3 inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-2 rounded-full">
              <Star size={16} className="fill-[#D4A017] text-[#D4A017]" />
              <span className="font-bold text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                All Kids' Meals just $5.65 — Lunch Special!
              </span>
              <Star size={16} className="fill-[#D4A017] text-[#D4A017]" />
            </div>
          )}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {current.items.map((item, index) => (
            <MenuCard key={item.name} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p
            className="text-gray-500 mb-4 text-sm"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            All mains served with rice & peas or white rice. Sides available separately.
          </p>
          <button
            onClick={() => document.querySelector("#reservations")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-10 py-4 rounded-full text-base font-bold tracking-wider uppercase"
          >
            Book Your Table
          </button>
        </div>
      </div>
    </section>
  );
}
