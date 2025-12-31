"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-muted">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 2px, transparent 2px, transparent 30px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Card className="bg-white border-4 border-black shadow-brutal-xl">
          <CardContent className="p-12 lg:p-20 text-center">
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative">
              <Badge variant="stamp" className="bg-primary text-white mb-8">
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" strokeWidth={3} />
                Ready to Transform?
              </Badge>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black mb-4">
                YOUR PEOPLE DESERVE
                <br />
                <span className="text-primary">MORE THAN JUST WORK</span>
              </h2>

              <p className="mt-6 text-lg font-bold text-black/70 max-w-2xl mx-auto leading-relaxed">
                Create a culture of energy, well-being, and motivation with HarmonyHub. Join 150+ organizations building happier, healthier workplaces.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="border-4 border-black shadow-brutal"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book a Corporate Demo
                  <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-4 border-black shadow-brutal hover:bg-yellow-100"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Corporate Deck
                  <Download className="ml-2 h-5 w-5" strokeWidth={3} />
                </Button>
              </div>

              <div className="mt-16 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
                {[
                  { label: "No Commitment Required", value: "Free Consultation" },
                  { label: "Industry Leaders", value: "150+ Organizations" },
                  { label: "Proven Results", value: "4.8/5 Satisfaction" },
                ].map((item, index) => (
                  <Card key={index} className="border-4 border-black shadow-brutal-sm">
                    <CardContent className="p-6">
                      <p className="text-sm font-black uppercase tracking-wide text-black/70">{item.label}</p>
                      <p className="text-xl font-black text-primary mt-2">{item.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
