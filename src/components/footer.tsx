import { Droplets, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AquaCheck</span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading specialists in water testing and Legionella control, protecting public health through expert
                water safety solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Water Testing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Legionella Control
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Risk Assessment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Remediation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+44 (0) 123 456 7890</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@aquacheck.co.uk</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>London, United Kingdom</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AquaCheck Ltd. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    );
}