import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-foreground h-12 w-full min-w-0 rounded-none border-4 bg-background px-4 py-3 text-base font-bold shadow-brutal-sm transition-all duration-150 outline-none file:inline-flex file:h-10 file:border-4 file:border-black file:bg-background file:text-sm file:font-bold disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:bg-accent/10 focus-visible:shadow-brutal-md focus-visible:border-black focus-visible:outline-none focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5',
        'aria-invalid:border-destructive aria-invalid:shadow-brutal-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
