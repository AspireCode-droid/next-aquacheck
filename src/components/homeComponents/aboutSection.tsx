import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
        >
          <Badge variant="outline" className="px-4 py-2 rounded-2xl bg-blue-50 border-blue-200 text-blue-700">
            About Aquacheck
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Water Safety Experts
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            With over 15 years of experience, we're the UK's leading water testing and legionella control specialists
          </p>
          {/* Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
          >
            <Image
              src="/mission.jpeg"
              width={500}
              height={400}
              alt="Aquacheck team"
              className="rounded-2xl object-cover shadow-xl"
            />
          </motion.div>
          <Link href="/about" passHref>
            <Button
              size="lg"
              className="bg-gradient-to-r mt-4 from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl text-base md:text-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              Learn More 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
