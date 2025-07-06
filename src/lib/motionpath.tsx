import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"


// GSAP Motion Path Component
function GSAPMotionPath({
  pathData,
  duration = 3,
  delay = 0,
  strokeColor = "#3B82F6",
  strokeWidth = 2,
  className = "",
  autoRotate = false,
}: {
  pathData: string
  duration?: number
  delay?: number
  strokeColor?: string
  strokeWidth?: number
  className?: string
  autoRotate?: boolean
}) {
  const pathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGCircleElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pathRef.current || !dotRef.current || !containerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Animate path drawing
    tl.fromTo(
      pathRef.current,
      {
        strokeDasharray: "0 1000",
        opacity: 0,
      },
      {
        strokeDasharray: "1000 0",
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      },
    )

    // Animate dot following path
    tl.fromTo(
      dotRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        motionPath: {
          path: pathRef.current,
          autoRotate: autoRotate,
          alignOrigin: [0.5, 0.5],
        },
        ease: "power2.inOut",
      },
      delay + 0.5,
    )

    return () => {
      tl.kill()
    }
  }, [pathData, duration, delay, autoRotate])
}
export default GSAPMotionPath