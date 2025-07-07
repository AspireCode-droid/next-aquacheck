'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackgroundWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null!)

  // Tracks how far you've scrolled in the section (from 0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Start when top enters, end when bottom hits top
  })

  // Transforms scroll progress into vertical movement
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10 z-0"
        style={{ y: backgroundY }}
      />

      {/* Foreground content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
