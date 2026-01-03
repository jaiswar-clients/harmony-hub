"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    stat: "67%",
    title: "Employee Burnout",
    text: "of employees report feeling burned out at work",
  },
  {
    icon: TrendingDown,
    stat: "Scattered",
    title: "Fragmented Programs",
    text: "Engagement programs are inconsistent & unmeasurable",
  },
  {
    icon: Clock,
    stat: "20+",
    title: "Hours Wasted",
    text: "monthly spent on event coordination by HR teams",
  },
  {
    icon: Users,
    stat: "1.5-2x",
    title: "Turnover Cost",
    text: "annual salary lost per employee who leaves",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-primary py-24 lg:py-32 border-t-4 border-b-4 border-black relative overflow-hidden">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 border-8 border-white opacity-10 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-white opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-diagonal-stripes text-white" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-secondary text-black border-4 border-black">
            The Challenge
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-white mt-8">
            IS YOUR
            <br />
            <span className="bg-black text-secondary px-4 py-2 -ml-2 inline-block border-4 border-white">WORKPLACE STRUGGLING?</span>
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card key={index} className={`bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 ${
              // Every 3rd card gets accent
              (index + 1) % 3 === 0 ? 'relative' : ''
            }`}>
              {/* Geometric accent on every 3rd card */}
              {(index + 1) % 3 === 0 && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black bauhaus-rotated-45" />
              )}

              <CardContent className="p-8 text-center">
                <div className={`flex h-14 w-14 items-center justify-center border-4 border-black bg-secondary mx-auto mb-6 shadow-brutal-sm ${
                  // Alternate shapes
                  index % 2 === 0 ? 'rounded-none' : 'rounded-full'
                }`}>
                  <problem.icon className="h-7 w-7 text-black" strokeWidth={3} />
                </div>
                <div className="text-5xl font-black text-primary mb-3">{problem.stat}</div>
                <h3 className="text-lg font-black uppercase tracking-wider text-black mb-3">{problem.title}</h3>
                <p className="text-sm font-bold text-black/70 leading-relaxed">{problem.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
