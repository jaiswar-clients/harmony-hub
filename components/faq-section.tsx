"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What should I expect from PeopleX programs?",
    answer:
      "Our programs are designed with measurable outcomes. Clients report 30-45% reduction in stress indicators, 25-42% improvement in engagement scores, and lower absenteeism and turnover. We provide quarterly impact reports with your subscription.",
  },
  {
    question: "Do I need prior experience with wellness programs?",
    answer:
      "Not at all! We customize programs based on your team's preferences via surveys. Our average participation rate is 85%+. We offer hybrid options to maximize accessibility.",
  },
  {
    question: "What types of services do you offer?",
    answer:
      "We offer live music, DJ nights, yoga, meditation, sound healing, laughter therapy, motivational speaking, team building, and special event planning. One partner for all your needs.",
  },
  {
    question: "How early should I plan for an event?",
    answer:
      "We recommend booking 4-6 weeks in advance for regular sessions and 8-12 weeks for large events. However, we can accommodate shorter timelines based on availability.",
  },
  {
    question: "What if my company has a specific requirement?",
    answer:
      "We create fully customized programs. During our discovery call, we'll understand your unique needs and design a tailored solution that fits your culture and goals.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-muted py-24 lg:py-32 border-t-4 border-b-4 border-black relative overflow-hidden">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-15 pointer-events-none" />

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-diagonal-stripes text-black" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side header */}
          <div>
            <Badge variant="pill" className="bg-primary text-primary-foreground border-4 border-black">
              FAQ
            </Badge>
            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-normal text-black">
              FREQUENTLY
              <br />
              <span className="bg-black text-white px-4 py-2 -ml-2 inline-block border-4 border-primary">ASKED</span>
              <br />
              QUESTIONS
            </h2>
            <p className="mt-6 text-lg font-black text-black/80">
              Have questions about our programs? Here are answers to the most common queries.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
            >
              Contact us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </a>
          </div>

          {/* FAQ Accordion - Bauhaus styled */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`border-4 border-black bg-white shadow-brutal-md data-[state=open]:bg-accent/10 ${
                    // Every 3rd item gets accent border
                    (index + 1) % 3 === 0 ? 'border-l-8 border-l-primary' : ''
                  }`}
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-black uppercase tracking-wider text-black hover:no-underline text-base [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 leading-relaxed text-base font-bold text-black/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
