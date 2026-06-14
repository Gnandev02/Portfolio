"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="glass-card p-8 md:p-12 text-center md:text-lg leading-relaxed text-muted-foreground space-y-6">
            <p>
              I am a Computer Science undergraduate at IIIT Vadodara passionate about
              Full Stack Development, Artificial Intelligence, and Software Engineering.
            </p>
            <p>
              I enjoy building real-world applications using modern web technologies like
              React, Next.js, Node.js, and Python. My ultimate goal is to create impactful
              solutions that combine intelligent systems with exceptional user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
