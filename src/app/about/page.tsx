"use client"

import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Droplets,
  Shield,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Users,
  Target,
  Zap,
  Globe,
  TrendingUp,
  Star,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { GSAPMotionBackground } from "@/components/gsapMotion"
import AnimatedCounter from "@/lib/animatedCounter"
import Header from "@/components/Header"
import AboutHero from "@/components/aboutComponents/hero"

export default function AboutUs() {
  const services = [
    {
      icon: <Droplets className="h-6 w-6 text-white" />,
      title: "Water Quality Testing",
      description:
        "Comprehensive analysis using state-of-the-art laboratory equipment and certified testing protocols for complete water safety assurance.",
      features: ["Microbiological Testing", "Chemical Analysis", "Rapid Results", "Certified Reports"],
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Legionella Risk Assessment",
      description:
        "Thorough evaluation of water systems to identify potential risks and ensure full regulatory compliance with health standards.",
      features: ["Risk Evaluation", "Compliance Audits", "System Mapping", "Action Plans"],
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-600",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Control Solutions",
      description:
        "Implementation of effective control measures and ongoing monitoring systems for comprehensive water system safety.",
      features: ["Control Implementation", "Ongoing Monitoring", "Emergency Response", "Maintenance Plans"],
      gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
    },
  ]

  const values = [
    {
      icon: <Target className="h-5 w-5 text-white" />,
      title: "Scientific Excellence",
      description: "Maintaining the highest standards in testing methodologies and laboratory equipment.",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      icon: <Shield className="h-5 w-5 text-white" />,
      title: "Regulatory Compliance",
      description: "Ensuring full compliance with HSE guidelines, ACOP L8, and water safety regulations.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      title: "Client Partnership",
      description: "Working closely with clients to understand unique needs and provide tailored solutions.",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
      icon: <Zap className="h-5 w-5 text-white" />,
      title: "Continuous Innovation",
      description: "Staying at the forefront of water testing technology and service improvements.",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer & Lead Microbiologist",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Leading our scientific approach to water safety with over 15 years of experience in water microbiology and environmental health.",
      qualifications: [
        "PhD Environmental Microbiology",
        "Certified Water Treatment Specialist",
        "IOSH Managing Safely",
      ],
      expertise: ["Water Microbiology", "Risk Assessment", "Regulatory Compliance"],
    },
    {
      name: "James Thompson",
      role: "Technical Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Overseeing technical operations with 12 years of hands-on experience in legionella control and water system management.",
      qualifications: ["BSc Environmental Science", "City & Guilds Legionella", "BOHS P901 Qualified"],
      expertise: ["Legionella Control", "System Design", "Technical Training"],
    },
    {
      name: "Emma Rodriguez",
      role: "Laboratory Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Managing accredited laboratory operations with precision and expertise in analytical chemistry and quality assurance.",
      qualifications: ["MSc Analytical Chemistry", "UKAS Lead Assessor", "ISO 17025 Specialist"],
      expertise: ["Laboratory Management", "Quality Control", "Method Development"],
    },
    {
      name: "Michael Chen",
      role: "Client Relations Manager",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Ensuring exceptional client service and expert guidance on compliance requirements and water safety protocols.",
      qualifications: ["BA Business Management", "NEBOSH General Certificate", "Customer Service Excellence"],
      expertise: ["Client Relations", "Project Management", "Compliance Guidance"],
    },
  ]

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Established by experienced microbiologists with a vision for accessible water safety testing.",
      icon: <Star className="h-5 w-5" />,
    },
    {
      year: "2015",
      title: "UKAS Accreditation",
      description: "Achieved UKAS accreditation, establishing our laboratory as a trusted testing facility.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2018",
      title: "1000+ Clients",
      description: "Reached milestone of serving over 1000 clients across healthcare, hospitality, and education.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      year: "2023",
      title: "Technology Innovation",
      description: "Implemented cutting-edge testing technology and expanded our service capabilities nationwide.",
      icon: <Zap className="h-5 w-5" />,
    },
  ]

  return (
    <>
        <Header />
        
        <GSAPMotionBackground />
        
        <AboutHero />
        

        {/* Mission Section */}
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
            <motion.li className="max-w-5xl mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Mission</h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                To safeguard public health by providing accurate, reliable water quality testing and comprehensive
                legionella control services. We are committed to helping organizations maintain safe water systems through
                scientific excellence and regulatory compliance.
                </p>
            </motion.li>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {values.map((value, index) => (
                <Card >
                    <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                        <div
                        className={`w-12 h-12 rounded-xl ${value.gradient} shadow-lg flex items-center justify-center mb-6`}
                        >
                        {value.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
            <motion.li className="max-w-5xl mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Expertise</h2>
                <p className="text-xl text-gray-600">
                Comprehensive water safety services backed by scientific expertise and regulatory knowledge
                </p>
            </motion.li>

            <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {services.map((service, index) => (
                <Card>
                    <CardContent className="p-10">
                    <div className="flex flex-col items-center text-center">
                        <div
                        className={`w-16 h-16 rounded-2xl ${service.gradient} shadow-xl flex items-center justify-center mb-8`}
                        >
                        {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                        <div className="grid grid-cols-2 gap-3 w-full">
                        {service.features.map((feature, featureIndex) => (
                            <div
                            key={featureIndex}
                            className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 font-medium"
                            >
                            {feature}
                            </div>
                        ))}
                        </div>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Company History Timeline */}
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
            <motion.li className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Journey</h2>
                <p className="text-xl text-gray-600">
                From a small laboratory to a leading provider of water quality testing services
                </p>
            </motion.li>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>

                {milestones.map((milestone, index) => (
                    <motion.div>
                    <div className="relative flex items-start mb-12">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                        {milestone.icon}
                        </div>
                        <div className="ml-8 flex-1">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="text-sm font-bold text-blue-600 mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                        </div>
                        </div>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <motion.li className="max-w-5xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
                    <p className="text-xl text-gray-600">
                    Our experienced professionals combine scientific expertise with practical knowledge to deliver exceptional
                    service
                    </p>
                </motion.li>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                    <Card>
                        <CardContent className="p-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-lg opacity-30"></div>
                                    <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    width={100}
                                    height={100}
                                    className="relative rounded-full border-4 border-white shadow-xl"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                            <div className="space-y-3">
                                <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Qualifications</h4>
                                <div className="flex flex-wrap gap-2">
                                    {member.qualifications.slice(0, 2).map((qual, qualIndex) => (
                                    <Badge key={qualIndex} variant="outline" className="text-xs">
                                        {qual}
                                    </Badge>
                                    ))}
                                </div>
                                </div>
                                <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
                                <div className="flex flex-wrap gap-2">
                                    {member.expertise.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                                    >
                                        {skill}
                                    </span>
                                    ))}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div>
                    <Card className="max-w-5xl mx-auto">
                    <CardContent className="p-16 text-center">
                        <motion.div
                        className="flex justify-center mb-8"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                            <Globe className="h-8 w-8 text-white" />
                        </div>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ready to Ensure Your Water Safety?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Contact our expert team today to discuss your water testing and legionella control requirements
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                            <Phone className="h-5 w-5 mr-3" />
                            Call Us Today
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                            <Mail className="h-5 w-5 mr-3" />
                            Get a Quote
                            </Button>
                        </motion.div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
                        {[
                            { icon: Phone, text: "0800 123 4567" },
                            { icon: Mail, text: "info@aquacheck.co.uk" },
                            { icon: MapPin, text: "Nationwide Coverage" },
                        ].map((contact, index) => (
                            <motion.div
                            key={index}
                            className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            >
                            <contact.icon className="h-5 w-5" />
                            <span className="font-medium">{contact.text}</span>
                            </motion.div>
                        ))}
                        </div>
                    </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    </>
  )
}
