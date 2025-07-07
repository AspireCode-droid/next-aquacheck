"use client"
import {  useRef,useEffect } from "react"
import { motion, useScroll, useTransform,} from "framer-motion"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

import {
  Shield,
  Microscope,
  Phone,
  Mail,
  Beaker,
} from "lucide-react"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import StatsSection from "@/components/statsGrid"
import WhyUs from "@/components/whyUs"
import FloatingParticles from "@/components/ui/floatingparticles"
import AdaptiveServiceSolutions from "@/components/serviceComponents/adaptive"
import { useMobileMenu } from "@/context/mobilemenu"
import Header from "@/components/Header"
import HeroSection from "@/components/serviceComponents/heroSection"
import { ServicesSection } from "@/components/serviceComponents/serviceCards"
import { Footer } from "@/components/footer"


// Register GSAP plugins
useEffect(() => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin);
  }
}, []);

export default function AquaCheckServices() {
  const { isMenuOpen } = useMobileMenu()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
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
    <>
      <Header />
      <FloatingParticles />
      <main className={`flex-1 transition-all duration-300 w-full overflow-hidden ${isMenuOpen ? "blur-sm" : ""}`}>
        <HeroSection />
   
        <ServicesSection />
          
        <AdaptiveServiceSolutions />

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
      </main>
      <Footer />
    </> 
  )
}
