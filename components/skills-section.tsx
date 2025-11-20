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
      className="relative py-32 px-4 border-t border-border"
    >
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
              Stack Tecnológico
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Tecnologías & Herramientas
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
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
