"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TechIcon } from "./tech-icon";

const skillsData = {
  languages: [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Python", icon: "python" },
    { name: "PHP", icon: "php" },
  ],
  webDev: [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css" },
    { name: "React", icon: "react" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
  ],
  databases: [
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "SQLite", icon: "sqlite" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Prisma ORM", icon: "prisma" },
  ],
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allSkills = [
    ...skillsData.languages,
    ...skillsData.webDev,
    ...skillsData.databases,
  ];

  return (
    <section
      id="skills"
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
          <div className="space-y-6 text-center">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
              Arsenal Técnico
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
              Tecnologías & Herramientas
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 p-8 glass rounded-3xl border-white/5 bg-black/20">
            {allSkills.map((skill, index) => (
              <TechIcon
                key={skill.icon}
                name={skill.name}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
