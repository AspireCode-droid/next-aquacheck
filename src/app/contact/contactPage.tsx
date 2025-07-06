"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Droplets, CheckCircle, Clock, Shield, Zap } from "lucide-react"

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

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
          <div className="w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
          <div className="w-96 h-96 bg-gradient-to-tr from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-75" />
                  <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl">
                    <Droplets className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  AquaCheck
                </h1>
              </div>
              <p className="text-slate-600 text-lg">Professional Water Quality Testing</p>
            </div>

            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-lg opacity-75" />
                    <div className="relative bg-gradient-to-r from-emerald-500 to-green-600 p-4 rounded-full">
                      <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                  Message Sent Successfully!
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Thank you for contacting AquaCheck. We've received your message and will get back to you within 24
                  hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-96 h-96 bg-gradient-to-tr from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-75" />
              <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl">
                <Droplets className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              AquaCheck
            </h1>
          </div>
          <p className="text-slate-600 text-lg mb-4">Professional Water Quality Testing</p>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Get in Touch</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Connect with our water quality experts. We're here to ensure your water is safe, clean, and meets the
              highest standards.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
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
                        className={`h-12 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-200 ${errors.name ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-sm text-red-500 flex items-center gap-1">{errors.name}</p>}
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
                        className={`h-12 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-200 ${errors.email ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && <p className="text-sm text-red-500 flex items-center gap-1">{errors.email}</p>}
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
                      className={`h-12 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-200 ${errors.subject ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && <p className="text-sm text-red-500 flex items-center gap-1">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`min-h-[140px] border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-200 resize-none ${errors.message ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                      placeholder="Tell us about your water quality concerns or testing needs..."
                    />
                    {errors.message && <p className="text-sm text-red-500 flex items-center gap-1">{errors.message}</p>}
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

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800">Contact Information</CardTitle>
                <CardDescription className="text-slate-600">
                  Reach out to us through any of the following methods.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-3 rounded-2xl group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Office Address</h3>
                    <p className="text-slate-600 leading-relaxed">
                      1234 Water Quality Drive
                      <br />
                      Suite 100
                      <br />
                      Clean City, CC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Phone Number</h3>
                    <p className="text-slate-600 font-medium">+1 (555) 123-AQUA</p>
                    <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Monday - Friday: 8:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-3 rounded-2xl group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Email Address</h3>
                    <p className="text-slate-600 font-medium">info@aquacheck.com</p>
                    <p className="text-sm text-slate-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Features */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-lg" />
                    <div className="relative bg-white/10 p-4 rounded-full backdrop-blur-sm">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mt-4 mb-2">Emergency Testing</h3>
                  <p className="text-cyan-100 leading-relaxed">
                    Need urgent water quality testing? We offer 24/7 emergency services for critical situations.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white hover:text-cyan-600 bg-white/10 backdrop-blur-sm rounded-xl h-12 font-medium transition-all duration-300"
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Certified & Trusted</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    EPA certified laboratory with over 15 years of experience in water quality testing and analysis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
