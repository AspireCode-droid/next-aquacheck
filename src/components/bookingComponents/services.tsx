

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Droplets, Shield, CheckCircle} from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "water-testing",
    name: "Water Quality Testing",
    description: "Comprehensive analysis of water samples for chemical, biological, and physical parameters",
    price: "£150",
    duration: "2-3 hours",
    icon: Droplets,
    features: ["Chemical analysis", "Bacterial testing", "pH levels", "Detailed report"],
  },
  {
    id: "legionella-assessment",
    name: "Legionella Risk Assessment",
    description: "Professional assessment to identify and mitigate legionella risks in water systems",
    price: "£250",
    duration: "3-4 hours",
    icon: Shield,
    features: ["System inspection", "Risk evaluation", "Compliance check", "Action plan"],
  },
  {
    id: "combined-service",
    name: "Complete Water Safety Package",
    description: "Comprehensive service combining water testing and legionella risk assessment",
    price: "£350",
    duration: "4-5 hours",
    icon: CheckCircle,
    features: ["Full water analysis", "Risk assessment", "Compliance report", "Follow-up support"],
    popular: true,
  },
]
export default function BookingServices(){
    const [selectedService, setSelectedService] = useState("")

    const [currentStep, setCurrentStep] = useState(1)

    const totalSteps = 3
    
    const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setCurrentStep(1)
    setTimeout(() => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
    }, 100)

    }
    return(
        <section id="services" className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                Choose from our range of professional water quality testing and assessment services
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service) => {
                const Icon = service.icon
                return (
                    <Card
                    key={service.id}
                    className={`relative cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                        selectedService === service.id ? "ring-2 ring-blue-600 shadow-lg" : ""
                    } ${service.popular ? "border-blue-200" : ""}`}
                    onClick={() => handleServiceSelect(service.id)}
                    >
                    {service.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
                        Most Popular
                        </Badge>
                    )}
                    <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-slate-900">{service.price}</div>
                        <div className="text-sm text-slate-600">{service.duration}</div>
                        </div>
                        <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                            </li>
                        ))}
                        </ul>
                        <Button
                        className={`w-full mt-6 transition-all ${
                            selectedService === service.id
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                        onClick={() => handleServiceSelect(service.id)}
                        >
                        {selectedService === service.id ? (
                            <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Selected
                            </>
                        ) : (
                            "Select Service"
                        )}
                        </Button>
                    </CardContent>
                    </Card>
                )
                })}
            </div>
            </div>
        </section>
    )
}