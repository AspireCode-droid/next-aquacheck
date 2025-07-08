
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Expertise(){
    return(
        <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive water safety services backed by decades of experience and cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex flex-col ">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Water Testing & Analysis</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Legionella Testing</h4>
                    <p className="text-gray-600">
                      Comprehensive detection and quantification of Legionella bacteria in water systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Microbiological Analysis</h4>
                    <p className="text-gray-600">
                      Complete microbial testing including bacteria, fungi, and other pathogens
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Chemical Analysis</h4>
                    <p className="text-gray-600">
                      Water chemistry testing for pH, chlorine, metals, and other parameters
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/Testing.jpg"
                alt="Laboratory testing equipment"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/Consultation.png"
                alt="Risk assessment consultation"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Risk Assessment & Remediation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Legionella Risk Assessments</h4>
                    <p className="text-gray-600">
                      Comprehensive evaluation of water systems and identification of risk factors
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Remediation Strategies</h4>
                    <p className="text-gray-600">
                      Tailored solutions for water system disinfection and ongoing control
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance Support</h4>
                    <p className="text-gray-600">Guidance on regulatory requirements and industry best practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}