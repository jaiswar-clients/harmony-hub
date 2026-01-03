"use client"

import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {/* Logo image only */}
      <div className="relative w-32 h-12 flex-shrink-0">
        <Image
          src="/logo.png"
          alt="PeopleX Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}
