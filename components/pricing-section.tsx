"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

const pricingTiers = [
  {
    name: "Essential",
    price: "₹49,999",
    period: "/month",
    description: "For teams of 100-250",
    features: [
      "2 sessions per month",
      "Choose: Music, Yoga, or Laughter",
      "Basic engagement tracking",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹99,999",
    period: "/month",
    description: "For teams of 250-1000",
    features: [
      "4 sessions per month",
      "Full service mix",
      "Quarterly impact reports",
      "Dedicated account manager",
      "Custom event add-ons",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams of 1000+",
    features: [
      "Unlimited sessions",
      "Culture consulting",
      "Multi-location support",
      "Executive programs",
      "Priority scheduling",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-24 lg:py-32 border-t-4 border-b-4 border-black relative overflow-hidden">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 left-1/4 w-32 h-32 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-15 bauhaus-rotated-neg-45 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-black opacity-10 rounded-full pointer-events-none" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-dot-grid text-black" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="stamp" className="mb-8 bg-primary text-white border-4 border-black">
            Pricing
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black">
            TRANSPARENT <span className="bg-black text-primary px-4 py-2 -ml-2 inline-block border-4 border-white">PRICING</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-black/80">
            Choose the plan that fits your organization. Scale as you see results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative flex flex-col border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 ${
                tier.popular ? "bg-primary scale-105" : "bg-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <Badge variant="rotated" className="bg-secondary text-black">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                <div>
                  <h3 className={`text-2xl font-black uppercase tracking-wide ${tier.popular ? "text-white" : "text-black"}`}>
                    {tier.name}
                  </h3>
                  <p className={`mt-2 text-sm font-bold ${tier.popular ? "text-white/80" : "text-black/70"}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mt-6">
                  <span className={`text-5xl font-black ${tier.popular ? "text-white" : "text-black"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-lg font-bold ${tier.popular ? "text-white/80" : "text-black/70"}`}>
                    {tier.period}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center border-4 border-black ${
                        tier.popular ? "bg-secondary" : "bg-secondary"
                      }`}>
                        <Check className="h-3 w-3 text-black" strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-bold ${tier.popular ? "text-white" : "text-black"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? "secondary" : "default"}
                  className="mt-10 w-full"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
