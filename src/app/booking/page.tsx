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

import BookingForm from "@/components/bookingComponents/bookingForm"

import BookingHero from "@/components/bookingComponents/hero"
import BookingServices from "@/components/bookingComponents/services"
import Testimonials from "@/components/testimonials"



export default function BookingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const [selectedService, setSelectedService] = useState<string | null>(null);

    const services = [
        { id: "1", name: "Water Test", duration: "30 mins", price: "$50" },
        { id: "2", name: "Legionella Assessment", duration: "1 hour", price: "$100" },
    ];

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const timeSlots = ["9:00 AM", "10:00 AM", "2:00 PM", "4:00 PM"];

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
    });

    const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Booking Submitted:", {
        service: selectedService,
        selectedDate,
        selectedTime,
        formData,
        });
    };

    return (
        <>
            <Header />
            
            <BookingHero />
        
            <Testimonials />

            <BookingServices />
                

            <BookingForm />

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
