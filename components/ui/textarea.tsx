import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-foreground placeholder:text-muted-foreground flex min-h-[80px] w-full rounded-none border-4 bg-background px-4 py-3 text-base font-bold shadow-brutal-sm transition-all duration-150 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 resize-none',
        'focus-visible:bg-accent/10 focus-visible:shadow-brutal-md focus-visible:border-black focus-visible:outline-none focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
