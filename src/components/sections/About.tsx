"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              About Me
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a passionate Computer Science student at the Indian Institute of Information Technology Vadodara (IIITV), focusing on building intelligent, scalable, and high-performance software systems.
              </p>
              <p>
                My journey in tech is driven by a deep curiosity for Artificial Intelligence and Full Stack Development. I love the challenge of taking a complex problem and architecting a clean, elegant, and robust solution.
              </p>
              <p>
                Whether I'm developing real-time AI computer vision models using YOLOv8, or architecting secure web platforms with Next.js and Node, my goal is always to deliver impactful, production-ready code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border/50 bg-secondary/10"
          >
            <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
              <span className="text-muted-foreground/50">Abstract/Setup Image Placeholder</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
              alt="Coding setup"
              className="object-cover w-full h-full relative z-10"
            />
            <div className="absolute inset-0 bg-background/10 mix-blend-overlay pointer-events-none z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
