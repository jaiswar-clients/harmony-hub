"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Target, Users, TrendingUp, Award } from "lucide-react"

export function StatsSection() {
  const stats = [
    { value: 40, suffix: "%", label: "Burnout Reduction", icon: Target, color: "bg-primary", textColor: "text-primary-foreground" },
    { value: 150, prefix: "+", label: "Companies Served", icon: Award, color: "bg-secondary", textColor: "text-secondary-foreground" },
    { value: 50000, prefix: "+", label: "Employees Impacted", icon: Users, color: "bg-accent", textColor: "text-accent-foreground" },
    { value: 4.8, suffix: "/5", label: "Client Satisfaction", icon: TrendingUp, color: "bg-primary", textColor: "text-primary-foreground" },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-10 left-1/4 w-32 h-32 border-8 border-primary opacity-20 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-secondary opacity-15 bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-16 h-16 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bauhaus-dot-grid text-black" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="pill" className="bg-accent text-accent-foreground border-4 border-black">
            Proven Results
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black mt-8">
            TRUSTED BY
            <br />
            <span className="bg-primary text-primary-foreground px-4 py-2 -ml-2 inline-block border-4 border-black">HR LEADERS</span>
          </h2>
          <p className="mt-6 text-lg font-black text-black max-w-2xl mx-auto">
            Measurable results that transform workplace culture
          </p>
        </div>

        {/* Stats Grid - Bauhaus color blocking */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.color} border-4 border-black shadow-brutal-lg hover:-translate-y-1 hover:shadow-brutal-xl transition-all duration-200`}
            >
              <CardContent className="p-8 text-center">
                <div className={`flex h-16 w-16 items-center justify-center border-4 border-black bg-white shadow-brutal-md mx-auto mb-6 ${
                  // Alternate shapes
                  index % 2 === 0 ? 'rounded-none' : 'rounded-full'
                }`}>
                  <stat.icon className="h-8 w-8 text-black" strokeWidth={3} />
                </div>
                <div className={`text-5xl font-black ${stat.textColor} mb-2`}>
                  {stat.prefix && <span className="text-3xl">{stat.prefix}</span>}
                  <span>
                    <NumberTicker value={stat.value} decimalPlaces={stat.suffix ? 0 : stat.value >= 1000 ? 0 : 1} />
                  </span>
                  {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
                </div>
                <p className={`text-base font-black uppercase tracking-wider ${stat.textColor}`}>{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
