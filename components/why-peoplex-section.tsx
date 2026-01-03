"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Users, TrendingUp, Award, Zap, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function WhyPeopleXSection() {
  const differentiators = [
    {
      icon: Award,
      title: "Premium, Corporate-Ready Talent",
      description: "All our facilitators are vetted professionals with corporate experience, ensuring appropriate and impactful sessions.",
    },
    {
      icon: Users,
      title: "One Partner for All Needs",
      description: "Wellness, motivation, engagement, and entertainment — all under one roof. No more managing multiple vendors.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Outcomes",
      description: "Not just activities. We provide quarterly impact reports with engagement scores, stress metrics, and participation rates.",
    },
    {
      icon: Zap,
      title: "Scalable Models",
      description: "Flexible subscription plans and one-time events that scale with your organization's growth.",
    },
    {
      icon: Shield,
      title: "End-to-End Managed",
      description: "From planning to execution to post-event reports — we handle everything. Zero coordination burden on HR.",
    },
    {
      icon: CheckCircle2,
      title: "Culture Partner, Not Vendor",
      description: "We work as your strategic partner, understanding your culture and designing experiences that align with business objectives.",
    },
  ]

  return (
    <section id="why-peoplex" className="relative py-24 lg:py-32 overflow-hidden bg-muted border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-10 right-1/4 w-32 h-32 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-16 h-16 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-grid-lines text-black" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-primary text-white border-4 border-black">
            Why Us
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black mt-8">
            MORE THAN
            <br />
            <span className="bg-black text-primary px-4 py-2 -ml-2 inline-block border-4 border-white">EVENTS</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-black/70 max-w-2xl mx-auto">
            We don't just organize events — we transform workplace culture with measurable, strategic wellness and engagement programs.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {differentiators.map((item, index) => (
            <Card key={index} className={`bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 ${
              // Every 3rd card gets accent
              (index + 1) % 3 === 0 ? 'relative' : ''
            }`}>
              {/* Geometric accent on every 3rd card */}
              {(index + 1) % 3 === 0 && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-secondary border-2 border-black bauhaus-rotated-45" />
              )}

              <CardContent className="p-8">
                <div className={`flex h-16 w-16 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm mb-6 ${
                  // Alternate shapes
                  index % 2 === 0 ? 'rounded-none' : 'rounded-full'
                }`}>
                  <item.icon className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-base font-bold text-black/70 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="bg-primary border-4 border-black shadow-brutal-lg hover:-translate-y-1 hover:shadow-brutal-xl transition-all duration-200">
            <CardContent className="p-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center border-4 border-white bg-white mx-auto mb-6 shadow-brutal-md rounded-none">
                <Users className="h-10 w-10 text-primary" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wider text-white mb-4">For Organizations</h3>
              <div className="text-6xl font-black text-secondary mb-4">150+</div>
              <p className="text-base font-bold text-white/90">Companies trust us to transform their workplace culture</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-4 border-black shadow-brutal-lg hover:-translate-y-1 hover:shadow-brutal-xl transition-all duration-200 relative">
            {/* Geometric accent */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black rounded-full" />

            <CardContent className="p-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center border-4 border-black bg-white mx-auto mb-6 shadow-brutal-md rounded-full">
                <CheckCircle2 className="h-10 w-10 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wider text-black mb-4">For Employees</h3>
              <div className="text-6xl font-black text-primary mb-4">4.9/5</div>
              <p className="text-base font-bold text-black/70">Client satisfaction with our wellness programs</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
          >
            Learn more about our approach
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  )
}
