"use client";

import { motion, useWillChange } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StoryHighlight() {
  const willChange = useWillChange();

  return (
    <section className="py-32 overflow-hidden bg-chipstead-cream border-y border-black/5 will-change-transform">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        
        {/* Text Side - Slides in from Left */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ willChange }}
          className="order-2 md:order-1 relative"
        >
           <div className="absolute -left-12 top-0 w-1 h-24 bg-chipstead-red/20 hidden md:block" />
           
           <h4 className="dishoom-nav mb-8 text-chipstead-red">
            The Tradition
          </h4>
          <h2 className="dishoom-h2 mb-10 text-[#353839] leading-[0.9] tracking-[0.15em] lg:tracking-[0.2em]">
            Slow-cooked <br/> for hours. <br/> <span className="italic font-serif text-4xl md:text-6xl normal-case tracking-normal">Devoured in minutes.</span>
          </h2>
          
          <p className="dishoom-body mb-10 max-w-md">
            We don&apos;t believe in shortcuts. Our Black Daal is simmered for 24 hours. 
            Our marinades are prepared fresh daily. It is the only way we know how to cook.
          </p>
          <Link 
            href="/menu"
            className="inline-block dishoom-button uppercase border-b border-chipstead-red pb-1 hover:text-chipstead-red transition-colors px-0"
          >
            View Our Menu
          </Link>
        </motion.div>

        {/* Image Side - Slides in from Right */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ willChange }}
          className="order-1 md:order-2 relative h-[600px] w-full"
        >
           {/* Dishoom style photo border/rotation */}
           <div className="absolute inset-0 border-4 border-white shadow-2xl transform rotate-2 z-10">
              <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop"
                    alt="Indian Cooking"
                    fill
                    className="object-cover sepia-[20%] contrast-125"
                    loading="lazy"
                  />
              </div>
           </div>
           <div className="absolute inset-0 border-4 border-chipstead-black/5 transform -rotate-2 z-0 bg-chipstead-cream" />
        </motion.div>

      </div>
    </section>
  );
}
