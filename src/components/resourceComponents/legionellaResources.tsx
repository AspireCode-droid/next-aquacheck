"use client"


import { Footer } from "../footer"

import Header from "@/components/Header"
import ResourceHero from "./hero"
import ResourceCta from "./resourceCta"
import TabsSection from "./tabs"

export default function AquacheckLegionellaResources() {

  return (
    <>
      <Header />
      <main>
        <ResourceHero />
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

        </div>

        <TabsSection />

        <ResourceCta/>

        <Footer />


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
      </main>
    </>
  )
}
