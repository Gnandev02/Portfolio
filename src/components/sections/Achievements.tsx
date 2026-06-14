"use client"

import { motion } from "framer-motion"
import { Trophy, Code, Medal } from "lucide-react"

const achievements = [
  {
    title: "LeetCode Proficiency",
    description: "Solved 120+ coding challenges focusing on advanced data structures and algorithms.",
    icon: Code,
  },
  {
    title: "CodeChef Rating",
    description: "Achieved a max rating of 1150+ in competitive programming contests.",
    icon: Trophy,
  },
  {
    title: "Hackathon Finalist",
    description: "Top 10 finalist in the national level AI/ML hackathon organized by Techfest.",
    icon: Medal,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
          >
            Achievements
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <achievement.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
