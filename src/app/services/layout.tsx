import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/styles/globals.css"
import "@/styles/index.css"
import { MobileMenuProvider } from "@/context/mobilemenu"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AquaCheck Services – Professional Water Testing & Compliance",
  description:
    "AquaCheck's Services — Legionella testing, water system management, compliance reporting. Trusted experts in water safety. Book your service now.",
}


export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <MobileMenuProvider>
          {children}
      </MobileMenuProvider>
    </section>
  );
}
