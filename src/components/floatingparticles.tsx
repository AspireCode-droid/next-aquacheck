"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingParticles() {
  const [screenWidth, setScreenWidth] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)
  }, [])

  if (screenWidth === 0 || screenHeight === 0) return null // prevent premature render

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const startX = Math.random() * screenWidth
        const endX = Math.random() * screenWidth
        const delay = Math.random() * 5
        const duration = Math.random() * 10 + 10

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "0.5rem",
              height: "0.5rem",
              backgroundColor: "rgba(191, 219, 254, 0.3)",
              borderRadius: "9999px",
            }}
            initial={{ x: startX, y: screenHeight + 100 }}
            animate={{ x: endX, y: -100 }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
          />
        )
      })}
    </div>
  )
}
