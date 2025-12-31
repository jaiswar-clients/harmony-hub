import { ComponentPropsWithoutRef, CSSProperties, FC } from "react"

import { cn } from "@/lib/utils"

export interface BorderBeamProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

export const BorderBeam: FC<BorderBeamProps> = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}) => {
  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0",
        "before:absolute before:inset-0 before:animate-beam before:rounded-[inherit]",
        "after:absolute after:inset-0 after:animate-beam after:rounded-[inherit]",
        "before:border-[calc(var(--border-width)*1px)]",
        "after:border-[calc(var(--border-width)*1px)]",
        "before:[border-image:conic-gradient(at_calc(var(--border-width)_50%,transparent_calc(var(--size)/2_plus_50%)_0deg,#000_transparent_calc(var(--size)/2_plus_50%)_180deg)]",
        "after:[border-image:conic-gradient(at_calc(var(--border-width)_50%,transparent_calc(var(--size)/2_plus_50%)_180deg,#000_transparent_calc(var(--size)/2_plus_50%)_360deg)]",
        "before:[background-size:50%_50%]",
        "after:[background-size:50%_50%]",
        "before:[background-repeat:no-repeat]",
        "after:[background-repeat:no-repeat]",
        "before:[mask-image:conic-gradient(at_calc(var(--border-width)_50%,transparent_calc(var(--size)/2_plus_50%)_0deg,#000_transparent_calc(var(--size)/2_plus_50%)_180deg)]",
        "after:[mask-image:conic-gradient(at_calc(var(--border-width)_50%,transparent_calc(var(--size)/2_plus_50%)_180deg,#000_transparent_calc(var(--size)/2_plus_50%)_360deg)]",
        "before:[mask-size:50%_50%]",
        "after:[mask-size:50%_50%]",
        "before:animate-[shimmer_var(--duration)_ease-in-out_infinite_alternate]",
        "after:animate-[shimmer_var(--duration)_ease-in-out_infinite_alternate-reverse]",
        "before:animation-delay:var(--delay)",
        "after:animation-delay:var(--delay)",
        className
      )}
    />
  )
}
