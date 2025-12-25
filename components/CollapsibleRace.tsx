'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface Props {
  title: string
  subtitle: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function CollapsibleRace({
  title,
  subtitle,
  children,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className=' overflow-hidden  bg-white'>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-start justify-between px-4 py-2
          text-white font-semibold text-sm transition-colors
          ${open ? 'bg-green-500' : 'bg-red-600'}
        `}
      >
        <div className='flex flex-col text-left'>
          <span>{title}</span>
          <span className='text-xs opacity-90'>{subtitle}</span>
        </div>

        {/* Plus / Minus */}
        {open ? <Minus className='w-5 h-5' /> : <Plus className='w-5 h-5' />}
      </button>

      {/* Content */}
      {open && <div className='p-2'>{children}</div>}
    </div>
  )
}
