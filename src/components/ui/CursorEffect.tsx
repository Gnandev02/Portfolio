"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null
  }

  return (
    <>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-screen"
            animate={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
              scale: isHovering ? 2 : 1,
              opacity: isHovering ? 0.5 : 1,
            }}
            transition={{
              type: "tween",
              ease: "backOut",
              duration: 0.15,
            }}
          />
          <motion.div
            className="fixed top-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none z-40"
            animate={{
              x: mousePosition.x - 64,
              y: mousePosition.y - 64,
            }}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 0.2,
            }}
          />
        </>
      )}
    </>
  )
}
