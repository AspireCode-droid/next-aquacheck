
'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}

export function ContactCta() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-blue-100 via-cyan-50 to-white border-t border-blue-200">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Protect Your Water Systems?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Book a professional water test or get expert advice from our certified specialists.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-base md:text-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Schedule Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
