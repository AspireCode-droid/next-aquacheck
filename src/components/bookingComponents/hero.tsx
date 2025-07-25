
import {
  Star, ArrowRight
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GSAPMotionBackground } from "../gsapMotion"
import { useParallax } from "@/hooks/parallax"

export default function BookingHero(){
    const parallaxOffset = useParallax(0.3)
    return(
        <section className="py-12 px-4">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 md:top-20 left-5 md:left-10 w-32 h-32 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    style={{ transform: `translateY(${parallaxOffset}px)` }}
                />
                <div className="absolute top-20 md:top-40 right-5 md:right-10 w-32 h-32 md:w-72 md:h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    style={{ transform: `translateY(${-parallaxOffset * 0.8}px)` }}
                />
                <div className="absolute bottom-20 md:bottom-20 left-1/2 w-32 h-32 md:w-72 md:h-72 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
                />
            </div>
            <div className="flex flex-col container mx-auto text-center max-w-4xl space-y-6 items-center justify-center z-10">
                <GSAPMotionBackground/>
                <h2>
                    <Badge
                        variant="outline"
                        className="w-fit mx-auto lg:mx-0 px-3 py-1.5 md:px-4 md:py-2 bg-white/50 backdrop-blur-sm rounded-2xl border-blue-200 text-blue-700 font-medium text-xs md:text-sm"
                    >
                        <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                        Book a Service
                    </Badge>
                </h2>
                <div className="bg-gradient-to-br from-gray-800 via-blue-800 to-teal-800 bg-clip-text text-transparent">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Water Quality Testing</h2>
                </div>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    Ensure your water systems are safe and compliant with our expert testing and risk assessment services.
                </p>
                <div className="flex flex-col space-y-6 px-6 max-w-3xl justify-center items-center">
                    <Button
                    size="lg"
                    className="sm:w-auto bg-gray-50 text-gray-900 border-b border-b-gray-50 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    >
                    Checkout Our Services
                    </Button>
                    <Button
                    size="lg"
                    className="sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    >
                    Book Your Assessment
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                </div>    
            </div>
        </section>
    )
}