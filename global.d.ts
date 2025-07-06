// global.d.ts
import React from "react"

declare module "framer-motion" {
  interface MotionProps {
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
  }
}
