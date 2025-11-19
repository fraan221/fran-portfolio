"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Objective */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-sm font-mono text-primary uppercase tracking-wider">
                Objetivo laboral
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                Construyendo el futuro
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Técnico en programación, con búsqueda activa de oportunidad
              laboral y con conocimientos sólidos en programación.
              <br />
              Apasionado por crear soluciones eficientes y escalables, y por
              aprender continuamente nuevas tecnologías.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <div className="h-px flex-1 bg-linear-to-r from-primary to-transparent" />
              <span className="text-xs font-mono text-muted-foreground">
                Estudiante
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ingeniería Informática en la Universidad Nacional Arturo Jauretche
              (UNAJ).
            </p>
          </motion.div>

          {/* Right: Quick stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors group">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                  +10
                </div>
                <div className="text-sm text-muted-foreground">
                  Tecnologías conocidas
                </div>
              </div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg hover:border-secondary transition-colors group">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="text-sm text-muted-foreground">
                  Proyectos personales activos
                </div>
              </div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors group col-span-2">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary group-hover:scale-105 transition-transform">
                  5 años
                </div>
                <div className="text-sm text-muted-foreground">
                  De experiencia, aprendiendo y practicando continuamente
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
