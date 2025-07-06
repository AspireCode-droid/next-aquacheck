import React, { useRef } from "react"

import StatItem from "./stat-Item"
const stats = [
  { number: 5000, suffix: "+", label: "Tests Completed" },
  { number: 15, suffix: "+", label: "Years Experience" },
  { number: 99, suffix: "%", label: "Client Satisfaction" },
  { number: 24, suffix: "/7", label: "Emergency Support" },
]

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <StatItem key={stat.label} {...stat} index={index} />
      ))}
    </div>
  )
}
