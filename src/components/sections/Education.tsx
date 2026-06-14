"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    institution: "Indian Institute of Information Technology Vadodara",
    degree: "B.Tech in Computer Science",
    period: "2024 – 2028",
    score: "CGPA: 6.5/10",
  },
  {
    institution: "Sri Chaitanya Techno School",
    degree: "CBSE",
    period: "Completed before 2024",
    score: "79.6%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
          >
            Education
          </motion.h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {educationData.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/50">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {item.period}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.score}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mt-2">
                    {item.institution}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {item.degree}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
