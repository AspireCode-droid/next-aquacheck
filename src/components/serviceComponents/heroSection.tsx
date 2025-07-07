'use client'

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {

  return (
    <section className="relative flex py-16 overflow-hidden">
        {/* Background Gradient */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"
        />

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                    Professional Water Safety Services
                    </Badge>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Protecting Your Water,
                    <span className="text-blue-600 block">Safeguarding Lives</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Comprehensive water testing, Legionella risk assessment, and control to ensure top water safety and quality.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Button size="lg" className="mx-auto sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6  md:px-8 py-3 md:py-4 text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Schedule Testing
                    <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                    size="lg"
                    className="mx-auto sm:w-auto bg-white px-6 text-cyan-300 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                    Learn More
                    </Button>
                </motion.div>
            </div>
        </div>

        {/* Animated Water Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            >
            <motion.path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                fill="rgba(59, 130, 246, 0.1)"
                animate={{
                d: [
                    "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                    "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
                    "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                ],
                }}
                transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                }}
            />
            </svg>
        </div>
    </section>
  )
}
