"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    institution: "Universidad Nacional Arturo Jauretche",
    degree: "Ingeniería en Informática",
    status: "Estudiante",
    year: "2023 - Presente",
    type: "current",
    icon: GraduationCap,
  },
  {
    institution:
      "E.E.S.T N°4 de Berazategui",
    degree: "Tecnicatura en Programación",
    status: "Completado",
    year: "2017 - 2022",
    type: "completed",
    icon: GraduationCap,
  },
  {
    institution: "Cisco Networking Academy",
    degree: "IT Essentials PC Hardware and Software",
    status: "Certificado",
    year: "2020",
    type: "certification",
    icon: Award,
  },
  {
    institution: "Platzi",
    degree: "Curso de Programación Básica",
    status: "Completado",
    year: "2020",
    type: "course",
    icon: BookOpen,
  },
  {
    institution: "SoloLearn",
    degree: "HTML, CSS, JavaScript, PHP",
    status: "Certificados",
    year: "2020",
    type: "course",
    icon: BookOpen,
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          <div className="space-y-6 text-center">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
              Base Académica
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Educación & Certificaciones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-px bg-linear-to-b from-transparent via-primary/20 to-transparent" />

            <div className="space-y-12">
              {education.map((item, index) => {
                 const Icon = item.icon;
                 return (
                <motion.div
                  key={`${item.institution}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-8 z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ring-4 ring-background ${
                        item.type === "current"
                          ? "bg-primary border-primary shadow-[0_0_10px_theme('colors.primary.DEFAULT/50%')]"
                          : "bg-background border-muted-foreground/50"
                      }`}
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div className="flex-1 ml-16 md:ml-0">
                    <div
                      className={`group relative p-6 glass-card rounded-xl hover:border-primary/30 transition-all duration-300 ${
                        index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-white/5">
                              {item.year}
                            </span>
                             <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                                item.type === "current" ? "border-primary/20 text-primary bg-primary/5" : "border-white/5 text-muted-foreground bg-white/5"
                             }`}>
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-foreground">
                            {item.institution}
                          </h3>
                          <p className="text-sm text-muted-foreground/80">
                            {item.degree}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )})}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
