"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out py-4 px-6 md:px-12 flex items-center justify-between border-b border-transparent",
          isScrolled ? "bg-chipstead-cream text-chipstead-black shadow-sm border-black/5" : "bg-transparent text-white"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        {/* Left Links - Using exact .dishoom-top-nav specs */}
        <div className="hidden md:flex items-center space-x-8 dishoom-top-nav">
          <Link href="/menu" className="hover:text-chipstead-red transition-colors">MENUS</Link>
          <Link href="/about" className="hover:text-chipstead-red transition-colors">OUR STORY</Link>
          <Link href="/contact" className="hover:text-chipstead-red transition-colors">CONTACT</Link>
        </div>

        {/* Center Logo - Cheltenham BT style */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
           <Link href="/" className="flex flex-col items-center group">
             <span className="dishoom-h2 text-2xl md:text-3xl tracking-[0.2em] font-bold uppercase group-hover:opacity-80 transition-opacity">
               CHIPSTEAD
             </span>
             <span className="text-[8px] font-sans tracking-[0.4em] uppercase opacity-60 hidden md:block font-bold">
               Est. 1990
             </span>
           </Link>
        </div>

        {/* Right Actions - Using .dishoom-button specs for Order Online */}
        <div className="flex items-center space-x-6">
          <Link href="/order" className="hidden md:flex dishoom-button uppercase border-2 border-current px-8 py-3 hover:bg-chipstead-black hover:text-chipstead-cream transition-colors duration-300">
            Order Online
          </Link>
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-chipstead-cream text-chipstead-black flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-8"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="border-dishoom p-12 w-full max-w-sm mx-4 bg-chipstead-cream">
                <div className="flex flex-col items-center space-y-8 dishoom-h2 italic normal-case tracking-normal">
                <Link href="/menu" onClick={() => setIsMenuOpen(false)} className="hover:text-chipstead-red">Menus</Link>
                <Link href="/order" onClick={() => setIsMenuOpen(false)} className="hover:text-chipstead-red">Order Online</Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-chipstead-red">Our Story</Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-chipstead-red">Contact</Link>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
