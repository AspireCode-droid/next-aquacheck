import { useIntersectionObserver } from "@/hooks/useScrollAnimate"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
}: ScrollRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver()

  const getAnimationClass = () => {
    const baseClass = `transition-all duration-${duration} ease-out`

    if (!isIntersecting) {
      switch (direction) {
        case "up":
          return `${baseClass} opacity-0 translate-y-8`
        case "down":
          return `${baseClass} opacity-0 -translate-y-8`
        case "left":
          return `${baseClass} opacity-0 translate-x-8`
        case "right":
          return `${baseClass} opacity-0 -translate-x-8`
        case "fade":
          return `${baseClass} opacity-0`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClass} opacity-100 translate-x-0 translate-y-0`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
