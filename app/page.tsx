import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { PartnersSection } from "@/components/partners-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { AboutSection } from "@/components/about-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { WhyPeopleXSection } from "@/components/why-peoplex-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TailoredSolutionsSection } from "@/components/tailored-solutions-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FAQSection } from "@/components/faq-section"
import { EnquiryFormSection } from "@/components/enquiry-form-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero & Opening */}
        <HeroSection />
        <StatsSection />
        <PartnersSection />

        {/* Problem & Solution */}
        <ProblemSection />
        <SolutionSection />

        {/* About & Vision */}
        <AboutSection />
        <VisionMissionSection />

        {/* Services & Benefits */}
        <ServicesSection />
        <BenefitsSection />
        <WhyPeopleXSection />

        {/* Social Proof */}
        <CaseStudiesSection />
        <TestimonialsSection />

        {/* Solutions & Pricing */}
        <TailoredSolutionsSection />
        <ComparisonSection />
        {/* FAQ & Contact */}
        <FAQSection />
        <EnquiryFormSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
