"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 relative border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-[48px] font-bold tracking-tight text-foreground leading-tight">
              About Me
            </h2>
            
            <div className="space-y-6 text-[16px] md:text-[18px] text-muted-foreground leading-relaxed">
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
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border bg-secondary/30 shadow-sm"
          >
            <div className="absolute inset-0 bg-muted/20 flex flex-col items-center justify-center">
              <span className="text-muted-foreground/50 text-sm mb-2">Workspace Image</span>
              <span className="text-muted-foreground/30 text-xs">Add an image to public folder</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
              alt="Coding setup"
              className="object-cover w-full h-full relative z-10 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
