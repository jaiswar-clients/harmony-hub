import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-black/40 selection:bg-primary selection:text-primary-foreground border-black h-12 w-full min-w-0 rounded-none border-4 bg-white px-4 py-3 text-base font-bold shadow-brutal-sm transition-all duration-150 outline-none file:inline-flex file:h-10 file:border-4 file:border-black file:bg-white file:text-sm file:font-bold disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:bg-yellow-100 focus-visible:shadow-[6px_6px_0px_0px_#000] focus-visible:border-black focus-visible:outline-none',
        'aria-invalid:border-primary aria-invalid:shadow-brutal-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
