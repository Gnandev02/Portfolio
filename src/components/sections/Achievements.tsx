"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            <span className="text-gradient">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="glass-card p-8 flex flex-col items-center text-center group cursor-default">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <Award className="w-16 h-16 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              Full Stack Web Development Certification
            </h3>
            <p className="text-muted-foreground">
              Successfully completed comprehensive training in modern full stack web development technologies and practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
