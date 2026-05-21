"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import clsx from "clsx";

// Mock Menu Data
const menuCategories = [
  { id: "starters", name: "Small Plates & Starters" },
  { id: "tandoori", name: "Tandoori Grills" },
  { id: "curry", name: "Ruby Murray (Curries)" },
  { id: "biryani", name: "Biryanis" },
  { id: "sides", name: "Sides & Breads" },
];

const menuItems: Record<string, Array<{ name: string; description: string; price: string; v?: boolean; ve?: boolean }>> = {
  starters: [
    { name: "Vegetable Samosa", description: "Crispy pastry filled with spiced potatoes and peas.", price: "£4.50", v: true },
    { name: "Onion Bhaji", description: "Crispy onion fritters with fresh herbs and spices.", price: "£4.50", v: true },
    { name: "Chicken Tikka Starter", description: "Tender pieces of chicken marinated in yogurt and spices.", price: "£5.95" },
    { name: "Lamb Chops", description: "Succulent lamb chops marinated in ginger, garlic, and garam masala.", price: "£7.95" },
    { name: "Prawn Puri", description: "Spiced prawns served on a light, fluffy bread.", price: "£6.95" },
  ],
  tandoori: [
    { name: "Chicken Tikka Main", description: "Marinated chicken grilled to perfection in the clay oven.", price: "£10.95" },
    { name: "Tandoori Mixed Grill", description: "A feast of chicken tikka, lamb tikka, sheek kebab, and tandoori chicken.", price: "£15.95" },
    { name: "Paneer Tikka", description: "Chunks of Indian cheese marinated and grilled with vegetables.", price: "£11.95", v: true },
    { name: "Salmon Tikka", description: "Fresh salmon fillets marinated in carom seeds and spices.", price: "£14.95" },
  ],
  curry: [
    { name: "Chicken Tikka Masala", description: "The nation's favorite. Rich, creamy tomato sauce with almonds.", price: "£11.95" },
    { name: "Lamb Rogan Josh", description: "Aromatic Kashmiri dish with tomatoes, paprika, and spices.", price: "£12.50" },
    { name: "Chicken Korma", description: "Mild and creamy coconut sauce with cashew nuts.", price: "£11.95" },
    { name: "Vegetable Jalfrezi", description: "Spicy stir-fry with peppers, onions, and green chillies.", price: "£9.95", v: true, ve: true },
    { name: "King Prawn Bhuna", description: "Medium spiced sauce with onions, tomatoes, and fresh coriander.", price: "£14.95" },
  ],
  biryani: [
    { name: "Chicken Biryani", description: "Aromatic basmati rice cooked with spiced chicken, served with vegetable curry.", price: "£13.95" },
    { name: "Lamb Biryani", description: "Tender lamb cooked with basmati rice and whole spices.", price: "£14.95" },
    { name: "Vegetable Biryani", description: "Mixed vegetables cooked with fragrant rice.", price: "£11.95", v: true },
  ],
  sides: [
    { name: "Bombay Aloo", description: "Spiced potatoes.", price: "£4.95", v: true, ve: true },
    { name: "Saag Paneer", description: "Spinach with Indian cheese.", price: "£5.95", v: true },
    { name: "Tarka Daal", description: "Lentils tempered with garlic and cumin.", price: "£4.95", v: true, ve: true },
    { name: "Plain Naan", description: "Freshly baked leavened bread.", price: "£3.50", v: true },
    { name: "Garlic Naan", description: "Naan topped with fresh garlic and coriander.", price: "£3.95", v: true },
    { name: "Peshwari Naan", description: "Sweet naan filled with coconut and almonds.", price: "£4.25", v: true },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("starters");

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    // Relies on `scroll-mt-32` on each section to handle the sticky-header offset.
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-chipstead-cream pt-32 pb-24 px-4 md:px-8">
      <SectionTitle subtitle="Eat & Drink">Our Menus</SectionTitle>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 relative">
        {/* Sidebar Navigation (Sticky) */}
        <div className="hidden md:block w-1/4 relative">
          <div className="sticky top-32 border-l-2 border-chipstead-black/10 pl-6 py-4">
            <ul className="space-y-6 font-sans text-xs tracking-[0.2em] uppercase font-bold text-gray-400">
              {menuCategories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => scrollToCategory(category.id)}
                    className={clsx(
                      "text-left hover:text-chipstead-red transition-colors duration-300",
                      activeCategory === category.id ? "text-chipstead-black scale-105 origin-left" : ""
                    )}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Category Nav (Horizontal Scroll) */}
        <div className="md:hidden flex overflow-x-auto space-x-6 pb-4 border-b border-black/10 mb-8 no-scrollbar">
           {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={clsx(
                    "whitespace-nowrap font-sans text-xs tracking-[0.2em] uppercase font-bold flex-shrink-0",
                     activeCategory === category.id ? "text-chipstead-red" : "text-gray-400"
                  )}
                >
                  {category.name}
                </button>
              ))}
        </div>

        {/* Menu Content */}
        <div className="w-full md:w-3/4 space-y-24">
          {menuCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-serif text-3xl md:text-4xl mb-12 text-chipstead-black italic border-b border-black/10 pb-6">
                  {category.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {menuItems[category.id]?.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-baseline mb-2 border-b border-dotted border-black/20 pb-1">
                        <h4 className="font-sans font-bold text-lg tracking-wide text-chipstead-black group-hover:text-chipstead-red transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-serif text-lg font-semibold">{item.price}</span>
                      </div>
                      <p className="font-serif text-gray-600 text-sm leading-relaxed opacity-80 mb-2">
                        {item.description}
                      </p>
                      <div className="flex space-x-2 text-[10px] font-sans tracking-widest uppercase text-chipstead-green font-bold">
                        {item.v && <span>(V)</span>}
                        {item.ve && <span>(VE)</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </div>

       {/* Dietary Note */}
      <div className="max-w-3xl mx-auto text-center mt-24 pt-12 border-t border-black/10">
        <p className="font-serif italic text-gray-500">
          Please inform us of any allergies or dietary requirements. (V) Vegetarian, (VE) Vegan. 
          Dishes may contain traces of nuts.
        </p>
      </div>
    </main>
  );
}



