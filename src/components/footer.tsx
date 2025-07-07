import { Droplets, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">Aquacheck</span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Leading provider of water quality monitoring solutions with specialized expertise in legionella
                  control and UK regulatory compliance. Trusted by professionals across healthcare, hospitality, and
                  industrial sectors.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>ISO 27001 Certified | SOC 2 Type II</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-blue-400">Resources</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Legionella Control
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      UK Regulations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Technical Standards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Video Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Compliance Tools
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-cyan-400">Support</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Expert Consultation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Emergency Response
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Training Programs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      System Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Community Forum
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-teal-400">Legal</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      HSE L8 Compliance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      COSHH Regulations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Data Protection
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0">
                  &copy; 2024 Aquacheck. All rights reserved. | Registered in England & Wales
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Emergency Hotline: 0800 123 4567</span>
                  <span>|</span>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
        </div>
    </footer>
    );
}