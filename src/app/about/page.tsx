

"use client"
import {Award, Zap, TrendingUp, Star} from "lucide-react"

import { motion } from "framer-motion"
import AnimatedCounter from "@/lib/animatedCounter"
import Header from "@/components/Header"
import AboutHero from "@/components/aboutComponents/hero"
import MissionSection from "@/components/aboutComponents/mission"
import { Footer } from "@/components/footer"
import AboutCta from '@/components/aboutComponents/aboutCta'
import Expertise from "@/components/aboutComponents/expertise"
import { useMobileMenu } from "@/context/mobilemenu"

export default function AboutUs() {

    const { isMenuOpen } = useMobileMenu()
    
    const milestones = [
        {
        year: "2010",
        title: "Company Founded",
        description: "Established by experienced microbiologists with a vision for accessible water safety testing.",
        icon: <Star className="h-5 w-5" />,
        },
        {
        year: "2015",
        title: "UKAS Accreditation",
        description: "Achieved UKAS accreditation, establishing our laboratory as a trusted testing facility.",
        icon: <Award className="h-5 w-5" />,
        },
        {
        year: "2018",
        title: "1000+ Clients",
        description: "Reached milestone of serving over 1000 clients across healthcare, hospitality, and education.",
        icon: <TrendingUp className="h-5 w-5" />,
        },
        {
        year: "2023",
        title: "Technology Innovation",
        description: "Implemented cutting-edge testing technology and expanded our service capabilities nationwide.",
        icon: <Zap className="h-5 w-5" />,
        },
    ]

  return (
    <>
        <Header />
        <main className={`flex-1 transition-all duration-300 w-full overflow-hidden ${isMenuOpen ? "blur-sm" : ""}`}>
            <AboutHero />
            
            <MissionSection />

            <Expertise />

            {/* Company History Timeline */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <motion.div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Journey</h2>
                        <p className="text-xl text-gray-600">
                        From a small laboratory to a leading provider of water quality testing services
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>

                            {milestones.map((milestone, index) => (
                                <motion.div key={index}>
                                    <div className="relative flex items-start mb-12">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                                            {milestone.icon}
                                            </div>
                                            <div className="ml-8 flex-1">
                                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                                <div className="text-sm font-bold text-blue-600 mb-2">{milestone.year}</div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <AboutCta />        
        </main>
        <Footer />
    </>
  )
}
