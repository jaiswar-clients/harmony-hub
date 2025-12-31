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
    color: "bg-muted",
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
    color: "bg-muted",
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
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-muted">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="rotated" className="bg-primary text-white border-4 border-black mb-8">
            Services
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black">
            WHAT YOUR <span className="text-primary">WORKPLACE</span>
            <br />
            NEEDS TO <span className="text-primary">THRIVE</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-4 border-black shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-200"
            >
              <CardContent className="p-6">
                <div className={`flex h-16 w-16 items-center justify-center border-4 border-black ${service.color} shadow-brutal-sm mb-5`}>
                  <service.icon className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide text-black mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm font-bold text-black/70 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="default"
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
