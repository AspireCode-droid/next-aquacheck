import {Card, CardHeader, CardTitle, CardContent, CardDescription} from "@/components/ui/card";
import {Award, Clock, Shield} from "lucide-react";
import { Badge } from "@/components/ui/badge"

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col space-y-8">
            <div className="text-center flex flex-col space-y-6">
                <h2 >
                    <Badge variant="outline" className="px-4 py-2 text-sm rounded-2xl bg-white border-gray-200 text-gray-700">
                        Why AquaCheck
                    </Badge>
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                   A trusted partner for you water qaulity needs
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/10 border-white/20">
                    <CardHeader>
                        <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Award className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-semibold">Certified Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-gray-700">
                            ISO 17025 accredited laboratory with certified technicians and state-of-the-art equipment.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                    <CardHeader>
                        <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Clock className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-semibold">Rapid Response</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-gray-700">
                            Quick turnaround times with emergency services available 24/7 for critical situations.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 ">
                    <CardHeader>
                        <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Shield className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-semibold">Compliance Assured</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-gray-700">
                            Comprehensive documentation and reporting to ensure full regulatory compliance.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  );
}
