'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'FATSY',
    role: 'Front-End Developer',
    description: 'Software para la gestión de restaurantes',
    technologies: ['React', 'JavaScript', 'UI/UX'],
    color: 'primary'
  },
  {
    title: 'TURNIX',
    role: 'Fullstack Developer',
    description: 'Software para la gestión de barberías',
    technologies: ['Full-Stack', 'Database', 'API'],
    color: 'secondary'
  }
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="relative py-32 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <span className="text-sm font-mono text-secondary uppercase tracking-wider">
              Professional work
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Experience & Projects
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="p-2 bg-background border border-border rounded-md group-hover:border-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground">
                      {project.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-mono border rounded-full ${
                          project.color === 'primary'
                            ? 'border-primary/30 text-primary bg-primary/5'
                            : 'border-secondary/30 text-secondary bg-secondary/5'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-lg ${
                    project.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
