"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Users, TrendingUp, Award, Zap, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function WhyHarmonyHubSection() {
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
    <section id="why-harmonyhub" className="relative py-24 lg:py-32 overflow-hidden bg-muted">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-primary text-white">
            Why Us
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black mt-8">
            MORE THAN
            <br />
            <span className="text-primary">EVENTS</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-black/70 max-w-2xl mx-auto">
            We don't just organize events — we transform workplace culture with measurable, strategic wellness and engagement programs.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {differentiators.map((item, index) => (
            <Card key={index} className="bg-white border-4 border-black shadow-brutal hover:-translate-y-2 hover:shadow-brutal-xl transition-all duration-200">
              <CardContent className="p-8">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm mb-6">
                  <item.icon className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-black mb-4">
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
          <Card className="bg-primary border-4 border-black shadow-brutal-lg">
            <CardContent className="p-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center border-4 border-white bg-white mx-auto mb-6 shadow-brutal-sm">
                <Users className="h-10 w-10 text-primary" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-4">For Organizations</h3>
              <div className="text-6xl font-black text-secondary mb-4">150+</div>
              <p className="text-base font-bold text-white/90">Companies trust us to transform their workplace culture</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-4 border-black shadow-brutal-lg">
            <CardContent className="p-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center border-4 border-black bg-white mx-auto mb-6 shadow-brutal-sm">
                <CheckCircle2 className="h-10 w-10 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wide text-black mb-4">For Employees</h3>
              <div className="text-6xl font-black text-primary mb-4">4.9/5</div>
              <p className="text-base font-bold text-black/70">Client satisfaction with our wellness programs</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
          >
            Learn more about our approach
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  )
}
