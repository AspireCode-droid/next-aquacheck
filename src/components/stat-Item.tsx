import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import AnimatedCounter from "@/lib/animatedCounter"

interface StatItemProps {
  number: number
  suffix: string
  label: string
  index: number
}

export default function StatItem({ number, suffix, label, index }: StatItemProps) {
  const ref = useRef(null as unknown as HTMLDivElement)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <AnimatedCounter end={number} suffix={suffix} isInView={isInView} />
      </div>
      <div className="text-blue-100 font-medium">{label}</div>
    </motion.div>
  )
}
