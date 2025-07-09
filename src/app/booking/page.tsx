"use client"

import type React from "react"
import Header from "@/components/Header"
import { useState } from "react"

import BookingForm from "@/components/bookingComponents/bookingForm"

import BookingHero from "@/components/bookingComponents/hero"
import BookingServices from "@/components/bookingComponents/services"
import Testimonials from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { BookingCta } from "@/components/bookingComponents/bookingCta"



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

            <BookingCta />
            <Footer />
        </>    
    )
}
