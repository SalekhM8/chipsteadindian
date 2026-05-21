"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function SectionTitle({
  children,
  subtitle,
  className,
}: {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "text-center max-w-4xl mx-auto px-6 py-32",
        className
      )}
    >
      {subtitle && (
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="dishoom-nav mb-8 text-chipstead-black/50"
        >
          {subtitle}
        </motion.h4>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
        className="dishoom-h2 tracking-[0.15em] lg:tracking-[0.2em] leading-[1.33] lg:leading-[1.2] text-[#353839]"
      >
        {children}
      </motion.h2>

      <div className="flex justify-center items-center mt-12 space-x-4 opacity-30">
        <span className="h-px w-12 bg-[#353839]" />
        <span className="font-serif text-xl">✦</span>
        <span className="h-px w-12 bg-[#353839]" />
      </div>
    </div>
  );
}
