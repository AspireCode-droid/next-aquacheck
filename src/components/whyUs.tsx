import {Card, CardHeader, CardTitle, CardContent, CardDescription} from "@/components/ui/card";
import {Award, Clock, Shield} from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Aquacheck?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                With over 15 years of experience, we're your trusted partner for all water quality needs.
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6" />
                </div>
                <CardTitle>Certified Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                <CardDescription className="text-blue-100">
                    ISO 17025 accredited laboratory with certified technicians and state-of-the-art equipment.
                </CardDescription>
                </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Rapid Response</CardTitle>
                </CardHeader>
                <CardContent>
                <CardDescription className="text-blue-100">
                    Quick turnaround times with emergency services available 24/7 for critical situations.
                </CardDescription>
                </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Compliance Assured</CardTitle>
                </CardHeader>
                <CardContent>
                <CardDescription className="text-blue-100">
                    Comprehensive documentation and reporting to ensure full regulatory compliance.
                </CardDescription>
                </CardContent>
            </Card>
            </div>
        </div>
    </section>
  );
}
