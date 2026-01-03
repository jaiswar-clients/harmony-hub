import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-black uppercase tracking-wider transition-all duration-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none rounded-none",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-4 border-black shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
        secondary: 'bg-secondary text-secondary-foreground border-4 border-black shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
        outline: 'bg-background text-foreground border-4 border-black shadow-brutal hover:bg-muted hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
        ghost: 'bg-transparent text-foreground border-2 border-transparent hover:border-black hover:shadow-brutal-sm active:translate-x-[2px] active:translate-y-[2px]',
        link: 'text-primary underline-offset-4 hover:underline border-0 shadow-none',
        muted: 'bg-muted text-muted-foreground border-4 border-black shadow-brutal hover:bg-muted/90 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
        bauhaus: 'bg-accent text-accent-foreground border-4 border-black shadow-brutal-lg rounded-full hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-xl active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      },
      size: {
        default: 'h-12 px-6 text-sm',
        sm: 'h-10 px-4 text-xs border-2',
        lg: 'h-14 px-8 text-base',
        xl: 'h-16 px-10 text-lg',
        icon: 'size-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
