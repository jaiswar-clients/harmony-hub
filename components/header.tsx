"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Why Us", href: "#why-peoplex" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-150 ${
        scrolled
          ? "bg-background border-b-4 border-black shadow-brutal"
          : "bg-background/95 border-b-4 border-black"
      }`}
    >
      {/* Bauhaus geometric decorations */}
      <div className="absolute top-0 left-10 w-16 h-16 border-4 border-black rounded-full opacity-20 bauhaus-rotated-45 pointer-events-none" />
      <div className="absolute top-20 right-20 w-12 h-12 bg-secondary opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 relative z-10">
        {/* Logo - Bauhaus geometric design */}
        <Logo className="group" />

        {/* Desktop Navigation - Enhanced styling */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-transparent hover:border-black hover:bg-primary hover:text-primary-foreground transition-all duration-100 relative ${
                // Every 3rd item gets rotated decoration
                (index + 1) % 3 === 0 ? 'relative' : ''
              }`}
            >
              {link.label}
              {/* Bauhaus geometric accent on every 3rd item */}
              {(index + 1) % 3 === 0 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-black" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="bauhaus"
            size="sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile menu button - Bauhaus styling */}
        <button
          className="lg:hidden p-2 border-4 border-black bg-background shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 rounded-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" strokeWidth={3} /> : <Menu className="h-5 w-5" strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile menu - Enhanced Bauhaus styling */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-background border-b-4 border-black shadow-brutal-lg lg:hidden">
          {/* Geometric decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-4 border-black opacity-10 bauhaus-rotated-45" />
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-secondary opacity-10 rounded-full" />

          <nav className="flex flex-col gap-2 px-6 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 font-black text-base uppercase tracking-wider border-4 border-black bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-100 relative ${
                  // Every 3rd item gets different color
                  (index + 1) % 3 === 0 ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t-4 border-black">
              <Button
                variant="bauhaus"
                className="w-full"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  setMobileMenuOpen(false)
                }}
              >
                Book Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
