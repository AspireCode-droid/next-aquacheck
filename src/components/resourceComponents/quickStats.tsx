import { Shield, Microscope, Scale } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function QuickStats() {
  const stats = [
    { icon: Shield, value: "100%", label: "UK Compliant", color: "blue-600", bg: "bg-blue-100" },
    { icon: Microscope, value: "75+", label: "Scientific Guides", color: "cyan-600", bg: "bg-cyan-100" },
    { icon: Scale, value: "25+", label: "Legal Resources", color: "teal-600", bg: "bg-teal-100" },
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
                <Card key={i} className="p-6 bg-gray-50 shadow-md hover:shadow-lg transition-shadow border border-white">
                    <div className="flex flex-col items-center justify-center text-center space-y-3">
                        <div className={`p-3 rounded-full ${stat.bg}`}>
                        <Icon className={`w-6 h-6 text-${stat.color}`} />
                        </div>
                        <h3 className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</h3>
                        <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
                    </div>
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
