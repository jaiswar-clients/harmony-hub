"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Award, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    type: "IT Services Company",
    title: "6-Month Corporate Subscription",
    image: "https://images.pexels.com/photos/8436620/pexels-photo-8436620.jpeg",
    challenge: "High burnout and disengagement affecting productivity",
    solution: [
      "Weekly yoga & meditation sessions",
      "Monthly music & DJ sessions",
      "Quarterly motivational speakers",
    ],
    impact: [
      "38% reduction in stress complaints",
      "42% increase in participation rates",
      "Higher engagement scores",
    ],
  },
  {
    type: "Financial Services Firm",
    title: "Wellness & Healing Program",
    image: "https://images.pexels.com/photos/5890690/pexels-photo-5890690.jpeg",
    challenge: "High absenteeism and declining focus",
    solution: [
      "Mindfulness & sound healing",
      "Stress management workshops",
      "Monthly wellness challenges",
    ],
    impact: [
      "25% drop in absenteeism",
      "Improved focus and energy levels",
      "Employee satisfaction boost",
    ],
  },
  {
    type: "Startup Team (120 Employees)",
    title: "Laughter & Motivation Program",
    image: "https://images.pexels.com/photos/7551762/pexels-photo-7551762.jpeg",
    challenge: "Low engagement in fast-paced environment",
    solution: [
      "Bi-weekly laughter therapy",
      "Motivational talks",
      "Team building activities",
    ],
    impact: [
      "100% attendance at sessions",
      "Highest internal feedback scores",
      "Improved team morale",
    ],
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-24 lg:py-32 overflow-hidden bg-muted border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Vertical stripe pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-vertical-stripes text-black" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-primary text-white border-4 border-black">
            Case Studies
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black mt-8">
            REAL <span className="bg-black text-primary px-4 py-2 -ml-2 inline-block border-4 border-white">IMPACT</span>.
            <br />
            <span className="text-primary">REAL WORKPLACES.</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-black/70 max-w-2xl mx-auto">
            Discover how organizations across industries have transformed their culture with PeopleX's measurable wellness and engagement programs.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card key={index} className={`bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 flex flex-col h-full ${
              // Every 3rd card gets accent
              (index + 1) % 3 === 0 ? 'relative' : ''
            }`}>
              {/* Geometric accent on every 3rd card */}
              {(index + 1) % 3 === 0 && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black bauhaus-rotated-45 z-10" />
              )}
              {/* Image */}
              <div className="relative h-56 overflow-hidden border-b-4 border-black">
                <Image
                  src={study.image}
                  alt={study.type}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="border-4 border-black bg-secondary px-4 py-2 shadow-brutal-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-black" strokeWidth={3} />
                      <span className="text-xs font-black uppercase text-black">Case Study</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="border-4 border-black bg-primary px-4 py-2 shadow-brutal-sm">
                    <span className="text-sm font-black uppercase text-white">{study.type}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-black uppercase tracking-wide text-black mb-4">
                  {study.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4 border-4 border-black bg-secondary p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-black" strokeWidth={3} />
                    <span className="text-sm font-black uppercase text-black">Challenge</span>
                  </div>
                  <p className="text-sm font-bold text-black/80">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-6 w-6 items-center justify-center border-2 border-black bg-primary">
                      <CheckCircle className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-black uppercase text-black">Solution</span>
                  </div>
                  <ul className="space-y-2">
                    {study.solution.map((item, i) => (
                      <li key={i} className="text-sm font-bold text-black/70 flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="border-4 border-black bg-green-50 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-black" strokeWidth={3} />
                    <span className="text-sm font-black uppercase text-black">Impact</span>
                  </div>
                  <ul className="space-y-2">
                    {study.impact.map((item, i) => (
                      <li key={i} className="text-sm font-bold text-black flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-base font-bold text-black/70 max-w-2xl mx-auto mb-6">
            Want similar results for your organization?
          </p>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
          >
            Let's discuss your goals
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  )
}
