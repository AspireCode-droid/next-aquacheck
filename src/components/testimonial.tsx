
import Image from "next/image"
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card'
import {Star } from 'lucide-react'

export default function Testimonials(){
    return(
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our clients about how AquaCheck has helped them maintain water safety and regulatory compliance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Metropolitan Hospital"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <CardTitle className="text-lg">Metropolitan Hospital</CardTitle>
                    <CardDescription>Healthcare Facility</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "AquaCheck's comprehensive Legionella risk assessment identified critical issues in our cooling
                  towers. Their remediation plan was thorough and effective, ensuring patient safety while maintaining
                  compliance with healthcare regulations."
                </p>
                <p className="text-sm text-gray-500">- David Chen, Facilities Manager</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Grand Plaza Hotel"
                    width={60}
                    height={60}
                    className="rounded-lg"
                    />
                  <div>
                    <CardTitle className="text-lg">Grand Plaza Hotel</CardTitle>
                    <CardDescription>Hospitality</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The team at AquaCheck provided exceptional service during our water system upgrade. Their testing
                  protocols and ongoing monitoring have given us complete confidence in our water safety management."
                </p>
                <p className="text-sm text-gray-500">- Sarah Williams, General Manager</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="TechCorp Industries"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <CardTitle className="text-lg">TechCorp Industries</CardTitle>
                    <CardDescription>Manufacturing</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "AquaCheck's rapid response to our water quality concerns was impressive. Their detailed analysis and
                  clear recommendations helped us resolve issues quickly and prevent any operational disruptions."
                </p>
                <p className="text-sm text-gray-500">- Michael Brown, Plant Manager</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="City Council"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <CardTitle className="text-lg">Riverside City Council</CardTitle>
                    <CardDescription>Public Sector</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Working with AquaCheck on our public building water safety program has been excellent. Their
                  expertise and professionalism have helped us maintain the highest standards across all our
                  facilities."
                </p>
                <p className="text-sm text-gray-500">- Lisa Anderson, Environmental Health Officer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}