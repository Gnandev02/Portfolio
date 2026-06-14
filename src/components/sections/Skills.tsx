"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", progress: 90 },
      { name: "C++", progress: 85 },
      { name: "Python", progress: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML & CSS", progress: 95 },
      { name: "JavaScript", progress: 90 },
      { name: "React", progress: 85 },
      { name: "Next.js", progress: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", progress: 85 },
      { name: "Express.js", progress: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", progress: 80 },
      { name: "MongoDB", progress: 75 },
      { name: "PostgreSQL", progress: 70 },
    ],
  },
  {
    title: "Tools & Core Subjects",
    skills: [
      { name: "Git & GitHub", progress: 90 },
      { name: "Linux", progress: 75 },
      { name: "Data Structures", progress: 85 },
      { name: "DBMS", progress: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 flex flex-col h-full group"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground/90 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="space-y-5 flex-grow">
                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-muted-foreground">{skill.name}</span>
                      <span className="text-primary/80">{skill.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: \`\${skill.progress}%\` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
