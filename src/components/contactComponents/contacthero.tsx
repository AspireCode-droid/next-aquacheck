import { Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 pt-12 pb-16">
      {/* Background Grid & Blurs */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 -translate-y-16 translate-x-16 z-0">
        <div className="w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-16 -translate-x-16 z-0">
        <div className="w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto relative z-10 text-center px-4">
        <div className="flex justify-center mb-6">
          <Badge className="bg-white border border-cyan-200 text-cyan-700 px-4 py-2 rounded-2xl text-sm font-medium shadow-sm">
            Get in Touch
          </Badge>
        </div>

        <div className="flex justify-center mb-4">
          <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-md">
            <Droplets className="h-8 w-8 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          We're Here to Help
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Have a question, need assistance, or want to schedule a consultation? Our team is ready to support you.
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          onClick={() => {
            const form = document.getElementById("contact-form");
            form?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Send Us a Message
        </Button>
      </div>
    </section>
  );
}
