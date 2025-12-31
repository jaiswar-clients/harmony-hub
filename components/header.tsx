"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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
    { label: "Why Us", href: "#why-harmonyhub" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-150 ${
        scrolled
          ? "bg-white border-b-4 border-black shadow-brutal-sm"
          : "bg-background/95 border-b-4 border-black"
      }`}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 relative z-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group"
        >
          <div className="relative overflow-hidden bg-secondary border-4 border-black p-2 shadow-brutal-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all duration-100">
            <span className="font-black text-xl uppercase tracking-wide">
              HarmonyHub
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 font-bold text-sm uppercase tracking-wide border-2 border-transparent hover:border-black hover:bg-primary hover:text-white transition-all duration-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="default"
            size="sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 border-4 border-black bg-white shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" strokeWidth={3} /> : <Menu className="h-5 w-5" strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-white border-b-4 border-black shadow-brutal lg:hidden">
          <nav className="flex flex-col gap-2 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 font-bold text-base uppercase tracking-wide border-2 border-black bg-secondary hover:bg-primary hover:text-white transition-all duration-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t-4 border-black">
              <Button
                variant="default"
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
