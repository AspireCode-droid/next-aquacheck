import { motion } from "framer-motion"
import { Microscope, Shield, FileText, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  gradientFrom: string
  gradientTo: string
  bgOverlay: string
}

function ServiceCard({ icon, title, description, features, gradientFrom, gradientTo, bgOverlay }: ServiceCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <Card className={`relative overflow-hidden border-white shadow-lg bg-gradient-to-br from-white to-${gradientTo}/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}>
        <div className={`absolute inset-0 ${bgOverlay}`}></div>
        <CardHeader className="relative pb-4">
          <div className={`w-16 h-16 ${gradientFrom} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
          <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

export default function ServiceCards() {
  const services = [
    {
      icon: <Microscope className="h-8 w-8 text-white" />,
      title: "Legionella Testing",
      description: "Comprehensive legionella bacteria testing and risk assessment for water systems",
      features: ["Culture & PCR Testing", "Risk Assessment Reports", "Compliance Monitoring"],
      gradientFrom: "bg-gradient-to-br from-blue-600 to-cyan-600",
      gradientTo: "blue-50",
      bgOverlay: "bg-gradient-to-br from-blue-600/5 to-cyan-600/5",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Water System Management",
      description: "Complete water system monitoring and maintenance programs",
      features: ["Temperature Monitoring", "Chemical Treatment", "System Cleaning"],
      gradientFrom: "bg-gradient-to-br from-cyan-600 to-teal-600",
      gradientTo: "cyan-50",
      bgOverlay: "bg-gradient-to-br from-cyan-600/5 to-teal-600/5",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Compliance & Reporting",
      description: "Detailed reporting and regulatory compliance support",
      features: ["HSE Compliance", "Digital Certificates", "Audit Support"],
      gradientFrom: "bg-gradient-to-br from-teal-600 to-blue-600",
      gradientTo: "teal-50",
      bgOverlay: "bg-gradient-to-br from-teal-600/5 to-blue-600/5",
    },
  ]

  return (
    <motion.div
      className="grid gap-8 lg:grid-cols-3 mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </motion.div>
  )
}
