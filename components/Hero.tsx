"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Lenis already smooths scroll input. Spring physics on top duplicate work
  // and cause tail-end lag on fast flicks — use raw scrollYProgress.
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  const initialTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const initialTextY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  const finalTextOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const finalTextY = useTransform(scrollYProgress, [0.6, 0.9], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-chipstead-cream py-8 md:py-0">
        <motion.div
          style={{ scale, borderRadius }}
          className="relative w-full h-[70vh] md:h-full overflow-hidden shadow-2xl bg-chipstead-black transform-gpu"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-85"
          >
            <source src="/indo.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* INITIAL STATE — eyebrow + quote */}
          <motion.div
            style={{ opacity: initialTextOpacity, y: initialTextY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4 pointer-events-none"
          >
            <p className="dishoom-nav text-xs md:text-sm uppercase mb-4 text-chipstead-gold font-bold tracking-[0.2em]">
              Serving Chipstead since 1988
            </p>
            <h2 className="dishoom-h2 text-3xl md:text-5xl text-center tracking-wide italic normal-case max-w-3xl">
              &ldquo;Cooked with love. Shared with neighbours.&rdquo;
            </h2>
          </motion.div>

          {/* FINAL STATE — name + secondary tag */}
          <motion.div
            style={{ opacity: finalTextOpacity, y: finalTextY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6 pointer-events-none"
          >
            <h1 className="dishoom-h2 text-6xl md:text-9xl text-center leading-[0.85] tracking-tight-dishoom text-white">
              Chipstead <br /> Tandoori
            </h1>
            <p className="mt-8 dishoom-body italic text-lg md:text-xl max-w-xl text-center px-4 text-white/90">
              Est. 1988 · Chipstead Station Parade
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
