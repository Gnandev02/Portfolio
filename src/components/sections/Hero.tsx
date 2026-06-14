"use client"

import { motion, Variants } from "framer-motion"
import { ArrowRight, Download, FileText, Code2, Cpu, Database } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-animate opacity-20 dark:opacity-30 mix-blend-screen -z-10" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] text-primary/30"
        >
          <Code2 size={64} />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[10%] text-secondary/30"
        >
          <Cpu size={64} />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[20%] text-accent/30"
        >
          <Database size={48} />
        </motion.div>
      </div>

      <div className="container px-4 md:px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Hi, I'm <span className="text-gradient">Gnandev Bonthu</span>
            </h1>
            
            <div className="h-12 md:h-16 flex items-center justify-center">
              <p className="text-xl md:text-3xl font-medium text-muted-foreground overflow-hidden whitespace-nowrap border-r-2 border-primary animate-[typing_3.5s_steps(40,end),blink-caret_.75s_step-end_infinite]">
                Full Stack Developer & AI Enthusiast
              </p>
            </div>

            <p className="max-w-[600px] mx-auto text-lg text-muted-foreground mt-4">
              Building scalable web applications and AI-powered solutions. Passionate about creating impactful software that combines intelligent systems with exceptional user experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" className="rounded-full gap-2 group" asChild>
              <Link href="#projects">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="glass" className="rounded-full gap-2" asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="w-4 h-4" />
                Download Resume
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="rounded-full gap-2" asChild>
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Global CSS animation injections specific for Hero */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: var(--primary) }
        }
      `}} />
    </section>
  )
}
