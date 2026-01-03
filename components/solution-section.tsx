"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarCheck, Settings, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Discovery Call",
    description: "We audit your current programs and understand your culture goals.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Custom Plan",
    description: "Create a tailored mix of music, wellness, and motivation services.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Launch & Track",
    description: "Deploy programs seamlessly and measure impact with real-time analytics.",
  },
]

export function SolutionSection() {
  return (
    <section className="bg-background py-24 lg:py-32 border-t-4 border-b-4 border-black relative overflow-hidden">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary opacity-15 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-grid-lines text-black" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl">
            <Badge variant="stamp" className="bg-accent text-accent-foreground border-4 border-black">
              How It Works
            </Badge>
            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black">
              ONE <span className="bg-primary text-primary-foreground px-2 py-1 -ml-1 inline-block border-4 border-black">PARTNER</span>.
              <br />
              <span className="text-primary">COMPLETE SOLUTION.</span>
            </h2>
          </div>
          <Link
            href="#services"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
          >
            View all services
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Large feature image */}
          <Card className="bg-secondary border-4 border-black shadow-brutal-lg lg:col-span-2 lg:row-span-2 overflow-hidden relative">
            {/* Geometric accent */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-accent border-4 border-black bauhaus-rotated-45 opacity-80 z-10" />

            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <Image src="/diverse-team-enjoying-music-wellness-session-in-mo.jpg" alt="Team wellness session" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 right-8">
                <Card className="bg-white border-4 border-black shadow-brutal-md">
                  <CardContent className="p-6">
                    <p className="text-2xl font-black uppercase tracking-wider text-black">
                      Transform Your Workplace
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>

          {/* Step cards */}
          {steps.map((item, index) => (
            <Card key={index} className={`bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 ${
              // Every 3rd card gets accent
              (index + 1) % 3 === 0 ? 'relative' : ''
            }`}>
              {/* Geometric accent on every 3rd card */}
              {(index + 1) % 3 === 0 && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary border-2 border-black rounded-full" />
              )}

              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex h-14 w-14 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm ${
                    // Alternate shapes
                    index % 2 === 0 ? 'rounded-none' : 'rounded-full'
                  }`}>
                    <item.icon className="h-7 w-7 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-5xl font-black text-black/20">{item.step}</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider text-black mb-4">{item.title}</h3>
                <p className="font-bold text-black/70 leading-relaxed flex-1">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
