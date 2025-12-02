"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useWillChange } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Use spring for smoother scaling
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.1 });
  const willChange = useWillChange();

  // Animation phases
  const scale = useTransform(smoothProgress, [0, 1], [0.6, 1]);
  // Use percentages for border radius for better performance in some browsers
  const borderRadius = useTransform(smoothProgress, [0, 1], ["10%", "0%"]);
  
  // Text transitions
  const initialTextOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const initialTextY = useTransform(smoothProgress, [0, 0.2], [0, -20]);
  
  const finalTextOpacity = useTransform(smoothProgress, [0.6, 0.9], [0, 1]);
  const finalTextY = useTransform(smoothProgress, [0.6, 0.9], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full will-change-transform">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-chipstead-cream py-8 md:py-0">
        <motion.div
          style={{
            scale,
            borderRadius,
            willChange // Framer motion optimized will-change
          }}
          className="relative w-full h-[70vh] md:h-full overflow-hidden shadow-2xl bg-chipstead-black transform-gpu"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-85"
            poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          >
            <source
              src="/indo.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* INITIAL STATE */}
          <motion.div
             style={{ opacity: initialTextOpacity, y: initialTextY }}
             className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4 pointer-events-none"
          >
             {/* Matches Dishoom "From Bombay with Love" style: small caps sans */}
             <h2 className="dishoom-nav text-xs md:text-sm uppercase mb-4 text-chipstead-gold font-bold tracking-[0.2em]">
               From Chipstead with Love
             </h2>
             {/* Italics for "For the love of food" */}
             <h1 className="dishoom-h2 text-3xl md:text-5xl text-center tracking-wide italic normal-case">
               &quot;For the love of food&quot;
             </h1>
          </motion.div>

          {/* FINAL STATE */}
          <motion.div
            style={{ opacity: finalTextOpacity, y: finalTextY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6"
          >
            <h2 className="dishoom-nav text-sm md:text-base uppercase mb-6 text-chipstead-gold font-bold tracking-[0.2em]">
              All Welcome
            </h2>
            {/* Main big serif title */}
            <h1 className="dishoom-h2 text-6xl md:text-9xl text-center leading-[0.85] tracking-tight-dishoom text-white mix-blend-overlay">
              Chipstead <br /> Tandoori
            </h1>
            <p className="mt-8 dishoom-body italic text-xl md:text-2xl max-w-xl text-center px-4 text-white/90">
              Est. 1990
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll trigger space */}
      <div className="h-screen" />
    </div>
  );
}
