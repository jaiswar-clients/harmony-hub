"use client"

import Link from "next/link"
import { X, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    <footer className="bg-black border-t-4 border-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="bg-secondary border-4 border-white p-3 shadow-[4px_4px_0px_0px_#fff]">
                <span className="font-black text-lg uppercase tracking-wide">
                  HarmonyHub
                </span>
              </div>
            </Link>
            <p className="text-sm font-bold leading-relaxed text-white/80 max-w-xs">
              Transforming workplaces through music, wellness, and laughter.
            </p>
            <div className="mt-6 bg-white border-4 border-white p-4 shadow-[4px_4px_0px_0px_#fff]">
              <p className="text-sm font-black text-black uppercase tracking-wide">
                Build Happier Workplaces
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black mb-6 text-white text-lg uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-white/70 border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-100 pb-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black mb-6 text-white text-lg uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-white/70 border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-100 pb-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-black mb-4 text-white text-lg uppercase tracking-wide">Stay Connected</h4>
            <form className="mb-6">
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white border-4 border-white text-white placeholder:text-white/40 focus:bg-yellow-100"
                />
                <Button variant="default" className="w-full">
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="flex gap-3">
              <a href="#" className="flex h-12 w-12 items-center justify-center border-4 border-white bg-secondary shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100">
                <X className="h-5 w-5" strokeWidth={3} />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center border-4 border-white bg-secondary shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100">
                <Linkedin className="h-5 w-5" strokeWidth={3} />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center border-4 border-white bg-secondary shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100">
                <Mail className="h-5 w-5" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-4 border-white pt-8 md:flex-row">
          <p className="text-xs font-bold text-white/70 uppercase tracking-wide">
            © {new Date().getFullYear()} HarmonyHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs font-bold text-white/70 uppercase tracking-wide hover:text-white hover:underline decoration-2 underline-offset-2 transition-all">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs font-bold text-white/70 uppercase tracking-wide hover:text-white hover:underline decoration-2 underline-offset-2 transition-all">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
