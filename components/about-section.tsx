"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-secondary">
      {/* Stripe pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="mb-8 bg-primary text-white border-4 border-black">
            About Us
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black">
            WHO WE <span className="text-primary">ARE</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Our Story Card */}
            <Card className="bg-white border-4 border-black shadow-brutal">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm">
                    <Heart className="h-7 w-7 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wide text-black">Our Story</h3>
                </div>
                <p className="text-base font-bold leading-relaxed text-black">
                  Founded to bring fun, wellness, and creativity to corporate spaces, HarmonyHub empowers organizations to build happier, healthier, and more productive teams. We bridge music, wellness, and laughter to create memorable experiences.
                </p>
              </CardContent>
            </Card>

            {/* Our Philosophy Card */}
            <Card className="bg-white border-4 border-black shadow-brutal">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-muted shadow-brutal-sm">
                    <Target className="h-7 w-7 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wide text-black">Our Philosophy</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Engaged employees build resilient companies",
                    "Healthy minds create productive teams",
                    "Happy workplaces retain great talent",
                  ].map((philosophy, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center border-4 border-black bg-secondary flex-shrink-0">
                        <div className="h-3 w-3 bg-black" />
                      </div>
                      <span className="text-base font-bold leading-relaxed text-black">{philosophy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Who We Are */}
          <Card className="bg-white border-4 border-black shadow-brutal">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-muted shadow-brutal-sm">
                  <Users className="h-7 w-7 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wide text-black">Who We Are</h3>
              </div>
              <p className="text-base font-bold leading-relaxed mb-6 text-black">
                HarmonyHub is a premium Corporate Engagement & Wellness Solutions Company that helps organizations create healthier, happier, and more connected workplaces.
              </p>
              <p className="text-base font-bold leading-relaxed mb-8 text-black">
                We combine entertainment, wellness, motivation, and employee consulting to deliver experiences that go beyond fun—creating measurable impact on employee well-being and organizational culture.
              </p>
              <div className="p-6 border-4 border-black bg-yellow-100 shadow-brutal-sm">
                <p className="text-sm font-black uppercase tracking-wide text-black italic">
                  "We don't just organize events—we partner with HR teams to build lasting cultural transformation."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
