'use client'

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
        },
    }),
}

export function BookingCta() {
    const contacts = [
        {
        icon: <Phone className="w-6 h-6" />,
        title: "Phone",
        value: "0800 123 4567",
        note: "Mon–Fri 8AM–6PM",
        },
        {
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        value: "info@aquacheck.co.uk",
        note: "24/7 Response",
        },
        {
        icon: <MapPin className="w-6 h-6" />,
        title: "Coverage",
        value: "UK Wide Service",
        note: "Emergency Available",
        },
    ]

    return (
        <section className="relative py-20 px-6 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto max-w-5xl text-center space-y-16">
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                >
                <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    Have questions? Our experts are ready to help with all your water quality needs.
                </p>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-3">
                {contacts.map((item, index) => (
                    <motion.div
                    key={index}
                    className="flex flex-col items-center text-center space-y-4"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    >
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                        {item.icon}
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-200 text-base">{item.value}</p>
                        <p className="text-sm text-slate-400">{item.note}</p>
                    </div>
                    </motion.div>
                ))}
                </div>

                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                >
                <Link href="/contact">
                    <Button
                    size="lg"
                    className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105"
                    >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                </motion.div>
            </div>
        </section>
    )
}
