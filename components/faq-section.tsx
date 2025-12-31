"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What should I expect from HarmonyHub programs?",
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
    <section id="faq" className="bg-background py-24 lg:py-32">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #000, #000 1px, transparent 1px, transparent 12px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side header */}
          <div>
            <Badge variant="pill" className="bg-primary text-white border-4 border-black">
              FAQ
            </Badge>
            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-black">
              FREQUENTLY
              <br />
              <span className="text-primary">ASKED</span>
              <br />
              QUESTIONS
            </h2>
            <p className="mt-6 text-lg font-bold text-black/80">
              Have questions about our programs? Here are answers to the most common queries.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-black hover:text-primary transition-colors border-b-4 border-black hover:border-primary pb-1"
            >
              Contact us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </a>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-4 border-black bg-white shadow-brutal data-[state=open]:bg-yellow-100"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-black uppercase tracking-wide text-black hover:no-underline text-base [&[data-state=open]]:text-primary">
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
