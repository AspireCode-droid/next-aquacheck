"use client"
import '@/styles/index.css'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Droplets,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  ArrowRight,
  Microscope,
  FileText,
  AlertTriangle,
  Star,
  Zap,
  Globe,
  Calendar,
  BookOpen,
  Info,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimate"
import { useActiveSection } from "@/hooks/useActiveSec"
import { ScrollReveal } from "@/components/scrollreveal"
import { StaggeredReveal } from "@/components/staggeredAnimate"
import MarqueeContent from "@/components/marquee"

export default function AquacheckLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY, isScrolled } = useScrollAnimation()
  const activeSection = useActiveSection()
  const parallaxOffset = useParallax(0.3)
  const parallaxOffsetSlow = useParallax(0.1)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { id: "home", label: "Home", icon: Star },
    { id: "services", label: "Services", icon: Shield },
    { id: "booking", label: "Booking", icon: Calendar },
    { id: "about", label: "About", icon: Info },
    { id: "resources", label: "Resources", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with Scroll Animation */}
      <header
        className={`px-4 lg:px-6 h-20 flex items-center justify-between border-b sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-gray-200 shadow-lg"
            : "bg-white/80 backdrop-blur-xl border-gray-100"
        }`}
      >
        <Link href="#home" className="flex items-center justify-center">
          <div className="relative">
            <Droplets
              className={`h-10 w-10 text-blue-600 transition-all duration-300 ${isScrolled ? "scale-90" : ""}`}
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <span
            className={`ml-3 font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Aquacheck
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeSection === item.id ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button
            className={`bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              isScrolled ? "px-4 py-1.5 text-sm" : "px-6 py-2"
            }`}
          >
            Get Quote
          </Button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 bg-white/95 backdrop-blur-xl border-l border-gray-100 shadow-2xl transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col p-6 space-y-4">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={toggleMenu}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:translate-x-2 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-200 shadow-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  } ${isMenuOpen ? "animate-slideInRight" : ""}`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <Icon
                    className={`h-5 w-5 transition-colors duration-300 ${isActive ? "text-blue-600" : "text-gray-500"}`}
                  />
                  <span className={`font-medium ${isActive ? "font-semibold" : ""}`}>{item.label}</span>
                  {isActive && <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>}
                </Link>
              )
            })}

            <div className="pt-6 border-t border-gray-200">
              <Button
                onClick={toggleMenu}
                className={`w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isMenuOpen ? "animate-slideInRight" : ""
                }`}
                style={{ animationDelay: "700ms" }}
              >
                Get Quote
              </Button>
            </div>

            <div className="pt-6 space-y-4">
              <div
                className={`flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100 ${
                  isMenuOpen ? "animate-slideInRight" : ""
                }`}
                style={{ animationDelay: "800ms" }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-red-900 text-sm">Emergency</div>
                  <div className="text-red-700 text-xs">0800 123 4567</div>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 ${
                  isMenuOpen ? "animate-slideInRight" : ""
                }`}
                style={{ animationDelay: "900ms" }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-blue-900 text-sm">Email</div>
                  <div className="text-blue-700 text-xs">info@aquacheck.co.uk</div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content with Blur Effect */}
      <main className={`flex-1 transition-all duration-300 ${isMenuOpen ? "blur-sm" : ""}`}>
        {/* Hero Section with Parallax */}
        {/* Hero Section with Parallax - Mobile Responsive */}
        <section id="home" className="relative w-full py-12 md:py-14 lg:py-20 xl:py-40 overflow-hidden ">
          {/* Parallax Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50"></div>
          <div
            className="absolute top-10 md:top-20 left-5 md:left-10 w-32 h-32 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          ></div>
          <div
            className="absolute top-20 md:top-40 right-5 md:right-10 w-32 h-32 md:w-72 md:h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{ transform: `translateY(${-parallaxOffset * 0.8}px)` }}
          ></div>
          <div
            className="absolute bottom-10 md:bottom-20 left-1/2 w-32 h-32 md:w-72 md:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
          ></div>

          <div className="relative container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-2 items-center">
              <div className="flex flex-col justify-center items-center space-y-6 md:space-y-8 text-center lg:text-left">
                <ScrollReveal direction="up" delay={200}>
                  <div className="space-y-4 md:space-y-6">
                    <Badge
                      variant="outline"
                      className="w-fit mx-auto lg:mx-0 px-3 py-1.5 md:px-4 md:py-2 bg-white/50 backdrop-blur-sm border-blue-200 text-blue-700 font-medium text-xs md:text-sm"
                    >
                      <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      Certified Water Safety Experts
                    </Badge>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={400}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                      Professional Water Testing &
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Legionella Control
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={600}>
                  <p className="max-w-[600px] mx-auto lg:mx-0 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-4 lg:px-0">
                    Protect your business and customers with comprehensive water testing services. Expert legionella
                    risk assessments, monitoring, and compliance solutions.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={800}>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start px-4 lg:px-0">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Schedule Testing
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-300 bg-transparent"
                    >
                      <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      Emergency Response
                    </Button>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={1000}>
                  <div className="relative overflow-hidden bg-white/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 p-3 md:p-6 mx-4 lg:mx-0">
                    <div className="flex items-center justify-center">
                      <div className="relative w-full max-w-2xl">
                        <MarqueeContent />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={600}>
                <div className="relative order-first lg:order-last">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl opacity-20"
                    style={{ transform: `translateY(${parallaxOffsetSlow}px)` }}
                  ></div>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width="500"
                    height="400"
                    alt="Water testing laboratory"
                    className="relative mx-auto rounded-2xl md:rounded-3xl object-cover shadow-xl md:shadow-2xl border border-white/20 w-full max-w-md md:max-w-none"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
                <Badge variant="outline" className="px-4 py-2 bg-blue-50 border-blue-200 text-blue-700">
                  Our Services
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                    Comprehensive Water Safety
                  </span>
                </h2>
                <p className="max-w-[800px] text-xl text-gray-600 leading-relaxed">
                  From routine testing to emergency response, we provide complete water safety solutions for businesses
                  across all industries.
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal staggerDelay={200} className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
              <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5"></div>
                <CardHeader className="relative pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Microscope className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Legionella Testing</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Comprehensive legionella bacteria testing and risk assessment for water systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Culture & PCR Testing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Risk Assessment Reports</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Compliance Monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-teal-600/5"></div>
                <CardHeader className="relative pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Water System Management</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Complete water system monitoring and maintenance programs
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Temperature Monitoring</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Chemical Treatment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">System Cleaning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-600/5"></div>
                <CardHeader className="relative pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Compliance & Reporting</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Detailed reporting and regulatory compliance support
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">HSE Compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Digital Certificates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Audit Support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggeredReveal>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container px-4 md:px-6">
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
                <Badge variant="outline" className="px-4 py-2 bg-white border-blue-200 text-blue-700">
                  Book Your Service
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                    Schedule Your Water Testing
                  </span>
                </h2>
                <p className="max-w-[800px] text-xl text-gray-600 leading-relaxed">
                  Book your water testing appointment online or contact our team for emergency services
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              <ScrollReveal direction="right" delay={400}>
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      Schedule Appointment
                    </CardTitle>
                    <CardDescription>Choose your preferred date and time for water testing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input placeholder="Preferred Date" type="date" />
                      <Input placeholder="Preferred Time" type="time" />
                    </div>
                    <Input placeholder="Service Type" />
                    <Input placeholder="Property Address" />
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-full">
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={600}>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Booking Options</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <Phone className="mr-3 h-5 w-5" />
                          Call to Book: 0800 123 4567
                        </Button>
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          <Mail className="mr-3 h-5 w-5" />
                          Email: bookings@aquacheck.co.uk
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-gradient-to-r from-red-50 to-orange-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Emergency Service
                      </h3>
                      <p className="text-red-700 mb-4">
                        Need immediate water testing? Our emergency team is available 24/7
                      </p>
                      <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
                        Emergency Booking
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
                <Badge variant="outline" className="px-4 py-2 bg-blue-50 border-blue-200 text-blue-700">
                  About Aquacheck
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                    Water Safety Experts
                  </span>
                </h2>
                <p className="max-w-[800px] text-xl text-gray-600 leading-relaxed">
                  With over 15 years of experience, we're the UK's leading water testing and legionella control
                  specialists
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-center">
              <ScrollReveal direction="right" delay={400}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To protect businesses and communities through comprehensive water safety solutions, ensuring
                    compliance with health regulations and providing peace of mind through expert testing and monitoring
                    services.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">Certified Experts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">Fully Insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">Experienced Team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">UK Coverage</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={600}>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width="500"
                    height="400"
                    alt="Aquacheck team"
                    className="rounded-3xl object-cover shadow-2xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="w-full py-20 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
                <Badge variant="outline" className="px-4 py-2 bg-white border-gray-200 text-gray-700">
                  Resources & Guides
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                    Knowledge Center
                  </span>
                </h2>
                <p className="max-w-[800px] text-xl text-gray-600 leading-relaxed">
                  Access our comprehensive library of water safety guides, compliance documents, and industry insights
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal staggerDelay={200} className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Compliance Guides</CardTitle>
                  <CardDescription>Essential guides for water safety compliance and regulations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Guides
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <FileText className="h-12 w-12 text-cyan-600 mb-4" />
                  <CardTitle>Safety Checklists</CardTitle>
                  <CardDescription>Comprehensive checklists for water system maintenance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Checklists
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Award className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Our accreditations and industry certifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Certificates
                  </Button>
                </CardContent>
              </Card>
            </StaggeredReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto">
              <ScrollReveal direction="right" delay={200}>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <Badge variant="outline" className="px-4 py-2 bg-white border-blue-200 text-blue-700">
                      Get In Touch
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                      <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                        Contact Our Experts
                      </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      Ready to ensure your water systems are safe and compliant? Get in touch with our certified experts
                      today.
                    </p>
                  </div>

                  <StaggeredReveal staggerDelay={150} className="space-y-6">
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-gray-900">Emergency: 0800 123 4567</div>
                          <div className="text-gray-600">24/7 Emergency Response</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-gray-900">info@aquacheck.co.uk</div>
                          <div className="text-gray-600">General Enquiries</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-gray-900">Nationwide Coverage</div>
                          <div className="text-gray-600">UK-wide service network</div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredReveal>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={400}>
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900">Request a Quote</CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      Get a free consultation and quote for your water testing needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        placeholder="First Name"
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <Input
                        placeholder="Last Name"
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <Input
                      placeholder="Company Name"
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Input
                      placeholder="Property Type (e.g., Hotel, Office, Hospital)"
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Request Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <ScrollReveal direction="up" delay={200}>
        <footer className="w-full py-12 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Droplets className="h-8 w-8 text-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Aquacheck
                </span>
              </div>
              <p className="text-gray-300 text-center">
                © 2024 Aquacheck Ltd. All rights reserved. Certified water testing specialists.
              </p>
              <nav className="flex gap-6">
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Certifications
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  )
}
