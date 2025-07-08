

import { useState } from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from '@/components/ui/select'
import {Shield, Search, Microscope, Filter, Scale, TrendingUp } from 'lucide-react'
import { Badge } from '../ui/badge'
import{Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import QuickStats from './quickStats'





export default function ResourceHero(){
    const [filterCategory, setFilterCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [filterType, setFilterType] = useState("all")
    return(
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
                <QuickStats />
            </div>
        </section>
    )
}