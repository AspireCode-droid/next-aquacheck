"use client"

import { useState } from "react"
import {
  Search,
  Book,
  PlayCircle,
  HelpCircle,
  FileText,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Shield,
  TrendingUp,
  Scale,
  Microscope,
  Thermometer,
  Droplets,
  BarChart3,
  Calendar,
  Download,
  Filter,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function AquacheckLegionellaResources() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("documentation")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const documentationItems = [
    {
      title: "Legionella Risk Assessment Guide",
      description: "Comprehensive guide to conducting legionella risk assessments in compliance with HSE L8 guidelines",
      category: "Legionella Control",
      readTime: "25 min",
      type: "guide",
      priority: "high",
      regulation: "HSE L8",
    },
    {
      title: "Water Temperature Monitoring Standards",
      description: "Technical specifications for continuous temperature monitoring to prevent legionella growth",
      category: "Technical Standards",
      readTime: "15 min",
      type: "reference",
      priority: "high",
      regulation: "BS 8580",
    },
    {
      title: "UK Water Quality Regulations 2016",
      description: "Complete overview of UK water quality regulations and compliance requirements",
      category: "Legal Compliance",
      readTime: "30 min",
      type: "legal",
      priority: "critical",
      regulation: "WQR 2016",
    },
    {
      title: "Biocide Treatment Protocols",
      description: "Best practices for chemical treatment and disinfection in water systems",
      category: "Treatment Methods",
      readTime: "20 min",
      type: "guide",
      priority: "medium",
      regulation: "HSE L8",
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Understanding predictive analytics and trend analysis for water quality management",
      category: "Analytics",
      readTime: "18 min",
      type: "guide",
      priority: "medium",
      regulation: "N/A",
    },
    {
      title: "Cooling Tower Management",
      description: "Specialized guidance for legionella control in cooling tower systems",
      category: "Legionella Control",
      readTime: "22 min",
      type: "guide",
      priority: "high",
      regulation: "HSE L8",
    },
    {
      title: "Water System Validation",
      description: "Validation procedures for new and modified water systems",
      category: "Technical Standards",
      readTime: "28 min",
      type: "reference",
      priority: "high",
      regulation: "HTM 04-01",
    },
    {
      title: "Emergency Response Procedures",
      description: "Protocols for responding to legionella incidents and outbreaks",
      category: "Emergency Response",
      readTime: "12 min",
      type: "guide",
      priority: "critical",
      regulation: "HSE L8",
    },
  ]

  const tutorialItems = [
    {
      title: "Legionella Risk Assessment Walkthrough",
      description: "Complete step-by-step process for conducting professional risk assessments",
      duration: "28:45",
      level: "Advanced",
      type: "video",
      category: "Legionella Control",
      compliance: "HSE L8",
    },
    {
      title: "Temperature Monitoring Setup",
      description: "Installing and configuring temperature sensors for legionella prevention",
      duration: "15:30",
      level: "Intermediate",
      type: "video",
      category: "Installation",
      compliance: "BS 8580",
    },
    {
      title: "Water Quality Data Interpretation",
      description: "Understanding and analyzing water quality parameters and trends",
      duration: "22:15",
      level: "Intermediate",
      type: "video",
      category: "Analytics",
      compliance: "N/A",
    },
    {
      title: "Compliance Reporting Tools",
      description: "Generating regulatory compliance reports for UK authorities",
      duration: "18:20",
      level: "Beginner",
      type: "video",
      category: "Compliance",
      compliance: "WQR 2016",
    },
    {
      title: "Biocide Dosing Control",
      description: "Automated chemical dosing systems for legionella control",
      duration: "25:10",
      level: "Advanced",
      type: "video",
      category: "Treatment",
      compliance: "HSE L8",
    },
    {
      title: "Mobile Monitoring Applications",
      description: "Using mobile apps for field testing and data collection",
      duration: "12:45",
      level: "Beginner",
      type: "video",
      category: "Mobile",
      compliance: "N/A",
    },
  ]

  const faqItems = [
    {
      question: "What are the legal requirements for legionella control in the UK?",
      answer:
        "Under the Health and Safety at Work Act 1974 and Control of Substances Hazardous to Health Regulations 2002 (COSHH), duty holders must assess and control the risk of exposure to legionella. The HSE L8 Approved Code of Practice provides detailed guidance on compliance requirements, including risk assessment, monitoring, and record-keeping obligations.",
      category: "Legal Compliance",
      regulation: "HSE L8, COSHH",
    },
    {
      question: "How often should legionella risk assessments be reviewed?",
      answer:
        "Risk assessments should be reviewed at least every two years, or sooner if there are significant changes to the water system, building use, or following any incidents. The HSE L8 guidance recommends more frequent reviews for high-risk systems such as healthcare facilities.",
      category: "Risk Assessment",
      regulation: "HSE L8",
    },
    {
      question: "What temperature ranges prevent legionella growth?",
      answer:
        "Legionella bacteria multiply between 20-45°C, with optimal growth at 37°C. Hot water should be stored at 60°C and distributed at 50°C or higher. Cold water should be stored and distributed below 20°C. Temperature monitoring should be continuous with automated alerts for deviations.",
      category: "Temperature Control",
      regulation: "BS 8580",
    },
    {
      question: "What are the penalties for non-compliance with UK water quality regulations?",
      answer:
        "Non-compliance can result in unlimited fines, imprisonment up to 2 years, or both. The HSE can issue improvement or prohibition notices, and in serious cases, prosecute under health and safety legislation. Recent cases have seen fines exceeding £1 million for major breaches.",
      category: "Legal Compliance",
      regulation: "HSWA 1974",
    },
    {
      question: "How does Aquacheck help with regulatory compliance?",
      answer:
        "Aquacheck provides automated compliance monitoring, generates regulatory reports, maintains audit trails, and sends alerts for parameter deviations. The system includes templates for HSE L8 risk assessments and automatically logs all required data for regulatory inspections.",
      category: "Platform Features",
      regulation: "Multiple",
    },
    {
      question: "What biocides are approved for legionella control in the UK?",
      answer:
        "Approved biocides include chlorine dioxide, sodium hypochlorite, and UV treatment systems. All biocides must be registered under the Biocidal Products Regulation (BPR). Dosing must be controlled and monitored, with residual levels maintained within safe parameters for both efficacy and safety.",
      category: "Treatment Methods",
      regulation: "BPR, HSE L8",
    },
    {
      question: "How can I interpret water quality trend data?",
      answer:
        "Look for patterns in temperature fluctuations, pH variations, and biocide residuals. Sudden changes may indicate system issues. Aquacheck's analytics identify correlations between parameters and provide predictive insights. Regular trending helps optimize treatment and prevent compliance issues.",
      category: "Data Analysis",
      regulation: "N/A",
    },
    {
      question: "What records must be kept for legionella compliance?",
      answer:
        "Records must include risk assessments, monitoring results, maintenance activities, training records, and incident reports. Records should be kept for at least 5 years and be readily available for HSE inspections. Digital records with timestamps and audit trails are recommended.",
      category: "Record Keeping",
      regulation: "HSE L8",
    },
  ]

  const trendsData = [
    {
      title: "Predictive Analytics",
      description: "AI-powered prediction of legionella risk based on environmental conditions",
      trend: "+45%",
      impact: "High",
      adoption: 78,
    },
    {
      title: "IoT Sensor Networks",
      description: "Wireless sensor deployment for comprehensive water system monitoring",
      trend: "+62%",
      impact: "High",
      adoption: 85,
    },
    {
      title: "Real-time Compliance",
      description: "Automated regulatory reporting and compliance verification",
      trend: "+38%",
      impact: "Critical",
      adoption: 92,
    },
    {
      title: "Mobile Diagnostics",
      description: "Portable testing equipment with instant data synchronization",
      trend: "+29%",
      impact: "Medium",
      adoption: 67,
    },
  ]

  // Generic filter that safely searches across multiple possible fields
  const filteredContent = (items: any[]) => {
    let filtered = items

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter((item) => {
        const searchableText = [
          item.title,
          item.question,
          item.description,
          item.answer,
          item.category,
          item.regulation,
        ]
          .filter(Boolean) // remove undefined / null
          .join(" ")
          .toLowerCase()

        return searchableText.includes(q)
      })
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter((item) => item.category === filterCategory)
    }

    if (filterType !== "all") {
      filtered = filtered.filter((item) => item.type === filterType)
    }

    return filtered
  }

  const getUniqueCategories = (items: any[]) => {
    const categories = items.map((item) => item.category).filter(Boolean)
    return [...new Set(categories)]
  }

  const getUniqueTypes = (items: any[]) => {
    const types = items.map((item) => item.type).filter(Boolean)
    return [...new Set(types)]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200/40 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/25 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full animate-pulse-slow"></div>

        {/* Scientific Molecule Animation */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 animate-spin-slow">
          <div className="absolute inset-0 border-2 border-blue-300/30 rounded-full"></div>
          <div className="absolute top-2 left-2 w-4 h-4 bg-blue-400/50 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-cyan-400/50 rounded-full"></div>
        </div>

        {/* Flowing Lines with Scientific Pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.1" />
            </linearGradient>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgb(59, 130, 246)" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
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
        {/* Enhanced Header */}
        <header className="bg-white/90 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Aquacheck</h1>
                  <p className="text-sm text-gray-600">Legionella Control & Water Quality Resources</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Dashboard
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Compliance
                </a>
                <a href="#" className="text-blue-600 font-medium flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  Resources
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-5xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                UK Regulatory Compliant
              </Badge>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Master
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {" "}
                Legionella Control
              </span>
              <br />& Water Quality Monitoring
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delayed max-w-3xl mx-auto">
              Comprehensive resources for UK water quality professionals. Expert guidance on legionella prevention,
              regulatory compliance, and advanced monitoring techniques backed by scientific principles.
            </p>

            {/* Enhanced Search Bar with Filters */}
            <div className="max-w-4xl mx-auto mb-8 animate-fade-in-delayed-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search legionella control, UK regulations, water quality..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-4 text-lg border-2 border-blue-200 focus:border-blue-400 rounded-xl bg-white"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Legionella Control">Legionella Control</SelectItem>
                        <SelectItem value="Legal Compliance">Legal Compliance</SelectItem>
                        <SelectItem value="Technical Standards">Technical Standards</SelectItem>
                        <SelectItem value="Analytics">Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon" className="shrink-0 bg-transparent">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-delayed-3">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                </div>
                <div className="text-gray-600">UK Compliant</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-cyan-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Microscope className="w-6 h-6 text-cyan-600" />
                  <div className="text-3xl font-bold text-cyan-600">75+</div>
                </div>
                <div className="text-gray-600">Scientific Guides</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-teal-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Scale className="w-6 h-6 text-teal-600" />
                  <div className="text-3xl font-bold text-teal-600">25+</div>
                </div>
                <div className="text-gray-600">Legal Resources</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                </div>
                <div className="text-gray-600">Video Tutorials</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Enhanced Tabs */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12 bg-white/80 backdrop-blur-sm h-14">
                <TabsTrigger value="documentation" className="flex items-center gap-2 text-sm">
                  <Book className="w-4 h-4" />
                  <span className="hidden sm:inline">Documentation</span>
                </TabsTrigger>
                <TabsTrigger value="tutorials" className="flex items-center gap-2 text-sm">
                  <PlayCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Tutorials</span>
                </TabsTrigger>
                <TabsTrigger value="trends" className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Trends</span>
                </TabsTrigger>
                <TabsTrigger value="faqs" className="flex items-center gap-2 text-sm">
                  <HelpCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">FAQs</span>
                </TabsTrigger>
              </TabsList>

              {/* Enhanced Documentation Tab */}
              <TabsContent value="documentation" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Technical Documentation</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Comprehensive guides covering legionella control, UK regulatory compliance, and advanced water
                    quality monitoring techniques
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent(documentationItems).map((item, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-blue-100 hover:border-blue-200 hover:-translate-y-2"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            {item.category === "Legionella Control" && <Shield className="w-8 h-8 text-red-500" />}
                            {item.category === "Legal Compliance" && <Scale className="w-8 h-8 text-purple-500" />}
                            {item.category === "Technical Standards" && <FileText className="w-8 h-8 text-blue-500" />}
                            {item.category === "Analytics" && <BarChart3 className="w-8 h-8 text-green-500" />}
                            {item.category === "Treatment Methods" && <Droplets className="w-8 h-8 text-cyan-500" />}
                            {item.category === "Emergency Response" && (
                              <AlertTriangle className="w-8 h-8 text-orange-500" />
                            )}
                          </div>
                          <div className="flex flex-col gap-1">
                            <Badge
                              variant="secondary"
                              className={`text-xs ${
                                item.priority === "critical"
                                  ? "bg-red-100 text-red-700"
                                  : item.priority === "high"
                                    ? "bg-orange-100 text-orange-700"
                                    : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {item.priority}
                            </Badge>
                            {item.regulation !== "N/A" && (
                              <Badge variant="outline" className="text-xs bg-gray-50">
                                {item.regulation}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-blue-600 transition-colors text-lg">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{item.readTime} read</span>
                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                              {item.category}
                            </Badge>
                          </div>
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

              {/* Enhanced Tutorials Tab */}
              <TabsContent value="tutorials" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Video Tutorials & Training</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Professional training videos covering practical applications of legionella control and water quality
                    monitoring
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent(tutorialItems).map((item, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-cyan-100 hover:border-cyan-200 hover:-translate-y-2"
                    >
                      <CardHeader>
                        <div className="relative">
                          <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                            <PlayCircle className="w-16 h-16 text-cyan-600 z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
                          </div>
                          <div className="absolute top-2 left-2 flex gap-2">
                            <Badge
                              variant="secondary"
                              className={`text-xs ${
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
                          <div className="absolute top-2 right-2">
                            {item.compliance !== "N/A" && (
                              <Badge variant="outline" className="text-xs bg-white/90">
                                {item.compliance}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-cyan-600 transition-colors">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span>{item.duration}</span>
                            <Badge variant="secondary" className="bg-cyan-50 text-cyan-700 text-xs">
                              {item.category}
                            </Badge>
                          </div>
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

              {/* New Advanced Trends Tab */}
              <TabsContent value="trends" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced Water Quality Trends</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Latest developments in water quality monitoring technology and predictive analytics for legionella
                    prevention
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {trendsData.map((trend, index) => (
                    <Card
                      key={index}
                      className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-lg transition-all"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{trend.title}</CardTitle>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            <span className="text-green-600 font-semibold">{trend.trend}</span>
                          </div>
                        </div>
                        <CardDescription>{trend.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Industry Adoption</span>
                            <span>{trend.adoption}%</span>
                          </div>
                          <Progress value={trend.adoption} className="h-2" />
                          <Badge
                            variant="outline"
                            className={`${
                              trend.impact === "Critical"
                                ? "border-red-200 text-red-700"
                                : trend.impact === "High"
                                  ? "border-orange-200 text-orange-700"
                                  : "border-blue-200 text-blue-700"
                            }`}
                          >
                            {trend.impact} Impact
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Trend Analysis Chart Placeholder */}
                <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Water Quality Parameter Trends (Last 12 Months)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                        <p className="text-gray-600">Interactive trend analysis dashboard</p>
                        <p className="text-sm text-gray-500">Real-time data visualization coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Enhanced FAQs Tab */}
              <TabsContent value="faqs" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Expert answers to common questions about legionella control, UK regulations, and water quality
                    monitoring
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredContent(faqItems).map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-white/80 backdrop-blur-sm border border-teal-100 rounded-lg px-6 hover:shadow-md transition-all"
                      >
                        <AccordionTrigger className="text-left hover:text-teal-600 transition-colors py-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              {item.category === "Legal Compliance" && <Scale className="w-5 h-5 text-purple-500" />}
                              {item.category === "Risk Assessment" && <Shield className="w-5 h-5 text-red-500" />}
                              {item.category === "Temperature Control" && (
                                <Thermometer className="w-5 h-5 text-orange-500" />
                              )}
                              {item.category === "Platform Features" && <BarChart3 className="w-5 h-5 text-blue-500" />}
                              {item.category === "Treatment Methods" && <Droplets className="w-5 h-5 text-cyan-500" />}
                              {item.category === "Data Analysis" && <TrendingUp className="w-5 h-5 text-green-500" />}
                              {item.category === "Record Keeping" && <FileText className="w-5 h-5 text-gray-500" />}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{item.question}</div>
                              <div className="flex gap-2 mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {item.category}
                                </Badge>
                                {item.regulation !== "N/A" && (
                                  <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                                    {item.regulation}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
          </div>
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

        {/* Enhanced Footer */}
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
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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
