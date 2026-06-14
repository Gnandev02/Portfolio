"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "LeetCode Solved", value: "120+" },
  { label: "CodeChef Rating", value: "1150+" },
  { label: "Hackathons", value: "Finalist" },
  { label: "Projects Built", value: "15+" },
]

export default function Statistics() {
  const username = "Gnandev12"

  return (
    <section id="statistics" className="py-20 relative border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] font-bold tracking-tight mb-4 text-foreground leading-tight"
          >
            By The Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-[18px] max-w-2xl"
          >
            A quick overview of my coding activity and competitive programming milestones.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-secondary/10 hover:bg-secondary/30 transition-colors"
            >
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full rounded-2xl border border-border bg-secondary/10 overflow-hidden flex justify-center items-center p-4 md:p-8"
        >
          {/* Using a GitHub activity graph generator that matches the dark theme */}
          <img 
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0A0A0A&color=A1A1AA&line=3B82F6&point=FFFFFF&area=true&hide_border=true&title_color=FAFAFA`}
            alt="GitHub Activity Graph"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
