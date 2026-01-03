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
    <section className="relative py-20 lg:py-24 overflow-hidden bg-background border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-10 right-1/4 w-32 h-32 border-8 border-secondary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent opacity-15 bauhaus-rotated-neg-45 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-16 h-16 border-4 border-black opacity-10 rounded-full pointer-events-none" />

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-diagonal-stripes text-black" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-secondary text-black border-4 border-black">
            Trusted by Organizations
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black mt-8">
            TRUSTED BY
            <br />
            <span className="bg-black text-primary px-4 py-2 -ml-2 inline-block border-4 border-white">FORWARD-THINKING TEAMS</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {[
              { icon: "↑", text: "45% employee engagement" },
              { icon: "↓", text: "40% workplace stress" },
              { icon: "+", text: "20+ HR hours saved every month" },
            ].map((stat, index) => (
              <div key={index} className={`flex items-center gap-3 border-4 border-black bg-secondary px-6 py-4 shadow-brutal-sm ${
                // Every 3rd item different shape
                (index + 1) % 3 === 0 ? 'rounded-full' : 'rounded-none'
              }`}>
                <span className="text-2xl font-black text-primary">{stat.icon}</span>
                <span className="text-base font-bold text-black">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="border-4 border-black bg-white shadow-brutal-md overflow-hidden relative">
          {/* Geometric accent */}
          <div className="absolute top-2 right-2 w-6 h-6 bg-accent border-2 border-black bauhaus-rotated-45 opacity-60 z-10" />

          <Marquee pauseOnHover className="mask-[linear-gradient(to_right,transparent,black,transparent)]" repeat={4}>
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={`mx-8 sm:mx-12 md:mx-16 flex flex-col items-center gap-3 px-8 py-6 border-4 border-black shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal-md transition-all duration-150 cursor-pointer ${
                  // Every 3rd item different shape
                  (index + 1) % 3 === 0 ? 'rounded-none' : 'rounded-full'
                }`}
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
