import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Side */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.2}
            variants={fadeUp}
          >
            <div className="space-y-6">
              <Badge variant="outline" className="px-4 py-2 rounded-2xl bg-white border-blue-200 text-blue-700">
                Get In Touch
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  Contact Our Experts
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to ensure your water systems are safe and compliant? Get in touch with our certified experts
                today.
              </p>
            </div>

            {/* Contact Info Cards */}
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                {
                  icon: <Phone className="h-6 w-6 text-white" />,
                  bg: "from-red-500 to-orange-500",
                  title: "Emergency: 0800 123 4567",
                  desc: "24/7 Emergency Response",
                },
                {
                  icon: <Mail className="h-6 w-6 text-white" />,
                  bg: "from-blue-600 to-cyan-600",
                  title: "info@aquacheck.co.uk",
                  desc: "General Enquiries",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-white" />,
                  bg: "from-teal-600 to-blue-600",
                  title: "Nationwide Coverage",
                  desc: "UK-wide service network",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.bg} rounded-xl flex items-center justify-center`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900">{item.title}</div>
                        <div className="text-gray-600">{item.desc}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Quote Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.4}
            variants={fadeUp}
          >
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">Request a Quote</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Get a free consultation and quote for your water testing needs
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="First Name" className="border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                  <Input placeholder="Last Name" className="border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <Input placeholder="Company Name" className="border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                <Input type="email" placeholder="Email Address" className="border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                <Input type="tel" placeholder="Phone Number" className="border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                <Input placeholder="Property Type (e.g., Hotel, Office, Hospital)" className="border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                <Button className="mx-4 items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Request Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
