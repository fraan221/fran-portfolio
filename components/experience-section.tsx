"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

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
      className="relative py-32 px-4 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <span className="text-sm font-mono text-secondary uppercase tracking-wider">
              Experiencia Profesional
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Proyectos Destacados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-card border border-border rounded-lg hover:border-secondary transition-all duration-300 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-3xl font-bold group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <div className="bg-background group-hover:border-secondary hover:cursor-pointer transition-colors">
                        <ExternalLink className="w-6 h-6 group-hover:stroke-secondary" />
                      </div>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground">
                      {project.role}
                    </p>
                  </div>

                  <p className="text-lg text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono border rounded-full border-secondary/30 text-secondary bg-secondary/5"
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
