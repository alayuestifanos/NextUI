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
          ${open ? 'bg-[#37b34a]' : 'bg-[#b5280c]'}
        `}
      >
        <div className='flex flex-col text-left'>
          <span>{title}</span>
          <span className='text-xs opacity-90'>{subtitle}</span>
        </div>

        {/* Plus / Minus */}
        {open ? (
          <Minus className='w-5 h-5 text-white' strokeWidth={3} />
        ) : (
          <Plus className='w-5 h-5 text-white' strokeWidth={3} />
        )}
      </button>

      {/* Content */}
      <div className="perspective-[1000px]">
        <div
          className={`py-2 transition-all duration-700 ease-in-out origin-center
      ${open
              ? '[transform:scaleY(1)_rotateX(0deg)] opacity-100 scale-100 h-auto'
              : '[transform:scaleY(0)_rotateX(0.01deg)] opacity-0 scale-95 h-0 overflow-hidden'}
    `}
        >
          {children}
        </div>
      </div>

    </div>
  )
}
