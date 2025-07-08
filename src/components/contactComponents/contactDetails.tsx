
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function ContactDetails(){
    return(
        <div className="border-0 shadow-xl bg-white/80 backdrop-blur-xl mx-auto rounded-2xl">
            <div className="text-left md:text-center space-y-4 px-6 py-6">
                <h2 className="text-2xl text-gray-800 font-semibold">Contact Information</h2>
                <p className="text-slate-700">Reach out to us through any of the following methods.</p>    
            </div>
            <div className="grid md:grid-cols-3 gap-8 mx-auto mb-12 px-6 md:mt-6 md:px-16">
                <div className="flex items-start gap-4 group">
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-3 rounded-2xl group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                        <MapPin className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Office Address</h3>
                        <p className="text-slate-600 leading-relaxed">
                        1234 Water Quality Drive
                        <br />
                        Suite 100
                        <br />
                        Clean City, CC 12345
                        <br />
                        United States
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                        <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Phone Number</h3>
                        <p className="text-slate-600 font-medium">+1 (555) 123-AQUA</p>
                        <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Monday - Friday: 8:00 AM - 6:00 PM EST
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-3 rounded-2xl group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300">
                        <Mail className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Email Address</h3>
                        <p className="text-slate-600 font-medium">info@aquacheck.com</p>
                        <p className="text-sm text-slate-500 mt-1">We typically respond within 24 hours</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}