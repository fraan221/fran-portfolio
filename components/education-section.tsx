"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Universidad Nacional Arturo Jauretche",
    degree: "Ingeniería en Informática",
    status: "Estudiante",
    year: "2023 - Presente",
    type: "current",
  },
  {
    institution:
      "Escuela de Educación Secundaria Técnica Número 4 de Berazategui",
    degree: "Tecnicatura en Programación",
    status: "Completado",
    year: "2017 - 2022",
    type: "completed",
  },
  {
    institution: "Cisco Networking Academy",
    degree: "IT Essentials PC Hardware and Software",
    status: "Certificado",
    year: "2020",
    type: "certification",
  },
  {
    institution: "Platzi",
    degree: "Curso de Programación Básica",
    status: "Completado",
    year: "2020",
    type: "course",
  },
  {
    institution: "SoloLearn",
    degree: "HTML, CSS, JavaScript, PHP",
    status: "Certificados",
    year: "2020",
    type: "course",
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">
              Trasfondo académico
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Educación formal y Cursos
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary md:left-1/2" />

            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={`${item.institution}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        item.type === "current"
                          ? "bg-primary border-primary"
                          : "bg-card border-primary"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    } pl-12 md:pl-0`}
                  >
                    <div
                      className={`p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors space-y-3 ${
                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      } max-w-xl`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-col space-y-1">
                          <h3 className="text-xl font-semibold text-start">
                            {item.institution}
                          </h3>
                          <p className="text-sm text-muted-foreground text-start">
                            {item.degree}
                          </p>
                          <div className="flex items-center gap-2 pt-2">
                            <span className="px-2 py-1 text-xs font-mono rounded-lg bg-primary/10 text-primary text-start">
                              {item.status}
                            </span>
                            <span className="text-xs text-muted-foreground font-mono text-start">
                              {item.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
