import { motion } from "framer-motion"
import Image from "next/image"
import { Star, ArrowRight, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import MarqueeContent from "@/components/marquee"
import { useParallax } from "@/hooks/parallax"

export default function HeroSection() {
    const parallaxOffset = useParallax(0.3)
    const parallaxOffsetSlow = useParallax(0.15)

    return (
        <section id="home" className="relative w-full py-12 md:py-14 xl:py-20 overflow-hidden">
            {/* Parallax Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50" />
            <div
                className="absolute top-10 md:top-20 left-5 md:left-10 w-32 h-32 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                style={{ transform: `translateY(${parallaxOffset}px)` }}
            />
            <div
                className="absolute top-20 md:top-40 right-5 md:right-10 w-32 h-32 md:w-72 md:h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                style={{ transform: `translateY(${-parallaxOffset * 0.8}px)` }}
            />
            <div
                className="absolute bottom-10 md:bottom-20 left-1/2 w-32 h-32 md:w-72 md:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
            />

            <div className="relative container mx-auto px-2 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side */}
                    <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8 max-w-full text-center lg:text-left">
                        <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        >
                            <Badge
                                variant="outline"
                                className="w-fit mx-auto lg:mx-0 px-3 py-1.5 md:px-4 md:py-2 bg-white/50 backdrop-blur-sm rounded-2xl border-blue-200 text-blue-700 font-medium text-xs md:text-sm"
                            >
                                <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                                Certified Water Safety Experts
                            </Badge>
                        </motion.div>

                        <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="px-2 text-3xl max-w-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight"
                        >
                            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                                Professional Water Testing &
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Legionella Control
                            </span>
                        </motion.h1>

                        <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="mx-auto px-4  sm:px-6 lg:px-0 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
                        >
                          Protect your business with expert water testing, legionella assessments, and compliance monitoring
                        </motion.p>

                        <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 md:gap-4 items-center justify-center lg:justify-start px-4 lg:px-0"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Schedule Testing
                                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-300 bg-transparent"
                            >
                                <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                                Emergency Response
                            </Button>
                        </motion.div>

                        <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="relative w-full max-w-full overflow-hidden bg-white/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 px-4 md:px-6"
                        >
                        <div className="w-full max-w-screen-sm mx-auto flex items-center justify-center">
                            <div className="relative w-full overflow-hidden">
                            <MarqueeContent />
                            </div>
                        </div>
                        </motion.div>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex justify-center items-center relative xl:-mt-10">
                        <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="relative px-2"
                        >
                            {/* Parallax overlay in a separate container */}
                            <div className="absolute inset-0 z-0">
                                <div
                                className="w-full h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl opacity-20"
                                style={{ transform: `translateY(${parallaxOffsetSlow}px)` }}
                                />
                            </div>
                            <div className="relative z-10">
                                <Image
                                src="/hero.jpeg"
                                width={500}
                                height={400}
                                alt="Water testing laboratory"
                                className="mx-auto rounded-2xl md:rounded-3xl object-cover shadow-xl md:shadow-2xl border border-white/20 w-full max-w-md md:max-w-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>    
        </section>
    );
}
