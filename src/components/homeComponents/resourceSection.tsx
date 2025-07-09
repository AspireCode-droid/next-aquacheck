import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, FileText } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/cardAnimation";

const MotionCard = motion(Card);

export function ResourcesSection() {
  return (
    <section id="resources" className="w-full pt-8 pb-12 md:pt-4 md:pb-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Badge variant="outline" className="px-4 py-2 rounded-2xl bg-white border-gray-200 text-gray-700">
            Resources & Guides
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Knowledge Center
            </span>
          </h2>
          <p className="max-w-[800px] text-xl text-gray-600 leading-relaxed">
            Access our comprehensive library of water safety guides, compliance documents, and industry insights
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[{
            icon: <BookOpen className="h-12 w-12 text-blue-600 mb-4" />,
            title: "Compliance Guides",
            description: "Essential guides for water safety compliance and regulations",
            action: "Download Guides",
          }, {
            icon: <FileText className="h-12 w-12 text-cyan-600 mb-4" />,
            title: "Safety Checklists",
            description: "Comprehensive checklists for water system maintenance",
            action: "View Checklists",
          }, {
            icon: <Award className="h-12 w-12 text-teal-600 mb-4" />,
            title: "Certifications",
            description: "Our accreditations and industry certifications",
            action: "View Certificates",
          }].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <MotionCard className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  {item.icon}
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    {item.action}
                  </Button>
                </CardContent>
              </MotionCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
