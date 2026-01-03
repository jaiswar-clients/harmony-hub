"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Award, Zap, Heart, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export function VisionMissionSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-muted border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-16 h-16 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-diagonal-stripes text-black" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-primary text-white border-4 border-black">
            Our Purpose
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black mt-8">
            VISION &
            <br />
            <span className="bg-black text-primary px-4 py-2 -ml-2 inline-block border-4 border-primary">MISSION</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Vision Card */}
          <Card className="bg-secondary border-4 border-black shadow-brutal-lg hover:-translate-y-1 hover:shadow-brutal-xl transition-all duration-200">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-primary shadow-brutal-md rounded-none">
                  <Target className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider text-white">Our Vision</h3>
              </div>
              <p className="text-lg font-bold text-white leading-relaxed">
                To become India's most trusted corporate engagement and wellness partner—transforming workplaces into cultures of energy, balance, and purpose.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-white border-4 border-black shadow-brutal-lg hover:-translate-y-1 hover:shadow-brutal-xl transition-all duration-200">
            {/* Geometric accent */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black bauhaus-rotated-45" />

            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-primary shadow-brutal-md rounded-full">
                  <Zap className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider text-black">Our Mission</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Heart, text: "To reduce workplace stress and burnout" },
                  { icon: TrendingUp, text: "To improve engagement, morale, and retention" },
                  { icon: Target, text: "To deliver measurable wellness & cultural impact" },
                  { icon: Zap, text: "To provide flexible, subscription-driven solutions" },
                  { icon: Award, text: "To partner with HR teams as an extension of their culture goals" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className={`flex h-8 w-8 items-center justify-center border-2 border-black bg-secondary flex-shrink-0 shadow-brutal-sm ${
                      // Every 3rd item different shape
                      (index + 1) % 3 === 0 ? 'rounded-full' : 'rounded-none'
                    }`}>
                      <item.icon className="h-4 w-4 text-black" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-black leading-relaxed pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
