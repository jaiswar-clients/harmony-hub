import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center border-2 border-black font-black text-xs uppercase tracking-widest px-3 py-1 w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-all duration-150 shadow-brutal-sm',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground rounded-none',
        secondary:
          'bg-secondary text-secondary-foreground rounded-none',
        muted:
          'bg-muted text-muted-foreground rounded-none',
        outline:
          'bg-background text-foreground rounded-none',
        pill:
          'bg-primary text-primary-foreground rounded-full shadow-brutal-sm',
        rotated:
          'bg-secondary text-secondary-foreground rounded-none rotate-[-12deg] absolute -top-3 -right-3 shadow-brutal-md hover:rotate-[-8deg]',
        stamp:
          'bg-accent text-accent-foreground rounded-full px-4 py-2 shadow-brutal-md border-4 animate-wiggle',
        bauhaus:
          'bg-accent text-accent-foreground rounded-none rotate-[45deg] shadow-brutal-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
