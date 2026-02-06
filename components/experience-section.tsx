"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fatsy",
    role: "Co-Founder & Frontend Developer",
    description:
      "Plataforma integral para la gestión de restaurantes, pedidos y entregas a domicilio",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Tailwind PrimeVue",
      "Nuxt",
    ],
    color: "primary",
  },
  {
    title: "Turnix",
    role: "Founder & Fullstack Developer",
    description:
      "Sistema SaaS completo para administración, reservas y flujo de trabajo en barberías",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shad/cn",
      "Prisma",
      "PostgreSQL",
    ],
    color: "secondary",
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-40 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          <div className="space-y-6">
            <span className="text-xs font-mono text-secondary uppercase tracking-[0.2em]">
              Trayectoria
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Proyectos Destacados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                className="group relative"
              >
                <div className="h-full p-8 md:p-10 glass-card rounded-2xl flex flex-col justify-between gap-8 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                         <p className="text-sm font-mono text-muted-foreground mt-2 border-l border-primary/20 pl-3">
                        {project.role}
                      </p>
                      </div>
                     
                      <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                   
                    <p className="text-lg text-muted-foreground/80 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-mono tracking-wide uppercase border rounded-full border-white/10 text-muted-foreground bg-white/5 hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
