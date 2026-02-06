"use client";

import { motion } from "framer-motion";

export function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Primary Glow */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-secondary/5 blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Shapes - Slower and subtler */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-64 h-64 bg-linear-to-br from-primary/10 to-transparent blur-3xl opacity-30"
        animate={{
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
       <motion.div
        className="absolute bottom-[30%] right-[10%] w-96 h-96 bg-linear-to-tl from-secondary/10 to-transparent blur-3xl opacity-20"
        animate={{
          x: [30, -30, 30],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  );
}
