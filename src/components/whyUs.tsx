import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Award, Clock, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer } from "@/lib/cardAnimation";


export default function WhyUs() {
  const cards = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Expertise",
      description: "ISO 17025 accredited laboratory with certified technicians and state-of-the-art equipment.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Rapid Response",
      description: "Quick turnaround times with emergency services available 24/7 for critical situations.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Assured",
      description: "Comprehensive documentation and reporting to ensure full regulatory compliance.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 space-y-8">
            <div className="text-center space-y-6">
                <h2>
                    <Badge variant="outline" className="px-4 py-2 text-sm rounded-2xl bg-white border-gray-200 text-gray-700">
                    Why AquaCheck
                    </Badge>
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    A trusted partner for your water quality needs
                </p>
            </div>

            <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
            {cards.map((card, index) => (
                <motion.div key={index} variants={fadeUp}>
                    <Card className="bg-white/10 border-2 border-white shadow-md">
                        <CardHeader>
                            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                {card.icon}
                            </div>
                            <CardTitle className="font-semibold">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-700">{card.description}</CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
            </motion.div>
        </div>
    </section>
  );
}
