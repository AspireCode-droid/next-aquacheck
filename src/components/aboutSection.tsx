import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Users, Globe } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeUp}
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
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-center">
          {/* Mission Text */}
          <motion.div
            className="space-y-6 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.4}
            variants={fadeUp}
          >
            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To protect businesses and communities through comprehensive water safety solutions, ensuring
              compliance with health regulations and providing peace of mind through expert testing and monitoring
              services.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Certified Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Experienced Team</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">UK Coverage</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
            variants={fadeUp}
          >
            <Image
              src="/mission.jpeg"
              width={500}
              height={400}
              alt="Aquacheck team"
              className="rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
