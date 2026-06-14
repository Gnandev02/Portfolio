"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function GithubStats() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"
  
  // Custom theme colors for github-readme-stats
  const bg_color = isDark ? "0F172A" : "FFFFFF"
  const title_color = isDark ? "2563EB" : "2563EB"
  const text_color = isDark ? "94A3B8" : "475569"
  const icon_color = "06B6D4"
  const border_color = isDark ? "1E293B" : "E2E8F0"

  const username = "Gnandev12"

  return (
    <section id="github-stats" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            GitHub <span className="text-gradient">Stats</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 flex justify-center items-center overflow-hidden"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&title_color=${title_color}&icon_color=${icon_color}&text_color=${text_color}&bg_color=${bg_color}`}
                alt="GitHub Stats"
                className="w-full h-auto max-w-[400px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 flex justify-center items-center overflow-hidden"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&title_color=${title_color}&text_color=${text_color}&bg_color=${bg_color}`}
                alt="Top Languages"
                className="w-full h-auto max-w-[400px]"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 overflow-x-auto flex justify-center"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&title_color=${title_color}&text_color=${text_color}&icon_color=${icon_color}&background=${bg_color}`}
              alt="GitHub Streak"
              className="w-full h-auto max-w-[800px] min-w-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
