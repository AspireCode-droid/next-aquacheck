'use client'
import { usePathname } from "next/navigation";
import { useState} from "react"
import Link from "next/link"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Droplets, Phone, Mail } from "lucide-react"
import { Star, Shield, Calendar, Info, BookOpen } from "lucide-react"
import clsx from "clsx";
import { useMobileMenu } from "@/context/mobilemenu"


export default function Header( ) {
    const { isMenuOpen, toggleMenu } = useMobileMenu()
    const pathname = usePathname()
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)
    useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
    })

    const menuItems = [
        { id: "/", label: "Home", icon: Star },
        { id: "/services", label: "Services", icon: Shield },
        { id: "/booking", label: "Booking", icon: Calendar },
        { id: "/about", label: "About", icon: Info },
        { id: "/resources", label: "Resources", icon: BookOpen },
        { id: "/contact", label: "Contact", icon: Mail },
    ]
    return (
      <>
        {/* Header with Scroll Animation */}
        <header
          className={`px-4 lg:px-6 h-20 flex items-center justify-between border-b sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-gray-200 shadow-lg"
            : "bg-white/80 backdrop-blur-xl border-gray-100"
        }`}
        >
        <Link href="#home" className="flex items-center justify-center">
          <div className="relative">
            <Droplets
              className={`h-10 w-10 text-blue-600 transition-all duration-300 ${scrolled ? "scale-90" : ""}`}
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <span
            className={`ml-3 font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
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
              href={`${item.id}`}
              className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                pathname === item.id ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button
            className={`bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              scrolled ? "px-4 py-1.5 text-sm" : "px-6 py-2"
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

        {/* Mobile Menu */}
        <div
          className={clsx(
            "lg:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 bg-white/95 backdrop-blur-xl border-l border-gray-100 shadow-2xl transition-all duration-300 ease-in-out z-40",
            isMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
          )}
        >
          <nav className="flex flex-col p-6 space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              const isActive = pathname === item.id

              return (
                <Link
                  key={item.id}
                  href={`${item.id}`}
                  onClick={toggleMenu}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:translate-x-2 ${
                    pathname === item.id
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

            <div className="pt-6 space-y-3">
              <div
                className={`flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100 ${
                  isMenuOpen ? "animate-slideInRight" : ""
                }`}
                style={{ animationDelay: "800ms" }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
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
    </> 
    )
} 
