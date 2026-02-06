"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TechIconProps {
  name: string;
  icon: string;
  index: number;
}

export function TechIcon({ name, icon, index }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "backOut" }}
      className="group relative"
    >
      <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl glass-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_-5px_theme('colors.primary.DEFAULT/30%')] hover:border-primary/40 cursor-default">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 z-10 grayscale group-hover:grayscale-0 brightness-125 group-hover:brightness-100">
          <Image
            src={`/icons/${icon}.svg`}
            alt={`${name} icon`}
            fill
            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />
        </div>
        
        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-card border border-border text-foreground text-[10px] font-mono tracking-wider uppercase rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap pointer-events-none z-20 shadow-lg">
        {name}
      </div>
    </motion.div>
  );
}
