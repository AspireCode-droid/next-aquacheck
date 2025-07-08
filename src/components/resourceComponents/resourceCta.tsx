


import { Shield, Calendar, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ResourceCta() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Decorative Floating Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-white" />
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            Expert Support Available
          </Badge>
        </div>

        <h3 className="text-4xl font-bold text-white mb-6">Need Expert Guidance?</h3>
        <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
          Our team of water quality specialists and regulatory experts are here to help you achieve full compliance
          with UK legionella control requirements and optimize your monitoring systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            <Calendar className="w-5 h-5 mr-2" />
            Book Consultation
          </Button>

          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            <Download className="w-5 h-5 mr-2" />
            Download Compliance Guide
          </Button>

          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            Emergency Support
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
