"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ArrowRight } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import Link from "next/link"

const partners = [
  { name: "Google", logo: "🏢" },
  { name: "Microsoft", logo: "🖥️" },
  { name: "Amazon", logo: "📦" },
  { name: "Apple", logo: "🍎" },
  { name: "Meta", logo: "🌐" },
  { name: "Netflix", logo: "🎬" },
  { name: "Adobe", logo: "🎨" },
  { name: "Salesforce", logo: "☁️" },
]

export function PartnersSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Stripe pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #000, #000 1px, transparent 1px, transparent 20px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="pill" className="bg-secondary text-black border-4 border-black">
            Trusted by Organizations
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black mt-8">
            TRUSTED BY
            <br />
            <span className="text-primary">FORWARD-THINKING</span> TEAMS
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {[
              { icon: "↑", text: "45% employee engagement" },
              { icon: "↓", text: "40% workplace stress" },
              { icon: "+", text: "20+ HR hours saved every month" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3 border-4 border-black bg-secondary px-6 py-4 shadow-brutal-sm">
                <span className="text-2xl font-black text-primary">{stat.icon}</span>
                <span className="text-base font-bold text-black">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="border-4 border-black bg-white shadow-brutal overflow-hidden">
          <Marquee pauseOnHover className="mask-[linear-gradient(to_right,transparent,black,transparent)]" repeat={4}>
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="mx-8 sm:mx-12 md:mx-16 flex flex-col items-center gap-3 px-8 py-6 border-4 border-black shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal-sm transition-all duration-150 cursor-pointer"
              >
                <span className="text-5xl md:text-6xl">{partner.logo}</span>
                <span className="text-sm font-black uppercase tracking-wide text-black">{partner.name}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
          >
            Join these industry leaders
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  )
}
