'use client';

import React, { useState } from "react";

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AnimatingIcon = ({ open }: { open: boolean }) => (
  <div className="relative w-2.5 h-2.5 flex items-center justify-center">
    {/* Horizontal bar */}
    <div className="absolute w-full h-[3px] bg-white rounded-full" />
    {/* Vertical bar (animates) */}
    <div
      className={`absolute w-[3px] h-full bg-white transition-transform duration-500 ease-in-out ${open ? 'rotate-90' : 'rotate-0'
        }`}
    />
  </div>
);

export default function CollapsibleRace({
  title,
  subtitle,
  children,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className='ml-3 overflow-hidden  bg-white'>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-start justify-between px-4 py-2
          text-white font-semibold text-sm transition-colors
          ${open ? 'bg-[#37b34a]' : 'bg-[#b5280c]'}
        `}
      >
        <div className='flex flex-row text-left items-center gap-2'>
          <div>
            <span className="flex flex-col text-left">LIVE</span>
            <span>08:58</span>
          </div>
          <div className="flex flex-col text-left">
            <span>{title}</span>
            <span className='text-xs opacity-90'>{subtitle}</span>
          </div>
        </div>

        {/* Custom Animating Plus / Minus */}
        <div className='mt-1.5'>
          <AnimatingIcon open={open} />
        </div>
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
