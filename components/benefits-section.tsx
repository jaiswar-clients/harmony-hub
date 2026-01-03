"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Building2, Users } from "lucide-react"
import Image from "next/image"

const employerBenefits = [
  "Reduce burnout and absenteeism",
  "Improve retention and morale",
  "Strengthen workplace culture",
  "Predictable subscription pricing",
  "Less coordination for HR teams",
]

const employeeBenefits = [
  "Lower stress levels",
  "Better mental & physical well-being",
  "Higher motivation and positivity",
  "Stronger team bonding",
]

const instructors = [
  {
    name: "Maya Sharma",
    role: "Wellness Lead",
    image: "https://images.pexels.com/photos/3861965/pexels-photo-3861965.jpeg",
  },
  {
    name: "Aaron Patel",
    role: "Music Director",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
  },
  {
    name: "Olivia Tran",
    role: "Laughter Coach",
    image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-primary py-24 lg:py-32 border-t-4 border-b-4 border-black relative overflow-hidden">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 border-8 border-white opacity-10 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-secondary opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-white opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-secondary text-black border-4 border-black">
            Value Proposition
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-white mt-8">
            WHY IT
            <br />
            <span className="bg-black text-secondary px-4 py-2 -ml-2 inline-block border-4 border-white">MATTERS</span>
          </h2>
          <p className="mt-6 text-lg font-black text-white/80 max-w-2xl mx-auto">
            Answering "Why should HR care?" with real impact for both organizations and employees.
          </p>
        </div>

        {/* Instructor Cards - Bauhaus styled */}
        <div className="flex gap-6 overflow-x-auto pb-8 mb-16 scrollbar-hide">
          {instructors.map((instructor, index) => (
            <Card key={index} className={`min-w-[220px] flex-1 border-4 border-black shadow-brutal-lg overflow-hidden ${
              // Every 3rd card gets accent
              (index + 1) % 3 === 0 ? 'bg-accent' : 'bg-white'
            }`}>
              <div className="relative aspect-[3/4]">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
                {/* Geometric overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-4 text-center bg-white border-t-4 border-black">
                <p className="font-black text-black uppercase">{instructor.name}</p>
                <p className="text-sm font-bold text-black/70">{instructor.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Grid - Bauhaus color blocking */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* HR Benefits */}
          <Card className="bg-white border-4 border-black shadow-brutal-xl">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-primary shadow-brutal-md rounded-none">
                  <Building2 className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider text-black">What HR Teams Gain</h3>
              </div>
              <ul className="space-y-4">
                {employerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className={`flex h-8 w-8 items-center justify-center border-2 border-black bg-secondary shadow-brutal-sm ${
                      // Every 3rd item different shape
                      (index + 1) % 3 === 0 ? 'rounded-full' : 'rounded-none'
                    }`}>
                      <Check className="h-4 w-4 text-black" strokeWidth={3} />
                    </div>
                    <span className="font-black text-black">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Employee Benefits */}
          <Card className="bg-secondary border-4 border-black shadow-brutal-xl">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-accent shadow-brutal-md rounded-full">
                  <Users className="h-8 w-8 text-black" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider text-black">What Employees Experience</h3>
              </div>
              <ul className="space-y-4">
                {employeeBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className={`flex h-8 w-8 items-center justify-center border-2 border-black bg-white shadow-brutal-sm ${
                      // Every 3rd item different shape
                      (index + 1) % 3 === 0 ? 'rounded-full' : 'rounded-none'
                    }`}>
                      <Check className="h-4 w-4 text-black" strokeWidth={3} />
                    </div>
                    <span className="font-black text-black">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
