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
    <section id="about" className="bg-primary py-24 lg:py-32 border-y-4 border-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="pill" className="bg-secondary text-black border-4 border-black">
            The Challenge
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-white mt-8">
            IS YOUR WORKPLACE
            <br />
            <span className="text-secondary">STRUGGLING?</span>
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-white border-4 border-black shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-200">
              <CardContent className="p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-secondary mx-auto mb-6 shadow-brutal-sm">
                  <problem.icon className="h-7 w-7 text-black" strokeWidth={3} />
                </div>
                <div className="text-5xl font-black text-primary mb-3">{problem.stat}</div>
                <h3 className="text-lg font-black uppercase tracking-wide text-black mb-3">{problem.title}</h3>
                <p className="text-sm font-bold text-black/70 leading-relaxed">{problem.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
