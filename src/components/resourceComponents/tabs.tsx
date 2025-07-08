import {
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
  Thermometer,
  Droplets,
  BarChart3,
  Calendar,
  Download,

} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

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


export default function TabsSection(){
    const [searchQuery, setSearchQuery] = useState("")
    const [activeTab, setActiveTab] = useState("documentation")
    const [filterCategory, setFilterCategory] = useState("all")
    const [filterType, setFilterType] = useState("all")
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
              .filter(Boolean) 
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
    return(
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12 bg-white/80 backdrop-blur-sm h-14 space-x-4">
                <TabsTrigger value="documentation" className={`flex items-center gap-2 rounded-2xl text-sm transition-colors duration-500 ${activeTab === "documentation" ? "border border-teal-300" : "border-none"}`}>
                  <Book className="w-4 h-4" />
                  <span className="hidden sm:inline">Documentation</span>
                </TabsTrigger>
                <TabsTrigger value="trends" className={`flex items-center gap-2 rounded-2xl text-sm transition-colors duration-500 ${activeTab === "trends" ? "border border-red-300" : " " }`}>
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Trends</span>
                </TabsTrigger>
                <TabsTrigger value="faqs" className={`flex items-center gap-2 rounded-2xl transition-colors duration-500 text-sm ${activeTab === "faqs" ? "border border-blue-300" : " " }`}>
                  <HelpCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">FAQs</span>
                </TabsTrigger>
              </TabsList>

              {/* Documentation Tab */}
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
                          <div className="flex flex-col space-y-2">
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
    )
}