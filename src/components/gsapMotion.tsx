"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin)
}

export function GSAPMotionBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathsRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current || !pathsRef.current) return

    const container = containerRef.current
    const svg = pathsRef.current

    // Create floating particles
    const particles: HTMLDivElement[] = []
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.className = `absolute w-2 h-2 rounded-full bg-blue-400/30 blur-sm`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      container.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles along motion paths
    particles.forEach((particle, index) => {
      gsap.set(particle, {
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      })

      // Create motion path animation
      gsap.to(particle, {
        duration: 15 + Math.random() * 10,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: `M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100} T${Math.random() * 100},${Math.random() * 100}`,
          autoRotate: false,
        },
      })

      // Add floating animation
      gsap.to(particle, {
        y: "+=20",
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2,
      })
    })

    // Animate SVG paths
    const paths = svg.querySelectorAll("path")
    paths.forEach((path, index) => {
      const pathElement = path as SVGPathElement
      const length = pathElement.getTotalLength()

      gsap.set(pathElement, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      gsap.to(pathElement, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.out",
        delay: index * 0.5,
      })

      // Continuous pulse animation
      gsap.to(pathElement, {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 2 + index * 0.3,
      })
    })

    // Cleanup function
    return () => {
      particles.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        ref={pathsRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Complex motion paths */}
        <path
          d="M100,200 Q300,100 500,200 T900,200 Q1100,150 1200,200"
          stroke="url(#motionGradient1)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,350 Q200,250 400,350 T800,350 Q1000,300 1200,350"
          stroke="url(#motionGradient2)"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M150,500 Q350,400 550,500 T950,500" stroke="url(#motionGradient3)" strokeWidth="1" fill="none" />
        <path
          d="M50,650 Q250,550 450,650 T850,650 Q1050,600 1200,650"
          stroke="url(#motionGradient4)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Connection nodes */}
        <circle cx="300" cy="150" r="3" fill="url(#nodeGradient1)" />
        <circle cx="700" cy="180" r="4" fill="url(#nodeGradient2)" />
        <circle cx="400" cy="320" r="3" fill="url(#nodeGradient3)" />
        <circle cx="800" cy="380" r="4" fill="url(#nodeGradient1)" />
        <circle cx="550" cy="470" r="3" fill="url(#nodeGradient2)" />
        <circle cx="450" cy="620" r="4" fill="url(#nodeGradient3)" />

        <defs>
          <linearGradient id="motionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
          <linearGradient id="motionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.4)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
          </linearGradient>
          <linearGradient id="motionGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
          </linearGradient>
          <linearGradient id="motionGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.3)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
          </linearGradient>

          <radialGradient id="nodeGradient1">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </radialGradient>
          <radialGradient id="nodeGradient2">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.8)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
          </radialGradient>
          <radialGradient id="nodeGradient3">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.8)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
