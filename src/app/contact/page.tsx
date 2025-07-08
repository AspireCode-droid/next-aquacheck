
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Droplets, CheckCircle, Clock, Shield, Zap } from "lucide-react"
import Header from "@/components/Header"
import ContactHero from "@/components/contactComponents/contacthero"
import { Footer } from "@/components/footer"
import ContactPageCta from "@/components/contactComponents/contactCta"
import ContactDetails from "@/components/contactComponents/contactDetails"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validateForm = () => {
        const newErrors: any = {}

        if (!formData.name.trim()) {
        newErrors.name = "Name is required"
        }

        if (!formData.email.trim()) {
        newErrors.email = "Email is required"
        } else if (!validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address"
        }

        if (!formData.subject.trim()) {
        newErrors.subject = "Subject is required"
        }

        if (!formData.message.trim()) {
        newErrors.message = "Message is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
        ...prev,
        [field]: value,
    }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
        return
        }

        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setIsSubmitted(true)
        setIsSubmitting(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
    }


    return (
        <>
            <Header />
            <ContactHero />
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-12 py-9">
                    {/* Contact Form */}
                    <div  id="contact-form">
                        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl font-bold text-slate-800">Send us a Message</CardTitle>
                                <CardDescription className="text-slate-600 text-base">
                                Fill out the form below and we'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                    <Label htmlFor="name" className="text-slate-700 font-medium">
                                        Full Name *
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        className={`h-12 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-200`}
                                        placeholder="Enter your full name"
                                    />
                                    </div>

                                    <div className="space-y-2">
                                    <Label htmlFor="email" className="text-slate-700 font-medium">
                                        Email Address *
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className={`h-12 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-200`}
                                        placeholder="Enter your email address"
                                    />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-slate-700 font-medium">
                                    Subject *
                                    </Label>
                                    <Input
                                    id="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => handleInputChange("subject", e.target.value)}
                                    className={`h-12 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-200`}
                                    placeholder="What is this regarding?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-slate-700 font-medium">
                                    Message *
                                    </Label>
                                    <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                    className={`min-h-[140px] border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-200 resize-none `}
                                    placeholder="Tell us about your water quality concerns or testing needs..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 font-medium text-base"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending Message...
                                    </div>
                                    ) : (
                                    "Send Message"
                                    )}
                                </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <ContactDetails />
                </div>
                <ContactPageCta />            
            </main>
            <Footer />
        </>  
    )
}
    