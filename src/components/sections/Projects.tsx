"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "NeuralCrowd AI Platform",
    description:
      "Built a real-time AI crowd analytics platform using Next.js and Python. Integrated YOLOv8 for crowd detection and live risk monitoring. Implemented real-time dashboard updates using Socket.IO and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "Python", "YOLOv8", "Socket.IO", "PostgreSQL"],
    github: "https://github.com/Gnandev12",
    demo: "#",
    features: ["Crowd Detection", "Live Analytics", "Risk Monitoring"],
  },
  {
    title: "Geo-Integrated Attendance System",
    description:
      "Developed a GPS-based attendance system to prevent proxy attendance. Built frontend using React and backend using Node.js and Express.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Gnandev12",
    demo: "#",
    features: ["GPS Verification", "Attendance Tracking", "Secure Records"],
  },
  {
    title: "Online Voting System",
    description:
      "Developed a secure online voting platform using React, Node.js, Express, and MongoDB.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Gnandev12",
    demo: "#",
    features: ["Secure Authentication", "Voting Management", "Admin Controls"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card flex flex-col overflow-hidden group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* Fallback image style using a placeholder div if image fails or before it loads */}
                <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
                   <span className="text-muted-foreground/50">Image Placeholder</span>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow z-20 relative -mt-10">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <Button variant="default" size="sm" className="rounded-full flex-1 gap-2" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full flex-1 gap-2" asChild>
                    <Link href={project.github} target="_blank">
                      <FaGithub className="w-4 h-4" /> Source
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
