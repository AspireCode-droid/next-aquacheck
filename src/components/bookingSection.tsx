import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Calendar, Phone, Mail, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}

export function BookingSection() {
  return (
    <section id="booking" className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeUp}
        >
          <Badge variant="outline" className="px-4 py-2 bg-white rounded-3xl border-blue-200 text-blue-700">
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
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.4}
            variants={fadeUp}
          >
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Schedule Appointment
                </CardTitle>
                <CardDescription>
                  Choose your preferred date and time for water testing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="preferred-date">Preferred Date</Label>
                    <Input id="preferred-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferred-time">Preferred Time</Label>
                    <Input id="preferred-time" type="time" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Input id="service-type" placeholder="E.g., Legionella Test" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="property-address">Property Address</Label>
                  <Input id="property-address" placeholder="Enter address" />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-full">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
            variants={fadeUp}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
