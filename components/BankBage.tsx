'use client'

// import { Lock } from 'lucide-react'

import { IoIosLock } from 'react-icons/io'

interface BankBadgeProps {
  value: string | number
  bgColor?: string
  borderColor?: string
  textColor?: string
  iconColor?: string
  className?: string
  showLock?: boolean
  disabled?: boolean
}

export default function BankBadge({
  value,
  bgColor = 'bg-[#ffff8099]',
  borderColor = 'border-green-700',
  textColor = 'text-[#111111b3]',
  iconColor,
  className = '',
  showLock = true,
  disabled = true,
}: BankBadgeProps) {
  return (
    <div
      className={`relative inline-block min-w-[50px] py-0.5 px-0.5 font-semibold rounded border-2 transition-all duration-200
        ${bgColor} ${borderColor} 
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} 
        ${className || 'opacity-50'}
      `}
    >
      {showLock && (
        <IoIosLock
          className={`absolute top-0 right-0 w-4 h-4 font-bold -translate-y-1/2 translate-x-1/2 text-[#464148] ${iconColor || ''}`}
        />
      )}
      <p className={`${textColor} text-center`}>{value}</p>
    </div>
  )
}
