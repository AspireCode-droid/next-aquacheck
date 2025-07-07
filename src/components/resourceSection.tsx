import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, FileText } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const MotionCard = motion(Card)

export function ResourcesSection() {
  return (
    <section id="resources" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeUp}
        >
          <Badge variant="outline" className="px-4 py-2 rounded-2xl bg-white border-gray-200 text-gray-700">
            Resources & Guides
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Knowledge Center
            </span>
          </h2>
          <p className="max-w-[800px] text-xl text-gray-600 leading-relaxed">
            Access our comprehensive library of water safety guides, compliance documents, and industry insights
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp}>
            <MotionCard className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Compliance Guides</CardTitle>
                <CardDescription>Essential guides for water safety compliance and regulations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Download Guides
                </Button>
              </CardContent>
            </MotionCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp}>
            <MotionCard className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <FileText className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Safety Checklists</CardTitle>
                <CardDescription>Comprehensive checklists for water system maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  View Checklists
                </Button>
              </CardContent>
            </MotionCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp}>
            <MotionCard className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Award className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Certifications</CardTitle>
                <CardDescription>Our accreditations and industry certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  View Certificates
                </Button>
              </CardContent>
            </MotionCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
