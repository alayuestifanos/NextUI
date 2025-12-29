'use client'

// import { Lock } from 'lucide-react'

import { IoIosLock } from 'react-icons/io'

interface BankBadgeProps {
  value: string | number
  bgColor?: string
  borderColor?: string
  textColor?: string
  iconColor?: string
}

export default function BankBadge({
  value,
  bgColor = 'bg-[#ffff8099]',
  borderColor = 'border-green-700',
  textColor = 'text-[#111111b3]',
  iconColor,
}: BankBadgeProps) {
  return (
    <div
      className={`relative inline-block min-w-[50px] py-0.5 px-0.5 font-semibold rounded border-2 ${bgColor} ${borderColor} cursor-not-allowed`}
    >
      {/* <Lock
        className={`absolute top-0 right-0  w-4 h-4 font-bold -translate-y-1/2 translate-x-1/2 text-[#B0B192] ${iconColor}`}
      /> */}
      <IoIosLock
        className={`absolute top-0 right-0 w-4 h-4 font-bold -translate-y-1/2 translate-x-1/2 text-[#464148] ${iconColor || ''}`}
      />
      <p className={`${textColor} text-center`}>{value}</p>
    </div>
  )
}
