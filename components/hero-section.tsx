"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Main content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-primary font-mono text-sm uppercase tracking-wider">
                  Abierto a nuevas oportunidades
                </span>
                <span className="px-3 py-1 bg-primary/10 border border-primary rounded-full text-primary text-sm font-mono">
                  22 años
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
                <span className="block text-balance">FRANCO</span>
                <span className="block text-primary text-balance">HERRERA</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-2xl md:text-3xl text-muted-foreground font-mono">
                Técnico en Programación
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Hablemos
              </a>
              <a
                href="#experience"
                className="px-8 py-4 border border-border text-foreground font-semibold rounded-md hover:bg-card transition-colors"
              >
                Experiencia
              </a>
            </motion.div>
          </div>

          {/* Contact sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:border-l lg:border-border lg:pl-12 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-mono">
                Contacto
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+5491160542164"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-card border border-border rounded-md group-hover:border-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">+54 9 11 6054-2164</span>
                </a>
                <a
                  href="mailto:franhe345@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-card border border-border rounded-md group-hover:border-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm break-all">
                    franhe345@gmail.com
                  </span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Dominio de Inglés
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
