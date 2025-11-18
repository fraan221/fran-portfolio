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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-card border border-border transition-all duration-200 hover:border-primary hover:scale-110 hover:shadow-[0_0_24px_rgba(0,240,255,0.3)] cursor-default backdrop-blur-sm">
        <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/95 rounded-xl" />
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform duration-200 group-hover:rotate-6 z-10">
          <Image
            src={`/icons/${icon}.svg`}
            alt={`${name} icon`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
        {name}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
      </div>
    </motion.div>
  );
}
