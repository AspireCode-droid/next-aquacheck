"use client"

import type React from "react"
import Header from "@/components/Header"
import { useState } from "react"
import {
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

import BookingHero from "@/components/bookingComponents/hero"
import BookingServices from "@/components/bookingComponents/services"
import Testimonials from "@/components/testimonials"



const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]

export default function BookingPage() {

    const [selectedService, setSelectedService] = useState("")
    const [selectedDate, setSelectedDate] = useState("")
    const [selectedTime, setSelectedTime] = useState("")
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
    })
    const [currentStep, setCurrentStep] = useState(1)
    const totalSteps = 3


    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle booking submission
        alert("Booking request submitted successfully! We'll contact you within 24 hours to confirm your appointment.")
        // Reset form
        setSelectedService("")
        setCurrentStep(1)
        setSelectedDate("")
        setSelectedTime("")
        setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
        })
    }

    return (
        <>
            <Header />
            
            <BookingHero />
        
            <Testimonials />
            
            <BookingServices />
                

            {/* Enhanced Booking Form */}
            {selectedService && (
                <section id="booking-form" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-3xl">
                    {/* Step Indicator */}
                    <div className="mb-8">
                    <div className="flex items-center justify-center space-x-4">
                        {[1, 2, 3].map((stepNumber) => (
                        <div key={stepNumber} className="flex items-center">
                            <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                                stepNumber <= currentStep ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                            }`}
                            >
                            {stepNumber < currentStep ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                            </div>
                            {stepNumber < 3 && (
                            <ArrowRight
                                className={`w-5 h-5 mx-2 ${stepNumber < currentStep ? "text-blue-600" : "text-slate-300"}`}
                            />
                            )}
                        </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="text-sm text-slate-600">
                        Step {currentStep} of {totalSteps}:{" "}
                        {currentStep === 1
                            ? "Service & Schedule"
                            : currentStep === 2
                            ? "Contact Information"
                            : "Review & Confirm"}
                        </div>
                    </div>
                    </div>

                    <Card className="shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
                        <CardDescription>Selected: {services.find((s) => s.id === selectedService)?.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleBookingSubmit} className="space-y-6">
                        {/* Step 1: Date and Time Selection */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                            <div className="text-center mb-6">
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                                When would you like to schedule your service?
                                </h4>
                                <p className="text-slate-600">Select your preferred date and time</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="date" className="flex items-center space-x-2 text-base">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                <span>Preferred Date</span>
                                </Label>
                                <Input
                                id="date"
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date().toISOString().split("T")[0]}
                                className="text-base p-3"
                                required
                                />
                            </div>

                            <div className="space-y-3">
                                <Label className="flex items-center space-x-2 text-base">
                                <Clock className="w-5 h-5 text-blue-600" />
                                <span>Preferred Time</span>
                                </Label>
                                <RadioGroup value={selectedTime} onValueChange={setSelectedTime}>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {timeSlots.map((time) => (
                                    <div key={time} className="flex items-center space-x-2">
                                        <RadioGroupItem value={time} id={time} />
                                        <Label
                                        htmlFor={time}
                                        className="text-sm cursor-pointer p-2 rounded border hover:bg-slate-50 flex-1 text-center"
                                        >
                                        {time}
                                        </Label>
                                    </div>
                                    ))}
                                </div>
                                </RadioGroup>
                            </div>

                            <Button
                                type="button"
                                onClick={() => setCurrentStep(2)}
                                disabled={!selectedDate || !selectedTime}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                            >
                                Continue to Contact Details
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            </div>
                        )}

                        {/* Step 2: Contact Information */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                            <div className="text-center mb-6">
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">Tell us about yourself</h4>
                                <p className="text-slate-600">We'll use this information to contact you</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-base">
                                    First Name *
                                </Label>
                                <Input
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="text-base p-3"
                                    required
                                />
                                </div>
                                <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-base">
                                    Last Name *
                                </Label>
                                <Input
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="text-base p-3"
                                    required
                                />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-base">
                                Email Address *
                                </Label>
                                <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="text-base p-3"
                                required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-base">
                                Phone Number *
                                </Label>
                                <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="text-base p-3"
                                required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address" className="text-base">
                                Property Address *
                                </Label>
                                <Textarea
                                id="address"
                                placeholder="Please provide the full address where the service will be performed"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="text-base p-3 min-h-[100px]"
                                required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="notes" className="text-base">
                                Additional Notes (Optional)
                                </Label>
                                <Textarea
                                id="notes"
                                placeholder="Any specific requirements or additional information"
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                className="text-base p-3"
                                />
                            </div>

                            <div className="flex space-x-4">
                                <Button type="button" variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                                Back
                                </Button>
                                <Button
                                type="button"
                                onClick={() => setCurrentStep(3)}
                                disabled={
                                    !formData.firstName ||
                                    !formData.lastName ||
                                    !formData.email ||
                                    !formData.phone ||
                                    !formData.address
                                }
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                Review Booking
                                <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                            </div>
                        )}

                        {/* Step 3: Review and Confirm */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                            <div className="text-center mb-6">
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">Review Your Booking</h4>
                                <p className="text-slate-600">Please confirm your appointment details</p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-semibold text-slate-900 mb-2">Service Details</h5>
                                    <p className="text-slate-700">{services.find((s) => s.id === selectedService)?.name}</p>
                                    <p className="text-slate-600 text-sm">
                                    {services.find((s) => s.id === selectedService)?.duration}
                                    </p>
                                    <p className="text-blue-600 font-semibold">
                                    {services.find((s) => s.id === selectedService)?.price}
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-slate-900 mb-2">Appointment</h5>
                                    <p className="text-slate-700">
                                    {new Date(selectedDate).toLocaleDateString("en-GB", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                    </p>
                                    <p className="text-slate-600">{selectedTime}</p>
                                </div>
                                </div>

                                <div>
                                <h5 className="font-semibold text-slate-900 mb-2">Contact Information</h5>
                                <p className="text-slate-700">
                                    {formData.firstName} {formData.lastName}
                                </p>
                                <p className="text-slate-600">{formData.email}</p>
                                <p className="text-slate-600">{formData.phone}</p>
                                </div>

                                <div>
                                <h5 className="font-semibold text-slate-900 mb-2">Service Address</h5>
                                <p className="text-slate-700">{formData.address}</p>
                                </div>

                                {formData.notes && (
                                <div>
                                    <h5 className="font-semibold text-slate-900 mb-2">Additional Notes</h5>
                                    <p className="text-slate-700">{formData.notes}</p>
                                </div>
                                )}
                            </div>

                            <div className="flex space-x-4">
                                <Button type="button" variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                                Back to Edit
                                </Button>
                                <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Confirm Booking
                                </Button>
                            </div>
                            </div>
                        )}
                        </form>
                    </CardContent>
                    </Card>
                </div>
                </section>
            )}

            {/* Contact Section */}
            <section className="py-16 px-4 bg-slate-900 text-white">
                <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
                    <p className="text-slate-300">Have questions? Our team is here to help with your water quality needs.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Phone</h4>
                        <p className="text-slate-300">0800 123 4567</p>
                        <p className="text-sm text-slate-400">Mon-Fri 8AM-6PM</p>
                    </div>
                    </div>

                    <div className="space-y-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Email</h4>
                        <p className="text-slate-300">info@aquacheck.co.uk</p>
                        <p className="text-sm text-slate-400">24/7 Response</p>
                    </div>
                    </div>

                    <div className="space-y-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Coverage</h4>
                        <p className="text-slate-300">UK Wide Service</p>
                        <p className="text-sm text-slate-400">Emergency Available</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>    
    )
}
