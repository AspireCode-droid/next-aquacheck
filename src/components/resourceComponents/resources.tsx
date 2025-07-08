"use client"

import { useState } from "react"
import { Search, Book, PlayCircle, HelpCircle, FileText, ExternalLink, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AquacheckResources() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("documentation")

  const documentationItems = [
    {
      title: "Getting Started Guide",
      description: "Complete introduction to Aquacheck platform and setup process",
      category: "Basics",
      readTime: "10 min",
      type: "guide",
    },
    {
      title: "API Reference",
      description: "Comprehensive API documentation with endpoints and examples",
      category: "Technical",
      readTime: "25 min",
      type: "reference",
    },
    {
      title: "Sensor Configuration",
      description: "How to configure and calibrate water quality sensors",
      category: "Hardware",
      readTime: "15 min",
      type: "guide",
    },
    {
      title: "Data Analytics Dashboard",
      description: "Understanding charts, graphs, and data visualization features",
      category: "Features",
      readTime: "12 min",
      type: "guide",
    },
    {
      title: "Alert System Setup",
      description: "Configure notifications and alerts for water quality thresholds",
      category: "Features",
      readTime: "8 min",
      type: "guide",
    },
    {
      title: "Integration Protocols",
      description: "Connect Aquacheck with third-party systems and databases",
      category: "Technical",
      readTime: "20 min",
      type: "reference",
    },
  ]

  const tutorialItems = [
    {
      title: "Platform Overview",
      description: "Complete walkthrough of the Aquacheck interface",
      duration: "12:30",
      level: "Beginner",
      type: "video",
    },
    {
      title: "Installing Your First Sensor",
      description: "Step-by-step sensor installation and setup process",
      duration: "18:45",
      level: "Beginner",
      type: "video",
    },
    {
      title: "Creating Custom Reports",
      description: "Build personalized water quality reports and dashboards",
      duration: "15:20",
      level: "Intermediate",
      type: "video",
    },
    {
      title: "Advanced Data Analysis",
      description: "Deep dive into analytics tools and trend analysis",
      duration: "22:10",
      level: "Advanced",
      type: "video",
    },
    {
      title: "Mobile App Tutorial",
      description: "Using Aquacheck on mobile devices for field monitoring",
      duration: "9:15",
      level: "Beginner",
      type: "video",
    },
    {
      title: "Troubleshooting Common Issues",
      description: "Identify and resolve typical platform problems",
      duration: "14:30",
      level: "Intermediate",
      type: "video",
    },
  ]

  const faqItems = [
    {
      question: "How accurate are the water quality measurements?",
      answer:
        "Aquacheck sensors provide laboratory-grade accuracy with ±2% precision for most parameters. Our sensors are calibrated using NIST-traceable standards and undergo regular quality assurance testing.",
    },
    {
      question: "What water parameters can Aquacheck monitor?",
      answer:
        "Aquacheck can monitor pH, dissolved oxygen, turbidity, temperature, conductivity, chlorine levels, nitrates, phosphates, and many other parameters depending on your sensor configuration.",
    },
    {
      question: "How often should I calibrate my sensors?",
      answer:
        "We recommend calibrating sensors monthly for critical applications, or quarterly for general monitoring. The platform will automatically remind you when calibration is due.",
    },
    {
      question: "Can I integrate Aquacheck with my existing systems?",
      answer:
        "Yes, Aquacheck offers REST APIs, webhooks, and direct database connections. We support integration with most SCADA systems, databases, and third-party applications.",
    },
    {
      question: "What happens if my internet connection is lost?",
      answer:
        "Aquacheck devices have local storage capabilities and will continue collecting data offline. Once connectivity is restored, all data is automatically synchronized to the cloud.",
    },
    {
      question: "How do I set up automated alerts?",
      answer:
        "Navigate to the Alerts section in your dashboard, define your threshold parameters, and configure notification methods (email, SMS, or webhook). You can set up multiple alert conditions and escalation procedures.",
    },
    {
      question: "Is my data secure and compliant?",
      answer:
        "Yes, Aquacheck is SOC 2 Type II certified and complies with GDPR, HIPAA, and other relevant regulations. All data is encrypted in transit and at rest using industry-standard protocols.",
    },
    {
      question: "Can I export my historical data?",
      answer:
        "Absolutely. You can export data in various formats including CSV, JSON, and PDF reports. Historical data can be exported for any date range through the dashboard or API.",
    },
  ]

  const filteredContent = (items: any[]) => {
    if (!searchQuery) return items
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200/40 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/25 rounded-full animate-float"></div>

        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q200,50 400,100 T800,100 L800,120 Q600,70 400,120 T0,120 Z"
            fill="url(#flowGradient)"
            className="animate-wave"
          />
          <path
            d="M0,200 Q300,150 600,200 T1200,200 L1200,220 Q900,170 600,220 T0,220 Z"
            fill="url(#flowGradient)"
            className="animate-wave-delayed"
          />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Aquacheck</h1>
                  <p className="text-sm text-gray-600">Resources & Documentation</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Dashboard
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Support
                </a>
                <a href="#" className="text-blue-600 font-medium">
                  Resources
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Everything You Need to Know About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {" "}
                Aquacheck
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delayed">
              Comprehensive documentation, tutorials, and support resources to help you master water quality monitoring
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in-delayed-2">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search documentation, tutorials, FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-blue-200 focus:border-blue-400 rounded-xl bg-white/90 backdrop-blur-sm"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-delayed-3">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Documentation Articles</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-100">
                <div className="text-3xl font-bold text-cyan-600 mb-2">25+</div>
                <div className="text-gray-600">Video Tutorials</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-teal-100">
                <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
                <div className="text-gray-600">FAQ Answers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12 bg-white/80 backdrop-blur-sm">
                <TabsTrigger value="documentation" className="flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  <span className="hidden sm:inline">Documentation</span>
                </TabsTrigger>
                <TabsTrigger value="tutorials" className="flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Tutorials</span>
                </TabsTrigger>
                <TabsTrigger value="faqs" className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">FAQs</span>
                </TabsTrigger>
              </TabsList>

              {/* Documentation Tab */}
              <TabsContent value="documentation" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Documentation</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Comprehensive guides and technical documentation to help you understand and implement Aquacheck
                    solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent(documentationItems).map((item, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-blue-100 hover:border-blue-200 hover:-translate-y-1"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <FileText className="w-8 h-8 text-blue-500 mb-3" />
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            {item.category}
                          </Badge>
                        </div>
                        <CardTitle className="group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.readTime} read</span>
                          <Button variant="ghost" size="sm" className="group-hover:bg-blue-50">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Tutorials Tab */}
              <TabsContent value="tutorials" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Step-by-step video guides to help you get the most out of your Aquacheck platform
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent(tutorialItems).map((item, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-cyan-100 hover:border-cyan-200 hover:-translate-y-1"
                    >
                      <CardHeader>
                        <div className="relative">
                          <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                            <PlayCircle className="w-12 h-12 text-cyan-600" />
                          </div>
                          <Badge
                            variant="secondary"
                            className={`absolute top-2 right-2 ${
                              item.level === "Beginner"
                                ? "bg-green-100 text-green-700"
                                : item.level === "Intermediate"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.level}
                          </Badge>
                        </div>
                        <CardTitle className="group-hover:text-cyan-600 transition-colors">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.duration}</span>
                          <Button variant="ghost" size="sm" className="group-hover:bg-cyan-50">
                            Watch Now
                            <PlayCircle className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* FAQs Tab */}
              <TabsContent value="faqs" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Find quick answers to common questions about Aquacheck platform and services
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredContent(faqItems).map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-white/80 backdrop-blur-sm border border-teal-100 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:text-teal-600 transition-colors">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto text-center relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Need More Help?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed with Aquacheck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Schedule Demo
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full opacity-90"></div>
                  </div>
                  <span className="text-xl font-bold">Aquacheck</span>
                </div>
                <p className="text-gray-400">Advanced water quality monitoring solutions for a sustainable future.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      System Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Aquacheck. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        
        @keyframes wave {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(100px); }
        }
        
        @keyframes wave-delayed {
          0% { transform: translateX(100px); }
          100% { transform: translateX(-100px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed-2 {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed-3 {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        
        .animate-wave-delayed {
          animation: wave-delayed 20s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.2s both;
        }
        
        .animate-fade-in-delayed-2 {
          animation: fade-in-delayed-2 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-delayed-3 {
          animation: fade-in-delayed-3 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  )
}
