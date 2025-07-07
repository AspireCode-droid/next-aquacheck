import {motion} from 'framer-motion'
import { Droplets,Award, Shield, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent} from '@/components/ui/card'

export default function AboutHero(){ 
      const stats = [
    { number: 2000, label: "Clients Served", gradient: "from-blue-600 to-cyan-600", suffix: "+" },
    { number: 50000, label: "Tests Completed", gradient: "from-cyan-600 to-teal-600", suffix: "+" },
    { number: 13, label: "Years Experience", gradient: "from-teal-600 to-emerald-600", suffix: "+" },
    { number: 99.9, label: "Accuracy Rate", gradient: "from-emerald-600 to-green-600", suffix: "%" },
    ]
    return(
        <section className="relative min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                    className="flex justify-center mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "backOut" }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-2xl shadow-2xl">
                            <Droplets className="h-12 w-12 text-white" />
                            </div>
                        </div>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">About Aquacheck</h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                        Protecting public health through expert water quality testing and legionella control solutions since
                        2010
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {[
                        { icon: Award, text: "UKAS Accredited", color: "blue" },
                        { icon: Shield, text: "HSE Approved", color: "cyan" },
                        { icon: Sparkles, text: "ISO 17025 Certified", color: "emerald" },
                        ].map((badge, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Badge
                            className={`px-6 py-3 bg-${badge.color}-50 text-${badge.color}-700 border-${badge.color}-200 hover:bg-${badge.color}-100 text-sm font-medium`}
                            >
                            <badge.icon className="h-4 w-4 mr-2" />
                            {badge.text}
                            </Badge>
                        </motion.div>
                        ))}
                    </div>

                    {/* Animated Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {stats.map((stat, index) => (
                            <Card >
                                <CardContent className="p-6 text-center">
                                    <div
                                    className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                                    >
                                    {/*<AnimatedCounter end={stat.number} suffix={stat.suffix} />*/}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        ); 
    }
    
