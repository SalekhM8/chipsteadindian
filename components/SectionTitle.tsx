"use client";

import { ReactNode, useRef } from "react";
import clsx from "clsx";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Optimized Word component with spring physics for better performance
function Word({ children, range, progress }: { children: string; range: [number, number]; progress: any }) {
  // Use spring for smoother, less laggy transition
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#a3a3a3", "#353839"]); // lighter grey to Dishoom #353839
  
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.25em] will-change-opacity will-change-transform">
      {children}
    </motion.span>
  );
}

export default function SectionTitle({ 
  children, 
  subtitle,
  className
}: { 
  children: ReactNode; 
  subtitle?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Optimize scroll listener
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.2"], // Wider range for smoother reveal
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.5 });
  
  const text = typeof children === "string" ? children : "";
  // Simple split, avoid complex regex for performance
  const words = text ? text.split(" ") : [];

  return (
    <div ref={containerRef} className={clsx("text-center max-w-4xl mx-auto px-6 py-32 will-change-transform", className)}>
      {subtitle && (
        <h4 className="dishoom-nav mb-8 text-chipstead-black/50">
          {subtitle}
        </h4>
      )}
      
      {text && words.length > 0 ? (
        <h2 className="dishoom-h2 tracking-[0.15em] lg:tracking-[0.2em] leading-[1.33] lg:leading-[1.2]">
          {words.map((word, i) => {
            // Calculate staggered range
            const step = 1 / words.length;
            const start = i * step;
            const end = start + step;
            return (
              <Word key={i} range={[start, end]} progress={smoothProgress}>
                {word}
              </Word>
            );
          })}
        </h2>
      ) : (
        <h2 className="dishoom-h2 tracking-[0.15em] lg:tracking-[0.2em] leading-[1.33] lg:leading-[1.2] text-[#353839]">
            {children}
        </h2>
      )}

      <div className="flex justify-center items-center mt-12 space-x-4 opacity-30">
         <span className="h-px w-12 bg-[#353839]" />
         <span className="font-serif text-xl">✦</span>
         <span className="h-px w-12 bg-[#353839]" />
      </div>
    </div>
  );
}
