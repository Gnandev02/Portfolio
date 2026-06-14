"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen } from "lucide-react"

const educationData = [
  {
    institution: "Indian Institute of Information Technology Vadodara (IIITV)",
    degree: "B.Tech in Computer Science",
    period: "2024 – 2028",
    score: "CGPA: 6.5/10",
    icon: GraduationCap,
  },
  {
    institution: "Sri Chaitanya Techno School",
    degree: "CBSE",
    period: "Completed before 2024",
    score: "79.6%",
    icon: BookOpen,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            My <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={\`relative flex flex-col md:flex-row items-center \${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }\`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center transform -translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>

                <div className={\`ml-12 md:ml-0 w-full md:w-1/2 \${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"
                }\`}>
                  <div className="glass-card p-6 group hover:-translate-y-2 transition-transform duration-300">
                    <div className={\`flex items-center gap-3 mb-2 \${index % 2 !== 0 ? "md:justify-end" : ""}\`}>
                      <item.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">{item.institution}</h3>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{item.degree}</p>
                    <div className={\`flex items-center gap-4 text-sm \${index % 2 !== 0 ? "md:justify-end" : ""}\`}>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                      <span className="font-semibold text-foreground/80">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
