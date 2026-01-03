"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, CheckCircle, Sparkles, Music, Heart } from "lucide-react"
import Image from "next/image"

import { Header } from "@/components/header"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 bg-primary border-b-4 border-black">
      <Header />

      {/* Bauhaus geometric decorations */}
      <div className="absolute top-40 left-10 w-48 h-48 border-8 border-black opacity-10 rounded-full bauhaus-rotated-45 pointer-events-none animate-spin-slow" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent rounded-full opacity-15 pointer-events-none" />

      {/* Triangle decorations */}
      <div className="absolute top-60 right-10 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-black opacity-10 bauhaus-rotated-45 pointer-events-none" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bauhaus-dot-grid text-white"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Badge - Enhanced Bauhaus */}
            <div className="inline-block mb-8 animate-snap-in relative">
              <Badge variant="bauhaus" className="bg-secondary text-black border-4 border-black px-4 py-2">
                HR-Approved
              </Badge>
              {/* Geometric accent */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full border-2 border-black" />
            </div>

            {/* Hero Headline - Bauhaus typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-white mb-8 animate-snap-in delay-100">
              TRANSFORMING
              <br />
              <span className="text-white bg-black px-4 py-2 -ml-2 inline-block border-4 border-secondary">WORKPLACES</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl font-bold text-white/90 max-w-2xl mb-12 animate-snap-in delay-200 leading-relaxed">
              Premium corporate engagement, wellness, and entertainment solutions that reduce stress, boost morale, and build stronger teams.
            </p>

            {/* CTAs - Bauhaus buttons */}
            <div className="flex flex-wrap gap-4 mb-16 animate-snap-in delay-300">
              <Button
                variant="bauhaus"
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-6 w-6" strokeWidth={3} />
              </Button>
            </div>

            {/* Trust Indicator - Geometric avatars */}
            <div className="flex items-center gap-4 animate-snap-in delay-400">
              <div className="flex -space-x-4">
                <div className="w-14 h-14 border-4 border-black bg-primary flex items-center justify-center text-white text-sm font-black rounded-none shadow-brutal-sm">H</div>
                <div className="w-14 h-14 border-4 border-black bg-secondary flex items-center justify-center text-black text-sm font-black rounded-full shadow-brutal-sm">M</div>
                <div className="w-14 h-14 border-4 border-black bg-accent flex items-center justify-center text-accent-foreground text-sm font-black bauhaus-rotated-45 shadow-brutal-sm">J</div>
              </div>
              <div className="font-black text-white text-lg">
                Trusted by <span className="text-accent font-black">150+</span> Organizations
              </div>
            </div>
          </div>

          {/* Right Column - Image with Bauhaus frame */}
          <div className="relative animate-snap-in delay-200">
            {/* Geometric decorations around image */}
            <div className="absolute -top-8 -left-8 w-full h-full border-4 border-black opacity-20 bauhaus-rotated-45 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary opacity-30 rounded-full pointer-events-none" />

            <div className="relative aspect-square overflow-hidden border-4 border-black shadow-brutal-xl bg-white">
              <Image
                src="https://images.pexels.com/photos/8436587/pexels-photo-8436587.jpeg"
                alt="Corporate wellness session"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Badge - Rating - Bauhaus styled */}
              <div className="absolute top-6 right-6 bg-white border-4 border-black shadow-brutal-lg p-4 animate-wiggle">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-primary rounded-none">
                    <Heart className="h-6 w-6 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-black">4.8/5</div>
                    <div className="text-xs font-black text-black/70 uppercase tracking-wider">Employee Rating</div>
                  </div>
                </div>
                {/* Geometric accent */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full border-2 border-black" />
              </div>

              {/* Floating Card - Sessions - Bauhaus styled */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-white border-4 border-black shadow-brutal-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-secondary rounded-full">
                          <Music className="h-6 w-6 text-black" strokeWidth={3} />
                        </div>
                        <div>
                          <div className="text-sm font-black uppercase tracking-wider text-black">Live Sessions Daily</div>
                          <div className="text-xs font-bold text-black/70">Yoga • Music • Meditation</div>
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-primary bauhaus-rotated-45">
                        <ArrowRight className="h-5 w-5 text-white -rotate-45" strokeWidth={3} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Bauhaus cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Stress Reduction",
              title: "↓ 40% Workplace Stress",
              description: "Measured impact across 150+ organizations",
              icon: Target,
              color: "bg-primary",
              textColor: "text-primary-foreground",
            },
            {
              label: "Employee Engagement",
              title: "↑ 42% Engagement",
              description: "Higher participation and satisfaction",
              icon: CheckCircle,
              color: "bg-secondary",
              textColor: "text-secondary-foreground",
            },
            {
              label: "HR Time Saved",
              title: "20+ HR Hours Saved",
              description: "Every month on coordination",
              icon: Heart,
              color: "bg-accent",
              textColor: "text-accent-foreground",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`border-4 border-black shadow-brutal-lg hover:-translate-y-1 hover:shadow-brutal-xl transition-all duration-200 ${item.color}`}
            >
              <CardContent className="p-6">
                <div className={`flex h-14 w-14 items-center justify-center border-4 border-black bg-white shadow-brutal-md mb-4 ${
                  // Every 3rd item gets different shape
                  (index + 1) % 3 === 0 ? 'rounded-full' : 'rounded-none'
                }`}>
                  <item.icon className={`h-7 w-7 !${item.textColor}`} strokeWidth={3} />
                </div>
                <h3 className={`text-2xl font-black uppercase tracking-wider ${item.textColor}`}>{item.title}</h3>
                <p className={`text-sm font-bold ${item.textColor}/80 mt-2`}>{item.description}</p>
                <div className={`mt-4 flex items-center text-sm font-black uppercase tracking-wider ${item.textColor}`}>
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
