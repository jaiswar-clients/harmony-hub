"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, CheckCircle, Sparkles, Music, Heart, Download } from "lucide-react"
import Image from "next/image"

import { Header } from "@/components/header"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 bg-background">
      <Header />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-block mb-8 animate-snap-in">
              <Badge variant="rotated" className="bg-secondary text-black border-4 border-black">
                HR-Approved
              </Badge>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] text-black mb-8 animate-snap-in delay-100">
              TRANSFORMING
              <br />
              <span className="text-primary">WORKPLACES</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl font-bold text-black max-w-2xl mb-12 animate-snap-in delay-200">
              Premium corporate engagement, wellness, and entertainment solutions that reduce stress, boost morale, and build stronger teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16 animate-snap-in delay-300">
              <Button
                variant="default"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Download Deck
                <Download className="ml-2 h-5 w-5" strokeWidth={3} />
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 animate-snap-in delay-400">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 border-4 border-black bg-primary flex items-center justify-center text-white text-sm font-black">H</div>
                <div className="w-12 h-12 border-4 border-black bg-secondary flex items-center justify-center text-black text-sm font-black">M</div>
                <div className="w-12 h-12 border-4 border-black bg-muted flex items-center justify-center text-black text-sm font-black">J</div>
              </div>
              <div className="font-bold text-black">
                Trusted by <span className="text-primary">150+</span> Organizations
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-snap-in delay-200">
            <div className="relative aspect-square overflow-hidden border-4 border-black shadow-brutal-lg bg-white">
              <Image
                src="https://images.pexels.com/photos/8436587/pexels-photo-8436587.jpeg"
                alt="Corporate wellness session"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Badge - Rating */}
              <div className="absolute top-6 right-6 bg-white border-4 border-black shadow-brutal-sm p-4 animate-wiggle">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-primary">
                    <Heart className="h-6 w-6 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-black">4.8/5</div>
                    <div className="text-xs font-bold text-black/70 uppercase">Employee Rating</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Sessions */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-white border-4 border-black shadow-brutal-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-secondary">
                          <Music className="h-6 w-6 text-black" strokeWidth={3} />
                        </div>
                        <div>
                          <div className="text-sm font-black uppercase tracking-wide text-black">Live Sessions Daily</div>
                          <div className="text-xs font-bold text-black/70">Yoga • Music • Meditation</div>
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-primary">
                        <ArrowRight className="h-5 w-5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Stress Reduction",
              title: "↓ 40% Workplace Stress",
              description: "Measured impact across 150+ organizations",
              icon: Target,
              color: "bg-primary",
            },
            {
              label: "Employee Engagement",
              title: "↑ 42% Engagement",
              description: "Higher participation and satisfaction",
              icon: CheckCircle,
              color: "bg-secondary",
            },
            {
              label: "HR Time Saved",
              title: "20+ HR Hours Saved",
              description: "Every month on coordination",
              icon: Heart,
              color: "bg-muted",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white border-4 border-black shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-200"
            >
              <CardContent className="p-6">
                <div className={`flex h-14 w-14 items-center justify-center border-4 border-black ${item.color} shadow-brutal-sm mb-4`}>
                  <item.icon className="h-7 w-7 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-black uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm font-bold text-black/70 mt-2">{item.description}</p>
                <div className="mt-4 flex items-center text-primary text-sm font-black uppercase tracking-wide">
                  {item.label} <ArrowRight className="ml-1 h-4 w-4" strokeWidth={3} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
