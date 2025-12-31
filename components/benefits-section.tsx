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
    <section id="benefits" className="bg-primary py-24 lg:py-32 border-t-4 border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="pill" className="bg-secondary text-black border-4 border-black">
            Value Proposition
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-white mt-8">
            WHY IT
            <br />
            <span className="text-secondary">MATTERS</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-white/80 max-w-2xl mx-auto">
            Answering "Why should HR care?" with real impact for both organizations and employees.
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="flex gap-6 overflow-x-auto pb-8 mb-16 scrollbar-hide">
          {instructors.map((instructor, index) => (
            <Card key={index} className="min-w-[220px] flex-1 border-4 border-black shadow-brutal overflow-hidden">
              <div className="relative aspect-[3/4]">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center bg-white border-t-4 border-black">
                <p className="font-black text-black uppercase">{instructor.name}</p>
                <p className="text-sm font-bold text-black/70">{instructor.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* HR Benefits */}
          <Card className="bg-white border-4 border-black shadow-brutal-lg">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-primary shadow-brutal-sm">
                  <Building2 className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wide text-black">What HR Teams Gain</h3>
              </div>
              <ul className="space-y-4">
                {employerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-black bg-secondary">
                      <Check className="h-4 w-4 text-black" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-black">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Employee Benefits */}
          <Card className="bg-secondary border-4 border-black shadow-brutal-lg">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-muted shadow-brutal-sm">
                  <Users className="h-8 w-8 text-black" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wide text-black">What Employees Experience</h3>
              </div>
              <ul className="space-y-4">
                {employeeBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-black bg-white">
                      <Check className="h-4 w-4 text-black" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-black">{benefit}</span>
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
