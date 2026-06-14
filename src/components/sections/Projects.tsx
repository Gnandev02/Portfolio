"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"

const projects = [
  {
    title: "NeuralCrowd AI Platform",
    description:
      "A real-time AI crowd analytics platform integrating YOLOv8 for crowd detection and live risk monitoring. Features real-time dashboard updates and robust data pipelines.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js", "Python", "YOLOv8", "Socket.IO", "PostgreSQL"],
    github: "https://github.com/Gnandev12",
    demo: "#",
    featured: true,
  },
  {
    title: "Geo-Integrated Attendance",
    description:
      "GPS-based attendance system preventing proxy attendance with high-precision location tracking and secure record management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Gnandev12",
    demo: "#",
    featured: false,
  },
  {
    title: "Secure Online Voting",
    description:
      "End-to-end secure online voting platform ensuring anonymity, verifiable tallies, and comprehensive admin controls.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Gnandev12",
    demo: "#",
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            A selection of my best work, focusing on robust engineering, intuitive design, and AI integration.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative grid grid-cols-1 ${project.featured ? 'lg:grid-cols-12' : 'lg:grid-cols-2'} gap-8 items-center`}
            >
              {/* Project Image */}
              <div className={`relative ${project.featured ? 'lg:col-span-7' : ''} rounded-2xl overflow-hidden border border-border/50 bg-secondary/20 aspect-video shadow-2xl`}>
                <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
                   <span className="text-muted-foreground/50">Image Placeholder</span>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Subtle gradient overlay to mimic Vercel dark mode images */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20" />
              </div>
              
              {/* Project Info */}
              <div className={`flex flex-col ${project.featured ? 'lg:col-span-5 lg:pl-8' : ''}`}>
                {project.featured && (
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                    Featured Project
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link 
                    href={project.demo} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-foreground bg-primary hover:bg-primary/90 px-5 py-2.5 rounded-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Link>
                  <Link 
                    href={project.github} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2.5"
                  >
                    <FaGithub className="w-5 h-5" /> Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
