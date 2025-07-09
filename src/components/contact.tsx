
import {Button} from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
export default function ContactCta(){
    return(
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">Ready to Ensure Your Water Safety?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 ">
              Contact AquaCheck today for a comprehensive water safety consultation. Our experts are ready to help you
              protect your facility and comply with regulations.
              </p>

              <div className="flex flex-col sm:flex-row space-y-6 justify-center mb-12 px-12">
                <Button size="lg" variant="outline" className="bg-gray-700 shadow-sm rounded-2xl border-white text-teal-600 hover:bg-gray-100">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +44 (0) 123 456 7890
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-200 shadow-sm text-gray-700 rounded-2xl hover:bg-white hover:text-blue-600 bg-transparent"
                >
                    <Mail className="mr-2 h-5 w-5" />
                    Email: info@aquacheck.co.uk
                </Button>
              </div>
            </div>
          </div>
        </section>
    );
};