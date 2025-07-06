"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Droplets,
  Shield,
  Microscope,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Beaker,
  FileText,
  AlertTriangle,
  Users,
  Clock,
  Award,
} from "lucide-react"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import Navbar from "@/components/navbar"
import MotionPathHelper from "gsap/dist/MotionPathHelper"
import GSAPMotionPath from "@/lib/motionpath"
import StatsSection from "@/components/statsGrid"
import WhyUs from "@/components/whyUs"
import FloatingParticles from "@/components/ui/floatingparticles"
import WaterSystemMorph from "@/components/morhpSystem"
import WaterQualityChart from "@/components/waterQualityChart"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin)
}

export default function AquaCheckServices() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const statsRef = useRef(null)

  const services = [
    {
      icon: Microscope,
      title: "Water Testing & Analysis",
      description: "Comprehensive laboratory testing for bacteria, chemicals, and contaminants",
      features: [
        "Legionella bacteria detection",
        "Chemical composition analysis",
        "Microbiological testing",
        "Heavy metals screening",
        "pH and chlorine levels",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "Legionella Risk Assessment",
      description: "Professional risk evaluation and management strategies",
      features: [
        "Site inspection and evaluation",
        "Risk categorization",
        "Compliance documentation",
        "Remediation planning",
        "Ongoing monitoring protocols",
      ],
      color: "bg-teal-500",
    },
    {
      icon: Beaker,
      title: "Control Measures",
      description: "Implementation of effective water safety control systems",
      features: [
        "Water treatment solutions",
        "Temperature management",
        "Disinfection protocols",
        "System maintenance",
        "Emergency response plans",
      ],
      color: "bg-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <FloatingParticles />
      <Navbar />
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex py-16 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"
          style={{ y: backgroundY }}
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
              <Button size="lg" className=" bg-blue-600 rounded-2xl hover:bg-blue-700 text-lg">
                Schedule Testing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-white border-blue-200 rounded-2xl hover:bg-blue-50 text-blue-600 hover:border-blue-300"
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

      {/* Services Section with GSAP Motion Paths */}
      <section ref={servicesRef} id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive water safety solutions with integrated monitoring and control
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="h-8 w-8 text-white" />

                      {/* Orbiting particles */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/50 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
                      </motion.div>
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-center text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Water System Configurations */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Adaptive Service Solutions</h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Watch how our services adapt to different water system configurations. Click on different system types to
              see how we customize our approach for each environment.
            </p>
            <WaterSystemMorph />
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-Time Water Quality Monitoring</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced analytics and continuous monitoring ensure optimal water safety
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <WaterQualityChart />

            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Continuous Monitoring Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Real-time alerts for water quality changes",
                    "Automated compliance reporting",
                    "Predictive maintenance scheduling",
                    "Historical trend analysis",
                  ].map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Our proprietary algorithms analyze water quality patterns to predict potential issues before they
                  become critical, ensuring proactive water safety management.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-black/10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-blue-100">Our commitment to excellence speaks through our results</p>
          </motion.div>
          <StatsSection/>

        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Ensure Your Water Safety?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a comprehensive water safety assessment and protect what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-4567
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
