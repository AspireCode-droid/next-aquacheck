"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Droplets,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  ArrowRight,
  Microscope,
  FileText,
  AlertTriangle,
  Star,
  Zap,
  Globe,
  Calendar,
  BookOpen,
  Info,
  Contact,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import MarqueeContent from "@/components/marquee"
import Header from "@/components/Header"
import HomeServices from "@/components/HomeServices"
import { BookingSection } from "@/components/bookingSection"
import { AboutSection } from "@/components/aboutSection"
import { ResourcesSection } from "@/components/resourceSection"
import { useParallax } from "@/hooks/parallax"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/heroSection"

export default function AquacheckLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const parallaxOffset = useParallax(0.3)
  const parallaxOffsetSlow = useParallax(0.1)
  const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  }

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activeSection="home" />
      {/* Main Content with Blur Effect */}
      <main className={`flex-1 transition-all duration-300 w-full ${isMenuOpen ? "blur-sm" : ""}`}>
        
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-32">
          <div className="container px-5 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-16"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 bg-blue-50 rounded-2xl border-blue-200 text-blue-700"
              >
                Our Services
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
                <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  Comprehensive Water Safety
                </span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                From routine testing to emergency response, we provide complete water safety
                solutions for businesses across all industries.
              </p>
            </motion.div>
            <HomeServices />
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection />

        {/* About Section */}
        <AboutSection />

        {/* Resources Section */}
        <ResourcesSection />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
