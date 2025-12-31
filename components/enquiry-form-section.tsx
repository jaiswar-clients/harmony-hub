"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export function EnquiryFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    companySize: "",
    requirementType: "",
    objective: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-muted">
      {/* Stripe pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 15px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-primary text-white">
            Get Started
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black mt-8">
            LET'S BUILD A <span className="text-primary">HAPPIER</span>
            <br />
            HEALTHIER <span className="text-primary">WORKPLACE</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-black/80 max-w-2xl mx-auto">
            Tell us about your organization and goals. Our team will design the right engagement solution for you.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="bg-white border-4 border-black shadow-brutal-lg">
            <CardContent className="p-8 lg:p-12">

              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="flex h-20 w-20 items-center justify-center border-4 border-black bg-primary mx-auto mb-6 shadow-brutal-sm">
                    <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-wide text-black mb-4">
                    Thank You!
                  </h3>
                  <p className="text-base font-bold text-black/70">
                    We've received your enquiry and will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <Label htmlFor="fullName" className="text-sm font-black uppercase tracking-wide text-black">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="workEmail" className="text-sm font-black uppercase tracking-wide text-black">
                        Work Email *
                      </Label>
                      <Input
                        id="workEmail"
                        type="email"
                        placeholder="name@company.com"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="companyName" className="text-sm font-black uppercase tracking-wide text-black">
                        Company Name *
                      </Label>
                      <Input
                        id="companyName"
                        type="text"
                        placeholder="Your company name"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phoneNumber" className="text-sm font-black uppercase tracking-wide text-black">
                        Phone Number *
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="companySize" className="text-sm font-black uppercase tracking-wide text-black">
                        Company Size *
                      </Label>
                      <Select
                        required
                        value={formData.companySize}
                        onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                      >
                        <SelectTrigger className="border-4 border-black">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1–50</SelectItem>
                          <SelectItem value="51-200">51–200</SelectItem>
                          <SelectItem value="201-500">201–500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="requirementType" className="text-sm font-black uppercase tracking-wide text-black">
                        Looking For *
                      </Label>
                      <Select
                        required
                        value={formData.requirementType}
                        onValueChange={(value) => setFormData({ ...formData, requirementType: value })}
                      >
                        <SelectTrigger className="border-4 border-black">
                          <SelectValue placeholder="Select requirement type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="subscription">Corporate Subscription</SelectItem>
                          <SelectItem value="wellness">Wellness Program</SelectItem>
                          <SelectItem value="motivation">Motivation / Leadership</SelectItem>
                          <SelectItem value="event">One-time Corporate Event</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="objective" className="text-sm font-black uppercase tracking-wide text-black">
                      Your Objective <span className="font-normal text-black/50">(Optional)</span>
                    </Label>
                    <Textarea
                      id="objective"
                      placeholder="Share your goals, challenges, or specific requirements..."
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      rows={4}
                      className="border-4 border-black resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                  >
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
                  </Button>

                  <p className="text-center text-sm font-bold text-black/70">
                    We'll contact you within 24 hours.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
