"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import SplitText from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export default function AnimatedHeading() {
  const headingRef = useRef(null)

  useEffect(() => {
    const split = new SplitText(headingRef.current, {
      type: "words, chars",
    })

    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
    })

    return () => {
      split.revert()
    }
  }, [])

  return (
    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      <span
        ref={headingRef}
        className=" inline-block"
      >
        Knowledge Center
      </span>
    </h2>
  )
}
