"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Cpu } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span>
                Sobre mí
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
                Ingeniería & <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Creatividad</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground/80 font-light leading-relaxed">
              <p>
                Desarrollador con una obsesión por los detalles y el rendimiento.
                Combino ingeniería de software con diseño de interfaces para crear
                productos que no solo funcionan, sino que se sienten excepcionales.
              </p>
              <p>
                Actualmente cursando Ingeniería Informática en la <span className="text-foreground font-medium">UNAJ</span>, 
                donde perfecciono mis fundamentos mientras construyo soluciones reales.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            <div className="p-6 glass-card rounded-2xl flex flex-col justify-between h-48 md:h-56 group hover:bg-primary/5 transition-colors">
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  +10
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                  Tecnologías
                </div>
              </div>
            </div>

            <div className="p-6 glass-card rounded-2xl flex flex-col justify-between h-48 md:h-56 group hover:bg-secondary/5 transition-colors mt-8 md:mt-12">
              <div className="p-3 w-fit rounded-xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  2
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                  Proyectos Activos
                </div>
              </div>
            </div>

            <div className="col-span-2 p-6 glass-card rounded-2xl flex flex-row items-center justify-between gap-6 group hover:bg-white/5 transition-colors">
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                  5<span className="text-2xl text-muted-foreground ml-1">+</span>
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                  Años de Trayectoria
                </div>
              </div>
              <div className="p-4 rounded-full bg-white/5 border border-white/5 group-hover:rotate-12 transition-transform duration-500">
                <Cpu className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
