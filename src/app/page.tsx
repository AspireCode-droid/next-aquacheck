"use client"

import { Badge } from "@/components/ui/badge"
import {ContactCta} from "@/components/contact"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import HomeServices from "@/components/homeComponents/HomeServices"
import { BookingSection } from "@/components/bookingSection"
import { AboutSection } from "@/components/homeComponents/aboutSection"
import { ResourcesSection } from "@/components/homeComponents/resourceSection"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/homeComponents/heroSection"
import { useMobileMenu } from "@/context/mobilemenu"

export default function AquacheckLanding() {
  const { isMenuOpen } = useMobileMenu()
  return (
    <>
      <Header />
      <main className={`flex-1 transition-all duration-300 w-full overflow-hidden ${isMenuOpen ? "blur-sm" : ""}`}>

        <HeroSection />

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-32">
          <div className="container px-5 md:px-6 mx-auto">
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
              <p className="text-xl text-gray-700 leading-relaxed">
                Complete water safety solutions—from routine testing to emergency response
              </p>
            </motion.div>
            <HomeServices />
          </div>
        </section>
        <BookingSection />

        <AboutSection />

        <ResourcesSection />

        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
