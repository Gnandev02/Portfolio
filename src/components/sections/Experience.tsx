"use client"

import { motion } from "framer-motion"

const experienceData = [
  {
    role: "Senior Core Committee Member",
    company: "DotSlash Club",
    period: "Aug 2024 – Present",
    description: "Mentoring junior members, leading development workshops, and coordinating technical events for the college developer community.",
    type: "Leadership"
  },
  {
    role: "B.Tech in Computer Science",
    company: "IIIT Vadodara",
    period: "2024 – 2028",
    description: "Focusing on core computer science subjects, data structures, algorithms, and full-stack development. Current CGPA: 6.5/10.",
    type: "Education"
  },
  {
    role: "Hackathon Finalist",
    company: "Techfest AI/ML",
    period: "2024",
    description: "Secured a top 10 finish in the national level AI/ML hackathon by building a real-time analytics engine.",
    type: "Achievement"
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] font-bold tracking-tight mb-4 text-foreground leading-tight"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-[18px] max-w-2xl"
          >
            A timeline of my education, leadership roles, and major milestones.
          </motion.p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:ml-0 md:before:translate-x-0 before:h-full before:w-px before:bg-border">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-center justify-between md:flex-row-reverse group">
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background mt-1.5 md:mt-0 z-10 shadow-[0_0_0_4px_var(--background)]" />
                
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] p-6 rounded-2xl border border-border bg-secondary/10 hover:bg-secondary/30 transition-colors shadow-sm">
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-medium text-foreground bg-secondary px-2.5 py-1 rounded-md border border-border">
                        {item.type}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {item.role}
                    </h3>
                    <h4 className="text-sm font-medium text-primary">
                      {item.company}
                    </h4>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty div for layout balancing on desktop */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
