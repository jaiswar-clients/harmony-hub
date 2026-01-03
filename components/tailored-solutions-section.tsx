"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Calendar, Globe, TrendingUp, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function TailoredSolutionsSection() {
  const solutions = [
    {
      icon: Calendar,
      title: "Fully Customized Engagement Calendars",
      description: "We design engagement calendars aligned with your organization's rhythm, incorporating quarterly themes, monthly focus areas, and special moments.",
    },
    {
      icon: Globe,
      title: "Industry-Specific Programs",
      description: "From IT to BFSI, healthcare to manufacturing — we understand different industry challenges and design programs that resonate.",
    },
    {
      icon: Target,
      title: "KPI-Aligned Engagement Design",
      description: "Every session is designed to support your business objectives — whether it's improving retention, boosting productivity, or reducing stress.",
    },
    {
      icon: TrendingUp,
      title: "Hybrid Delivery Models",
      description: "Online, onsite, or hybrid — flexible delivery options that work for your distributed teams across multiple locations.",
    },
    {
      icon: Sparkles,
      title: "Festival & Milestone-Based Engagement",
      description: "Special programs around Diwali, New Year, Women's Day, team milestones, and important organizational moments.",
    },
  ]

  return (
    <section id="solutions" className="relative py-24 lg:py-32 overflow-hidden bg-background border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 left-1/4 w-32 h-32 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-15 bauhaus-rotated-neg-45 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-16 h-16 border-4 border-black opacity-10 rounded-full pointer-events-none" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-dot-grid text-black" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <Badge variant="stamp" className="bg-accent text-accent-foreground border-4 border-black">
              Custom Solutions
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black mt-8">
              DESIGNED FOR
              <br />
              <span className="bg-primary text-primary-foreground px-4 py-2 -ml-2 inline-block border-4 border-black">YOUR PEOPLE</span>
            </h2>
            <p className="mt-6 text-lg font-bold text-black/70 leading-relaxed">
              Tell us your objective — we'll design a fully customized engagement experience that fits your organization's unique culture and business objectives.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "No cookie-cutter solutions",
                "Deep cultural immersion",
                "Strategic alignment with HR goals",
                "Scalable across locations",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`flex h-6 w-6 items-center justify-center border-2 border-black bg-primary shadow-brutal-sm ${
                    // Every 3rd item different shape
                    (index + 1) % 3 === 0 ? 'rounded-full' : 'rounded-none'
                  }`}>
                    <div className="h-2 w-2 bg-white" />
                  </div>
                  <span className="font-bold text-black">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                variant="bauhaus"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Custom Journey
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
              </Button>
            </div>
          </div>

          {/* Right content - Image with overlay */}
          <div className="relative">
            <div className="relative aspect-square border-4 border-black shadow-brutal-lg overflow-hidden">
              {/* Geometric accent */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-accent border-4 border-black bauhaus-rotated-45 opacity-80 z-10" />

              <Image
                src="https://images.pexels.com/photos/8436500/pexels-photo-8436500.jpeg"
                alt="Custom corporate wellness session"
                fill
                className="object-cover"
              />

              {/* Floating card overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <Card className="bg-white border-4 border-black shadow-brutal-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm rounded-none">
                        <Target className="h-6 w-6 text-white" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="font-black text-black uppercase tracking-wider">Your Objectives</p>
                        <p className="text-sm font-bold text-black/70">Our Mission</p>
                      </div>
                    </div>
                    <p className="font-bold text-black leading-relaxed text-sm">
                      Every program is crafted around your unique challenges — whether you're reducing stress, improving retention, or building culture.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Industries badge */}
            <div className="absolute -top-6 -right-6 hidden lg:block border-4 border-black bg-primary shadow-brutal-md p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-5 w-5 text-white" strokeWidth={3} />
                <span className="font-black uppercase text-white">Industries</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["IT", "BFSI", "Healthcare", "Manufacturing", "Retail", "Startup"].map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 border-2 border-white bg-white/10 text-white text-sm font-bold uppercase"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Solution cards grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Card key={index} className={`bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 ${
              // Every 3rd card gets accent
              (index + 1) % 3 === 0 ? 'relative' : ''
            }`}>
              {/* Geometric accent on every 3rd card */}
              {(index + 1) % 3 === 0 && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black rounded-full" />
              )}
              <CardContent className="p-6">
                <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm mb-6">
                  <solution.icon className="h-7 w-7 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide text-black mb-3">
                  {solution.title}
                </h3>
                <p className="text-sm font-bold text-black/70 leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
