"use client"

import { Shield, Clock, Award, Users, CheckCircle, Microscope, FileText, Globe, Star, Zap } from "lucide-react"

const marqueeItems = [
  {
    icon: Clock,
    text: "24/7 Emergency Response",
    shortText: "24/7 Emergency",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Shield,
    text: "UKAS Accredited Testing",
    shortText: "UKAS Accredited",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    text: "15+ Years Experience",
    shortText: "15+ Years",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: CheckCircle,
    text: "100% HSE Compliance",
    shortText: "100% Compliant",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Microscope,
    text: "Advanced PCR Testing",
    shortText: "PCR Testing",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Users,
    text: "Certified Specialists",
    shortText: "Certified Team",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: FileText,
    text: "Digital Reporting",
    shortText: "Digital Reports",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Globe,
    text: "Nationwide Coverage",
    shortText: "UK Coverage",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Star,
    text: "5000+ Sites Tested",
    shortText: "5000+ Sites",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Zap,
    text: "Same-Day Testing",
    shortText: "Same-Day",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
]

export default function MarqueeContent() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50/50 via-white to-cyan-50/50 rounded-xl md:rounded-2xl border border-blue-100/50 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap py-2 md:py-4">
        {/* First set of items */}
        {marqueeItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={`first-${index}`}
              className="inline-flex items-center gap-2 md:gap-3 mx-3 md:mx-6 px-3 md:px-4 py-1.5 md:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 ${item.bgColor} rounded-full flex items-center justify-center`}
              >
                <Icon className={`h-3 w-3 md:h-4 md:w-4 ${item.color}`} />
              </div>
              <span className="text-gray-700 font-medium text-xs md:text-sm">
                <span className="hidden sm:inline">{item.text}</span>
                <span className="sm:hidden">{item.shortText}</span>
              </span>
            </div>
          )
        })}

        {/* Duplicate set for seamless loop */}
        {marqueeItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={`second-${index}`}
              className="inline-flex items-center gap-2 md:gap-3 mx-3 md:mx-6 px-3 md:px-4 py-1.5 md:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 ${item.bgColor} rounded-full flex items-center justify-center`}
              >
                <Icon className={`h-3 w-3 md:h-4 md:w-4 ${item.color}`} />
              </div>
              <span className="text-gray-700 font-medium text-xs md:text-sm">
                <span className="hidden sm:inline">{item.text}</span>
                <span className="sm:hidden">{item.shortText}</span>
              </span>
            </div>
          )
        })}
      </div>

      {/* Gradient overlays for smooth fade effect - responsive */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
    </div>
  )
}
