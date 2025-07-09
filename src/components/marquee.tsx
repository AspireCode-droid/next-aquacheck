
import Marquee from 'react-fast-marquee'
import type { LucideIcon } from "lucide-react"
import {
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
  Microscope,
  FileText,
  Globe,
  Star,
  Zap,
} from "lucide-react"

type MarqueeItem = {
  icon: LucideIcon
  text: string
  shortText: string
  color: string
  bgColor: string
}
type MarqueeItemProps = {
  item: MarqueeItem
}

const marqueeItems: MarqueeItem[] = [
  { icon: Clock, text: "24/7 Emergency Response", shortText: "24/7 Emergency", color: "text-red-600", bgColor: "bg-red-50" },
  { icon: Shield, text: "UKAS Accredited Testing", shortText: "UKAS Accredited", color: "text-blue-600", bgColor: "bg-blue-50" },
  { icon: Award, text: "15+ Years Experience", shortText: "15+ Years", color: "text-green-600", bgColor: "bg-green-50" },
  { icon: CheckCircle, text: "100% HSE Compliance", shortText: "100% Compliant", color: "text-purple-600", bgColor: "bg-purple-50" },
  { icon: Microscope, text: "Advanced PCR Testing", shortText: "PCR Testing", color: "text-cyan-600", bgColor: "bg-cyan-50" },
  { icon: Users, text: "Certified Specialists", shortText: "Certified Team", color: "text-indigo-600", bgColor: "bg-indigo-50" },
  { icon: FileText, text: "Digital Reporting", shortText: "Digital Reports", color: "text-teal-600", bgColor: "bg-teal-50" },
  { icon: Globe, text: "Nationwide Coverage", shortText: "UK Coverage", color: "text-orange-600", bgColor: "bg-orange-50" },
  { icon: Star, text: "5000+ Sites Tested", shortText: "5000+ Sites", color: "text-yellow-600", bgColor: "bg-yellow-50" },
  { icon: Zap, text: "Same-Day Testing", shortText: "Same-Day", color: "text-pink-600", bgColor: "bg-pink-50" },
]

function MarqueeItem({ item }: MarqueeItemProps) {
  const Icon = item.icon
  return (
    <div className="inline-flex items-center gap-2 md:gap-3 mx-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div className={`flex-shrink-0 w-8 h-8 ${item.bgColor} rounded-full flex items-center justify-center`}>
        <Icon className={`h-4 w-4 ${item.color}`} />
      </div>
      <span className="text-gray-700 font-medium text-sm">
        <span className="hidden sm:inline">{item.text}</span>
        <span className="sm:hidden">{item.shortText}</span>
      </span>
    </div>
  )
}

export default function MarqueeContent() {
  return (
    <div className="relative  w-full max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 overflow-hidden rounded-xl md:rounded-2xl border border-blue-100/50 backdrop-blur-sm">
      <Marquee pauseOnHover={true} gradient={true} gradientColor="hsl(0, 0%, 100%)" gradientWidth={60}  speed={20} className="py-2 overflow-y-hidden">
        {marqueeItems.map((item, idx) => (
          <MarqueeItem key={idx} item={item} />
        ))}
      </Marquee>
    </div>
  )
}
