"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const testimonials = [
  {
    quote: "PeopleX completely transformed our employee engagement strategy. The subscription model saved our HR team time while employees genuinely looked forward to every session.",
    author: "Sarah Chen",
    role: "HR Head",
    company: "Tech Company",
    image: "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg",
    rating: 5,
  },
  {
    quote: "The wellness and laughter sessions significantly reduced stress across teams. Participation levels were the highest we've seen in any engagement initiative.",
    author: "Michael Torres",
    role: "People Operations Manager",
    company: "Financial Services",
    image: "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg",
    rating: 5,
  },
  {
    quote: "From music to motivation, PeopleX delivered professionalism with creativity. Perfect partner for corporate engagement. Highly recommended for modern organizations.",
    author: "Amanda Liu",
    role: "Admin Head",
    company: "FMCG Company",
    image: "https://images.pexels.com/photos/7652243/pexels-photo-7652243.jpeg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-secondary border-t-4 border-b-4 border-black">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 border-8 border-black opacity-10 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-diagonal-stripes text-black" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="stamp" className="bg-primary text-white border-4 border-black">
            Testimonials
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black mt-8">
            WHAT OUR
            <br />
            <span className="bg-black text-primary px-4 py-2 -ml-2 inline-block border-4 border-white">CLIENTS SAY</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-black/70 max-w-2xl mx-auto">
            Hear from HR leaders and decision-makers who have transformed their workplace culture with PeopleX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-white border-4 border-black shadow-brutal-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 ${
              // Every 3rd card gets accent
              (index + 1) % 3 === 0 ? 'relative' : ''
            }`}>
              {/* Geometric accent on every 3rd card */}
              {(index + 1) % 3 === 0 && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black rounded-full" />
              )}
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="h-10 w-10 text-primary/30 mb-6" strokeWidth={3} />

                <p className="text-base font-bold text-black leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </p>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary stroke-primary" strokeWidth={3} />
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t-4 border-black">
                  <div className="relative h-14 w-14 overflow-hidden border-4 border-black">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-black uppercase">{testimonial.author}</p>
                    <p className="text-sm font-bold text-black/70">{testimonial.role}</p>
                    <p className="text-xs font-bold text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 border-4 border-black bg-white shadow-brutal">
          <div className="grid grid-cols-3 divide-x-4 divide-black">
            <div className="p-8 text-center">
              <p className="text-4xl font-black text-primary">150+</p>
              <p className="text-sm font-black uppercase tracking-wide text-black/70 mt-2">Companies</p>
            </div>
            <div className="p-8 text-center">
              <p className="text-4xl font-black text-primary">4.9/5</p>
              <p className="text-sm font-black uppercase tracking-wide text-black/70 mt-2">Rating</p>
            </div>
            <div className="p-8 text-center">
              <p className="text-4xl font-black text-primary">98%</p>
              <p className="text-sm font-black uppercase tracking-wide text-black/70 mt-2">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
          >
            Start your transformation journey
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  )
}
