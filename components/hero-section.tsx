"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, ArrowDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Refined Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Disponible para colaborar
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter">
                <span className="block text-foreground">FRANCO</span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-primary/50 text-glow">
                  HERRERA
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-2xl text-pretty border-l-2 border-primary/30 pl-6">
                Desarrollador Full Stack especializado en crear experiencias digitales robustas y escalables.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_theme('colors.primary.DEFAULT/30%')] flex items-center gap-2"
              >
                Iniciar Conversación
                <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#experience"
                className="px-8 py-4 bg-background border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                Ver Trayectoria
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block lg:border-l lg:border-white/10 lg:pl-12 space-y-8 pb-4"
          >
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
                Contacto Rápido
              </h3>
              <div className="space-y-4">
                <a href="tel:+5491160542164" className="block group">
                  <div className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">
                    +54 9 11 6054-2164
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">Buenos Aires, AR</div>
                </a>
                <a href="mailto:franhe345@gmail.com" className="block group">
                  <div className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">
                    franhe345@gmail.com
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">Respuesta &lt; 24hs</div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce opacity-50" />
      </motion.div>
    </section>
  );
}
