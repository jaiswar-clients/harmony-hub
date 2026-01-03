"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Music,
  Heart,
  Smile,
  Users,
  Sparkles,
  Target,
  Lightbulb,
  ArrowUpRight
} from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Corporate Subscription Programs",
    description: "Ongoing engagement programs that work month after month",
    color: "bg-primary",
  },
  {
    icon: Heart,
    title: "Wellness & Healing Programs",
    description: "Yoga, meditation, sound healing, and stress management",
    color: "bg-secondary",
  },
  {
    icon: Target,
    title: "Motivational & Leadership Sessions",
    description: "Inspire action, focus, and purpose in your teams",
    color: "bg-accent",
  },
  {
    icon: Smile,
    title: "Laughter Therapy & Stand-up Comedy",
    description: "Stress relief that actually works with humor",
    color: "bg-primary",
  },
  {
    icon: Music,
    title: "Music, DJ & Karaoke Experiences",
    description: "Break routine. Build real connections through music",
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "Dance & Movement Programs",
    description: "Zumba, Bollywood dance to energize teams physically and mentally",
    color: "bg-accent",
  },
  {
    icon: Lightbulb,
    title: "Employee Engagement Consulting",
    description: "Design engagement calendars and wellness strategies",
    color: "bg-primary",
  },
  {
    icon: ArrowUpRight,
    title: "Tailored & Custom Solutions",
    description: "Designed for your people, goals, and culture",
    color: "bg-secondary",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-secondary border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 border-8 border-black opacity-10 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-24 h-24 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bauhaus-grid-lines text-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Geometric accent */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent border-4 border-black bauhaus-rotated-45 opacity-30" />

          <Badge variant="stamp" className="bg-primary text-primary-foreground border-4 border-black">
            Services
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black mt-8">
            WHAT YOUR <span className="bg-background px-4 py-2 -ml-2 inline-block border-4 border-black">WORKPLACE</span>
            <br />
            NEEDS TO <span className="text-primary">THRIVE</span>
          </h2>
        </div>

        {/* Services Grid - Bauhaus cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 ${
                // Every 3rd card gets accent
                (index + 1) % 3 === 0 ? 'relative' : ''
              }`}
            >
              {/* Geometric accent on every 3rd card */}
              {(index + 1) % 3 === 0 && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black bauhaus-rotated-45" />
              )}

              <CardContent className="p-6">
                <div className={`flex h-16 w-16 items-center justify-center border-4 border-black ${service.color} shadow-brutal-sm mb-5 ${
                  // STRICT binary radius: index even = square, index odd = circle
                  index % 2 === 0 ? 'rounded-none' : 'rounded-full'
                }`}>
                  <service.icon className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wider text-black mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm font-bold text-black/70 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA - Bauhaus button */}
        <div className="mt-16 text-center relative">
          {/* Geometric decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-black opacity-5 rounded-full -z-10" />

          <Button
            variant="bauhaus"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Demo
            <ArrowUpRight className="ml-2 h-5 w-5" strokeWidth={3} />
          </Button>
        </div>
      </div>
    </section>
  )
}
