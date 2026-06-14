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
      transition: {
        staggerChildren: 0.1,
      },
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] text-foreground">
                Gnandev <br className="hidden md:block" /> Bonthu
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-primary tracking-tight">
                Software Engineer
              </h2>

              <p className="max-w-[500px] text-lg text-muted-foreground leading-relaxed mt-4">
                Building scalable web applications, intelligent systems, and exceptional digital experiences. Focused on clean code and robust architecture.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 font-medium bg-foreground text-background hover:bg-foreground/90 transition-all gap-2" asChild>
                <Link href="#projects">
                  View Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="h-12 px-8 font-medium gap-2 border-border hover:bg-secondary/50 transition-all" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="w-4 h-4" />
                  Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:flex justify-end items-center"
          >
            <div className="relative w-[450px] h-[550px] rounded-2xl overflow-hidden border border-border/50 bg-secondary/20 shadow-2xl">
              {/* Profile Image Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/40">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-4">
                  <span className="text-sm">Image</span>
                </div>
                <p className="text-sm">Profile Image Placeholder</p>
                <p className="text-xs mt-2">Replace with your photo in public folder</p>
              </div>
              <img
                src="/profile.jpg"
                alt="Gnandev Bonthu"
                className="object-cover w-full h-full opacity-0 transition-opacity duration-300"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-border/50 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-border/50 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
