'use client'

import { motion } from 'framer-motion'
import { Card, CardContent,CardHeader, CardTitle } from '@/components/ui/card'
import {Microscope, Shield, Users} from 'lucide-react'


export default function MissionSection() {
  return (
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting public health through rigorous water testing, expert analysis, and
              comprehensive Legionella control solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We prioritize public health and safety in every aspect of our work, ensuring the highest standards of
                  water quality testing and risk assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Microscope className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Scientific Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our laboratory processes follow strict scientific protocols and industry best practices, delivering
                  accurate and reliable results every time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Client Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We build lasting relationships with our clients, providing ongoing support, education, and tailored
                  solutions for their specific water safety needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}
