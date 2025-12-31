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
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl">
            <Badge variant="pill" className="bg-muted text-black border-4 border-black">
              How It Works
            </Badge>
            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black">
              ONE PARTNER.
              <br />
              <span className="text-primary">COMPLETE SOLUTION.</span>
            </h2>
          </div>
          <Link
            href="#services"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
          >
            View all services
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Large feature image */}
          <Card className="bg-secondary border-4 border-black shadow-brutal-lg lg:col-span-2 lg:row-span-2 overflow-hidden">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <Image src="/diverse-team-enjoying-music-wellness-session-in-mo.jpg" alt="Team wellness session" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 right-8">
                <Card className="bg-white border-4 border-black shadow-brutal">
                  <CardContent className="p-6">
                    <p className="text-2xl font-black uppercase text-black">
                      Transform Your Workplace
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>

          {/* Step cards */}
          {steps.map((item, index) => (
            <Card key={index} className="bg-white border-4 border-black shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-200">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm">
                    <item.icon className="h-7 w-7 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-5xl font-black text-black/20">{item.step}</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-black mb-4">{item.title}</h3>
                <p className="font-bold text-black/70 leading-relaxed flex-1">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
