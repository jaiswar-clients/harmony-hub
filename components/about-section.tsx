"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-secondary border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 border-8 border-black opacity-10 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-diagonal-stripes text-black" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="mb-8 bg-primary text-white border-4 border-black">
            About Us
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black">
            WHO WE <span className="bg-black text-primary px-4 py-2 -ml-2 inline-block border-4 border-white">ARE</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Our Story Card */}
            <Card className="bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm rounded-none">
                    <Heart className="h-7 w-7 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wider text-black">Our Story</h3>
                </div>
                <p className="text-base font-bold leading-relaxed text-black">
                  Founded to bring fun, wellness, and creativity to corporate spaces, PeopleX empowers organizations to build happier, healthier, and more productive teams. We bridge music, wellness, and laughter to create memorable experiences.
                </p>
              </CardContent>
            </Card>

            {/* Our Philosophy Card */}
            <Card className="bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-muted shadow-brutal-sm rounded-full">
                    <Target className="h-7 w-7 text-black" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wider text-black">Our Philosophy</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Engaged employees build resilient companies",
                    "Healthy minds create productive teams",
                    "Happy workplaces retain great talent",
                  ].map((philosophy, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className={`flex h-8 w-8 items-center justify-center border-2 border-black bg-secondary flex-shrink-0 shadow-brutal-sm ${
                        // Every 3rd item different shape
                        (index + 1) % 3 === 0 ? 'rounded-full' : 'rounded-none'
                      }`}>
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
          <Card className="bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200">
            {/* Geometric accent */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black bauhaus-rotated-45" />

            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-muted shadow-brutal-sm rounded-none">
                  <Users className="h-7 w-7 text-black" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider text-black">Who We Are</h3>
              </div>
              <p className="text-base font-bold leading-relaxed mb-6 text-black">
                PeopleX is a premium Corporate Engagement & Wellness Solutions Company that helps organizations create healthier, happier, and more connected workplaces.
              </p>
              <p className="text-base font-bold leading-relaxed mb-8 text-black">
                We combine entertainment, wellness, motivation, and employee consulting to deliver experiences that go beyond fun—creating measurable impact on employee well-being and organizational culture.
              </p>
              <div className="p-6 border-4 border-black bg-accent shadow-brutal-sm">
                <p className="text-sm font-black uppercase tracking-wider text-black italic">
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
