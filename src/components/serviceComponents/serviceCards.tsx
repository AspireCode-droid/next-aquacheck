"use client"

import { motion } from "framer-motion";
import { Microscope, Shield, Beaker } from "lucide-react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

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

export function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-white relative overflow-hidden">
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
                        <Card className="h-full border border-white bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <CardHeader className="text-center pb-4 relative z-10">
                                <motion.div
                                className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 relative`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <service.icon className="h-8 w-8 text-white" />
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
                            <CardContent className="relative z-10 flex flex-col items-start space-y-6">
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
                                <Button className="mx-auto sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6  md:px-8 py-3 md:py-4 text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">Learn More</Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
