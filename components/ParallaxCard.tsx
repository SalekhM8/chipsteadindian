"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useWillChange } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ParallaxCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  link: string;
  linkText?: string;
}

export default function ParallaxCard({
  imageSrc,
  title,
  subtitle,
  link,
  linkText = "Explore",
}: ParallaxCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 30, mass: 0.1 });
  const y = useTransform(smoothProgress, [0, 1], ["-5%", "5%"]);
  const willChange = useWillChange();

  // Logic to determine if it's an external link (tel: or http) vs internal
  const isExternal = link.startsWith("http") || link.startsWith("tel:");

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[90vh] overflow-hidden group py-16 bg-chipstead-cream flex items-center justify-center transform-gpu"
    >
      {/* Image Container - Sits behind */}
      <div className="absolute inset-8 md:inset-16 border border-black/10 overflow-hidden bg-black">
         <motion.div style={{ y, willChange }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover opacity-90 grayscale-[10%] contrast-125"
              sizes="(max-width: 768px) 100vw, 80vw"
              loading="lazy"
            />
         </motion.div>
      </div>

      {/* Floating Card - The "Dishoom" Double Border Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative z-10 w-[90%] max-w-md bg-chipstead-cream p-2 shadow-2xl will-change-transform"
      >
          {/* This is the trick: Cream box -> Border -> Cream box -> Content */}
          <div className="border border-black/20 p-1">
             <div className="border border-black/80 p-8 md:p-12 text-center flex flex-col justify-center items-center h-full">
                <h3 className="dishoom-nav mb-6 text-chipstead-black/60">
                    {subtitle}
                </h3>
                {/* Main Title using .dishoom-h2 metrics but slightly larger for card context if needed, sticking to h2 for now */}
                <h2 className="dishoom-h2 mb-8 text-[#353839]">
                    {title}
                </h2>
                
                {isExternal ? (
                  <a 
                    href={link}
                    target={link.startsWith("http") ? "_blank" : undefined}
                    rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group/link inline-flex flex-col items-center"
                  >
                      <span className="dishoom-button text-chipstead-red group-hover/link:text-black transition-colors duration-300 uppercase">
                      {linkText}
                      </span>
                      <span className="h-px w-[140%] bg-chipstead-red mt-2 group-hover/link:bg-black transition-colors duration-300 scale-x-100 group-hover/link:scale-x-50 origin-center" />
                  </a>
                ) : (
                  <Link 
                      href={link}
                      className="group/link inline-flex flex-col items-center"
                  >
                      <span className="dishoom-button text-chipstead-red group-hover/link:text-black transition-colors duration-300 uppercase">
                      {linkText}
                      </span>
                      <span className="h-px w-[140%] bg-chipstead-red mt-2 group-hover/link:bg-black transition-colors duration-300 scale-x-100 group-hover/link:scale-x-50 origin-center" />
                  </Link>
                )}
             </div>
          </div>
      </motion.div>
    </div>
  );
}
