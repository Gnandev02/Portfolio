"use client"

import { motion } from "framer-motion"

const skillsRow1 = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Python", "C++"]
const skillsRow2 = ["PostgreSQL", "MongoDB", "MySQL", "Socket.IO", "Git", "Docker", "Linux", "YOLOv8"]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative border-t border-border overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <h2 className="text-[48px] font-bold tracking-tight mb-4 text-foreground leading-tight">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-[18px] max-w-2xl">
            A comprehensive overview of the technologies and tools I leverage to build highly performant systems.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden max-w-[100vw]">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Row 1 */}
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max">
          {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center justify-center px-8 py-4 mx-3 rounded-lg border border-border bg-secondary/50 text-foreground text-sm font-medium transition-colors hover:border-primary/50"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Marquee Row 2 (Reverse direction if we had another animation, or just staggered) */}
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max" style={{ animationDirection: 'reverse' }}>
          {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center justify-center px-8 py-4 mx-3 rounded-lg border border-border bg-secondary/50 text-foreground text-sm font-medium transition-colors hover:border-primary/50"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
