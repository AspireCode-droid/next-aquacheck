import { useIntersectionObserver } from "@/hooks/useScrollAnimate"
import { type ReactNode, Children } from "react"

interface StaggeredRevealProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggeredReveal({ children, staggerDelay = 100, className = "" }: StaggeredRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver()
  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-600 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
