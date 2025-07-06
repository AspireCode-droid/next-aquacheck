import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function WaterQualityChart() {
  const chartRef = useRef<HTMLDivElement>(null)
  const barRefs = useRef<(SVGRectElement | null)[]>([])
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const particleRefs = useRef<(SVGCircleElement | null)[]>([])

  const dataPoints = [
    { label: "pH Level", value: 85, color: "#3B82F6" },
    { label: "Chlorine", value: 92, color: "#10B981" },
    { label: "Bacteria", value: 78, color: "#F59E0B" },
    { label: "Minerals", value: 95, color: "#8B5CF6" },
  ]

  useEffect(() => {
    if (!chartRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: chartRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Animate bars
    barRefs.current.forEach((bar, index) => {
      if (bar) {
        const barHeight = (dataPoints[index].value / 100) * 120

        tl.fromTo(
          bar,
          {
            height: 0,
            y: 160,
          },
          {
            height: barHeight,
            y: 160 - barHeight,
            duration: 1.5,
            ease: "power2.out",
          },
          index * 0.2,
        )
      }
    })

    // Animate connecting paths with particles
    pathRefs.current.forEach((path, index) => {
      if (path && particleRefs.current[index]) {
        tl.fromTo(
          path,
          {
            strokeDasharray: "0 100",
            opacity: 0,
          },
          {
            strokeDasharray: "100 0",
            opacity: 0.6,
            duration: 1,
            ease: "power2.inOut",
          },
          index * 0.2 + 1.5,
        )

        // Animate particle along path
        tl.fromTo(
          particleRefs.current[index],
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            motionPath: {
              path: path,
              alignOrigin: [0.5, 0.5],
            },
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 2,
          },
          index * 0.2 + 2,
        )
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={chartRef} className="relative w-full h-64 bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Water Quality Metrics</h3>

      <svg className="w-full h-full" viewBox="0 0 300 200">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line key={y} x1="40" y1={160 - y * 1.2} x2="280" y2={160 - y * 1.2} stroke="#E5E7EB" strokeWidth="1" />
        ))}

        {/* Animated bars and paths */}
        {dataPoints.map((point, index) => {
          const barHeight = (point.value / 100) * 120
          const x = 60 + index * 50
          const pathData = `M ${x + 15} ${160 - barHeight} Q ${x + 35} ${160 - barHeight - 20} ${x + 55} ${160 - barHeight - 10}`

          return (
            <g key={point.label}>
              {/* Bar */}
              <rect
                ref={(el) => { barRefs.current[index] = el; }}
                x={x}
                y={160}
                width="30"
                height="0"
                fill={point.color}
                rx="4"
              />

              {/* Value label */}
              <text x={x + 15} y={160 - barHeight - 10} textAnchor="middle" className="text-sm font-bold fill-gray-700">
                {point.value}%
              </text>

              {/* Label */}
              <text x={x + 15} y={180} textAnchor="middle" className="text-xs fill-gray-600">
                {point.label}
              </text>

              {/* Connecting path */}
              <path
                ref={(el) => { pathRefs.current[index] = el }}
                d={pathData}
                stroke={point.color}
                strokeWidth="2"
                fill="none"
                opacity="0"
              />

              {/* Moving particle */}
              <circle ref={(el) => { particleRefs.current[index] = el }} r="3" fill={point.color} opacity="0" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}