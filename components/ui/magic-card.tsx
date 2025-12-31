"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface MagicCardProps {
  children?: React.ReactNode
  className?: string
}

export function MagicCard({
  children,
  className,
}: MagicCardProps) {
  return (
    <div
      className={cn("group relative rounded-[inherit]", className)}
    >
      <div className="relative">{children}</div>
    </div>
  )
}
