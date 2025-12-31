import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-black placeholder:text-black/40 flex min-h-32 w-full rounded-none border-4 bg-white px-4 py-3 text-base font-bold shadow-brutal-sm transition-all duration-150 outline-none focus-visible:bg-yellow-100 focus-visible:shadow-[6px_6px_0px_0px_#000] disabled:cursor-not-allowed disabled:opacity-50 resize-none',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
