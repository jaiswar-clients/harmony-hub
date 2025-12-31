"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Target, Users, TrendingUp, Award } from "lucide-react"

export function StatsSection() {
  const stats = [
    { value: 40, suffix: "%", label: "Burnout Reduction", icon: Target },
    { value: 150, prefix: "+", label: "Companies Served", icon: Award },
    { value: 50000, prefix: "+", label: "Employees Impacted", icon: Users },
    { value: 4.8, suffix: "/5", label: "Client Satisfaction", icon: TrendingUp },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-primary text-white">
            Proven Results
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black mt-8">
            TRUSTED BY
            <br />
            <span className="text-primary">HR LEADERS</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-black max-w-2xl mx-auto">
            Measurable results that transform workplace culture
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-4 border-black shadow-brutal hover:-translate-y-2 hover:shadow-brutal-xl transition-all duration-200">
              <CardContent className="p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-primary mx-auto mb-6 shadow-brutal-sm">
                  <stat.icon className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <div className="text-5xl font-black text-black mb-2">
                  {stat.prefix && <span className="text-3xl text-primary">{stat.prefix}</span>}
                  <span className="text-black">
                    <NumberTicker value={stat.value} decimalPlaces={stat.suffix ? 0 : stat.value >= 1000 ? 0 : 1} />
                  </span>
                  {stat.suffix && <span className="text-3xl text-primary">{stat.suffix}</span>}
                </div>
                <p className="text-base font-black uppercase tracking-wide text-black">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
