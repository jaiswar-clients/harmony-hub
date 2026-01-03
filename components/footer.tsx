"use client"

import Link from "next/link"
import { X, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/logo"

const footerLinks = {
  services: [
    { label: "Corporate Subscription", href: "#services" },
    { label: "Wellness Programs", href: "#services" },
    { label: "Motivation Sessions", href: "#services" },
    { label: "Music & Events", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-footer-bg border-t-4 border-black relative overflow-hidden">
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 border-8 border-white opacity-10 rounded-full bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 relative z-10">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-sm font-bold leading-relaxed text-footer-text max-w-xs">
              Transforming workplaces through music, wellness, and laughter.
            </p>
            <div className="mt-6 bg-background border-4 border-white p-4 shadow-brutal-md">
              <p className="text-sm font-black text-footer-text uppercase tracking-wider">
                Build Happier Workplaces
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black mb-6 text-footer-text text-lg uppercase tracking-wider relative">
              Services
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-accent rounded-full border-2 border-white" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-footer-text border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-100 pb-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black mb-6 text-footer-text text-lg uppercase tracking-wider relative">
              Company
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary rounded-full border-2 border-white" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-footer-text border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-100 pb-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-black mb-4 text-footer-text text-lg uppercase tracking-wider relative">
              Stay Connected
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-secondary rounded-full border-2 border-white" />
            </h4>
            <form className="mb-6">
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background border-4 border-white text-footer-text placeholder:text-white/40 focus:bg-accent/10"
                />
                <Button variant="bauhaus" className="w-full">
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="flex gap-3">
              <a href="#" className="flex h-12 w-12 items-center justify-center border-4 border-white bg-secondary shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md transition-all duration-100 rounded-none">
                <X className="h-5 w-5" strokeWidth={3} />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center border-4 border-white bg-primary shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md transition-all duration-100 rounded-none">
                <Linkedin className="h-5 w-5" strokeWidth={3} />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center border-4 border-white bg-accent shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md transition-all duration-100 rounded-none">
                <Mail className="h-5 w-5" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-4 border-white pt-8 md:flex-row">
          <p className="text-xs font-black text-footer-text uppercase tracking-wider">
            © {new Date().getFullYear()} PeopleX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs font-black text-footer-text uppercase tracking-wider hover:text-white hover:underline decoration-4 underline-offset-2 transition-all">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs font-black text-footer-text uppercase tracking-wider hover:text-white hover:underline decoration-4 underline-offset-2 transition-all">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
