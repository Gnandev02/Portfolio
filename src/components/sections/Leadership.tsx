"use client"

import { motion } from "framer-motion"

const leadershipRoles = [
  {
    title: "Senior Core Committee Member",
    organization: "DotSlash Club",
    period: "August 2024 – Present",
    description: "Mentoring junior members, leading development workshops, and coordinating technical events for the college developer community.",
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 relative border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
          >
            Leadership & Activities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="flex flex-col h-full">
                <span className="text-sm font-medium text-primary mb-4">
                  {role.period}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {role.title}
                </h3>
                <h4 className="text-base font-medium text-muted-foreground mb-4">
                  {role.organization}
                </h4>
                <p className="text-muted-foreground leading-relaxed mt-auto">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
