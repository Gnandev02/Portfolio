"use client"

import { motion } from "framer-motion"
import { Users, Shield, Music, Edit3, Circle, Wrench } from "lucide-react"

const activities = [
  { role: "Member", group: "Academics Committee", period: "2026-Present", icon: BookOpenIcon },
  { role: "Member", group: "Student Welfare Committee", period: "2025-26", icon: Shield },
  { role: "Member", group: "Beats Club", icon: Music },
  { role: "Member", group: "Vector Editing Club", icon: Edit3 },
  { role: "Member", group: "Indoor Club", icon: Circle },
  { role: "Member", group: "Maintenance Committee", icon: Wrench },
]

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Leadership & <span className="text-gradient">Activities</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.group}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <activity.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {activity.group}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <span>{activity.role}</span>
                  {activity.period && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <span>{activity.period}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
