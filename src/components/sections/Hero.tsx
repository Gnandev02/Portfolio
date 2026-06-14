"use client"

import { motion, Variants } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (60%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8 lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-[80px] font-[800] tracking-tight leading-none text-foreground">
                Gnandev
                <br />
                Bonthu
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-primary tracking-tight">
                Software Engineer
              </h2>

              <p className="max-w-[480px] text-[18px] text-muted-foreground leading-relaxed">
                I build intelligent, scalable web applications and robust software systems. Focused on crafting exceptional digital experiences with clean architecture.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="h-12 px-8 font-medium bg-foreground text-background hover:bg-foreground/90 transition-all gap-2 rounded-lg" asChild>
                <Link href="#projects">
                  View Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="h-12 px-8 font-medium gap-2 border-border hover:bg-secondary transition-all rounded-lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="w-4 h-4" />
                  Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative lg:col-span-5 flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-secondary/30 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
              {/* Profile Image Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/40">
                <div className="w-20 h-20 rounded-full border border-dashed border-muted-foreground/30 flex items-center justify-center mb-4">
                  <span className="text-xs">Image</span>
                </div>
                <p className="text-sm">Profile Image</p>
              </div>
              <img
                src="/profile.jpg"
                alt="Gnandev Bonthu"
                className="object-cover w-full h-full opacity-0 transition-opacity duration-300 relative z-10"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>

            {/* Info Badges */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-4 top-12 bg-card border border-border px-4 py-2 rounded-lg shadow-xl z-20 hidden md:block"
            >
              <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Full Stack Developer
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -left-6 bottom-24 bg-card border border-border px-4 py-2 rounded-lg shadow-xl z-20 hidden md:block"
            >
              <span className="text-xs font-semibold text-foreground">
                📍 IIIT Vadodara
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-2 bottom-8 bg-card border border-border px-4 py-2 rounded-lg shadow-xl z-20 hidden md:block"
            >
              <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to Internships
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
