import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  isInView: boolean
}

export default function AnimatedCounter({ end, duration = 2000, suffix = "", isInView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, duration, end])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
